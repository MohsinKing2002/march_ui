import React, { useEffect, useState } from 'react';
import Body from './Body';
import API from '@/api';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStart, loadingStop, login } from '@/redux/action';
import { v4 as uuid } from 'uuid';

const Home = () => {
  const router = useRouter();
  const userSession = useSelector((state) => state.session.userSession);
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const onLogin = () => {
    dispatch(loadingStart());
    API.auth
      .Login(formValue)
      .then((response) => {
        if (response) {
          console.log('response', response.response);
          dispatch(login(response?.response));
        }
        return response;
      })
      .then((response) => {
        if (response) {
          router.push('/dashboard/business');
          toast.success('Logged in Successfully');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const _this = {
    formValue,
    setFormValue,
    onLogin
  };

  return (
    <main>
      <Body {..._this} />
    </main>
  );
};

export default Home;
