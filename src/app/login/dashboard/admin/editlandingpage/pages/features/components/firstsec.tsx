"use client";

import React, { useEffect, useState } from "react";
import Card from "./firstsectioncard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import UpdateContentForm from "@/components/form/features/editcontent";

interface featureContent {
  id: number;
  contentName: string;
  content: string;
}

const Firstsection = () => {
  const [featureContents, setFeatureContents] = useState<{
    [key: number]: string;
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/landingpagecontent/featurecontent");
        const data = await response.json();
        const features: featureContent[] = data.featuresContent;

        // Create an object to store feature contents by ID
        const contents: { [key: number]: string } = {};
        for (const feature of features) {
          contents[feature.id] = feature.content;
        }
        setFeatureContents(contents);
      } catch (error) {
        console.error("Error fetching feature content:", error);
      }
    };

    fetchData();
  }, []);

  //UPDATE ID
    const getId = () => { return '1';};
    const getId2 = () => { return '2';};
    const getId3 = () => { return '3';};
    const getId4 = () => { return '4';};

//CARDS

  const data = [
    { title: "SEEMLESS", iconSrc: "/icon.svg" },
    { title: "SCALABLE & FLEXIBLE", iconSrc: "/icon.svg" },
    { title: "EFFECIENT", iconSrc: "/icon.svg" },
    { title: "GAME-CHANGER", iconSrc: "/icon.svg" },
  ];

  return (
    <div className="flex flex-col select-none">
      <section className="h-[350px] flex flex-col items-center justify-center sm:pt-7 xl:pt-32 ">
        <div className="text-black font-extrabold text-[15px] sm:text-[25px] md:text-[30px] xl:text-[50px] text-center">
          <div className="flex flex-row translate-y-16">
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="items-center justify-center flex">
                  <AccordionTrigger>
                    <h1>{featureContents[1]}</h1>
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
                        <UpdateContentForm getId={getId} />;  
                      </DialogContent>
                    </Dialog>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="ml-1 sm:ml-2 md:ml-3 border rounded-md bg-red-600 px-1 sm:px-[7px] md:px-[10px] xl:px-[13px] -translate-y-[1px] text-white">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-2" className="items-center justify-center flex">
                  <AccordionTrigger>
                    <h1>{featureContents[2]}</h1>
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* BUTTON EDIT */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="text-black">Edit</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit Content</DialogTitle>
                          <DialogDescription>
                            Make changes to this content here.
                          </DialogDescription>
                        </DialogHeader>
                        {/* CONTENT */}
                        <UpdateContentForm getId={getId2} />;  
                      </DialogContent>
                    </Dialog>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="translate-y-[59px]">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-3" className="items-center justify-center flex">
                  <AccordionTrigger>
                    <h1 >{featureContents[3]}</h1>
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
                        <UpdateContentForm getId={getId3} />;  
                      </DialogContent>
                    </Dialog>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </div>
        </div>
        <div className=" text-[6.3px] sm:text-[11px] md:text-[13px] xl:text-[23px] translate-y-14 sm:translate-y-14">
          <Accordion type="single" collapsible>
                <AccordionItem value="item-3" className="items-center justify-center flex mx-[500px]">
                  <AccordionTrigger>
                    <h1 className="text-gray-500">{featureContents[4]}</h1>
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
                        <UpdateContentForm getId={getId4} />;  
                      </DialogContent>
                    </Dialog>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
        </div>
      </section>
      <div className="flex flex-row items-center justify-center translate-y-7 sm:translate-y-14 mt-14">
        <section className="mt-2 sm:mt-5 sm:mb-5 md:mt-10 xl:mt-14 xl:mb-0 relative flex flex-row overflow-auto">
          {data.map((cards, index) => (
            <div className="space-x-4" key={index}>
              <Card title={cards.title} iconSrc={cards.iconSrc} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Firstsection;

