import React, { useEffect, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import Link from 'next/link';
import OtpInput from 'react-otp-input';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const EnterOtp = ({ _this }) => {
  const [otp, setOtp] = useState(_this.OTP);
  useEffect(() => {
    _this.setOTP(otp);
  }, [otp]);

  return (
    <div className="sm:p-8 flex flex-col w-[90%] sm:w-[80%] md:w-[55%] xl:w-1/3 mx-auto mt-4 min-h-[80vh]">
      <div className="text-center">
        <div className="w-14 h-14 p-3.5 bg-indigo-50 rounded-[28px] border-4 border-slate-50 justify-center items-center inline-flex mb-2">
          <FiMail className="text-xl text-blue-800" />
        </div>
      </div>
      <h3 className="text-center text-primary-text text-3xl font-semibold my-3">
        Check your email
      </h3>
      <div className=" text-center text-gray-medium text-base font-medium leading-normal mb-2">
        We sent a verification link to
        <span className="font-medium ml-2">{_this.formValue.email}</span>
      </div>
      <div className="flex items-center justify-center my-4">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          inputStyle={{
            height: '4rem',
            width: '4rem',
            border: '1px solid blue',
            borderRadius: '10px',
            padding: '5px',
            margin: '0px 10px',
            outline: 'none'
          }}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <button
        onClick={() => _this.onOtpSubmit()}
        className="mt-6 text-white bg-primary border-0 py-3 px-8 focus:outline-none hover:bg-primary-dark rounded-lg text-base font-semibold"
      >
        Verfiy email
      </button>
      <h4 className="my-8 text-center text-gray-medium text-sm font-normal leading-tight">
        Didn’t receive the email?
        <span
          onClick={() => _this.onResendOTPSubmit()}
          className="ml-2 text-blue-500 font-medium cursor-pointer"
        >
          Click to resend
        </span>
      </h4>

      <Link
        className="flex items-center justify-center my-2 text-gray-medium font-medium text-sm"
        href={'/login'}
      >
        <AiOutlineArrowLeft size={18} className="mr-2" />
        Back to Log in
      </Link>
    </div>
  );
};

export default EnterOtp;
