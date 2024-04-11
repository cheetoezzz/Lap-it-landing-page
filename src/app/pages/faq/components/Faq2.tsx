import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Faq2 = () => {
  return (
    <div className="pt-20 mb-10 select-none">
      <div className="flex flex-col items-center font-extrabold text-5xl">
        <h1>STILL HAVE QUESTIONS</h1>
      </div>
      <div className="text-center text-md pt-7">
        <p>
          You can submit your question through the form below.
          <br /> Please provide as much detail as possible so that we can
          assist you effectively.
        </p>
        <div className="flex justify-center items-center gap-3 pt-10">
          <div className="bg-white w-96 p-6 rounded-lg shadow-xl">
          <div className="pt-4">
                <h1 className="font-bold">
                    Ask a Question
                </h1>
                <p className="text-xs mt-4">Fill-in the form below to submit your question to us.</p>
            </div>
            <div className="pt-10">
            <Input type="email" placeholder="Email" className="mb-4 w-full" />
            <Input
              type="text"
              placeholder="Type Your Questions"
              className="mb-4 w-full h-32 resize-none"
            />
            <Button className="w-full bg-blue-600"type="submit">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq2;
