/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { Person } from "../../../../public/images/AllImages";
import dayjs from "dayjs";

const ViewRefundsModel = ({
  setIsViewEarningModalVisible,
  isViewEarningModalVisible,
  record,
}) => {
console.log(record);

  return (
    <Modal
      title={
        <div className="pt-7 text-center">
          <h2 className=" text-2xl font-normal mb-5">Refund Order Details</h2>
          <p className="w-full bg-[#FF9815] h-0.5 "></p>
        </div>
      }
      open={isViewEarningModalVisible}
      onCancel={() => setIsViewEarningModalVisible(false)}
      footer={null}
      centered
      style={{ textAlign: "center" }}
      className="lg:!w-[500px]"
    >
      <div className="px-5 pb-5">
        <div className="">
  

          <div className="mt-2">
            <div className="text-lg ">
              <div className="flex justify-between  border-b-2 border-[#FF9815] pb-3">
                <div className="text-[#535763] ">Customer Name</div>
                <div className="capitalize">{record?.userName}</div>
              </div>

              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">E-mail:</div>
                <div>{record?.userEmail}</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Transaction Id:</div>
                <div>{record?.stripePaymentIntentId}</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Time & Date :</div>
                <div>{dayjs(record?.createdAt).format("DD-MM-YYYY")}</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Amount:</div>
                <div>$ {record?.amount}</div>
              </div>
      
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Service Title:</div>
                <div className="capitalize">{record?.serviceTitle}</div>
              </div>
            </div>
          </div>
          <div className="flex mt-8">
            <h1>Reason:</h1>
            <p>
              {record?.cancelReason}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewRefundsModel;
