import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const Faq2 = () => {
  return (
    <div className="select-none pb-20 ">
      <div className="flex flex-col items-center font-extrabold text-[16px] lg:text-[40px]">
        <h1>STILL HAVE QUESTIONS</h1>
      </div>
      <div className="text-center text-[10px] lg:text-[16px] ">
        <h1 className="text-gray-500">
          You can submit your question through the form below.
          <br /> Please provide as much detail as possible so that we can assist
          you effectively.
        </h1>
        <div className="flex justify-center items-center gap-3 pt-10">
          <div className="bg-white w-96 p-6 rounded-lg shadow-xl">
            <div className="pt-4">
              <h1 className="font-bold text-[16px]">Ask a Question</h1>
              <p className="text-xs mt-4 text-gray-500">
                Fill-in the form below to submit your question to us.
              </p>
            </div>
            <div className="pt-10">
              <div className="relative mb-4">
                <Input type="email" placeholder="Email" className="w-full" />
              </div>
              <div className="relative mb-4">
                <textarea
                  placeholder="Type Your Questions"
                  className="w-full h-32 resize-none border rounded-md px-2 py-2"
                ></textarea>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-800 text-white" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq2;
