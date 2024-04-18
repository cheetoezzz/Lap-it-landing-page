import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="select-none bg-blue-600">
      <div className="max-w-screen-xl mx-auto">
        <section className="padding-container flex flex-col gap-20 py-5 xl:flex-row">
          <div className="pt-2">
            <div className="pt-10">
              <h1 className="text-5xl font-extrabold text-white mb-4">
                AFFORDABLE SMALL
              </h1>
              <h1 className="text-5xl font-extrabold text-white mb-4">
                BUSINESS{" "}
                <span className="bg-white px-1 w-6 text-blue-600 rounded-md">
                  ENTERPRISE
                </span>
              </h1>
              <h1 className="text-5xl font-extrabold text-white">SOFTWARE</h1>
              <p className="text-white mt-7 text-md text-justify mx-auto max-w-lg">
                Empower your business with cutting-edge tools designed to
                streamline operations, boost productivity, and maximize growth
                without breaking the bank. Our software is tailored to meet the
                unique needs of small businesses, offering a comprehensive suite
                of features that are easy to use and implement.
              </p>
            </div>
            <div className="mt-9 flex gap-20">
              <button className="border w-44 h-10 rounded-md border-white text-white font-semibold hover:bg-white hover:text-black">
                Get Started
              </button>
              <button className="border w-44 h-10 rounded-md border-white text-white font-semibold hover:bg-white hover:text-black">
                Book a demo
              </button>
            </div>
          </div>
          <div className="w-1/2 relative pt-5">
            <div className="relative -top-20 -right-14">
              <Image
                src="/poss.svg"
                alt="Point of Sale"
                width={600}
                height={400}
              />
            </div>
            <div className="flex gap-10 relative mt-[-160px] justify-center mb-2 -right-10">
              <Image
                src="/bir.svg"
                alt="BIR Logo"
                width={80}
                height={100}
                className=""
              />
              <Image
                src="/sm.svg"
                alt="SM Logo"
                width={80}
                height={100}
              />
              <Image
                src="/abreeza.svg"
                alt="Abreeza Logo"
                width={80}
                height={100}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
