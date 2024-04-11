import React from "react";

interface CardProps {
  tbOne?: string;
  tbTwo?: { icon: JSX.Element } | string; // Allow string for single icon
  tbThree?: { icon: JSX.Element } | string;
  tbFour?: { icon: JSX.Element } | string;
  icons?: { icon: JSX.Element }[];
}

const TableCard = ({ tbOne, tbTwo, tbThree, tbFour, icons }: CardProps) => {
  return (
    <div className=" flex justify-center items-center">
  <table className=" border border-blue-300 w-full">  
    <tbody>
      <tr>
        <td className="border border-blue-300 px-4 py-2 font-bold text-[16px] " style={{ width: "650px", height:"56px" }}>{tbOne}</td>
        <td className="border border-blue-300 px-4 py-2" style={{ width: "350px" }}>
          <div className="flex justify-center items-center">
            {typeof tbTwo === 'object' ? tbTwo.icon : tbTwo}
          </div>
        </td>
        <td className="border border-blue-300 px-4 py-2" style={{ width: "350px", height:"56px" }}>
          <div className="flex justify-center items-center">
            {typeof tbThree === 'object' ? tbThree.icon : tbThree}
          </div>
        </td>
        <td className="border border-blue-300 px-4 py-2" style={{ width: "350px", height:"56px" }}>
          <div className="flex justify-center items-center">
            {typeof tbFour === 'object' ? tbFour.icon : tbFour}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
  );
};

export default TableCard;