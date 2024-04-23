import React from "react";
import Image from "next/image";

const Fourthsec = () => {
  return (
    <div className="flex flex-col items-center mt-28 text-center bg-white select-none">
      <div className="font-extrabold text-5xl">
        <h1 className="mt-4">
          <span className="bg-red-600 text-white p-1 px-4 rounded-md inline-block">
            SECURE
          </span>{" "}
          CLOUD
        </h1>
        <h1 className="mt-2">APPLICATION HOSTING</h1>
      </div>
      <div className="text-center mt-7">
        <p>
          Securely host your applications in the cloud for reliable and scalable performance, backed by top-notch security measures.
        </p>
      </div>
      <div className="flex flex-row mt-24">
        <section className="w-1/2 mr-20">
          <h1 className="text-slate-600 mb-8 mt-20 text-md text-justify mx-auto max-w-lg">
            Experience peace of mind with our secure cloud application hosting
            services, providing a reliable and scalable platform to host your
            applications with top-notch security measures, ensuring data
            integrity and availability for your business needs.
          </h1>
          <div className="font-semibold text-slate-600">
            <div className="flex items-center">
              <button className="bg-blue-600 w-40 h-10 ml-2 hover:bg-blue-800 transition-all text-white font-normal flex items-center justify-center rounded-md">
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
                height: "auto"
              }} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Fourthsec;
