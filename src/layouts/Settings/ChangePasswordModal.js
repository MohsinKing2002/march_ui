import React from 'react';
import { Modal, Input, Button } from 'antd';
import { FaUserShield, FaUserLock, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const ChangePasswordModal = (_this) => {
  return (
    <>
      <Modal
        centered
        open={_this.passwordModalVisibility}
        onOk={() => _this.setPasswordModalVisibility(false)}
        onCancel={() => _this.setPasswordModalVisibility(false)}
        width={500}
        closable={false}
        footer={
          <div className="flex items-center justify-end p-3">
            <Button
              className="text-base font-semibold"
              size="large"
              onClick={() => _this.setPasswordModalVisibility(false)}
            >
              Cancel
            </Button>
            <Button
              size="large"
              onClick={() => _this.changePassword()}
              type="primary"
              className="ml-3 mybtns text-base font-semibold"
            >
              Submit
            </Button>
          </div>
        }
      >
        <div className="flex flex-col justify-center items-center xs:items-stretch pt-1">
          <div className="flex items-center justify-between w-[420px] xs:w-full mb-5">
            <div className="flex justify-center items-center">
              <FaUserShield className="text-blue-600 mr-2" size={27} />
              <span className="text-primary-text text-2xl font-medium leading-loose">
                Change Password{' '}
              </span>
            </div>
            <AiOutlineClose
              onClick={() => _this.setPasswordModalVisibility(false)}
              size={22}
              className="text-gray-medium cursor-pointer"
            />
          </div>

          <div className="py-3">
            <p className="text-label text-sm font-medium leading-tight pb-2">Old Password *</p>
            <Input.Password
              placeholder="Old Password"
              className=" w-[420px] xs:w-full"
              size="large"
              value={_this.passwords.old_password}
              onChange={(e) => {
                _this.setPasswords((prev) => ({ ...prev, old_password: e.target.value }));
              }}
              iconRender={(visible) =>
                visible ? (
                  <FaEye onClick={() => _this.togglePasswordVisibility} />
                ) : (
                  <FaEyeSlash onClick={() => _this.togglePasswordVisibility} />
                )
              }
              visibilityToggle
            />
          </div>

          <div className="py-2">
            <p className="text-label text-sm font-medium leading-tight pb-2">New Password *</p>
            <Input.Password
              placeholder="New Password"
              className=" w-[420px] xs:w-full"
              size="large"
              value={_this.passwords.password}
              onChange={(e) => {
                _this.setPasswords((prev) => ({ ...prev, password: e.target.value }));
              }}
              iconRender={(visible) =>
                visible ? (
                  <FaEye onClick={() => _this.togglePasswordVisibility} />
                ) : (
                  <FaEyeSlash onClick={() => _this.togglePasswordVisibility} />
                )
              }
              visibilityToggle
            />
          </div>

          <div className="pb-1">
            <p className="text-label text-sm font-medium leading-tight pb-2">
              Confirm New Password *
            </p>
            <Input.Password
              placeholder="Confirm New Password"
              className="w-[420px] xs:w-full"
              size="large"
              value={_this.passwords.confirm_password}
              onChange={(e) => {
                _this.setPasswords((prev) => ({ ...prev, confirm_password: e.target.value }));
              }}
              iconRender={(visible) =>
                visible ? (
                  <FaEye onClick={() => _this.togglePasswordVisibility} />
                ) : (
                  <FaEyeSlash onClick={() => _this.togglePasswordVisibility} />
                )
              }
              visibilityToggle
            />
          </div>

          <div className="w-full mt-4 h-[0px] border border-gray-200"></div>
        </div>
      </Modal>
    </>
  );
};

export default ChangePasswordModal;
