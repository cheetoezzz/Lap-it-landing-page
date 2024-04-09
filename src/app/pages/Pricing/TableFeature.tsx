import React from 'react'
import TableCard from './TableCard'

const TableFeature = () => {

    const table = [
        {
          tbOne: "Lorem ipsum dolor sit",
          tbTwo: { icon: <img key="1" src="/check-green.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-green.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-green.png" alt="" /> },
        },
        {
          tbOne: "Euismod gravida ultricies",
          tbTwo: { icon: <img key="1" src="/check-green.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-green.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-green.png" alt="" /> },
        },
        {
          tbOne: "Potenti tempor congue",
          tbTwo: { icon: <img key="1" src="/check-green.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-green.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-green.png" alt="" /> },
        },
      ];
      

      return (
        <div className='bg-blue-50'>
        <section className=" pt-16 flex justify-center">
          <div className="flex flex-col ">
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