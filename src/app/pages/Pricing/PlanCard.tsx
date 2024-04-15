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
      <div className="">
        <div className="flex flex-col justify-center items-center ml-10">
        <h1 className={`font-semibold text-[18px] mt-11  ${color}`}>{title} </h1>
          <div className="text-slate-400  text-[16px] ">{smallDescription}</div>
          <div className="text-slate-400  px-12 "><p>Sodales.</p></div>
          <button
            type="button"
            className="border border-blue-600 w-52 h-10 flex justify-center items-center mt-5 rounded-md text-blue-600 font-semibold hover:bg-blue-600 hover:text-white"
          >
            Get Started
          </button>
        </div>
      </div>

    </div>
  );
};

export default PlanCard;
