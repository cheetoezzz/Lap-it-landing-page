import React from 'react'
import TableCard from './TableCard'
import PlanFeatures from './PlanFeatures';

const TableFeature = () => {

    const table = [
        {
          tbOne: "Easy to use",
          tbTwo: { icon: <img key="1" src="/check-circle-2.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Full cashiering process (Point of Sale)",
          tbTwo: { icon: <img key="1" src="/check-circle-2.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Detailed Inventory Management",
          tbTwo: { icon: <img key="1" src="/check-circle-2.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Detailed customer receipts with company logo",
          tbTwo: { icon: <img key="1" src="/check-circle-2.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Senior discount and PWD ",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "User Restriction",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Item list by category management ",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Stock-in / Stock-Out",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/check-circle-2.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "User group cashier salesman, waiter, etc,",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Customizable price discount",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Monitoring fast and slow-moving items",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Hourly, Daily, Monthly  Yearly sales report",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Touchscreen ready interface",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "X Z Reading ",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "End of Day",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Account Receivables",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Purchase Order ",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Variety of reports  ( Net Profit Sales Analytics Etc. ) ",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Simplified accounting reports can export to your acct. software",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Printable Reports ",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Exportable to Excel file ",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Ordering station-ready network",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Bar and kitchen printer network/wireless",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Printable Reports",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Multiple Cashiering ",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Weighing scale ready for meat-shops ",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Barcode and printer ready",
          tbTwo: { icon: <img key="1" src="/redX.png" alt="" /> },
          tbThree: { icon: <img key="2" src="/redX.png" alt="" /> },
          tbFour: { icon: <img key="3" src="/check-circle-2.png" alt="" /> },
        },
        {
          tbOne: "Network ready for multiple transactions",
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