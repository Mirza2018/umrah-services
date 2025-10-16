/* eslint-disable react/prop-types */
import { Button, Modal, Tooltip } from "antd";
import { AllImages, Person } from "../../../../public/images/AllImages";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

const ViewPassengersModal = ({
  isCompanyViewModalVisible,
  handleCancel,
  currentCompanyRecord,
  handleCompanyBlock,
}) => {
  return (
    <Modal
      title={
        <div className="pt-7 text-center">
          <h2 className=" text-base font-normal mb-5">Customer Details</h2>
          <p className="w-full bg-[#FF9815] h-0.5 "></p>
        </div>
      }
      open={isCompanyViewModalVisible}
      onCancel={handleCancel}
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
            <div className="text-xl sm:text-2xl font-bold w-44">
              {currentCompanyRecord?.name}
            </div>
          </div> */}

          <div className="mt-2">
            <div className="text-lg ">
              <div className="flex justify-between border-b-2 border-[#FF9815] pb-3">
                <div className="text-[#535763]">Name</div>
                <div className="capitalize">{currentCompanyRecord?.fullName}</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Date of Birthday:</div>
                <div>{currentCompanyRecord?.dob?.split("T")[0]}</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">E-mail:</div>
                <div>{currentCompanyRecord?.email}</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Phone number:</div>
                <div>{currentCompanyRecord?.phoneNumber}</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">City:</div>
                <div className="capitalize">{currentCompanyRecord?.city}</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Country:</div>
                <div>{currentCompanyRecord?.country}</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Referral Code:</div>
                <div>{currentCompanyRecord?.referralCode}</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Gender:</div>
                <div>{currentCompanyRecord?.gender}</div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleCompanyBlock(currentCompanyRecord)}
          className="bg-secondary-color text-primary-color py-4 text-xl font-semibold rounded-2xl mt-8 max-w-72 w-full"
        >
          Block
        </button>
      </div>
    </Modal>
  );
};

export default ViewPassengersModal;
