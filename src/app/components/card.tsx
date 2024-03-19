import React from "react";

interface cardprops {
  description: string;
  title: string;
}
const Card = ({ description, title }: cardprops) => {
  return (
    <div className="relative">
      <div className="w-72 h-72 border-md bg-blue-50 mx-3 rounded-md flex flex-col items-start justify-center pl-4">
        <h1 className="text-blue-700 font-semibold text-2xl">{title}</h1>
        <div className="text-slate-400">{description}</div>
        <a href="#" className="absolute top-60 left-48 text-blue-500 underline">
        Read More
      </a>
      </div>
    </div>
  );
};

export default Card;
