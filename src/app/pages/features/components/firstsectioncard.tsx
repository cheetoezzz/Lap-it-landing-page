import React from "react";

interface cardprops {
  // uppercase
  title: string;
  iconSrc?: string;
}
const firstCard = ({ title, iconSrc }: cardprops) => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="w-72 h-72 border-md flex-col items-center justify-center pl-4">
        <div className="mb-4">
          <img src={iconSrc} alt={title} className="w-16 h-16 mx-auto " />
        </div>
        <div>
          <h1 className="text-center text-black font-semibold text-2xl pb-2">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default firstCard;
