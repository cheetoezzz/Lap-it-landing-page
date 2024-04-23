import React from "react";
import Image from "next/image";
import Card from "./secondsectioncard";

const Secondsection = () => {
  const data = [
    {
      title: "Dashboard",
      description:
        "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
    {
      title: "Reporting",
      description:
        "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
    {
      title: "Real-Time",
      description:
        "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
    {
      title: "Caching",
      description:
        "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
  ];

  return (
    <section className="items-center justify-center  h-[570px] sm:h-[800px] md:h-[1100px] xl:h-[1350px] pt-11 select-none">
      <div className="max-w-6xl mx-auto px-4">
        <div>
          <h2 className="text-black text-[15px] sm:text-[25px] md:text-[30px] xl:text-[50px] font-extrabold text-center  ">
            LOREM IPSUM DOLOR
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
        </div>
        <div className=" items-center justify-center mt-14 ">
          <Image
            src="/Features/section2.svg"
            alt="Features"
            width={1150}
            height={50}
            style={{
              maxWidth: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>

        <div className="flex flex-row items-center justify-center translate-y-7 sm:translate-y-14 xl:w-[1550px] xl:-translate-x-[210px]">
          <section className="mt-2 sm:mt-5 sm:mb-5 md:mt-10 relative flex flex-row overflow-auto">
            {data.map((cards, index) => (
              <div className="space-x-4" key={index}>
                <Card
                  title={cards.title}
                  description={cards.description}
                  iconSrc={cards.iconSrc}
                />
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};

export default Secondsection;
