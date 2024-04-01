import React from "react";

interface cardprops {
  description: string;
  title: string;
  iconSrc?: string;
}
const Card = ({ description, title, iconSrc }: cardprops) => {
  return (
    <div className="relative">
      <div className="w-72 h-72 border-md bg-blue-50 mx-3 rounded-md hover:scale-110 hover:bg-blue-700 duration-700 transition-all flex flex-col items-start justify-center pl-4 hover:text-white">
        <div className="pb-14 pl-3">
          <div className="w-16 h-16 rounded-full bg-blue-700 hover:bg-white "></div>
          <h1 className="font-semibold text-2xl pb-2">{title}</h1>
          <div className="">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
