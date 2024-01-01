import Link from 'next/link';
import React from 'react';

const SmallFooter = () => {
  return (
    <div className="pt-6 flex justify-center items-center transition-all">
      <div className="text-center transition-all">
        <div className="flex items-center">
          <Link href={'/terms-and-conditions'}>
            <h4 className="text-primary font-medium text-sm break-none hover:text-secondary">
              Terms & Conditions
            </h4>
          </Link>
          <h4 className="text-primary-text text-sm px-2">|</h4>
          <Link href={'/privacy-policy'}>
            <h4 className="text-primary font-medium text-sm break-none hover:text-secondary">
              Privacy Policy
            </h4>
          </Link>
        </div>
        <h4 className="text-primary-text pt-2 px-1 text-sm font-medium break-none">Version 0.4</h4>
      </div>
    </div>
  );
};

export default SmallFooter;
