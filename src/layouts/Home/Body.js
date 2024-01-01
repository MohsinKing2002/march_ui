import React, { useState } from 'react';
import Header from './Header';
import { useEffect } from 'react';

const Body = () => {
  return (
    <div className="relative">
      <Header aboutNavigation={true} />
      <div>
        <h1 className="text-center text-4xl my-10">Welcome to March</h1>
      </div>
    </div>
  );
};

export default Body;
