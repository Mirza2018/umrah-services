/* eslint-disable react/prop-types */
import { Button, Modal, Tooltip } from "antd";
import { AllImages, Person } from "../../../../public/images/AllImages";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ViewFeedbackModal = ({
  isCompanyViewModalVisible,
  handleCancel,
  currentCompanyRecord,
  handleCompanyBlock,
}) => {
  return (
    <Modal
      title={
        <div className="pt-7 text-center">
          <h2 className=" text-base font-normal mb-5">Customer Feedback</h2>
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
                <div className="text-[#535763]">User Name:</div>
                <div>Enrique</div>
              </div>

              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">E-mail:</div>
                <div>abc@gmail.com</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Date:</div>
                <div>24-01-2023</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Rating:</div>
                <div className="flex justify-center items-center gap-1">
                  <FaStar className="text-orange-400" />
                  4.8
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 justify-start mt-4">
          <h1>Review: Best service in the world and very nice guy.</h1>
          <div className="flex justify-center items-center gap-2 w-full">
            <img
              src={AllImages.umra1}
              className="w-20 aspect-square rounded-md object-contain"
              alt=""
            />
            <img
              src={AllImages.umra2}
              className="w-20 aspect-square rounded-md object-contain"
              alt=""
            />
            <img
              src={AllImages.umra3}
              className="w-20 aspect-square rounded-md object-contain"
              alt=""
            />
          </div>
        </div>
        {/* <button
          onClick={() => handleCompanyBlock(currentCompanyRecord)}
          className="bg-secondary-color text-primary-color py-4 text-xl font-semibold rounded-2xl mt-8 max-w-72 w-full"
        >
          Block
        </button> */}
      </div>
    </Modal>
  );
};

export default ViewFeedbackModal;
