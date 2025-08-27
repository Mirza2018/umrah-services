import { AllIcons } from "../../../public/images/AllImages";
import PayoutsFromAccount from "../../Components/SuperAdminPages/PayoutsPage/PayoutsFromAccount";
import RefundsFromAccount from "../../Components/SuperAdminPages/RefundsPage/RefundsFromAccount";
 
const PayoutsRequest = () => {
  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p className="text-3xl  font-semibold">Payouts Request</p>
          <div className="flex gap-4 items-center"></div>
        </div>
      </div>
      <main className="p-5">
        {/* <section className="flex justify-center gap-5">
          <div className="text-lg font-normal bg-secondary-color  px-4 py-[14px] rounded-lg flex items-center text-white gap-4 w-fit">
            <LuArrowRightLeft className="text-xl" />
            <p className="text-lg ">Today’s Earning</p>
            <p className="text-2xl">$3230</p>
          </div>
          <div className="text-lg font-normal text-white  bg-secondary-color  px-4 py-[14px] rounded-lg flex items-center gap-4 w-fit">
            <LuArrowRightLeft className="text-xl" />
            <p className="text-lg ">All Earning</p>
            <p className="text-2xl">$3230</p>
          </div>
        </section> */}

        <PayoutsFromAccount />
      </main>
    </div>
  );
};

export default PayoutsRequest;
