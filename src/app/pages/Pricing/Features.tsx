import React from "react";
import Card from "./Card";

// triaged, if an array has the same type as the component, assert the type

const Features = () => {
  const card = [
    { title: "STARTER", smallDescription:"First you can try it for free", price: "₱7,500"},
    { title: "STANDARD", smallDescription:"First you can try it for free", price: "₱10,500"},
    { title: "PREMIUM", smallDescription:"First you can try it for free", price: "₱15,500"},

  ];

  const getTitleColorClass = (title: string): string => {
    switch (title) {
      case "STARTER":
        return "text-green-500"; // Tailwind CSS class for orange text
      case "STANDARD":
        return "text-orange-500"; // Tailwind CSS class for blue text
      case "PREMIUM":
        return "text-red-500"; // Tailwind CSS class for green text
      default:
        return "text-black"; // Default color
    }
  };

  const renderIcons = (title: string): { icon: React.ReactElement; text: string }[] => {
    switch (title) { //this function generates an array of objects where each object contains both an icon and a corresponding text, based on the provided title.
      case "STARTER":
        return [
          {
            icon: <img key="1" src="/check-green.png" alt="" />,
            text: "Positive 1",
          },
          {
            icon: <img key="2" src="/Vector nega.png" alt="" />,
            text: "Negative 1",
          },
          {
            icon: <img key="3" src="/Vector nega.png" alt="" />,
            text: "Negative 2",
          },
          {
            icon: <img key="4" src="/Vector nega.png" alt="" />,
            text: "Negative 3",
          },
          {
            icon: <img key="5" src="/Vector nega.png" alt="" />,
            text: "Negative 4",
          },
        ]; // Render one positive icon and four negative icons for STARTER
      case "STANDARD":
        return [
          {
            icon: <img key="1" src="/check-green.png" alt="" />,
            text: "Positive 1",
          },
          {
            icon: <img key="2" src="/check-green.png" alt="" />,
            text: "Positive 2",
          },
          {
            icon: <img key="3" src="/check-green.png" alt="" />,
            text: "Positive 3",
          },
          {
            icon: <img key="4" src="/Vector nega.png" alt="" />,
            text: "Negative 1",
          },
          {
            icon: <img key="5" src="/Vector nega.png" alt="" />,
            text: "Negative 2",
          },
        ]; // Render three positive icons and two negative icons for STANDARD
      case "PREMIUM":
        return [
          {
            icon: <img key="1" src="/check-green.png" alt="" />,
            text: "Positive 1",
          },
          {
            icon: <img key="2" src="/check-green.png" alt="" />,
            text: "Positive 2",
          },
          {
            icon: <img key="3" src="/check-green.png" alt="" />,
            text: "Positive 3",
          },
          {
            icon: <img key="4" src="/check-green.png" alt="" />,
            text: "Positive 4",
          },
          {
            icon: <img key="5" src="/check-green.png" alt="" />,
            text: "Positive 5",
          },
        ]; // Render five positive icons for PREMIUM
      default:
        return []; // Return an empty array if title is not recognized
    }
  };

  return (
    <div>
      <section className="py-10 px-10 2xl:max-container relative flex flex-row justify-center gap-16">
        {card.map((car, index) => (
          <div className="space-x-4" key={index}>
            <Card
              title={car.title}
              smallDescription={car.smallDescription}
              price={car.price}
              className={getTitleColorClass(car.title)}
              icons={renderIcons(car.title)} // This passes an array of JSX elements
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Features;

