/* eslint-disable react/prop-types */
import { Modal } from "antd";
import {
  AllImages,
  Person,
  RideshareIcon,
} from "../../../../public/images/AllImages";

const ViewWithdrawModal = ({
  isVenueViewModalVisible,
  handleCancel,
  currentVenueRecord,
  handleVenueBlock,
  showVenueBlockModal,
}) => {
  return (
    <Modal
      title={
        <div className="pt-7 text-center">
          <h2 className=" text-base font-normal mb-5">Wrihdraw Details</h2>
        </div>
      }
      open={isVenueViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      style={{ textAlign: "center" }}
      className="lg:!w-[700px]"
    >
      <div className="px-5 pb-5">
        <div className="">
          <div className="mt-2">
            <div className="text-lg ">
              <div className="flex justify-between border-b-2 pb-3">
                <div className="text-[#535763]">Owner Name:</div>
                <div>James Tracy</div>
              </div>
              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Driver Name:</div>
                <div>James Tracy</div>
              </div>
              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">E-mail</div>
                <div>abc@gmail.com</div>
              </div>

              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Owner Bank number:</div>
                <div>12345678</div>
              </div>

              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Driver Bank number:</div>
                <div>12345678</div>
              </div>

              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Balance:</div>
                <div>$475</div>
              </div>

              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Owner Commission:</div>
                <div>20%</div>
              </div>

              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Driver Commission:</div>
                <div>80%</div>
              </div>
              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Payment Method::</div>
                <div>Mon cash</div>
              </div>
              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Transaction Id:</div>
                <div>Tnx : 1111111111</div>
              </div>
              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Status</div>
                <div className="text-[#FB8A25]">Pending</div>
              </div>
            </div>

            <button
              // onClick={() => handleCompanyBlock(currentCompanyRecord)}
              className="bg-secondary-color text-primary-color py-4 text-xl font-semibold rounded-2xl mt-8 max-w-72 w-full"
            >
          Print
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewWithdrawModal;
