import React from "react";
import Image from "next/image";

interface CardProps {
  description: string;
  title: string;
  iconSrc: string;
}

const Card: React.FC<CardProps> = ({ description, title, iconSrc }) => {
  return (
    <div className="w-[250px] h-[300px] max-w-none border bg-white border-blue-500 rounded-md shadow-xl flex flex-col justify-center sm:hover:scale-105 sm:duration-700 sm:transition-all md:hover:scale-105 md:duration-700 md:transition-all lg:hover:scale-105 lg:duration-700 lg:transition-all xl:hover:scale-105 xl:duration-700 xl:transition-all xl:w-[350px] xl:h-96">
      <div className="flex flex-col justify-center items-center p-4 xl:h-full">
        <Image
          className="pt-3 xl:mt-7"
          src={iconSrc}
          alt={title}
          width={50}
          height={50}
        />
        <div className="w-[250px] h-[300px] border bg-white border-blue-500 rounded-md shadow-xl flex flex-col justify-center sm:hover:scale-105 sm:duration-700 sm:transition-all md:hover:scale-105 md:duration-700 md:transition-all lg:hover:scale-105 lg:duration-700 lg:transition-all xl:hover:scale-105 xl:duration-700 xl:transition-all xl:w-[350px] xl:h-96">
          <div className="flex flex-col justify-center items-center p-4 xl:h-full">
            <Image
              className="pt-3 xl:mt-7"
              src={iconSrc}
              alt={title}
              width={50}
              height={50}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <h1 className="text-black font-semibold text-sm pt-7 xl:text-lg xl:pt-10 text-center">
              {title}
            </h1>
            <div className="text-black text-xs text-center h-full flex justify-center items-center my-[-10px] xl:text-sm xl:mt-2 xl:mb-8 ">
              {description}
            </div>
            <a
              href="#"
              className="border border-blue-500 w-full h-20 rounded-md text-blue-600 font-semibold flex justify-center items-center mt-6 xl:mt-auto xl:w-full xl:h-40 "
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
