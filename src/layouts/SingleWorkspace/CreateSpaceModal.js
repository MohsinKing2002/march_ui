import React from 'react';
import { Input, Button, Select, Drawer } from 'antd';
import { AiOutlineClose, AiOutlineUserAdd } from 'react-icons/ai';
import { BsPersonWorkspace } from 'react-icons/bs';

const CreateSpaceModal = (_this) => {
  return (
    <>
      <Drawer
        title={
          <div className="flex items-center justify-between">
            <div className="flex justify-center items-center">
              <BsPersonWorkspace className="text-gray-medium mr-4" size={25} />
              <span className="text-gray-medium text-2xl font-medium leading-loose">
                Create New Space
              </span>
            </div>
            <AiOutlineClose
              onClick={() => _this.setNewSpaceModalVisibility(false)}
              size={22}
              className="text-gray-medium cursor-pointer"
            />
          </div>
        }
        placement="right"
        onClose={() => _this.setNewSpaceModalVisibility(false)}
        open={_this.NewSpaceModalVisibility}
        width={window.innerWidth > 600 ? 500 : window.innerWidth - 50}
        closable={false}
        footer={
          <div className="flex items-center justify-end p-3">
            <Button
              className="text-base font-semibold"
              size="large"
              onClick={() => _this.setNewSpaceModalVisibility(false)}
            >
              Cancel
            </Button>
            <Button
              size="large"
              onClick={() => _this.onAddNewSpace()}
              type="primar"
              className="ml-3 mybtns text-base font-semibold"
            >
              Add Workspace
            </Button>
          </div>
        }
      >
        <div className="flex flex-col justify-center items-center xs:items-stretch w-full">
          <div className="py-3">
            <p className="text-label text-sm font-medium leading-tight pb-1">Name*</p>
            <Input
              className="w-[420px] xs:w-full"
              size="large"
              placeholder="Enter space name"
              value={_this.newSpaceValue.name}
              onChange={(e) => {
                _this.setNewSpaceValue((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </div>
          <div className="py-3">
            <p className="text-label text-sm font-medium leading-tight pb-1">Identifier*</p>
            <Input
              className="w-[420px] xs:w-full"
              size="large"
              placeholder="Enter space identifier"
              value={_this.newSpaceValue.identifier}
              onChange={(e) => {
                _this.setNewSpaceValue((prev) => ({ ...prev, identifier: e.target.value }));
              }}
            />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CreateSpaceModal;
