import React from "react";
import PlanCard from "./PlanCard";


const PlanFeatures = () => {
  const card = [
    {
      title: "STANDARD",
      smallDescription: "Lorem ipsum dolor sit amet consectetur ",
      color: "text-blue-500",
    },
    {
      title: "PREMIUM",
      smallDescription: "Lorem ipsum dolor sit amet consectetur ",
      color: "text-green-500",
    },
    {
      title: "STARTER",
      smallDescription: "Lorem ipsum dolor sit amet consectetur ",
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="bg-blue-50">
      <div className="flex flex-col items-end">
        <section className="flex flex-row">
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
      <div className="flex items-center justify-end max-w-52 -mt-7">
        <h1>Feature</h1>
      </div>
    </div>
  );
};

export default PlanFeatures;
