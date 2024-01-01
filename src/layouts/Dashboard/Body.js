import React from 'react';
import CustomerList from './CustomerList';

const Body = (_this) => {
  return (
    <>
      <CustomerList {..._this} />
    </>
  );
};

export default Body;
