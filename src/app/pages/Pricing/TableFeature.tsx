import React from 'react'
import TableCard from './TableCard'
import PlanFeatures from './PlanFeatures';

const TableFeature = () => {

    const table = [
        {
          tbOne: "Lorem ipsum dolor sit",
          tbTwo: { icon: <img key="1" src="/check-circle-2.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Euismod gravida ultricies",
          tbTwo: { icon: <img key="1" src="/check-circle-2.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Potenti tempor congue",
          tbTwo: { icon: <img key="1" src="/check-circle-2.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Potenti tempor congue",
          tbTwo: { icon: <img key="1" src="/check-circle-2.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: " Aliquam non id id imperdiet netus",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Condimentum eros dignissim commodo",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Lorem ipsum dolor sit amet consectetur",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Sit amet consectetur.",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: " Fringilla vulputate lectus sed",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: " Turpis velit tristique varius",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: " Dapibus purus placerat est nunc maecenas.",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: " Lorem ipsum dolor sit amet",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: " Dolor sit amet",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },

      ];
      

      return (
        <div className='bg-blue-50'>
        <section className=" pt-3 pb-16 flex justify-center">
          <div className="flex flex-col ">
          <PlanFeatures/>
            {table.map((card, index) => (
              <div className="flex-grow flex-shrink-0" key={index}>
                <TableCard
                  tbOne={card.tbOne}
                  tbTwo={card.tbTwo}
                  tbThree={card.tbThree}
                  tbFour={card.tbFour}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default TableFeature;