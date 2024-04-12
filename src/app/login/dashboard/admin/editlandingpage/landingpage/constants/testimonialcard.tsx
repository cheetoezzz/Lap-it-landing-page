import React from "react";

interface CardProps { //unaha ni tas adto sa features na file // dri ka nga page pod mag design
  description: string;
  title: string;
  iconSrc?: string;
}

const Card = ({ description, title, iconSrc }: CardProps) => {
  return (
    <div className="">
      <div className="w-72 h-72 border bg-blue-100 rounded-md ml-4 shadow-xl flex flex-col justify-center hover:scale-110 duration-700 transition-all">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black font-semibold text-2xl mt-14">{title}</h1>
          <div className="text-black mt-8 px-12">{description}</div>
        
        </div>
      </div>
    </div>
  );
};

export default Card;