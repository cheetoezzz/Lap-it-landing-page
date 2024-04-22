import React from "react";

const BottomOfFooter = () => {
  return (
    <div className="bg-blue-700 ">
      <div className="flex flex-row items-center justify-center bg-blue-700 gap-7">
        <p className=" text-white font-bold mt-3">Lapit Solutions © 2024</p>
      </div>
      <div className="flex justify-center gap-5 text-[12px] mt-2">
      <h1 className=" text-white  "> Privacy Policy</h1>
      <h1 className=" text-white  ">Terms & Conditions</h1>
      </div>
    </div>
  );
};

export default BottomOfFooter;
