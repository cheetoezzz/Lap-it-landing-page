"use client";
import React from "react";
import Image from "next/image";
import SignUpForm from "@/components/form/signupform";


const Page = () => {

  return (
    <div>
      <h1 className="text-green-500 sm:text-red-500 md:text-black lg:text-amber-800 xl:text-blue-600">
        RESPONSIVE
      </h1>
      <div className="flex">
        <div className="w-1/2 h-screen relative">
          {/* Background Image */}
          <Image
            src="/login/Background.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
          {/* Logo */}
          <Image
            src="/Lapwhitelogo.svg"
            width={100}
            height={100}
            className="absolute top-0 left-0 m-4 md:m-8 lg:m-12 max-w-full h-auto"
            alt="Logo"
          />
          {/* Quote */}
          <div className="absolute justify-center bottom-0 left-0 right-0 text-center mb-8 md:mb-12 lg:mb-16 mx-[40px]">
            <p className="text-white text-[10px]  md:text-xl lg:text-base ">
              “Empower your business journey, elevate your achievements! Unleash
              the possibilities of smooth administration, insightful analytics,
              and tailored solutions on our diverse platform.”
            </p>
          </div>
        </div>
        <div className="w-1/2 h-screen p-8 flex justify-center items-center">
          {/* Form or content */}
          <SignUpForm/>
        </div>
      </div>
    </div>
  );
};

export default Page;
