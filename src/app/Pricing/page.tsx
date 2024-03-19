import React from 'react';
import { Poppins } from 'next/font/google';
import Navbar from '../components/navbar';
import Choice from '../Pricing/Choice';

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['800', '500'],
  variable: '--font-Poppins',
});



const Pricing = () => {
  return (
    <><Navbar />
    <div className=''>
    <div className="flex justify-center mt-9">
      <div className={poppins_init.variable}>
        <div className='flex flex-col items-center'>
          <h1 className="text-blue-800 text-4xl poppins font-extrabold">Choose The Perfect Plan For Your Needs</h1>
          <p className='poppins font-medium text-gray-600 mt-2'>Free 30-Day Trial For Every Tier!</p>
        </div>
        <Choice/>
      </div>
    </div>
    </div></>
  );
};

export default Pricing;
