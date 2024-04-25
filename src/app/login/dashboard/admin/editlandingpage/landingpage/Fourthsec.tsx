"use client";

import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
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

const Thirdsection = () => {
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

  const getId14 = () => {
    return "14";
  };
  const getId15 = () => {
    return "15";
  };
  const getId16 = () => {
    return "16";
  };
  const getId17 = () => {
    return "17";
  };

  return (
    <div className="flex flex-col items-center mt-28 text-center bg-white select-none">
      <div className="font-extrabold text-5xl">
        <div className="flex items-center justify-center">
          <div className="mx-1">
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="items-center justify-center flex"
              >
                <AccordionTrigger>
                  <h1 className="bg-red-600 p-2 rounded-lg">
                    {homeContents[14]}
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
                      <UpdateContentForm getId={getId14} />
                    </DialogContent>
                  </Dialog>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mx-2">
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="items-center justify-center flex"
              >
                <AccordionTrigger>
                  <h1>{homeContents[15]}</h1>
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
                      <UpdateContentForm getId={getId15} />
                    </DialogContent>
                  </Dialog>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem
              value="item-1"
              className="items-center justify-center flex"
            >
              <AccordionTrigger>
                <h1 className="mt-2">{homeContents[16]}</h1>
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
                    <UpdateContentForm getId={getId16} />
                  </DialogContent>
                </Dialog>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="text-center mt-7">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="items-center justify-center flex"
          >
            <AccordionTrigger>
              <h1 className="mt-2">{homeContents[17]}</h1>
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
                  <UpdateContentForm getId={getId17} />
                </DialogContent>
              </Dialog>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-row mt-24">
        <section className="w-1/2 mr-20">
          <h1 className="text-slate-600 text-start mb-8 mt-20">
            Lorem ipsum dolor sit amet consectetur. Lacinia risus
            <strong>
              quam
              <br />
              morbi donec netus accumsan elementum.
            </strong>{" "}
            Viverra amet
            <br />
            phasellus tellus laoreet fringilla. Lorem urna suspendisse sit ac
            <br />
            convallis eget lacus non.
          </h1>
          <div className="font-semibold text-slate-600">
            <div className="flex items-center">
              <button className="bg-blue-600 w-40 h-10 hover:bg-blue-800 transition-all text-white font-normal flex items-center justify-center rounded-md">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 ml-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section className="-mt-16 mb-28">
          <div className="flex justify-end items-end mt-10">
            <Image
              src="/fourthsec.svg"
              alt="Image Description"
              width={500}
              height={300}
              style={{
                maxWidth: "100%",
                height: "auto",
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Thirdsection;
