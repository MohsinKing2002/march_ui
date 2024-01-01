import React from 'react';
import Link from 'next/link';
import { Button, Input } from 'antd';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Logo from '../../../public/images/logo.png';

import { TiTick } from 'react-icons/ti';
import { AiFillCheckCircle } from 'react-icons/ai';
import SmallHeader from '../Home/SmallHeader';
import SmallFooter from '../Home/SmallFooter';
import Image from 'next/image';

const Body = ({ _this }) => {
  return (
    <div className="body-font py-4 flex items-center justify-center min-h-screen">
      <div className="w-full sm:w-3/5 lg:w-1/2 xl:w-2/5 mx-auto">
        {/* <SmallHeader /> */}
        <div className="py-6 px-4">
          <Image className="logo_style mb-5" src={Logo} alt="" />
          <h2 className=" text-primary-text text-2xl font-semibold mb-3">
            Create a new March Account
          </h2>
          <div className="py-6 px-2 flex flex-col mt-4">
            <div className="relative mb-7">
              <label htmlFor="email" className="leading-7 text-sm text-label font-medium">
                Name*
              </label>
              <Input
                size="large"
                className="w-full bg-white rounded-lg py-2 px-3"
                placeholder="Enter your name"
                label={'name'}
                onChange={(e) => {
                  _this.setFormValue((prev) => ({
                    ...prev,
                    fullName: e.target.value
                  }));
                }}
              />
            </div>
            <div className="relative mb-7">
              <label htmlFor="email" className="leading-7 text-sm text-label font-medium">
                Email Address*
              </label>
              <Input
                size="large"
                className="w-full bg-white rounded-lg py-2 px-3"
                placeholder="Enter your email address"
                label={'email'}
                onChange={(e) => {
                  _this.setFormValue((prev) => ({
                    ...prev,
                    email: e.target.value
                  }));
                }}
              />
            </div>
            <div className="relative mb-7">
              <label htmlFor="password" className="leading-7 text-sm text-label font-medium">
                Password*
              </label>

              <Input.Password
                size="large"
                className="w-full bg-white rounded-lg py-2 px-3"
                placeholder="Enter a password"
                label={'Password'}
                iconRender={(visible) => (visible ? <BsEye size={15} /> : <BsEyeSlash size={15} />)}
                onChange={(e) => {
                  _this.setFormValue((prev) => ({
                    ...prev,
                    password: e.target.value
                  }));
                }}
              />
            </div>
            <div className="relative mb-10">
              <label htmlFor="password" className="leading-7 text-sm text-label font-medium">
                Confirm Password*
              </label>

              <Input.Password
                size="large"
                className="w-full bg-white rounded-lg py-2 px-3"
                placeholder="Enter confirm password"
                label={'Password'}
                iconRender={(visible) => (visible ? <BsEye size={15} /> : <BsEyeSlash size={15} />)}
                onChange={(e) => {
                  _this.setFormValue((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value
                  }));
                }}
              />
            </div>

            <button
              onClick={() => {
                _this.onSignUp();
              }}
              className="text-white bg-primary border-0 py-3 px-8 focus:outline-none hover:bg-primary-dark rounded-lg text-base font-semibold"
            >
              Sign Up
            </button>
            <h4 className="py-3 text-center text-gray-medium text-sm font-normal leading-tight">
              Already have an account?{' '}
              <Link href={'/login'}>
                <span className="ml-2 text-primary text-sm font-semibold hover:underline">
                  Log In
                </span>
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
