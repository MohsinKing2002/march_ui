import React, { useState } from 'react';
import { Card } from 'antd';
import { Typography, Button, Modal } from 'antd';
const { Title } = Typography;
import { MdOutlineLock } from 'react-icons/md';
import { FiArrowUpRight, FiLogOut } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi';

const BusinessDetails = (_this) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Card
        title={<div className="text-primary-text text-xl font-medium leading-loose">Settings</div>}
        className="bg-bg-gray flex flex-col justify-start w-full min-h-screen"
      >
        <div className="flex-col justify-start items-start gap-6 inline-flex w-full">
          <div className="p-6 flex-col justify-start items-start gap-8 flex w-full">
            <div className="flex justify-between w-full xs:flex-col">
              <div className="justify-between items-start gap-10 inline-flex w-full flex-col md:flex-row">
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-gray-medium text-sm font-medium leading-tight w-max">
                    Phone Number
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="text-blue-md text-base font-medium leading-normal w-max">
                      {_this.displayBusinessPhone}
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-gray-medium text-sm font-medium leading-tight">
                    Location
                  </div>
                  <div className="justify-start items-center gap-2 inline-flex">
                    <SlLocationPin className="text-blue-md text-base" />
                    <div className="break-all text-label text-base font-medium leading-normal">
                      {_this.businessDetails ? _this.businessDetails.business_address : ''}
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-gray-medium text-sm font-medium leading-tight">
                    Website
                  </div>
                  <a
                    href={`https://${_this.businessDetails?.business_website}`}
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    <div className="justify-center items-center gap-1 inline-flex">
                      <div className="break-all text-blue-md text-base font-medium leading-normal">
                        {_this.businessDetails?.business_website}
                      </div>
                      <FiArrowUpRight className="text-blue-md text-xl" />
                    </div>
                  </a>
                </div>
              </div>

              <button
                onClick={() => _this.setEditBusinessDetailsModalVisibility(true)}
                className="h-12 xs:mt-7 ml-0 md:ml-8 text-white bg-primary border-0 py-2 px-4 focus:outline-none hover:bg-primary-dark rounded-lg text-base font-medium inline-flex items-center justify-center"
              >
                <AiOutlineEdit className="text-white text-xl mr-2" />
                <div className="w-max">Edit Profile</div>
              </button>
            </div>

            <div className="self-stretch  flex-col justify-start items-start gap-12 flex">
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-primary-text text-base font-medium leading-normal">
                  Description
                </div>
                {_this.businessDetails && (
                  <>
                    <div className="self-stretch text-gray-medium text-base font-normal leading-normal">
                      {showMore
                        ? _this.businessDetails?.business_description
                        : _this.businessDetails?.business_description?.slice(0, 250) + '...'}
                    </div>
                    <div
                      onClick={() => setShowMore(!showMore)}
                      className="justify-start items-center gap-1.5 inline-flex cursor-pointer mt-1"
                    >
                      <div className="text-blue-md text-sm font-medium leading-tight">
                        Read {showMore ? 'less' : 'more'}
                      </div>
                      <BsChevronDown size={15} className="text-blue-md text-sm" />
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-gray-medium text-sm font-medium leading-tight mb-1">
                Services Offered
              </div>
              <div className="justify-start items-start gap-4 inline-flex flex-wrap">
                {_this.businessDetails
                  ? _this.businessDetails?.business_services_offered?.map((category, index) => (
                      <div
                        key={index}
                        className="p-2 px-3 rounded border border-grayLight justify-center items-center gap-2 flex"
                      >
                        <div className="text-label text-sm font-medium">{category}</div>
                      </div>
                    ))
                  : ''}
              </div>
            </div>
          </div>

          <div className="self-stretch p-6 bg-white rounded-lg shadow border border-grayLight flex-col justify-center items-start gap-6 flex">
            <div
              onClick={() => _this.setPasswordModalVisibility(true)}
              className="justify-start items-center gap-4 inline-flex cursor-pointer"
            >
              <MdOutlineLock className="text-icon text-xl" />
              <div className="flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-primary-text text-base font-medium leading-normal">
                  Change Password
                </div>
              </div>
            </div>
            <div className="self-stretch h-[0px] border border-gray-200"></div>
            <div
              onClick={() => _this.setDeleteAccountModalVisibility(true)}
              className="justify-start items-center gap-4 inline-flex cursor-pointer"
            >
              <HiOutlineTrash className="text-secondary text-xl" />
              <div className="flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-secondary text-base font-medium leading-normal">
                  Delete Account
                </div>
              </div>
            </div>
            <div className="self-stretch h-[0px] border border-gray-200"></div>
            <div
              onClick={_this.handleLogout}
              className="justify-start items-center gap-4 inline-flex cursor-pointer"
            >
              <FiLogOut className="text-icon text-xl" />
              <div className="flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-primary-text text-base font-medium leading-normal">
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default BusinessDetails;
