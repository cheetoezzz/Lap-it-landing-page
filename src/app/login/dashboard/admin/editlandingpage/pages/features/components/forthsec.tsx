import React from "react";
import Image from "next/legacy/image";
import Card from "./thirdsectioncard";

const Forthsection = () => {
  const data = [
    {
      title: "Dashboard",
      description: "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
    {
      title: "Reporting",
      description: "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
    {
      title: "Real-Time",
      description: "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
    {
      title: "Caching",
      description: "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
    {
      title: "Rentals",
      description: "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
    {
      title: "Clinic / Patient",
      description: "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
  ];

  return (
    <section className="items-center justify-center  h-[200px] sm:h-[300px] md:h-[400px] xl:h-[500px] pt-11 select-none bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div>
          <h2 className="text-black text-[15px] sm:text-[25px] md:text-[30px] xl:text-[50px] font-extrabold text-center  ">
          UNLOCK YOUR BUSINESS POTENTIAL
          </h2>
          <div className=" text-[6.3px] sm:text-[11px] md:text-[13px] xl:text-[23px] ">
            <h1 className=" text-gray-500 text-center ">
              Lorem ipsum dolor sit amet consectetur. Id posuere vulputate diam
              facilisis dui consectetur
            </h1>
            <h1 className="text-gray-500 text-center ">
              Sed nunc sed nunc ut in diam ultrices blandit.
            </h1>
          </div>
          <div className="flex items-center justify-center mt-2 sm:mt-4 md:mt-6 xl:mt-8 ">
            <div className="font-sans font-semibold hover:bg-blue-500 hover:text-white border border-blue-500 rounded-lg p-1 m-1 duration-1000 text-[7px] sm:text-[12px] sm:p-2 sm:m-2 md:text-[14px] md:p-3 md:m-3 xl:text-[20px] xl:p-4 xl:m-4"><button>Get Started For Free</button></div>
            <div className="font-sans font-semibold hover:bg-blue-500 hover:text-white border border-blue-500 rounded-lg p-1 m-1 duration-1000 text-[7px] sm:text-[12px] sm:p-2 sm:m-2 md:text-[14px] md:p-3 md:m-3 xl:text-[20px] xl:p-4 xl:m-4"><button>Request a Demo</button></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forthsection;
