import React from "react";
import Card from "./firstsectioncard";

const Firstsection = () => {

  const data = [
    { title: "SEEMLESS", iconSrc: "/icon.svg" },
    { title: "SCALABLE & FLEXIBLE", iconSrc: "/icon.svg"},
    { title: "EFFECIENT", iconSrc: "/icon.svg"  },
    { title: "GAME-CHANGER", iconSrc: "/icon.svg"  }
  ];

  return (
    <div className="flex flex-col select-none max-h-none">
  <section className="h-1 flex flex-col items-center justify-center sm:pt-7 xl:pt-32 ">
    <div className="text-black font-extrabold text-[16px] sm:text-[25px] md:text-[30px] xl:text-[50px] text-center">
      <div className="flex flex-row translate-y-16">
        <div>
          <h1>EXPERIENCE OUR</h1>
        </div>
        <div className="ml-1 sm:ml-2 md:ml-3 border rounded-md bg-red-600 px-1 sm:px-[7px] md:px-[10px] xl:px-[13px] -translate-y-[1px] text-white">
          <h1>MULTI-TENANCY</h1>
        </div>
      </div>
      <div className="translate-y-[59px]">
        <h1>SOFTWARE SUITE</h1>
      </div>
    </div>
    <div className=" text-[10px] sm:text-[11px] md:text-[13px] xl:text-[23px] translate-y-14 sm:translate-y-14">
    <h1 className=" text-gray-500 text-center ">
      Lorem ipsum dolor sit amet consectetur. Id posuere vulputate diam facilisis dui consectetur Sed nunc sed nunc ut in diam ultrices blandit.
    </h1>
    </div>
  </section>
  <div className="flex flex-row items-center justify-center translate-y-7 sm:translate-y-14 mt-20">
    <section className="mt-2 sm:mt-5 sm:mb-5 md:mt-10 xl:mt-14 xl:mb-0 relative flex flex-row overflow-auto h-24 lg:h-28 xl:h-96">
      {data.map((cards, index) => (
        <div className="space-x-4" key={index}><Card title={cards.title} iconSrc={cards.iconSrc} /></div>
      ))}
    </section>
  </div>
</div>
  );
};

export default Firstsection;
