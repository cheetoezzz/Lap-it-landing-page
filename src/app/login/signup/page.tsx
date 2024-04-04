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
            width={150}
            height={150}
            className="absolute top-0 left-0 m-4 md:m-6 lg:m-8 xl:m-10 max-w-full h-auto"
            alt="Logo"
          />
          {/* Quote */}
          <div className="absolute justify-center bottom-0 left-0 right-0 text-center mb-8 md:mb-12 lg:mb-16 mx-[40px]">
            <p className="text-white font-medium text-[7px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] lg:text-base ">
              “Empower your business journey, elevate your achievements! Unleash
              the possibilities of smooth administration, insightful analytics,
              and tailored solutions on our diverse platform.”
              <p className="px-6 text-[10px] font-light text-left ">Lap Solution TEAM</p>
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
