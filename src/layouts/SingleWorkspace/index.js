import React, { useState, useEffect } from 'react';
import Body from './Body';
import API from '@/api';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadingStart, loadingStop } from '@/redux/action';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import country_code from '@/utility/country.json';
import { Container } from '@/components';

const SingleWorkspace = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;
  // console.log(slug);
  const [countryList, setCountryList] = useState(country_code.country_code);
  const [InviteMemberModalVisibility, setInviteMemberModalVisibility] = useState(false);
  const [NewSpaceModalVisibility, setNewSpaceModalVisibility] = useState(false);

  const [workspaceMembers, setWorkspaceMembers] = useState([]);
  const [spaces, setSpaces] = useState([]);
  const [formValue, setFormValue] = useState({
    email: '',
    role: '',
    redirectUrl: '/',
    message: 'Welcome to team'
  });
  const [newSpaceValue, setNewSpaceValue] = useState({
    name: '',
    identifier: ''
  });
  // console.log('formValue', newSpaceValue);

  useEffect(() => {
    GetWorkspaceMembers();
    GetWorkspaceSpaces();
  }, [slug]);

  const GetWorkspaceMembers = () => {
    dispatch(loadingStart());
    API.workspace
      .GetWorkspaceMembers(slug)
      .then((response) => {
        if (response) {
          setWorkspaceMembers(response.response);
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const GetWorkspaceSpaces = () => {
    dispatch(loadingStart());
    API.workspace
      .GetSpacesOfWorkspace(slug)
      .then((response) => {
        if (response) {
          setSpaces(response.response);
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const onAddNewSpace = () => {
    let params = newSpaceValue;
    if (slug) params = { ...params, slug: slug };
    dispatch(loadingStart());
    API.workspace
      .CreateNewSpace(params)
      .then((response) => {
        if (response) {
          toast.success('New Space Added.');
          GetWorkspaceSpaces();
          setNewSpaceValue((prev) => ({ ...prev, name: '', identifier: '' }));
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };
  const onAddNewMember = () => {
    let params = formValue;
    if (slug) params = { ...params, slug: slug };
    dispatch(loadingStart());
    API.workspace
      .AddMemberToWorkspace(params)
      .then((response) => {
        console.log('res add', response);
        // if (response.status == 410) {
        //   toast.error(response.response);
        // } else if (response.status == 200) {
        //   GetWorkspaces();
        //   toast.success('Workspace created successfully.');
        // }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const _this = {
    formValue,
    setFormValue,
    newSpaceValue,
    setNewSpaceValue,
    countryList,
    InviteMemberModalVisibility,
    setInviteMemberModalVisibility,
    NewSpaceModalVisibility,
    setNewSpaceModalVisibility,
    workspaceMembers,
    setWorkspaceMembers,
    spaces,
    setSpaces,
    onAddNewMember,
    onAddNewSpace
  };

  return (
    <Container>
      <Body _this={_this} />
    </Container>
  );
};

export default SingleWorkspace;
