import React from "react";
import PlanCard from "./PlanCard";


const PlanFeatures = () => {
  const card = [
    {
      title: "STANDARD",
      smallDescription: "Lorem ipsum dolor sit amet consectetur ",
      color: "text-orange-400",
    },
    {
      title: "PREMIUM",
      smallDescription: "Lorem ipsum dolor sit amet consectetur ",
      color: "text-red-600",
    },
    {
      title: "STARTER",
      smallDescription: "Lorem ipsum dolor sit amet consectetur ",
      color: "text-green-400",
    },
  ];

  return (
    <div className="bg-blue-50">
      <div className="flex flex-col items-end">
        <section className="flex flex-row ">
          {card.map((car, index) => (
            <div className="space-x-4" key={index}>
              <PlanCard
                title={car.title}
                smallDescription={car.smallDescription}
                color={car.color}
              />
            </div>
          ))}
        </section>
      </div>
      <div className="flex items-center justify-end max-w-72  ml-24 -mt-7 text-[22px] font-bold">
        <h1>Features</h1>
      </div>
    </div>
  );
};

export default PlanFeatures;
