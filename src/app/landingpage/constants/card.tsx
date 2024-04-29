import React from "react";

export interface CardProps {
  title: string;
  prices?:string;
  price: string;
  className: string;
  icons: { icon: JSX.Element; text: string }[];
}

const Card = ({ title, prices, price, className, icons }: CardProps) => {
  return (
    <div className={`w-[350px] h-[520px] border-md bg-white rounded-md flex flex-col items-start justify-center pl-4 pb-5 border-2 hover:border-blue-500 drop-shadow-2xl  ${className}`}>
      <div className="pl-6">
        <h1 className="font-semibold text-2xl pt-11 text-[25px] ">
          {title}
        </h1>
        <div className="text-base font-bold text-black pt-5">
          Per Quarterly
        </div>
        <h1 className="text-black font-semibold text-[30px] ">
          {prices}
        </h1>
        <div className="text-base font-bold text-black">
          Per Month
        </div>
        <h1 className="text-black font-semibold text-[30px]  ">
          {price}
        </h1>
        <div className="flex flex-col items-start pt-5 text-sm text-black gap-3">
          {icons && icons.map(({ icon, text }, index) => (
            <div key={index} className="flex items-center">
              {icon}
              <span className="ml-3">{text}</span>
            </div>
          ))}
        </div>
      </div>


      <button className="text-blue-500 font-bold mx-50 ml-8 border border-blue-500 rounded-lg px-[80px] py-[8px] gap-10 m-5 hover:bg-blue-500 hover:text-white duration-500 ">
        <a href="../pages/Pricing">SUBSCRIBE</a>
      </button>
    </div>
  );
};

export default Card;
