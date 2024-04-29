import React from "react";
import Card from "./constants/card";
import { FcCheckmark, FcMinus } from "react-icons/fc";


const Fifthesec = () => {
  const card = [
    {
      title: "POS Retail",
      prices: "₱ 45,000",
      price: "₱ 800",
    },
    {
      title: "POS Hotel",
      prices: "₱ 10,500",
      price: "₱ 10,500",
    },
    {
      title: "POS F&B",
      prices: "₱ 15,500",
      price: "₱ 15,500",
    },
  ];

  const getTitleColorClass = (title: string): string => {
    switch (title) {
      case "POS Retail":
        return "text-green-500";
      case "POS Hotel":
        return "text-orange-500";
      case "POS F&B":
        return "text-red-500";
      default:
        return "text-black";
    }
  };

  const renderIcons = (title: string): { icon: React.ReactElement; text: string }[] => {
    switch (title) {
      case "POS Retail":
        return [
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Software" },
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Hardware" },
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Barcode Scanner" },
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Computer Set" },
        ]
      case "POS Hotel":
        return [
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Software" },
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Hardware" },
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Computer Set" },
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Training" },
        ];
      case "POS F&B":
        return [
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Software" },
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Computer Set" },
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Training" },
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Maintenance" },
       
        ];
      default:
        return [];
    }
  };

  return (
    <div className="select-none bg-blue-50">
      <div className="flex flex-col items-center pt-16 text-center">
        <div className="font-extrabold text-3xl lg:text-5xl xl:text-5xl">
          <h1 className="mt-4">LET’S KNOW THE</h1>
          <h1 className="mt-2">
            <span className="bg-red-600 text-white p-1 px-4 rounded-md inline-block">
              PRICING PLAN
            </span>{" "}
            FOR YOU
          </h1>
        </div>
        <div className="text-center mt-7 text-sm lg:text-base xl:text-base">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <section className="overflow-x-auto flex flex-row gap-2 2xl:max-container xl:py-10 xl:px-10 xl:2xl:max-container xl:relative xl:flex xl:flex-row xl:justify-center xl:gap-16 xl:overflow-hidden">
        {card.map((car, index) => (
          <div className="space-x-4 mx-3 mb-10 mt-20 lg:mt-10 xl:mt-10 lg:mx-2 xl:mx-2" key={index}>
            <Card
              title={car.title}
              prices={car.prices}
              price={car.price}
              className={getTitleColorClass(car.title)}
              icons={renderIcons(car.title)}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Fifthesec;
