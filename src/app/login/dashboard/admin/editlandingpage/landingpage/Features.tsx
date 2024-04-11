'use client'
import React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./components/card";

const Features = () => {
  const card = [
    {
      title: "Registration",
      description: "Lorem ipsum dolor sit amet consectetur sodales.",
    },
    {
      title: "Multi-Tenancy",
      description: "Lorem ipsum dolor sit amet consectetur sodales.",
    },
    {
      title: "Point of Sales",
      description: "Lorem ipsum dolor sit amet consectetur sodales.",
    },
    {
      title: "Inventory Control",
      description: "Lorem ipsum dolor sit amet consectetur sodales.",
    },
    {
      title: "Rentals",
      description: "Lorem ipsum dolor sit amet consectetur sodales.",
    },
    {
      title: "Clinic / Patient",
      description: "Lorem ipsum dolor sit amet consectetur sodales.",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-20 select-none bg-blue-50">
      <div className="font-extrabold text-5xl">
        <h1>
          HIGH -{" "}
          <span className="bg-red-600 text-white p-1 px-4 rounded-md inline-block">
            IMPACT
          </span>{" "}
          FEATURES
        </h1>
      </div>
      <div className="text-center mt-7">
        <p>
          Our impactful features are <strong>intricately designed</strong> to
          seamlessly align with your workflow, ensuring a highly effective and
          tailored user experience.
        </p>
      </div>
      <div className="mt-16">
        <Image src="/computer.svg" alt="image" width={24} height={24} />
      </div>

      <Carousel
      >
        <CarouselContent>
          {card.map((car, index) => (
            <CarouselItem className="w-56 mt-10 mb-14 basis-1/4" key={index}>
              <Card title={car.title} description={car.description} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Features;
