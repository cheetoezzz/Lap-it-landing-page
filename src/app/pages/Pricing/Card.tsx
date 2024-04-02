import React from "react";
import Image from 'next/image'

export interface CardProps {
  smallDescription: string;
  title: string;
  price?: string;
  className?: string;
  icons?: { icon: JSX.Element; text: string }[]; // Array of objects containing both icon and text
}

const Card = ({ title, smallDescription, price, className, icons }: CardProps) => {
  return (
    <div className={`w-[460px] h-[613px] border-md bg-white mx-3 rounded-md flex flex-col items-start justify-center pl-4 pt-5 group hover:translate-y-[-5px] transition-all duration-200 ease-in-out drop-shadow-2xl ${className}`}>
      <h1 className="font-semibold text-2xl pt-5 pl-3 text-[24px] ">
        {title}
      </h1>
      <h1 className="text-sm  pl-3 text-blue-700">
        {smallDescription}
      </h1>
      <h1 className="text-blue-700 font-semibold text-2xl text-[60px] pt-10 pl-3 ">
        {price}
      </h1>
      <div className="text-xl font-bold pt-8 pl-3 text-black">
        Per Month
      </div>
      <div className="text-blue-700 pt-8 pl-3 border-b border-blue-700 w-[420px] items-center justify-center"></div>

      {/* Render the icons with corresponding text */}
      <div className="flex flex-col items-center pt-5 pl-3 text-l text-blue-600 gap-7">
        {icons && icons.map(({ icon, text }, index) => (
          <div key={index} className="flex items-center">
            {icon}
            <span className="ml-2">{text}</span>
          </div>
        ))}
      </div>

      {/* Add a button */}
      <button className="text-white font-bold bg-blue-500 mt-auto block mx-50 ml-8 border border-blue-500 rounded-lg px-[133px] py-[15px] gap-10 m-5 ">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default Card;
