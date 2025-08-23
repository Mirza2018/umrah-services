import React from "react";
import EarningFromAccountCompany from "./EarningFromAccountCompany";
import CompanyLineChart from "./CompanyLineChart";

const CompanyEarning = () => {
  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p className="text-3xl  font-semibold">Earnings</p>
          <div className="flex gap-4 items-center"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-black w-56 text-white flex flex-col rounded justify-center items-center">
          <p className="text-lg font-semibold">YOUR TOTAL BALANCE</p>
          <p className="text-3xl">$ 55,000.00</p>
        </div>

        <div
          className="py-5 rounded-xl w-full"
          style={{ boxShadow: "0px 0px 5px 2px #00000040" }}
        >
          <div className="flex items-center gap-5 mb-5 mx-auto">
            <h1 className="text-3xl font-semibold">Earning ratio</h1>
            <div className="flex items-center gap-1">
              <div className="bg-[#19363D] w-4 h-4 rounded-full"></div>{" "}
              <p className="text-xl font-semibold">Passenger</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-[#B4B8BD] w-4 h-4 rounded-full"></div>{" "}
              <p className="text-xl font-semibold">Driver</p>
            </div>
            {/* <div className="flex items-center gap-1">
                  <div className="bg-[#559BAC] w-4 h-4 rounded-full"></div>{" "}
                  <p className="text-xl font-semibold">Driver</p>
                </div> */}
          </div>
          <CompanyLineChart />
        </div>
      </div>

      <main className="p-5">
        <EarningFromAccountCompany />
      </main>
    </div>
  );
};

export default CompanyEarning;
