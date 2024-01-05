import React, { useState, useEffect } from 'react';
import Body from './Body';
import API from '@/api';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadingStart, loadingStop, login, signup } from '@/redux/action';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import country_code from '@/utility/country.json';
import { Container } from '@/components';

const SingleWorkspace = () => {
  const router = useRouter();
  const { businessData } = router.query;
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.session.userSession);
  const [countryList, setCountryList] = useState(country_code.country_code);
  const [otpReceived, setOtpReceived] = useState(false);
  const [OTP, setOTP] = useState('');
  const [servicesInput, setServicesInput] = useState('');
  const [AddWorkspaceModalVisibility, setAddWorkspaceModalVisibility] = useState(false);
  const [teamMemberDetails, setTeamMemberDetails] = useState(false);
  const [addTeamMemberData, setAddTeamMemberData] = useState({
    member_name: '',
    member_email: '',
    member_designation: ''
  });

  const [userWorkspaces, setUserWorkspaces] = useState([]);
  const [formValue, setFormValue] = useState({
    name: '',
    slug: ''
  });
  const [workspaceNotAvailable, setWorkspaceNotAvailable] = useState(true);

  // console.log('avail workspace', formValue.slug);
  // console.log('avail workspace 2', workspaceNotAvailable);

  useEffect(() => {
    GetWorkspaces();
  }, []);

  const CheackWorkspaceAvailibility = () => {
    // dispatch(loadingStart());
    API.workspace
      .CheackWorkspaceAvailibility(formValue.slug)
      .then((response) => {
        if (response) setWorkspaceNotAvailable(false);
      })
      .finally(() => {
        // dispatch(loadingStop());
      });
  };

  const GetWorkspaces = () => {
    // dispatch(loadingStart());
    API.workspace
      .GetUserWorkspaces()
      .then((response) => {
        if (response) {
          setUserWorkspaces(response.response);
        }
      })
      .finally(() => {
        // dispatch(loadingStop());
      });
  };

  const onAddNewWorkspace = () => {
    dispatch(loadingStart());
    API.workspace
      .CreateNewWorkspace(formValue)
      .then((response) => {
        if (response.status == 410) {
          toast.error(response.response);
        } else if (response.status == 200) {
          GetWorkspaces();
          toast.success('Workspace created successfully.');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const _this = {
    formValue,
    setFormValue,
    countryList,
    AddWorkspaceModalVisibility,
    CheackWorkspaceAvailibility,
    setAddWorkspaceModalVisibility,
    workspaceNotAvailable,
    setWorkspaceNotAvailable,
    userWorkspaces,
    setUserWorkspaces,
    onAddNewWorkspace
  };

  return (
    <Container>
      <Body _this={_this} />
    </Container>
  );
};

export default SingleWorkspace;
