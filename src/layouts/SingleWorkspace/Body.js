import React from 'react';
import Link from 'next/link';
import { Button, Card, Input } from 'antd';
import { BsEye, BsEyeSlash, BsPersonWorkspace } from 'react-icons/bs';
import Logo from '../../../public/images/logo.png';

import { TiTick } from 'react-icons/ti';
import { AiFillCheckCircle, AiOutlineUser } from 'react-icons/ai';
import SmallHeader from '../Home/SmallHeader';
import SmallFooter from '../Home/SmallFooter';
import Image from 'next/image';
import { PlusOutlined } from '@ant-design/icons';
import AddWorkspaceModal from './InviteMemberModal';
import moment from 'moment';

const Body = ({ _this }) => {
  // console.log(_this.userWorkspaces);
  return (
    <>
      <Card
        title={
          <div className="mt-2 flex items-center justify-between py-2">
            <p className="text-primary-text text-xl font-medium leading-loose">
              Members ({_this.userWorkspaces?.length})
            </p>

            <button
              onClick={() => _this.setAddWorkspaceModalVisibility(true)}
              className="text-white bg-primary border-0 py-2 px-4 focus:outline-none hover:bg-primary-dark rounded-lg text-base font-medium inline-flex items-center"
            >
              <PlusOutlined className="mr-2" />
              Invite Members
            </button>
          </div>
        }
        className="bg-bg-gray text-gray-medium tracking-wider flex flex-col justify-start w-full min-h-full"
      >
        {/* {_this.userWorkspaces?.length === 0 ? (
          <div className="flex justify-center items-center">No Workspaces available</div>
        ) : (
          <div className="flex flex-wrap items-start justify-evenly lg:justify-between">
            {_this.userWorkspaces &&
              _this.userWorkspaces.map((workspace) => (
                <Link href={`/dashboard/workspaces/${workspace.slug}`} key={workspace._id}>
                  <div className="flex flex-col justify-center items-center">
                    <Card className=" bg-white shadow-md hover:shadow-lg xs:w-mb-w w-full md:w-[550px] lg:w-[440px] xl:w-[500px] mb-4 mx-1">
                      <div className="flex justify-between">
                        <div className="flex xs:flex-col">
                          <div className="mr-4 w-12 h-12 p-3 bg-indigo-50 rounded-[100px] shadow border border-white justify-center items-center inline-flex">
                            <BsPersonWorkspace size={25} className="text-primary" />
                          </div>
                          <div className="flex flex-col gap-1 xs:mt-2">
                            <div className="font-semibold text-md mb-2">
                              <h1 className="text-primary-text text-xl font-semibold">
                                {workspace.name}
                              </h1>
                            </div>

                            <div className="text-gray-medium text-sm font-medium leading-tight mb-1">
                              Created At:{' '}
                              <span className="text-primary-text ml-1 text-sm font-medium leading-tight sm:break-all">
                                {moment(workspace.createdAt).format('HH:MM:SSA, DD MMM YY')}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Link>
              ))}
          </div>
        )} */}
        <h1>all members will be shown here</h1>
      </Card>
      <AddWorkspaceModal {..._this} />
    </>
    // <div className="body-font py-4 flex items-center justify-center min-h-screen">
    //   <div className="w-full sm:w-3/5 lg:w-1/2 xl:w-2/5 mx-auto">
    //     {/* <SmallHeader /> */}
    //     <div className="py-6 px-4">
    //       <Image className="logo_style mb-5" src={Logo} alt="" />
    //       <h2 className=" text-primary-text text-2xl font-semibold mb-3">
    //         Create a new March workspaces
    //       </h2>
    //       <div className="py-6 px-2 flex flex-col mt-4">
    //         <div className="relative mb-7">
    //           <label htmlFor="email" className="leading-7 text-sm text-label font-medium">
    //             Name*
    //           </label>
    //           <Input
    //             size="large"
    //             className="w-full bg-white rounded-lg py-2 px-3"
    //             placeholder="Enter your name"
    //             label={'name'}
    //             onChange={(e) => {
    //               _this.setFormValue((prev) => ({
    //                 ...prev,
    //                 fullName: e.target.value
    //               }));
    //             }}
    //           />
    //         </div>
    //         <div className="relative mb-7">
    //           <label htmlFor="email" className="leading-7 text-sm text-label font-medium">
    //             Email Address*
    //           </label>
    //           <Input
    //             size="large"
    //             className="w-full bg-white rounded-lg py-2 px-3"
    //             placeholder="Enter your email address"
    //             label={'email'}
    //             onChange={(e) => {
    //               _this.setFormValue((prev) => ({
    //                 ...prev,
    //                 email: e.target.value
    //               }));
    //             }}
    //           />
    //         </div>
    //         <div className="relative mb-7">
    //           <label htmlFor="password" className="leading-7 text-sm text-label font-medium">
    //             Password*
    //           </label>

    //           <Input.Password
    //             size="large"
    //             className="w-full bg-white rounded-lg py-2 px-3"
    //             placeholder="Enter a password"
    //             label={'Password'}
    //             iconRender={(visible) => (visible ? <BsEye size={15} /> : <BsEyeSlash size={15} />)}
    //             onChange={(e) => {
    //               _this.setFormValue((prev) => ({
    //                 ...prev,
    //                 password: e.target.value
    //               }));
    //             }}
    //           />
    //         </div>
    //         <div className="relative mb-10">
    //           <label htmlFor="password" className="leading-7 text-sm text-label font-medium">
    //             Confirm Password*
    //           </label>

    //           <Input.Password
    //             size="large"
    //             className="w-full bg-white rounded-lg py-2 px-3"
    //             placeholder="Enter confirm password"
    //             label={'Password'}
    //             iconRender={(visible) => (visible ? <BsEye size={15} /> : <BsEyeSlash size={15} />)}
    //             onChange={(e) => {
    //               _this.setFormValue((prev) => ({
    //                 ...prev,
    //                 confirmPassword: e.target.value
    //               }));
    //             }}
    //           />
    //         </div>

    //         <button
    //           onClick={() => {
    //             _this.onSignUp();
    //           }}
    //           className="text-white bg-primary border-0 py-3 px-8 focus:outline-none hover:bg-primary-dark rounded-lg text-base font-semibold"
    //         >
    //           Sign Up
    //         </button>
    //         <h4 className="py-3 text-center text-gray-medium text-sm font-normal leading-tight">
    //           Already have an account?{' '}
    //           <Link href={'/login'}>
    //             <span className="ml-2 text-primary text-sm font-semibold hover:underline">
    //               Log In
    //             </span>
    //           </Link>
    //         </h4>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Body;
