import React from 'react';
import { Poppins } from 'next/font/google';

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['800', '500'],
  variable: '--font-Poppins',
});

const Pricing = () => {
  return (
    <div className="flex justify-center">
      <div className={poppins_init.variable}>
        <div className='flex flex-col items-center'>
          <h1 className="text-blue-800 text-4xl poppins font-extrabold">Choose The Perfect Plan For Your Needs</h1>
          <p className='poppins font-medium text-gray-600'>Free 30-Day Trial For Every Tier!</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
