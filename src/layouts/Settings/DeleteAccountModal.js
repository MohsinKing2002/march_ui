import React from 'react';
import { Button, Modal, Input } from 'antd';
import { MdDeleteForever, MdCancel } from 'react-icons/md';
import { FaEyeSlash, FaEye, FaUserShield, FaUserLock } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const DeleteAccountModal = (_this) => {
  return (
    <>
      <Modal
        centered
        open={_this.deleteAccountModalVisibility}
        onOk={() => _this.setDeleteAccountModalVisibility(false)}
        onCancel={() => _this.setDeleteAccountModalVisibility(false)}
        width={500}
        closable={false}
        footer={
          <div className="flex items-center justify-end p-3">
            <Button
              className="text-base font-semibold"
              size="large"
              onClick={() => _this.setDeleteAccountModalVisibility(false)}
            >
              Cancel
            </Button>
            <Button
              size="large"
              onClick={() => _this.onAccountDelete()}
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
                Verify Password
              </span>
            </div>
            <AiOutlineClose
              onClick={() => _this.setDeleteAccountModalVisibility(false)}
              size={22}
              className="text-gray-medium cursor-pointer"
            />
          </div>

          <div className="py-2">
            <p className="text-label text-sm font-medium leading-tight pb-2">Enter Password *</p>
            <Input.Password
              placeholder="Enter a Password"
              size="large"
              className="w-[420px] xs:w-full"
              value={_this.verifyPassword.password}
              onChange={(e) => {
                _this.setVerifyPassword((prev) => ({ ...prev, password: e.target.value }));
              }}
              iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
              visibilityToggle
            />
          </div>
          <div className="w-full mt-4 h-[0px] border border-gray-200"></div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteAccountModal;
