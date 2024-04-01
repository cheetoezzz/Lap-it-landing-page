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
    <div className="flex flex-col select-none">
      <section className="flex flex-col items-center justify-center pt-24 ">
        <div className="text-black font-extrabold text-5xl text-center ">
          <div className="flex">
            <div>
              <h1>EXPERIENCE OUR</h1>
            </div>
            <div className="text-neutral-100 ml-4 border rounded-xl bg-red-600 p-2 -translate-y-2">
              <h1> MULTI-TENANCY</h1>
            </div>
          </div>
          <div>
            <h1>SOFTWARE SUITE</h1>
          </div>
        </div>
        <h1 className="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur. Id posuere vulputate diam facilisis dui
        </h1>
        <h1 className="text-gray-500">
        consectetur Sed nunc sed nunc ut in diam ultrices blandit.
        </h1>
      </section>
      <div className="flex flex-row items-center justify-center h-48 mt-24">
        <section className="py-10 px-10 2xl:max-container relative flex flex-row mt-10 overflow-auto">
        {data.map((cards, index) => (
          <div className="space-x-4" key={index}><Card title={cards.title} iconSrc={cards.iconSrc} /></div>
        ))}
        </section>
      </div>
    </div>
  );
};

export default Firstsection;
