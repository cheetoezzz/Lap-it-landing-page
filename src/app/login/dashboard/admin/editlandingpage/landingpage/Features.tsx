"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Card from "./components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import UpdateContentForm from "@/components/form/landingpage/editcontent";

interface HomeContent {
  id: number;
  contentName: string;
  content: string;
}

const Features = () => {
  const [homeContents, setHomeContents] = useState<{
    [key: number]: string;
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/landingpagehomecontent"
        );
        const data = await response.json();
        const homes: HomeContent[] = data.homeContent;

        // Create an object to store feature contents by ID
        const contents: { [key: number]: string } = {};
        for (const home of homes) {
          contents[home.id] = home.content;
        }
        setHomeContents(contents);
      } catch (error) {
        console.error("Error fetching feature content:", error);
      }
    };

    fetchData();
  }, []);

  const getId6 = () => {
    return "6";
  };
  const getId7 = () => {
    return "7";
  };
  const getId8 = () => {
    return "8";
  };
  const getId9 = () => {
    return "9";
  };

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
        <div className="flex item-center justify-center">
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="items-center justify-center flex"
              >
                <AccordionTrigger>
                  <h1 className="font-extrabold ">{homeContents[6]}</h1>
                </AccordionTrigger>
                <AccordionContent>
                  {/* BUTTON EDIT */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Edit</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Content</DialogTitle>
                        <DialogDescription>
                          Make changes to this content here.
                        </DialogDescription>
                      </DialogHeader>
                      {/* CONTENT */}
                      <UpdateContentForm getId={getId6} />;
                    </DialogContent>
                  </Dialog>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="items-center justify-center flex"
              >
                <AccordionTrigger>
                  <h1 className="bg-red-600 p-2 mx-2 rounded-lg -translate-y-2 font-extrabold">
                    {homeContents[7]}
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  {/* BUTTON EDIT */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Edit</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Content</DialogTitle>
                        <DialogDescription>
                          Make changes to this content here.
                        </DialogDescription>
                      </DialogHeader>
                      {/* CONTENT */}
                      <UpdateContentForm getId={getId7} />;
                    </DialogContent>
                  </Dialog>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="items-center justify-center flex"
              >
                <AccordionTrigger>
                  <h1 className="font-extrabold ">{homeContents[8]}</h1>
                </AccordionTrigger>
                <AccordionContent>
                  {/* BUTTON EDIT */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Edit</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Content</DialogTitle>
                        <DialogDescription>
                          Make changes to this content here.
                        </DialogDescription>
                      </DialogHeader>
                      {/* CONTENT */}
                      <UpdateContentForm getId={getId8} />;
                    </DialogContent>
                  </Dialog>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="text-center mt-7">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="items-center justify-center flex"
          >
            <AccordionTrigger>
              <h1 className="font-extrabold text-{16px} ">{homeContents[9]}</h1>
            </AccordionTrigger>
            <AccordionContent>
              {/* BUTTON EDIT */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Edit</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit Content</DialogTitle>
                    <DialogDescription>
                      Make changes to this content here.
                    </DialogDescription>
                  </DialogHeader>
                  {/* CONTENT */}
                  <UpdateContentForm getId={getId9} />;
                </DialogContent>
              </Dialog>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-16">
        <Image src="/computer.svg" alt="image" width={24} height={24} />
      </div>

      <Carousel>
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
