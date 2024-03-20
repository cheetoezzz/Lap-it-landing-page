import React from "react";
import Card from "./card";

const Features = () => {
  const card = [
    { title: "Registration", description: "Lorem ipsum dolor sit amet consectetur sodales." },
    { title: "Multi-tenacity", description: "Lorem ipsum dolor sit amet consectetur sodales." },
    { title: "Point of Sales", description: "Lorem ipsum dolor sit amet consectetur sodales." },
    { title: "Inventory Control", description: "Lorem ipsum dolor sit amet consectetur sodales." },
    { title: "Rentals", description: "Lorem ipsum dolor sit amet consectetur sodales." },
    { title: "Clinic / Patient", description: "Lorem ipsum dolor sit amet consectetur sodales." },
  ];
  return (
    <div>
      <section className="">
        <div className="flex flex-col items-center justify-center">
          <div className="text-blue-800 text-5xl font-bold text-center">
            We Offer Reputable <br className="mb-4"/>  and Top-notch Software
          </div>
        </div>
      </section>
      <section className="py-10 px-10 2xl:max-container relative flex flex-row mt-10">
        {card.map((car, index) => (
          <div className="space-x-4" key={index}><Card title={car.title} description={car.description}/></div>
        ))}
      </section>
    </div>
  );
};

export default Features;
