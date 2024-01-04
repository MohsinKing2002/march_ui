import React from 'react';
import { Input, Button, Select, Drawer } from 'antd';
import { AiOutlineClose, AiOutlineUserAdd } from 'react-icons/ai';
import { BsPersonWorkspace } from 'react-icons/bs';

const AddWorkspaceModal = (_this) => {
  return (
    <>
      <Drawer
        title={
          <div className="flex items-center justify-between">
            <div className="flex justify-center items-center">
              <BsPersonWorkspace className="text-gray-medium mr-4" size={25} />
              <span className="text-gray-medium text-2xl font-medium leading-loose">
                New Workspace
              </span>
            </div>
            <AiOutlineClose
              onClick={() => _this.setAddWorkspaceModalVisibility(false)}
              size={22}
              className="text-gray-medium cursor-pointer"
            />
          </div>
        }
        placement="right"
        onClose={() => _this.setAddWorkspaceModalVisibility(false)}
        open={_this.AddWorkspaceModalVisibility}
        width={window.innerWidth > 600 ? 500 : window.innerWidth - 50}
        closable={false}
        footer={
          <div className="flex items-center justify-end p-3">
            <Button
              className="text-base font-semibold"
              size="large"
              onClick={() => _this.setAddWorkspaceModalVisibility(false)}
            >
              Cancel
            </Button>
            <Button
              size="large"
              onClick={() => _this.onAddNewWorkspace()}
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
            <p className="text-label text-sm font-medium leading-tight pb-1">Slug*</p>
            <Input
              className="w-[420px] xs:w-full"
              size="large"
              placeholder="Enter workspace slug"
              value={_this.formValue.slug}
              onChange={(e) => {
                _this.setFormValue((prev) => ({ ...prev, slug: e.target.value }));
                _this.CheackWorkspaceAvailibility();
              }}
            />
            {!_this.issWorkspaceAvailable && (
              <p className="pl-2 pt-1 text-red-700 text-sm font-medium leading-tight">
                already exist !
              </p>
            )}
          </div>
          <div className="py-3">
            <p className="text-label text-sm font-medium leading-tight pb-1">Name*</p>
            <Input
              className="w-[420px] xs:w-full"
              size="large"
              placeholder="Enter workspace name"
              value={_this.formValue.name}
              onChange={(e) => {
                _this.setFormValue((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default AddWorkspaceModal;
