import React from "react";

interface CardProps { //unaha ni tas adto sa features na file // dri ka nga page pod mag design
  description: string;
  title: string;
  iconSrc?: string;
}

const Card = ({ description, title, iconSrc }: CardProps) => {
  return (
    <div className="">
      <div className="w-72 h-72 border bg-white border-blue-500 rounded-md ml-4 shadow-xl flex flex-col justify-center hover:scale-110 duration-700 transition-all">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black font-semibold text-2xl mt-14">{title}</h1>
          <div className="text-slate-400 mt-8 px-12">{description}</div>
          <a
            href="#"
            className="border border-blue-500 w-52 h-10 flex justify-center items-center mt-5 rounded-md text-blue-600 font-semibold"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
