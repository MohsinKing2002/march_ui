import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-10 pt-4 lg:pt-8 pb-4 lg:pb-0 lg:bg-transparent bg-primary">
        <Link href={'/'} className="flex items-center">
          <img className="xs:h-14 h-16 rounded-md xs:ml-2" src="/images/logo.png" alt="logo" />
        </Link>

        <div className="inline-flex flex-col md:flex-row gap-4">
          <Link href={'/login'}>
            <button
              className={`text-primary-dark border border-primary-gray focus:outline-none rounded-lg py-2 px-5 text-base hover:bg-[rgba(0,0,0,0.1)] justify-center w-32 transition`}
            >
              Login
            </button>
          </Link>
          <Link href={'/sign-up'}>
            <button className="inline-flex font-semibold bg-primary-gray text-primary border  border-primary focus:outline-none hover:bg-white rounded-lg py-2 px-5 text-base justify-center w-32 transition">
              Register
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
