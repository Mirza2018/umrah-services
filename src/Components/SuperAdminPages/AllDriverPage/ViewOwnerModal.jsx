/* eslint-disable react/prop-types */
import { Modal } from "antd";
import {
  AllImages,
  Person,
  RideshareIcon,
} from "../../../../public/images/AllImages";
import { fladImages } from "../../../../public/images/Flad/FladImages";

const ViewOwnerModal = ({ 
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
          <h2 className=" text-lg font-normal mb-5">Vendors Details</h2>
          <p className="w-full bg-[#FF9815] h-0.5 "></p>
        </div>
      }
      open={isVenueViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      style={{ textAlign: "center" }}
      className="lg:!w-[700px]"
    >
      <div className="mt-2">
        <div className="text-lg ">
          <div className="flex justify-between border-b-2 border-[#FF9815] pb-3">
            <div className="text-[#535763]">Name</div>
            <div>{currentVenueRecord?.customerName}</div>
          </div>
          <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
            <div className="text-[#535763]">Date of Birthday:</div>
            <div>{currentVenueRecord?.dob}</div>
          </div>
          <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
            <div className="text-[#535763]">E-mail:</div>
            <div>{currentVenueRecord?.email}</div>
          </div>
          <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
            <div className="text-[#535763]">Phone number:</div>
            <div>{currentVenueRecord?.phone}</div>
          </div>
          <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
            <div className="text-[#535763]">City:</div>
            <div>{currentVenueRecord?.city}</div>
          </div>
          <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
            <div className="text-[#535763]">Country:</div>
            <div>{currentVenueRecord?.country}</div>
          </div>
          <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
            <div className="text-[#535763]">Service type:</div>
            <div>{currentVenueRecord?.serviceType }</div>
          </div>
          <div className="flex justify-between border-b-2 mb-5 border-[#FF9815] py-3">
            <div className="text-[#535763]">Referral Code:</div>
            <div>{currentVenueRecord?.referralCode}</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewOwnerModal;
