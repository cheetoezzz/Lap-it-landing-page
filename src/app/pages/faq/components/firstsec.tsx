import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const firstsec = () => {
  return (
    <div className="pt-10 select-none mb-16">
      <div className="flex flex-col items-center font-extrabold text-5xl">
        <h1>FAQ</h1>
      </div>
      <div className="text-center text-sm pt-7">
        <p>
          Here, we have
          compiled a list of common questions and answers to provide you with
          quick and helpful information about our products/services.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center  gap-2">
      <section className="pt-7 pl-64">
          <div className="flex justify-start items-start mt-10">
            <Image
              src="/faq.svg"
              alt="Image Description"
              width={450}
              height={300}
            />
          </div>
        </section>
      <div className=" w-1/2 justify-between flex flex-col items-end pr-36 pt-11">
        <Accordion type="single" collapsible>
          <AccordionItem className="w-[500px]" value="item-1">
            <AccordionTrigger className="border px-5 rounded-md bg-blue-600 text-white font-semibold text-sm">
              Point of Sales?
            </AccordionTrigger>
            <AccordionContent className="px-5">
              <h1 className="pt-4">Point of Sales</h1>
              <p className="pt-4">
                Lorem ipsum dolor sit amet consectetur. Facilisi pellentesque
                libero aenean porta adipiscing imperdiet faucibus. At mi odio
                tincidunt a. Sed egestas est dignissim tristique. Pellentesque
                nunc in turpis eget tincidunt risus. Risus volutpat at amet
                venenatis. Ultrices urna venenatis pellentesque integer feugiat
                faucibus non nunc vitae. Facilisis sit quam felis morbi hac.
                Augue arcu tellus neque sem.
              </p>
            </AccordionContent>
            <AccordionItem className="w-[500px]" value="item-2">
              <AccordionTrigger className="border px-5 rounded-md bg-blue-600 text-white font-semibold text-sm">
                System Demonstration
              </AccordionTrigger>
              <AccordionContent className="px-5">
                <h1 className="pt-4">Demo?</h1>
                <p className="pt-4">
                  Lorem ipsum dolor sit amet consectetur. Facilisi pellentesque
                  libero aenean porta adipiscing imperdiet faucibus. At mi odio
                  tincidunt a. Sed egestas est dignissim tristique. Pellentesque
                  nunc in turpis eget tincidunt risus. Risus volutpat at amet
                  venenatis. Ultrices urna venenatis pellentesque integer
                  feugiat faucibus non nunc vitae. Facilisis sit quam felis
                  morbi hac. Augue arcu tellus neque sem.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="w-[500px]" value="item-3">
              <AccordionTrigger className="border px-5 rounded-md bg-blue-600 text-white font-semibold text-sm">
                How do I get technical support for your product/service?
              </AccordionTrigger>
              <AccordionContent className="px-5">
                <h1 className="pt-4">Point of Sales</h1>
                <p className="pt-4">
                  Lorem ipsum dolor sit amet consectetur. Facilisi pellentesque
                  libero aenean porta adipiscing imperdiet faucibus. At mi odio
                  tincidunt a. Sed egestas est dignissim tristique. Pellentesque
                  nunc in turpis eget tincidunt risus. Risus volutpat at amet
                  venenatis. Ultrices urna venenatis pellentesque integer
                  feugiat faucibus non nunc vitae. Facilisis sit quam felis
                  morbi hac. Augue arcu tellus neque sem.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="w-[500px]" value="item-4">
              <AccordionTrigger className="border px-5 rounded-md bg-blue-600 text-white font-semibold text-sm">
                How do you protect customer data and privacy?
              </AccordionTrigger>
              <AccordionContent className="px-5">
                <h1 className="pt-4">Point of Sales</h1>
                <p className="pt-4">
                  Lorem ipsum dolor sit amet consectetur. Facilisi pellentesque
                  libero aenean porta adipiscing imperdiet faucibus. At mi odio
                  tincidunt a. Sed egestas est dignissim tristique. Pellentesque
                  nunc in turpis eget tincidunt risus. Risus volutpat at amet
                  venenatis. Ultrices urna venenatis pellentesque integer
                  feugiat faucibus non nunc vitae. Facilisis sit quam felis
                  morbi hac. Augue arcu tellus neque sem.
                </p>
              </AccordionContent>
            </AccordionItem>
          </AccordionItem>
        </Accordion>
        </div>
      </div>
    </div>
  );
};

export default firstsec;
