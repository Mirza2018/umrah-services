/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { Person } from "../../../../public/images/AllImages";

const ViewContactsModel = ({
  setIsViewEarningModalVisible,
  isViewEarningModalVisible,
  record,
}) => {
  const currentCompanyRecord = {};
  return (
    <Modal
      title={
        <div className="pt-7 text-center">
          <h2 className=" text-2xl font-normal mb-5">Details</h2>
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
                <div className="text-[#535763] ">Name:</div>
                <div>Enrique</div>
              </div>

              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">E-mail:</div>
                <div>abc@gmail.com</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Role:</div>
                <div>Customar</div>
              </div>

              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Status:</div>
                <div className="text-[#EAB90A]">Pending</div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h1>
              Reason: Recipient not available at the estimated time/day of
              delivery. Please refund my money
            </h1>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewContactsModel;
