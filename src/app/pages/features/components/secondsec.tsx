import React from "react";
import Image from "next/image";
import Card from "./secondsectioncard";

const Secondsection = () => {

  const data = [
    { title: "Registration", description: "Lorem ipsum dolor sit amet consectetur sodales.", iconSrc: "/identification.svg" },
    { title: "Multi-tenacity", description: "Lorem ipsum dolor sit amet consectetur sodales.", iconSrc: "/share.svg"},
    { title: "Point of Sales", description: "Lorem ipsum dolor sit amet consectetur sodales.", iconSrc: "/tag.svg"},
    { title: "Inventory Control", description: "Lorem ipsum dolor sit amet consectetur sodales.", iconSrc: "/cube.svg"  },
    { title: "Rentals", description: "Lorem ipsum dolor sit amet consectetur sodales.", iconSrc: "/ticket.svg"  },
    { title: "Clinic / Patient", description: "Lorem ipsum dolor sit amet consectetur sodales.", iconSrc: "/heart.svg"  },
  ];
  
  return (
    <section className="py-16 select-none">
      <div className="max-w-6xl mx-auto px-4">
        <div>
        <h2 className="text-black text-5xl font-extrabold text-center mb-36">
          LOREM IPSUM DOLOR
        </h2>
        <h2 className="text-gray-500 text-center -translate-y-32">
          Lorem ipsum dolor sit amet consectetur. Id posuere vulputate diam facilisis dui
        </h2>
        </div>
        <div className=" items-center justify-center -translate-y-16">
              <Image
              src="/features.svg"
              alt="Features"
              width={1150}
              height={50}
              />

        </div>

        <section className="py-10 px-10 2xl:max-container relative flex flex-row mt-10 overflow-auto">
        {data.map((cards, index) => (
          <div className="space-x-4" key={index}><Card title={cards.title} description={cards.description} iconSrc={cards.iconSrc} /></div>
        ))}
        </section>
        </div>
    </section>
  );
};

export default Secondsection;
