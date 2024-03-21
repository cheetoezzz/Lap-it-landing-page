'use client'; //if naay framer motion mag gamit lang ug use client para mag work
import React, { useState } from 'react';
import { motion } from "framer-motion"



const Choice = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  
  return (
    <div className='flex justify-center mt-6 '>
      <div 
        onClick={() => setToggle(!toggle)}
        className={`relative flex h-[40px] w-[172px] cursor-pointer rounded-lg p-[1px] ${toggle ? "bg-blue-100 justify-start shadow-lg" : "bg-blue-100 justify-end shadow-lg"} `}>
        <div className="flex justify-between items-center h-full">
          <h1 className="absolute left-4 text-blue-600 font-bold">Monthly</h1>
          <h1 className="absolute right-4 text-blue-600 font-bold">Yearly</h1>
        </div>
        <motion.div 
          className={`absolute top-0 h-[40px] duration-100 transition-all w-[93px] rounded-lg bg-blue-600`}
          animate={{ left: toggle ? 0 : "50%" }}
          transition={{type:'just', stiffness:170, damping: 20,}}
          >
          <div className="flex justify-center items-center h-full text-white font-bold">
            {toggle ? "Monthly" : "Yearly"}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Choice;
