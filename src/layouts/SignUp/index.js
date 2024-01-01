import React, { useState, useEffect } from 'react';
import Body from './Body';
import API from '@/api';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadingStart, loadingStop, login, signup } from '@/redux/action';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import country_code from '@/utility/country.json';
import categoryList from '@/utility/category.json';
import { v4 as uuid } from 'uuid';

const SignUp = () => {
  const router = useRouter();
  const { businessData } = router.query;
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.session.userSession);
  const [countryList, setCountryList] = useState(country_code.country_code);
  const [otpReceived, setOtpReceived] = useState(false);
  const [OTP, setOTP] = useState('');
  const [servicesInput, setServicesInput] = useState('');
  const [enterBusinessDetails, setEnterBusinessDetails] = useState(false);
  const [teamMemberDetails, setTeamMemberDetails] = useState(false);
  const [addTeamMemberData, setAddTeamMemberData] = useState({
    member_name: '',
    member_email: '',
    member_designation: ''
  });
  const [getTeamMemberDetails, setGetTeamMemberDetails] = useState();

  const [businessDetails, setBusinessDetails] = useState({
    country_code: '+1',
    country_code_string: 'US',
    business_name: '',
    business_category: '',
    business_website: '',
    business_phone: '',
    business_description: '',
    business_address: '',
    business_services_offered: []
  });

  const [formValue, setFormValue] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onSignUp = () => {
    if (formValue.password !== formValue.confirmPassword) {
      return toast.error("Password doesn't match.");
    }

    dispatch(loadingStart());
    API.auth
      .SignUp(formValue)
      .then((response) => {
        if (response) {
          dispatch(signup(response.response));
          toast.success('Signup successfully.');
          router.push('/dashboard/business');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const _this = {
    formValue,
    setFormValue,
    onSignUp,
    countryList
  };

  return (
    <main>
      <Body _this={_this} />
    </main>
  );
};

export default SignUp;
