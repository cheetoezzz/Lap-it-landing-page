import React from "react";

const Secondsection = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-screen  max-h-none  relative">
          <div className="flex flex-col mt-10">
            <div className="text-center">
              <h1 className="text-[18px] font-extrabold mx-10 lg:text-[40px]">
                OUR PURPOSE & DIRECTION
              </h1>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-col items-center justify-center lg:flex-row gap-10 ">
              <div className="bg-blue-50 border  p-[32px]">
                <div className=" w-[250px] h-[230px] sm:w-[400px] lg:w-[500px] lg:h-[200px]">
                  <h1 className="text-blue-500 font-extrabold text-[18px] lg:text-[22px]">
                    OUR MISSION
                  </h1>
                  <h1 className="text-gray-500 font-extralight text-[12px] mt-1 lg:text-[14px]">
                    To maximize the SME business industry by using our hardware
                    and software innovations and providing customer-focused
                    service. We accomplish this by attentively listening and
                    offering personalized solutions for our customer’s
                    individual needs while utilizing technological innovations.
                    While many software companies have come and gone, we have
                    successfully fostered relationships for almost a decade.
                  </h1>
                </div>
              </div>
              <div className="bg-blue-50 border  p-[32px] mt-5 lg:mt-0">
                <div className="w-[250px] h-[150px] sm:w-[400px] lg:w-[500px] lg:h-[200px]">
                  <h1 className="text-blue-500 font-extrabold text-[18px] lg:text-[22px]">
                    OUR VISION
                  </h1>

                  <h1 className="text-gray-500 font-extralight text-[12px] mt-1 lg:text-[14px]">
                    To empower people through our team of dedicated
                    professionals, who value customers, deliver our promises and
                    contribute to sustainable development.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
