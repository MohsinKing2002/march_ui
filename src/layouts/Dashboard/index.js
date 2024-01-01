import React, { useEffect, useState } from 'react';
import Body from './Body';
import { Container } from '@/components';
import { useDispatch } from 'react-redux';
import { loadingStart, loadingStop, login } from '@/redux/action';
import API from '@/api';
import country_code from '@/utility/country.json';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userDetails = useSelector((state) => state.session.userSession);
  const [countryList, setCountryList] = useState(country_code.country_code);
  const [getCustomerDetails, setGetCustomerDetails] = useState([]);

  const [addCustomerModalVisibility, setAddCustomerModalVisibility] = useState(false);
  const [editCustomerModalVisibility, setEditCustomerModalVisibility] = useState(false);
  const [deleteCustomerModalVisibility, setDeleteCustomerModalVisibility] = useState(false);
  const [addCustomerData, setAddCustomerData] = useState({
    customer_name: '',
    customer_email: '',
    country_code: '+1',
    country_code_string: 'US',
    customer_mobile: ''
  });
  const [editCustomerData, setEditCustomerData] = useState({
    _id: '',
    name: '',
    email: '',
    country_code: '',
    country_code_string: '',
    phone: ''
  });

  const [deleteCustomerData, setDeleteCustomerData] = useState({
    customer_email: ''
  });

  const getCustomers = () => {
    dispatch(loadingStart());
    API.business
      .GetCustomers()
      .then((response) => {
        if (response) {
          setGetCustomerDetails(response);
          const temp = { ...userDetails, customers: response };
          dispatch(login(temp));
        }
      })
      .finally(() => dispatch(loadingStop()));
  };

  const onAddNewCustomer = () => {
    if (addCustomerData.customer_name === '' || addCustomerData.customer_email === '') {
      return toast.error('All fields are mandatory ');
    }
    dispatch(loadingStart());
    API.business
      .AddNewCustomer(addCustomerData)
      .then((response) => {
        if (response) {
          setAddCustomerModalVisibility(false);
          setAddCustomerData((prev) => ({
            ...prev,
            customer_name: '',
            customer_email: '',
            country_code: '+1',
            customer_mobile: ''
          }));
          getCustomers();
          toast.success(response.message);
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const onCustomerDelete = () => {
    dispatch(loadingStart());

    API.business
      .DeleteCustomer(deleteCustomerData)
      .then((response) => {
        if (response) {
          setDeleteCustomerModalVisibility(false);

          setDeleteCustomerData({});
          getCustomers();
          toast.success('Customer Removed Successfully');
        }
      })
      .finally(() => dispatch(loadingStop()));
  };

  const onEditCustomerDetails = () => {
    dispatch(loadingStart());
    API.business
      .EditCustomerDetails(editCustomerData)
      .then((response) => {
        if (response) {
          setEditCustomerModalVisibility(false);
          setEditCustomerData({});
          getCustomers();
          toast.success('Customer Details Edited Successfully');
        }
      })
      .finally(() => dispatch(loadingStop()));
  };

  const _this = {
    addCustomerModalVisibility,
    setAddCustomerModalVisibility,
    addCustomerData,
    setAddCustomerData,
    getCustomerDetails,
    countryList,
    editCustomerModalVisibility,
    setEditCustomerModalVisibility,
    editCustomerData,
    setEditCustomerData,
    onAddNewCustomer,
    onCustomerDelete,
    onEditCustomerDetails,
    deleteCustomerModalVisibility,
    setDeleteCustomerModalVisibility,
    deleteCustomerData,
    setDeleteCustomerData
  };
  return (
    <Container>
      <Body {..._this} />
    </Container>
  );
};

export default Index;
