import React from "react";
import Image from "next/image";

const Servicessec = () => {
  return (
    <div className="flex flex-col items-center pt-20 text-center select-none">
      <div className="font-extrabold text-3xl lg:text-5xl xl:text-5xl">
        <h1 className="mt-2">WE OFFER</h1>
        <h1 className="mt-4">
          OTHER{" "}
          <span className="bg-red-600 text-white p-1 px-4 rounded-md inline-block">
            SERVICES
          </span>
        </h1>
      </div>
      <div className="text-center mt-7 text-sm lg:text-base xl:text-base">
        <p>
        Explore our range of additional services designed to complement your needs and enhance your experience  
        </p>
      </div>
      <div className="xl:flex xl:flex-row xl:gap-12">
        <section className=" xl:w-1/2 xl:ml-20">
          <div className="flex flex-col items-center mt-10 xl:flex xl:justify-end xl:items-end xl:mr-24 xl:mt-24">
            <Image
              src="/comp.svg"
              alt="Image Description"
              width={500}
              height={300}
              layout="responsive"
              style={{
                maxWidth: "100%",
                height: "auto",
              }} />
          </div>
        </section>
        <section className="flex flex-col items-center mt-36 gap-2">
          <h1 className="text-slate-600 text-base mt-7 text-md text-justify mx-auto max-w-lg">
            Discover a full spectrum of services including laptop and computer
            repairs, ensuring that we cater to all your tech needs under one
            reliable roof, so you can focus on what matters most—your business.
          </h1>
          <div className="mt-7 flex flex-col items-start justify-start pr-[350px]">
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
        </section>
      </div>
    </div>
  );
};

export default Servicessec;
