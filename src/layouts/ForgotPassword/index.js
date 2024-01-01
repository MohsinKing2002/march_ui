import React, { useState } from 'react';
import Body from './Body';
import API from '@/api';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStart, loadingStop, login } from '@/redux/action';

const ForgotPassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [otpReceived, setOtpReceived] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [OTP, setOTP] = useState('');
  const [formValue, setFormValue] = useState({
    email: '',
    otp: '',
    password: ''
  });

  const onResetPassword = () => {
    dispatch(loadingStart());
    API.auth
      .ForgotPassword(formValue)
      .then((response) => {
        if (response) {
          if (response.otp) {
            setOtpReceived(true);
            toast.success('OTP has been sent to your e-mail account.');
          }
        }
        return response;
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const onOtpSubmit = () => {
    const payload = {
      ...formValue,
      otp: OTP
    };
    dispatch(loadingStart());
    API.auth
      .ForgotPassword(payload)
      .then((response) => {
        if (response) {
          setOtpReceived(false);
          setChangePassword(true);
          toast.success('OTP verified successfully.');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const onChangePasswordSubmit = () => {
    if (formValue.password !== formValue.confirmPassword) {
      return toast.error("Password doesn't match.");
    }

    const payload = {
      ...formValue,
      otp: OTP
    };

    dispatch(loadingStart());
    API.auth
      .ForgotPassword(payload)
      .then((response) => {
        if (response.isUpdated) {
          toast.success('Your Password is Changed.');
          setOtpReceived(false);
          setChangePassword(false);
          router.push('/login');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const onResendOTPSubmit = () => {
    dispatch(loadingStart());
    API.auth
      .ResendOTP({ email: formValue.email })
      .then((response) => {
        if (response) {
          toast.success('OTP has been resend to your e-mail account.');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const _this = {
    formValue,
    setFormValue,
    OTP,
    setOTP,
    onResetPassword,
    onOtpSubmit,
    onChangePasswordSubmit,
    otpReceived,
    changePassword,
    onResendOTPSubmit
  };

  return (
    <main>
      <Body {..._this} />
    </main>
  );
};

export default ForgotPassword;
