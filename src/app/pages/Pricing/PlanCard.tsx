import React from "react";

interface CardProps {
  //unaha ni tas adto sa features na file // dri ka nga page pod mag design
  smallDescription: string;
  title: string;
  color: string;
}

const PlanCard = ({ title, smallDescription,color}: CardProps) => {
  return (
    <div className="">
      <div className=" ">
        <div className="flex flex-col justify-center items-center">
        <h1 className={`font-semibold text-2xl mt-14 ${color}`}>{title} </h1>
          <div className="text-slate-400  px-12 ">{smallDescription}</div>
          <div className="text-slate-400  px-12 "><p>Sodales.</p></div>
          <button
            type="button"
            className="border border-blue-500 w-52 h-10 flex justify-center items-center mt-5 rounded-md text-blue-600 font-semibold hover:bg-blue-600 hover:text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
