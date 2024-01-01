import Link from 'next/link';
import React from 'react';

const SmallHeader = ({ isLogin = false }) => {
  return (
    <div className="flex items-center justify-between">
      <Link href={'/'}>
        <img className="h-14 w-14" src="/images/small_logo.png" alt="logo" />
      </Link>

      {isLogin == false && (
        <Link href={'/sign-up'}>
          <span className="text-blue-500 text-base font-semibold underline underline-offset-4">
            Sign Up
          </span>
        </Link>
      )}
      {isLogin && (
        <Link href={'/login'}>
          <span className="text-blue-500 text-base font-semibold underline underline-offset-4">
            Log In
          </span>
        </Link>
      )}
    </div>
  );
};

export default SmallHeader;
