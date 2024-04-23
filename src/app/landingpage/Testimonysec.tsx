'use client'
import React from "react";
import Image from "next/legacy/image";
import Card from "./constants/testimonialcard";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Features = () => {
  const card = [
    {
      title: "Allen",
      description: "Lorem ipsum dolor sit amet consectetur sodales.",
    },
    {
      title: "Arc",
      description: "Lorem ipsum dolor sit amet consectetur sodales.",
    },
    {
      title: "Adriane",
      description: "Lorem ipsum dolor sit amet consectetur sodales.",
    },
    {
      title: "Bucod",
      description: "Lorem ipsum dolor sit amet consectetur sodales.",
    },
    {
      title: "Torralba",
      description: "Lorem ipsum dolor sit amet consectetur sodales.",
    },
    {
      title: "Lluvido",
      description: "Lorem ipsum dolor sit amet consectetur sodales.",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-20 select-none">
      <div className="font-extrabold text-5xl">
        <h1>
        WHAT DO  OUR CUSTOMER SAY?
        </h1>
      </div>
      <div className="text-center mt-7">
        <p>
        Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    
      <Carousel
        plugins={[
          Autoplay({
            delay: 1500,
          }),
        ]}
      >
        <CarouselContent>
          {card.map((car, index) => (
            <CarouselItem className="w-56 mt-16 mb-14 basis-1/4" key={index}>
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
