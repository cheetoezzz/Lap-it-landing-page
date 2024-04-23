import React from "react";
import Image from "next/legacy/image";

interface CardProps {
  description: string;
  title: string;
  iconSrc: string;
}

const Card: React.FC<CardProps> = ({ description, title, iconSrc }) => {
  return (
    <div className="w-[350px] h-96 border bg-white border-blue-500 rounded-md shadow-xl flex flex-col justify-center hover:scale-105 duration-700 transition-all">
      <div className="flex flex-col justify-center items-center p-4 h-full">     
      <Image className="mt-7" src={iconSrc} alt={title} width={50} height={50} />
        <h1 className="text-black font-semibold text-lg pt-10 text-center">
          {title}
        </h1>
        <div className="text-black text-sm mt-2 mb-8 text-center h-full flex justify-center items-center">
          {description}
        </div>
        <a
          href="#"
          className="border border-blue-500 w-full h-40 rounded-md text-blue-600 font-semibold flex justify-center items-center mt-auto"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
