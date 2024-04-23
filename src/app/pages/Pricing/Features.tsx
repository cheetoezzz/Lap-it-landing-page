'use client'

import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";

const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);


  return (
    <section className="flex items-center justify-center max-h-none mb-20 select-none">
      <div className="flex flex-col">
        <div className="text-center">
          <h1 className="text-[48px] font-extrabold"> PRICING</h1>
        </div>
        <div className="flex flex-row mt-10">
          <div>
            <div className={`w-[400px] h-[713px] border-md bg-white mx-3 rounded-lg flex flex-col items-start pl-4 pt-5 group border-2 hover:border-blue-500 drop-shadow-2xl`}>
              <div className="ml-5">
                <h1 className="text-blue-600 text-[48px] ml-6 mt-4">POS Retail</h1>
                <h1 className="text-black text-[18px] ml-6 mt-4">Per Quarterly</h1>
                <h1 className="text-black text-[48px] ml-6 ">₱ 45,000</h1>
                <h1 className="text-black text-[18px] ml-6 mt-4">Per Month</h1>
                <h1 className="text-black text-[48px] ml-6 ">₱ 800</h1>
                <div className="space-y-5 mt-9">
                  <div className="flex space-x-5 "><FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>Point of Sale Software</h1>
                  </div>
                  <div className="flex space-x-5"><FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>Computer Set</h1>
                  </div>
                  <div className="flex space-x-5"><FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>Point of Sale Printer</h1>
                  </div>
                  <div className="flex space-x-5"><FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>Cash Drawer</h1>
                  </div>
                  <div className="flex space-x-5"><FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>Barcode Scanner</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center translate-x-[13px] mt-10">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="w-[300px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-40">
                <div className="flex items-center justify-center min-h-screen">
                  <div className="relative bg-gray-200 rounded-lg">
                    <Button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-0 right-0 m-3 text-gray-700 hover:text-gray-900"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Button>
                    <Image
                      src="/Retail.svg"
                      alt="Your Image"
                      className="rounded-lg"
                      width={600}
                      height={600}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        maxWidth: "100%",
                        height: "auto"
                      }} />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
          <div className={`w-[400px] h-[713px] border-md bg-white mx-3 rounded-lg flex flex-col items-start pl-4 pt-5 group border-2 hover:border-blue-500 drop-shadow-2xl`}>
              <div className="ml-5">
                <h1 className="text-blue-600 text-[48px] ml-6 mt-4">POS Retail</h1>
                <h1 className="text-black text-[18px] ml-6 mt-4">Per Quarterly</h1>
                <h1 className="text-black text-[48px] ml-6 ">₱ 45,000</h1>
                <h1 className="text-black text-[18px] ml-6 mt-4">Per Month</h1>
                <h1 className="text-black text-[48px] ml-6 ">₱ 800</h1>
                <div className="space-y-5 mt-9">
                  <div className="flex space-x-5 "><FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>Point of Sale Software</h1>
                  </div>
                  <div className="flex space-x-5"><FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>Computer Set</h1>
                  </div>
                  <div className="flex space-x-5"><FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>Point of Sale Printer</h1>
                  </div>
                  <div className="flex space-x-5"><FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>Cash Drawer</h1>
                  </div>
                  <div className="flex space-x-5"><FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>Barcode Scanner</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center translate-x-[13px] mt-10">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="w-[300px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            {isModalOpen2 && (
              <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-40">
                <div className="flex items-center justify-center min-h-screen">
                  <div className="relative bg-gray-200 rounded-lg">
                    <Button
                      onClick={() => setIsModalOpen2(false)}
                      className="absolute top-0 right-0 m-3 text-gray-700 hover:text-gray-900"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Button>
                    <Image
                      src="/Inventory.png"
                      alt="Your Image"
                      className="rounded-lg "
                      width={0}
                      height={0}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        maxWidth: "100%",
                        height: "auto"
                      }} />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
          <div className={`w-[400px] h-[713px] border-md bg-white mx-3 rounded-lg flex flex-col items-start pl-4 pt-5 group border-2 hover:border-blue-500 drop-shadow-2xl`}>
              <div className="ml-5">
                <h1 className="text-blue-600 text-[48px] ml-6 mt-4">POS Retail</h1>
                <h1 className="text-black text-[18px] ml-6 mt-4">Per Quarterly</h1>
                <h1 className="text-black text-[48px] ml-6 ">₱ 45,000</h1>
                <h1 className="text-black text-[18px] ml-6 mt-4">Per Month</h1>
                <h1 className="text-black text-[48px] ml-6 ">₱ 800</h1>
                <div className="space-y-5 mt-9">
                  <div className="flex space-x-5 "><FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>Point of Sale Software</h1>
                  </div>
                  <div className="flex space-x-5"><FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>Computer Set</h1>
                  </div>
                  <div className="flex space-x-5"><FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>Point of Sale Printer</h1>
                  </div>
                  <div className="flex space-x-5"><FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>Cash Drawer</h1>
                  </div>
                  <div className="flex space-x-5"><FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>Barcode Scanner</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center translate-x-[13px] mt-10">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="w-[300px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            {isModalOpen3 && (
              <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-40">
                <div className="flex items-center justify-center min-h-screen">
                  <div className="relative bg-gray-200 rounded-lg">
                    <Button
                      onClick={() => setIsModalOpen3(false)}
                      className="absolute top-0 right-0 m-3 text-gray-700 hover:text-gray-900"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Button>
                    <img
                      src="/Food.png"
                      alt="Your Image"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

