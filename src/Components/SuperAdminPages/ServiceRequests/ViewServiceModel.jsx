/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { Person, RideshareIcon } from "../../../../public/images/AllImages";
import { Link } from "react-router-dom";

const ViewServiceModel = ({
  setIsViewEarningModalVisible,
  isViewEarningModalVisible,
  record,
}) => {
  const currentCompanyRecord = {};
  return (
    <Modal
      title={
        <div className="pt-7 text-center">
          <h2 className=" text-3xl font-medium mb-5">Request Details</h2>
          {/* <p className="w-full bg-[#FF9815] h-0.5 "></p> */}
        </div>
      }
      open={isViewEarningModalVisible}
      onCancel={() => setIsViewEarningModalVisible(false)}
      footer={null}
      centered
      style={{ textAlign: "center" }}
      className="lg:!w-[700px]"
    >
      <div className="px-5 pb-5">
        <div className="container mx-10">
          <div className="flex  justify-start items-center gap-2 mx-5 mb-4">
            <img src={Person.samplePerson} className="w-20" alt="" />
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-xl font-semibold">
                Name:{record?.vendorsName}
              </h1>
              <h1 className="text-xl font-semibold">Email:{record?.email}</h1>
            </div>
          </div>

          <div className="flex flex-col justify-start  gap-9">
            <div className="">
              <div className="mt-2">
                <h2 className="font-medium text-lg mb-5 text-start">Details</h2>

                <div className="text-start ">
                  <div className="  flex  justify-start items-start  gap-2  ">
                    <h1 className="">Post Title</h1>
                    <p className="text-[#535763]">
                      Trusted Badal Umrah Packages
                    </p>
                  </div>
                  <div className="  flex  justify-start items-start  gap-2  ">
                    <h1 className="">Price:</h1>
                    <p className="text-[#535763]"> $100</p>
                  </div>

                  <div className="  flex  justify-start items-start  gap-2  ">
                    <h1 className="">Start Date:</h1>
                    <p className="text-[#535763]">
                      {" "}
                      07-01-2025 / End Date: 07-01-2026
                    </p>
                  </div>
                  <div className="  flex  justify-start items-start  gap-2  ">
                    <h1 className="">package included:</h1>
                    <p className="text-[#535763]">
                      We have designed the economy Umrah packages including the
                      listed facilities below:
                    </p>
                  </div>
                  <div className="  flex  justify-start items-start  gap-2  ">
                    <h1 className="">Description: </h1>
                    <p className="text-[#535763]">
                      Easily book your Hajj pilgrimage with trusted service
                      providers. Choose from a range of packages, secure your
                    </p>
                  </div>
                  <h1 className="text-lg font-medium my-5">Availability </h1>
                  <div className="  flex  justify-start items-start  gap-2  ">
                    <h1 className=""> Set date : </h1>
                    <p className="text-[#535763]">
                      01-01-2025, 02-01-2025, 03-01-2025
                    </p>
                  </div>
                  <div className="  flex  justify-start items-start  gap-2  ">
                    <h1 className=""> Set Time : </h1>
                    <p className="text-[#535763]"> 07.12 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div> </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <button
            onClick={() => setIsViewEarningModalVisible(false)}
            className="font-semibold text-base rounded-md border border-secondary-color text-secondary-color  px-3 py-2 hover:scale-105 transition delay-100 "
          >
            Delete
          </button>
          {/* <Link to={`accepted`}> */}
          <button
            onClick={() => setIsViewEarningModalVisible(false)}
            className="font-semibold text-base bg-secondary-color rounded-md text-white px-3 py-2  hover:scale-105 transition delay-100  text-nowrap
                          "
          >
            Accept
          </button>
          {/* </Link> */}
        </div>
      </div>
    </Modal>
  );
};

export default ViewServiceModel;
