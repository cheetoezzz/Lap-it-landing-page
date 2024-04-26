import React from "react";
import Image from "next/image";

interface cardprops {
  description: string;
  title: string;
  iconSrc?: string;
}
const Card = ({ description, title, iconSrc }: cardprops) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className=" mx-[4px] sm:mx-[10px] md:mx-[15px] xl:mx-[15px] w-[100px] h-[100px] sm:w-[170px] sm:h-[170px] md:w-[250px] md:h-[250px] xl:w-[350px] xl:h-[350px] xl:mt-7 border border-blue-500 hover:bg-blue-500 hover:text-white duration-1000 rounded-lg">
        <div className="mx-2 mt-3 w-5 h-5 sm:mx-3 sm:mt-4 sm:w-8 sm:h-8 md:mx-4 md:mt-5 md:w-12 md:h-12 xl:mx-6 xl:mt-7 xl:w-20 xl:h-20 bg-blue-50 rounded-full ">
          {iconSrc && (
          <div className="mb-4">
            <Image
              width={20}
              height={20}
              src={iconSrc}
              alt={title}
              className="w-[15px] h-[15px] translate-y-[2px] sm:w-[25px] sm:h-[25px] md:w-[35px] md:h-[45px] xl:w-[55px] xl:h-[55px] xl:translate-y-3 mx-auto "
            />
          </div>
           )}
        </div>
        <div className="mx-2 mt-1 sm:mx-4 sm:mt-3 md:mx-6 md:mt-6 xl:mx-8 xl:mt-2">
          <h1 className="font-semibold text-[7px] sm:text-[10px] md:text-[13px] xl:text-[18px] pb-2">{title}</h1>
          <h2 className="font-sans text-[4px] sm:text-[7px] md:text-[10px] xl:text-[14px] pb-2">{description}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
