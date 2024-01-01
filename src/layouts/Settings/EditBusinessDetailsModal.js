import React from 'react';
import { Modal, Input, Button, Select, InputNumber, Drawer } from 'antd';
import CreatableSelect from 'react-select/creatable';
const { TextArea } = Input;
import { FaPhoneAlt, FaGlobeAmericas, FaUser, FaShieldAlt } from 'react-icons/fa';
import { BsPlusSquareFill } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { MdBusiness } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';

const EditBusinessDetailsModal = (_this) => {
  return (
    <>
      <Drawer
        title={
          <div className="flex items-center justify-between">
            <div className="flex justify-center items-center">
              <MdBusiness className="text-blue-600 mr-2" size={27} />
              <span className="text-primary-text xs:text-xl text-2xl font-medium leading-loose">
                Edit Business Details
              </span>
            </div>
            <AiOutlineClose
              onClick={() => _this.setEditBusinessDetailsModalVisibility(false)}
              size={22}
              className="text-gray-medium cursor-pointer"
            />
          </div>
        }
        closable={false}
        placement="right"
        onClose={() => _this.setEditBusinessDetailsModalVisibility(false)}
        open={_this.editBusinessDetailsModalVisibility}
        width={window.innerWidth > 600 ? 500 : window.innerWidth - 50}
        footer={
          <div className="flex items-center justify-end p-3">
            <Button
              className="text-base font-semibold"
              size="large"
              onClick={() => _this.setEditBusinessDetailsModalVisibility(false)}
            >
              Cancel
            </Button>
            <Button
              size="large"
              onClick={() => _this.onUpdateBusinessDetails()}
              type="primary"
              className="ml-3 mybtns text-base font-semibold"
            >
              Save
            </Button>
          </div>
        }
      >
        <div className="flex flex-col justify-center items-center xs:items-stretch">
          <div className="pb-2">
            <p className="text-label text-sm font-medium leading-tight pb-2">Business Name *</p>
            <Input
              className="w-[420px] xs:w-full"
              size="large"
              placeholder="Business Name"
              value={_this.businessDetails.business_name}
              onChange={(e) => {
                _this.setBusinessDetails((prev) => ({
                  ...prev,
                  business_name: e.target.value
                }));
              }}
            />
          </div>

          <div className="py-3">
            <p className="text-label text-sm font-medium leading-tight pb-2">Business Website*</p>

            <Input
              placeholder="Business Website"
              className="w-[420px] xs:w-full"
              size="large"
              value={_this.businessDetails.business_website}
              onChange={(e) => {
                _this.setBusinessDetails((prev) => ({
                  ...prev,
                  business_website: e.target.value
                }));
              }}
            />
          </div>

          <div className="py-3">
            <p className="text-label text-sm font-medium leading-tight pb-2">
              Business Description
            </p>
            <TextArea
              className="w-[420px] xs:w-full"
              size="large"
              value={_this.businessDetails.business_description}
              onChange={(e) => {
                _this.setBusinessDetails((prev) => ({
                  ...prev,
                  business_description: e.target.value
                }));
              }}
              placeholder="Business Description"
              autoSize={{
                minRows: 3,
                maxRows: 3
              }}
            />
          </div>

          <div className="py-3">
            <p className="text-label text-sm font-medium leading-tight pb-2">Address </p>
            <TextArea
              className="w-[420px] xs:w-full"
              size="large"
              value={_this.businessDetails.business_address}
              onChange={(e) => {
                _this.setBusinessDetails((prev) => ({
                  ...prev,
                  business_address: e.target.value
                }));
              }}
              placeholder="Address"
              autoSize={{
                minRows: 3,
                maxRows: 3
              }}
            />
          </div>

          <div className="py-3">
            <p className="text-label text-sm font-medium leading-tight pb-2">Phone*</p>

            <Input
              placeholder="Phone"
              className="w-[420px] xs:w-full"
              size="large"
              addonBefore={
                <Select
                  showSearch
                  size="large"
                  className="w-[100px]"
                  value={`${_this.businessDetails.country_code}-${_this.businessDetails.country_code_string}`}
                  onChange={(value) => {
                    const words = value.split('-');
                    _this.setBusinessDetails((prev) => ({
                      ...prev,
                      country_code: words[0],
                      country_code_string: words[1]
                    }));
                  }}
                  filterOption={(input, option) => {
                    return (option?.label?.key ?? '').toLowerCase().includes(input.toLowerCase());
                  }}
                  options={_this.countryList.map((item, index) => ({
                    label: (
                      <div className="flex flex-row justify-start items-center" key={item.name}>
                        <img className="w-5 h-5" src={item.flag} alt="flag" />
                        <div className="ml-1">+{item.callingCode}</div>
                      </div>
                    ),
                    value: `+${item.callingCode}-${item.code}`
                  }))}
                />
              }
              value={_this.businessDetails.business_phone}
              onChange={(e) => {
                _this.setBusinessDetails((prev) => ({
                  ...prev,
                  business_phone: e.target.value
                }));
              }}
            />
          </div>

          <div className="py-3">
            <p className="text-label text-sm font-medium leading-tight pb-2">Services Offered</p>
            <Input.Group className="w-[420px] xs:w-full flex items-center justify-between">
              <Input
                placeholder="Service title"
                size="large"
                className="w-full"
                value={_this.servicesInput}
                onChange={(e) => {
                  _this.setServicesInput(e.target.value);
                }}
              />

              <Button
                className="ml-2 mybtns text-base font-semibold"
                onClick={_this.onAddService}
                type="primary"
                size="large"
              >
                Add
              </Button>
            </Input.Group>

            <div className="w-[420px] xs:w-full flex flex-wrap gap-2 pt-3 font-semibold">
              {_this.businessDetails
                ? _this.businessDetails?.business_services_offered?.map((services, index) => (
                    <div
                      key={index}
                      className="p-2 px-3 rounded-md border border-grayLight justify-center items-center gap-1 inline-flex"
                    >
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-center text-label text-sm font-medium leading-tight">
                          {services}
                        </div>
                      </div>
                      <RxCross2
                        size={16}
                        className="cursor-pointer ml-2 text-icon"
                        onClick={() => _this.onDeleteService(index)}
                      />
                    </div>
                  ))
                : ''}
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default EditBusinessDetailsModal;
