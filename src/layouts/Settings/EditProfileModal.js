import React from 'react';
import { Modal, Input, Button } from 'antd';
import { AiOutlineUser } from 'react-icons/ai';
import { FaUserEdit } from 'react-icons/fa';

const EditProfileModal = (_this) => {
  return (
    <>
      <Modal
        centered
        title={
          <p className="font-semibold text-xl text-center pb-4 flex justify-center items-center gap-2">
            <FaUserEdit size={25} className="text-secondary pt-[2px]" /> Edit Name
          </p>
        }
        open={_this.editProfileModalVisibility}
        onOk={() => _this.setEditProfileModalVisibility(false)}
        onCancel={() => _this.setEditProfileModalVisibility(false)}
        width={350}
        footer={null}
      >
        <div className="flex pb-1">
          <Button className="text-white bg-primary h-9 rounded-r-none">
            <AiOutlineUser size={17} />
          </Button>
          <Input
            placeholder="Name"
            className="h-[35px] text-base -ml-[1px] rounded-l-none"
            value={_this.profileDetails.name}
            onChange={(e) => {
              _this.setProfileDetails((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
        </div>
        <Button
          className="w-full text-base bg-primary text-white h-9 my-2"
          onClick={() => _this.onEditProfileSubmit()}
        >
          Save
        </Button>
      </Modal>
    </>
  );
};

export default EditProfileModal;
