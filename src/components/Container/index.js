import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { setCollapsed, setActiveRoute, loadingStart, loadingStop } from '@/redux/action';
import { Menu, Input } from 'antd';
import {
  SettingOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  CloseOutlined,
  TeamOutlined,
  PlusCircleOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import API from '@/api';
import Image from 'next/image';
import Logo from '../../../public/images/logo.png';

const Container = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userSession = useSelector((state) => state.session.userSession);
  const { collapsed, activeRoute } = useSelector((state) => state.navigation);

  useEffect(() => {
    if (collapsed == null) {
      if (window.innerWidth > 768) dispatch(setCollapsed(false));
      else dispatch(setCollapsed(true));
    }
  }, []);

  const onMenuClick = ({ key }) => {
    router.push(key);
    dispatch(setActiveRoute(key));
    if (window.innerWidth && window.innerWidth < 768) dispatch(setCollapsed(true));
  };

  const toggleCollapsed = () => {
    dispatch(setCollapsed(!collapsed));
  };

  const [spaces, setSpaces] = useState([
    {
      key: '/dashboard/staging',
      label: 'Staging'
    },
    {
      key: '/dashboard/production',
      label: 'Production'
    },
    {
      key: '/dashboard/testing',
      label: 'Testing'
    }
  ]);

  const menu = [
    {
      key: '/dashboard/business',
      icon: <DesktopOutlined className="py-2" />,
      children: '',
      label: 'Dashboard',
      type: ''
    },
    {
      key: '/dashboard/workspaces',
      icon: <UnorderedListOutlined className="py-2" />,
      children: '',
      label: 'Workspaces',
      type: ''
    },
    {
      key: '/dashboard/spaces',
      icon: <TeamOutlined className="py-2" />,
      children: spaces,
      label: 'Spaces',
      type: ''
    },
    {
      key: '/dashboard/settings',
      icon: <SettingOutlined className="py-2" />,
      children: '',
      label: 'Settings',
      type: ''
    }
  ];

  return (
    <>
      <div className="flex flex-1 min-h-screen flex-row relative bg-background">
        <div
          className={`bg-white relative flex flex-col header_nav_profile menu ${
            collapsed ? 'lg:w-20 w-0' : 'lg:w-56 w-screen'
          }`}
        >
          <div
            className="absolute cursor-pointer top-4 right-4 lg:hidden flex justify-center items-center w-10 h-10 border border-secondary rounded-md z-50"
            onClick={toggleCollapsed}
          >
            <CloseOutlined className="text-xl text-secondary" />
          </div>

          <div className="h-32">
            <div className={`pt-8 flex flex-col justify-center items-center transition-all`}>
              <div className={`flex items-center text-center transition-all`}>
                <Image className="logo_style" src={Logo} alt="logo" />
                <h4
                  className={`pl-2 text-primary text-4xl font-bold tracking-wide ${
                    collapsed ? 'hidden' : 'inline-block'
                  } `}
                >
                  March
                </h4>
              </div>
            </div>
          </div>
          <Menu
            onClick={onMenuClick}
            className="bg-white border-[0px]"
            selectedKeys={[activeRoute]}
            defaultSelectedKeys={['/dashboard/business']}
            mode="inline"
            inlineCollapsed={collapsed}
            items={menu}
          />
        </div>
        <div className={`lg:flex-1 transition-all ${collapsed ? 'w-full' : 'w-0'}`}>
          <div className="flex flex-col justify-center shadow-md w-full px-0 bg-white">
            <div className="flex flex-row items-center pl-2 py-4">
              <div className="ml-1 mr-10 cursor-pointer" onClick={toggleCollapsed}>
                {collapsed ? (
                  <MenuUnfoldOutlined className="text-xl text-blue-800" />
                ) : (
                  <MenuFoldOutlined className="text-xl text-blue-800" />
                )}
              </div>

              <div className={`flex items-center`}>
                <div className={`pl-2 transition-all `}>
                  <h2 className={`text-neutral-800 text-[20px] font-bold leading-normal`}>
                    {userSession ? userSession?.name : ''}
                  </h2>
                  <h4 className={'text-zinc-600 text-[16px] font-normal leading-normal'}>
                    {userSession ? userSession?.email : ''}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {props.children}
        </div>
      </div>
    </>
  );
};

export { Container };
