import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Card, Input } from 'antd';
import { BsEye, BsEyeSlash, BsPersonWorkspace } from 'react-icons/bs';
import Image from 'next/image';
import { PlusOutlined } from '@ant-design/icons';
import InviteMemberModal from './InviteMemberModal';
import moment from 'moment';
import CreateSpaceModal from './CreateSpaceModal';

const Body = ({ _this }) => {
  const [showSpaces, setShowSpaces] = useState(true);
  // console.log(_this.spaces);
  return (
    <>
      <Card
        title={
          <div className="mt-2 py-2">
            <div className="flex items-center justify-between border-b pb-2 border-gray-200">
              <p className="text-primary-text text-xl font-medium leading-loose">
                Workspace: {_this.workspaceMembers[0]?.workspace?.name}
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowSpaces(true)}
                  className="border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-2 px-4 text-center text-base font-medium text-dark dark:text-white hover:bg-gray-4 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
                >
                  All Spaces
                </button>
                <button
                  onClick={() => setShowSpaces(false)}
                  className="border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-2 px-4 text-center text-base font-medium text-dark dark:text-white hover:bg-gray-4 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
                >
                  Team Members
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2">
              <p className="text-primary-text text-xl font-medium leading-loose">
                {showSpaces ? (
                  <>Spaces ({_this.spaces?.length})</>
                ) : (
                  <>Members ({_this.workspaceMembers?.length})</>
                )}
              </p>

              <button
                onClick={() => {
                  showSpaces
                    ? _this.setNewSpaceModalVisibility(true)
                    : _this.setInviteMemberModalVisibility(true);
                }}
                className="text-white bg-primary border-0 py-2 px-4 focus:outline-none hover:bg-primary-dark rounded-lg text-base font-medium inline-flex items-center"
              >
                <PlusOutlined className="mr-2" />
                {showSpaces ? 'New Space' : 'Invite Member'}
              </button>
            </div>
          </div>
        }
        className="bg-bg-gray text-gray-medium tracking-wider flex flex-col justify-start w-full min-h-full"
      >
        {showSpaces ? (
          <>
            {_this.spaces?.length === 0 ? (
              <div className="flex justify-center items-center">No Spaces available</div>
            ) : (
              <div className="flex flex-wrap items-start justify-evenly lg:justify-between">
                {_this.spaces &&
                  _this.spaces.map((space) => (
                    // <Link href={`/dashboard/workspaces/${member}`} key={workspace._id}>
                    <div key={space._id} className="flex flex-col justify-center items-center">
                      <Card className=" bg-white shadow-md hover:shadow-lg xs:w-mb-w w-full md:w-[550px] lg:w-[440px] xl:w-[500px] mb-4 mx-1">
                        <div className="flex justify-between">
                          <div className="flex xs:flex-col">
                            <div className="mr-4 w-12 h-12 p-3 bg-indigo-50 rounded-[100px] shadow border border-white justify-center items-center inline-flex">
                              <BsPersonWorkspace size={25} className="text-primary" />
                            </div>
                            <div className="flex flex-col gap-1 xs:mt-2">
                              <div className="font-semibold text-md mb-2">
                                <h1 className="capitalize text-primary-text text-xl font-semibold">
                                  {space?.name}
                                </h1>
                              </div>

                              <div className="text-gray-medium text-sm font-medium leading-tight mb-1">
                                Since :{' '}
                                <span className="text-primary-text ml-1 text-sm font-medium leading-tight sm:break-all">
                                  {moment(space?.createdAt).format('HH:MM:SSA, DD MMM YY')}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                    // </Link>
                  ))}
              </div>
            )}
          </>
        ) : (
          <>
            {_this.workspaceMembers?.length === 0 ? (
              <div className="flex justify-center items-center">No Workspaces available</div>
            ) : (
              <div className="flex flex-wrap items-start justify-evenly lg:justify-between">
                {_this.workspaceMembers &&
                  _this.workspaceMembers.map((member) => (
                    // <Link href={`/dashboard/workspaces/${member}`} key={workspace._id}>
                    <div key={member._id} className="flex flex-col justify-center items-center">
                      <Card className=" bg-white shadow-md hover:shadow-lg xs:w-mb-w w-full md:w-[550px] lg:w-[440px] xl:w-[500px] mb-4 mx-1">
                        <div className="flex justify-between">
                          <div className="flex xs:flex-col">
                            <div className="mr-4 w-12 h-12 p-3 bg-indigo-50 rounded-[100px] shadow border border-white justify-center items-center inline-flex">
                              <BsPersonWorkspace size={25} className="text-primary" />
                            </div>
                            <div className="flex flex-col gap-1 xs:mt-2">
                              <div className="font-semibold text-md mb-2">
                                <h1 className="text-primary-text text-xl font-semibold">
                                  {member?.member?.fullName}
                                </h1>
                              </div>

                              <div className="text-gray-medium text-sm font-medium leading-tight mb-1">
                                Role :{' '}
                                <span className="capitalize text-primary-text ml-1 text-sm font-medium leading-tight sm:break-all">
                                  {member.role}
                                </span>
                              </div>
                              <div className="text-gray-medium text-sm font-medium leading-tight mb-1">
                                Since :{' '}
                                <span className="text-primary-text ml-1 text-sm font-medium leading-tight sm:break-all">
                                  {moment(member?.member?.updatedAt).format('HH:MM:SSA, DD MMM YY')}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                    // </Link>
                  ))}
              </div>
            )}
          </>
        )}
      </Card>
      <InviteMemberModal {..._this} />
      <CreateSpaceModal {..._this} />
    </>
  );
};

export default Body;
