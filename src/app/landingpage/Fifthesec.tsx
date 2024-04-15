import React from "react";
import Card from "./constants/card";
import { FcCheckmark, FcMinus } from "react-icons/fc";


const Fifthesec = () => {
  const card = [
    {
      title: "STARTER",
      smallDescription: "First you can try it for free",
      price: "₱ 7,500",
    },
    {
      title: "STANDARD",
      smallDescription: "First you can try it for free",
      price: "₱ 10,500",
    },
    {
      title: "PREMIUM",
      smallDescription: "First you can try it for free",
      price: "₱ 15,500",
    },
  ];

  const getTitleColorClass = (title: string): string => {
    switch (title) {
      case "STARTER":
        return "text-green-500";
      case "STANDARD":
        return "text-orange-500";
      case "PREMIUM":
        return "text-red-500";
      default:
        return "text-black";
    }
  };

  const renderIcons = (title: string): { icon: React.ReactElement; text: string }[] => {
    switch (title) {
      case "STARTER":
        return [
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Lorem ipsum dolor sit" },
          { icon: <FcMinus style={{ fontSize: "24px" }} />, text: "Amet consectetur" },
          { icon: <FcMinus style={{ fontSize: "24px" }} />, text: "Lorem ipsum dolor sit amet" },
          { icon: <FcMinus style={{ fontSize: "24px" }} />, text: "Volutpat nulla lorem vitae" },
          { icon: <FcMinus style={{ fontSize: "24px" }} />, text: "Lorem ipsum dolor sit amet" },
        ];
      case "STANDARD":
        return [
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Lorem ipsum dolor sit" },
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Lorem ipsum dolor sit" },
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Lorem ipsum dolor sit" },
          { icon: <FcMinus style={{ fontSize: "24px" }} />, text: "Lorem ipsum dolor sit amet" },
          { icon: <FcMinus style={{ fontSize: "24px" }} />, text: "Lorem ipsum dolor sit amet" },
        ];
      case "PREMIUM":
        return [
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Lorem ipsum dolor sit" },
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Lorem ipsum dolor sit" },
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Lorem ipsum dolor sit" },
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Lorem ipsum dolor sit" },
          { icon: <FcCheckmark style={{ fontSize: "24px" }} />, text: "Lorem ipsum dolor sit" },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="select-none bg-blue-50">
      <div className="flex flex-col items-center pt-16 text-center">
        <div className="font-extrabold text-5xl">
          <h1 className="mt-4">LET’S KNOW THE</h1>
          <h1 className="mt-2">
            <span className="bg-red-600 text-white p-1 px-4 rounded-md inline-block">
              PRICING PLAN
            </span>{" "}
            FOR YOU
          </h1>
        </div>
        <div className="text-center mt-7">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <section className="py-10 px-10 2xl:max-container relative flex flex-row justify-center gap-16">
        {card.map((car, index) => (
          <div className="space-x-4" key={index}>
            <Card
              title={car.title}
              smallDescription={car.smallDescription}
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
