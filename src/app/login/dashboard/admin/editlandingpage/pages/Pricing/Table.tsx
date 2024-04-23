'use client'



const PriceTable = () => {



  return (
    <div className=" flex justify-center items-center">
    <table className=" border border-blue-300 w-full">
      <tbody>
        <tr>
          <td className="border border-blue-300 px-4 py-2 font-bold text-[16px] " style={{ width: "650px", height: "56px" }}></td>
          <td className="border border-blue-300 px-4 py-2" style={{ width: "350px" }}>
            <div className="flex justify-center items-center">

            </div>
          </td>
          <td className="border border-blue-300 px-4 py-2" style={{ width: "350px", height: "56px" }}>
            <div className="flex justify-center items-center">

            </div>
          </td>
          <td className="border border-blue-300 px-4 py-2" style={{ width: "350px", height: "56px" }}>
            <div className="flex justify-center items-center">

            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default PriceTable;

