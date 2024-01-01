import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Body from './Body';
import { Container } from '@/components';
import API from '@/api';
import { useRouter } from 'next/router';
import { loadingStart, loadingStop, login, logout } from '@/redux/action';
import { toast } from 'react-toastify';
import countryList from '@/utility/country.json';
import categoryList from '@/utility/category.json';

const Settings = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [passwordModalVisibility, setPasswordModalVisibility] = useState(false);
  const [deleteAccountModalVisibility, setDeleteAccountModalVisibility] = useState(false);
  const [editProfileModalVisibility, setEditProfileModalVisibility] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    name: '',
    phone: '',
    country_code: ''
  });
  const [editBusinessDetailsModalVisibility, setEditBusinessDetailsModalVisibility] =
    useState(false);
  const [passwords, setPasswords] = useState({
    old_password: '',
    password: '',
    confirm_password: ''
  });
  const userSession = useSelector((state) => state.session.userSession);
  const [businessDetails, setBusinessDetails] = useState({
    business_name: '',
    business_website: '',
    business_category: '',
    country_code: '',
    country_code_string: '',
    business_phone: '',
    business_address: '',
    business_description: '',
    business_services_offered: []
  });
  const [servicesInput, setServicesInput] = useState('');
  const [displayBusinessPhone, setDisplayBusinessPhone] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState({
    password: ''
  });

  useEffect(() => {
    if (userSession) {
      setDisplayBusinessPhone(userSession.business_details?.business_phone);

      const extracted_country_code = userSession.business_details?.business_phone.split('-')[0];
      const extracted_business_phone = userSession.business_details?.business_phone.split('-')[1];

      setBusinessDetails({
        business_name: userSession.name,
        business_website: userSession.business_details?.business_website,
        country_code_string: userSession.country_code_string,
        country_code: extracted_country_code,
        business_phone: extracted_business_phone,
        business_category: userSession.business_details?.business_category,
        business_address: userSession.business_details?.business_address,
        business_description: userSession.business_details?.business_description,
        business_services_offered: userSession.business_details?.business_services_offered
      });

      setProfileDetails((prev) => ({
        ...prev,
        name: userSession.name,
        phone: extracted_business_phone,
        country_code: extracted_country_code
      }));
    }
  }, [userSession]);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const onAddService = () => {
    if (servicesInput == '') return toast.error("Blank service can't be added.");
    const value = [...businessDetails.business_services_offered, servicesInput];

    if (servicesInput !== '') {
      setBusinessDetails((prev) => ({
        ...prev,
        business_services_offered: value
      }));
      setServicesInput('');
    }
  };

  const onDeleteService = (index) => {
    const temp = [...businessDetails.business_services_offered];
    temp.splice(index, 1);

    setBusinessDetails((prev) => ({
      ...prev,
      business_services_offered: temp
    }));
  };

  const onModalClose = () => {
    setEditBusinessDetailsModalVisibility(false);
    if (userSession) {
      setBusinessDetails({
        business_name: userSession.name,
        business_website: userSession.business_details.business_website,
        country_code_string: userSession.country_code_string,
        country_code: userSession.business_details.business_phone.split('-')[0],
        business_phone: userSession.business_details.business_phone.split('-')[1],
        business_category: userSession.business_details.business_category,
        business_address: userSession.business_details.business_address,
        business_description: userSession.business_details.business_description,
        business_services_offered: userSession.business_details.business_services_offered
      });
    }
  };

  const onUpdateBusinessDetails = () => {
    const updated_business_phone =
      businessDetails.country_code && businessDetails.business_phone
        ? businessDetails.country_code + '-' + businessDetails.business_phone
        : '';

    dispatch(loadingStart());
    API.auth
      .UpdateBusinessDetails(businessDetails)
      .then((response) => {
        if (response) {
          toast.success(response.message);
          const updatedSession = {
            ...userSession,
            name: businessDetails.business_name,
            country_code: businessDetails.country_code,
            business_details: { ...businessDetails, business_phone: updated_business_phone }
          };
          dispatch(login(updatedSession));
          setEditBusinessDetailsModalVisibility(false);
          toast.success('Business Details Updated Sucessfully');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const handleLogout = () => {
    const confirmUser = confirm('Are you sure?');
    if (confirmUser) {
      router.replace('/?logout=1');
      setTimeout(() => {
        dispatch(logout());
        router.replace('/');
      }, 1000);
    }
  };

  const onAccountDelete = () => {
    API.auth.VerifyPassword(verifyPassword).then((response) => {
      if (response) {
        dispatch(loadingStart());
        API.business
          .DeleteAccount()
          .then((response) => {
            if (response) {
              toast.success(response.message);
              dispatch(login({}));
              setDeleteAccountModalVisibility(false);
            }
          })
          .finally(() => {
            dispatch(loadingStop());
          });

        toast.success('Account Deleted Sucessfully.');
        router.push('/sign-up');
      }
    });
  };

  const changePassword = () => {
    if (passwords.old_password == passwords.password) {
      return toast.error('Old Password and New Password Should be Different.');
    }

    dispatch(loadingStart());
    API.business
      .changePassword(passwords)
      .then((response) => {
        if (response) {
          toast.success(response.message);
          setPasswords((prev) => ({
            ...prev,
            old_password: '',
            password: '',
            confirm_password: ''
          }));
          setPasswordModalVisibility(false);
          toast.success('Password Changed Sucessfully');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const onEditProfileSubmit = () => {
    dispatch(loadingStart());
    API.business
      .EditProfile(profileDetails)
      .then((response) => {
        if (response) {
          toast.success(response.message);
          const updatedSession = { ...userSession, name: profileDetails.name };
          dispatch(login(updatedSession));
          setProfileDetails((prev) => ({
            ...prev,
            name: '',
            phone: '',
            country_code: ''
          }));
          setEditProfileModalVisibility(false);
          toast.success('Profile Updated Sucessfully');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const _this = {
    handleLogout,
    passwordModalVisibility,
    setPasswordModalVisibility,
    deleteAccountModalVisibility,
    setDeleteAccountModalVisibility,
    onAccountDelete,
    changePassword,
    passwords,
    setPasswords,
    editBusinessDetailsModalVisibility,
    setEditBusinessDetailsModalVisibility,
    servicesInput,
    setServicesInput,
    onAddService,
    onDeleteService,
    onModalClose,
    businessDetails,
    setBusinessDetails,
    onUpdateBusinessDetails,
    editProfileModalVisibility,
    setEditProfileModalVisibility,
    countryList: countryList.country_code,
    categoryList,
    onEditProfileSubmit,
    profileDetails,
    setProfileDetails,
    displayBusinessPhone,
    togglePasswordVisibility,
    verifyPassword,
    setVerifyPassword
  };

  return (
    <Container>
      <Body {..._this} />
    </Container>
  );
};

export default Settings;
