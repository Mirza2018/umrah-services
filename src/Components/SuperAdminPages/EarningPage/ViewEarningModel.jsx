/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { Person } from "../../../../public/images/AllImages";
import dayjs from "dayjs";

const ViewEarningModel = ({
  setIsViewEarningModalVisible,
  isViewEarningModalVisible,
  record,
}) => {
  const currentCompanyRecord = {};
  return (
    <Modal
      title={
        <div className="pt-7 text-center"> 
          <h2 className=" text-2xl font-normal mb-5">
            Customer payment details
          </h2>
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
          {/* <div className="flex justify-center items-center p-4">
  
            <img 
              src={Person.passengerPic}
              alt={currentCompanyRecord?.companyName}
              className="w-12 h-12 sm:w-16  sm:h-16 rounded-full mr-4"
            />
            <div className="text-xl sm:text-2xl font-bold w-44">John Doe</div>
          </div> */}

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
                <div className="text-[#535763]">Commission:</div>
                <div>{record?.commission}</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Commission Type:</div>
                <div>{record?.commissionType}</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Service Title:</div>
                <div className="capitalize">{record?.serviceTitle}</div>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          onClick={() => setIsViewEarningModalVisible(false)}
          className="bg-secondary-color text-primary-color py-3 text-xl font-semibold rounded-lg mt-8 w-full"
        >
          Block
        </button> */}
      </div>
    </Modal>
  );
};

export default ViewEarningModel;
