import React from 'react';
import { Button, Card } from 'antd';
import { FaUserAlt, FaUserPlus, FaUserCog } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { PlusOutlined } from '@ant-design/icons';
import { AiOutlineEdit, AiOutlineUser } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';
import {
  BsTextParagraph,
  BsCardChecklist,
  BsThreeDots,
  BsClockHistory,
  BsCheckCircle
} from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';

const CustomerList = (_this) => {
  return (
    <>
      <Card className="bg-bg-gray text-gray-medium tracking-wider flex flex-col justify-start w-full min-h-full">
        <div className="flex items-start gap-6">
          <div>
            <div className="border border-gray-300 p-2 flex items-center justify-between w-80">
              <div className="flex items-center gap-3">
                <BsCardChecklist className="h-5 w-5 text-gray-medium" />
                <h3 className="text-primary text-xl">Todo</h3>
                <p className="p-1 text-tx border-[1px] border-grayMedium rounded">11</p>
              </div>
              <div className="flex items-center gap-4">
                <FiPlus className="text-gray-medium h-6 w-6" />
                <BsThreeDots className="text-gray-medium h-6 w-6" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="border border-gray-300 p-2 flex items-center justify-between w-80">
                <div className="flex items-center gap-3">
                  <BsCardChecklist className="h-5 w-5 text-gray-medium" />
                  <h3 className="text-primary text-xl">Todo</h3>
                  <p className="p-1 text-tx border-[1px] border-grayMedium rounded">11</p>
                </div>
                <div className="flex items-center gap-4">
                  <FiPlus className="text-gray-medium h-6 w-6" />
                  <BsThreeDots className="text-gray-medium h-6 w-6" />
                </div>
              </div>
              <div className="border border-gray-300 p-2 flex items-center justify-between w-80">
                <div className="flex items-center gap-3">
                  <BsCardChecklist className="h-5 w-5 text-gray-medium" />
                  <h3 className="text-primary text-xl">Todo</h3>
                  <p className="p-1 text-tx border-[1px] border-grayMedium rounded">11</p>
                </div>
                <div className="flex items-center gap-4">
                  <FiPlus className="text-gray-medium h-6 w-6" />
                  <BsThreeDots className="text-gray-medium h-6 w-6" />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 p-2 flex items-center justify-between w-80">
            <div className="flex items-center gap-3">
              <BsClockHistory className="h-5 w-5 text-gray-medium" />
              <h3 className="text-primary text-xl">In Progress</h3>
              <p className="p-1 text-tx border-[1px] border-grayMedium rounded">10</p>
            </div>
            <div className="flex items-center gap-4">
              <FiPlus className="text-gray-medium h-6 w-6" />
              <BsThreeDots className="text-gray-medium h-6 w-6" />
            </div>
          </div>

          <div className="border border-gray-300 p-2 flex items-center justify-between w-80">
            <div className="flex items-center gap-3">
              <BsCheckCircle className="h-5 w-5 text-gray-medium" />
              <h3 className="text-primary text-xl">Done</h3>
              <p className="p-1 text-tx border-[1px] border-grayMedium rounded">15</p>
            </div>
            <div className="flex items-center gap-4">
              <FiPlus className="text-gray-medium h-6 w-6" />
              <BsThreeDots className="text-gray-medium h-6 w-6" />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-wrap items-start justify-evenly lg:justify-between">
          {_this.getCustomerDetails &&
            _this.getCustomerDetails.map((customer) => (
              <Link href={`/dashboard/business/task/${customer.email}`} key={customer._id}>
                <div className="flex flex-col justify-center items-center">
                  <Card className=" bg-white shadow-md hover:shadow-lg xs:w-mb-w w-full md:w-[550px] lg:w-[440px] xl:w-[500px] min-h-[155px] mb-4 mx-1">
                    <div className="flex justify-between">
                      <div className="flex xs:flex-col">
                        <div className="mr-4 w-12 h-12 p-3 bg-indigo-50 rounded-[100px] shadow border border-white justify-center items-center inline-flex">
                          <AiOutlineUser size={25} className="text-primary" />
                        </div>
                        <div className="flex flex-col gap-1 xs:mt-2">
                          <div className="font-semibold text-md mb-2">
                            <h1 className="text-primary-text text-xl font-semibold">
                              {customer.name}
                            </h1>
                          </div>

                          <div className="text-gray-medium text-sm font-medium leading-tight mb-1">
                            Phone:{' '}
                            <span className="text-primary-text ml-1 text-sm font-medium leading-tight sm:break-all">
                              {customer.mobile}
                            </span>
                          </div>
                          <div className="text-gray-medium text-sm font-medium leading-tight max-w-[180px] sm:max-w-full mb-1">
                            Email:{' '}
                            <span className="text-primary-text ml-1 text-sm font-medium leading-tight sm:break-all">
                              {customer.email}
                            </span>
                          </div>

                          <div className="flex items-center justify-between xs:flex-col xs:items-start xs:gap-1">
                            <div className="text-gray-medium text-sm font-medium leading-tight">
                              Tasks:
                              <span className="text-primary-text ml-1 text-sm font-medium leading-tight">
                                {customer.task_count}
                              </span>
                            </div>
                            <div className="xs:mx-0 mx-3 text-gray-medium text-sm font-medium leading-tight">
                              Past-Due:
                              <span className="text-primary-text ml-1 text-sm font-medium leading-tight">
                                {customer.task_count}
                              </span>
                            </div>
                            <div className="text-gray-medium text-sm font-medium leading-tight">
                              In-Progress:
                              <span className="text-primary-text ml-1 text-sm font-medium leading-tight">
                                {customer.task_count}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 items-center h-full">
                        <AiOutlineEdit
                          className="text-gray-medium hover:text-secondary"
                          size={22}
                          onClick={(e) => {
                            e.preventDefault();
                            if (!customer.invited_by) {
                              return toast.error(
                                'Registered customers are not editable. Please ask customer to edit info on their account'
                              );
                            }
                            _this.setEditCustomerModalVisibility(true);
                            _this.setEditCustomerData((prev) => ({
                              ...prev,
                              _id: customer._id,
                              name: customer.name,
                              email: customer.email,
                              country_code: customer?.mobile?.split('-')[0],
                              phone: customer?.mobile?.split('-')[1],
                              country_code_string: customer?.country_code_string
                            }));
                          }}
                        />
                        <span className="text-gray-300">|</span>

                        <HiOutlineTrash
                          className="text-gray-medium hover:text-secondary"
                          size={20}
                          onClick={(e) => {
                            e.preventDefault();
                            _this.setDeleteCustomerModalVisibility(true);
                            _this.setDeleteCustomerData((prev) => ({
                              ...prev,
                              customer_name: customer.name,
                              customer_email: customer.email
                            }));
                          }}
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              </Link>
            ))}
        </div> */}
      </Card>
    </>
  );
};

export default CustomerList;
