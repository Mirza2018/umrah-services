/* eslint-disable react/prop-types */
import { Modal } from "antd";


const ViewServicesManagementsModel = ({
  setIsViewEarningModalVisible,
  isViewEarningModalVisible,
  record,
}) => {
  const currentCompanyRecord = {};
  return (
    <Modal
      title={
        <div className="pt-7 text-center">
          <h2 className=" text-2xl font-normal mb-5">Admin Details</h2>
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

          <div className="mt-2 pb-10">
            <div className="text-lg ">
              <div className="flex justify-between  border-b-2 border-[#FF9815] pb-3">
                <div className="text-[#535763] ">Name</div>
                <div>John Doe</div>
              </div>

              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">E-mail:</div>
                <div>abc@gmail.com</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Bank Account:</div>
                <div>12345678</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Category:</div>
                <div>Notification & Feedback</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Role:</div>
                <div>Admin</div>
              </div>
              <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
                <div className="text-[#535763]">Status</div>
                <div className="text-[#45AE68]">Active</div>
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

export default ViewServicesManagementsModel;
