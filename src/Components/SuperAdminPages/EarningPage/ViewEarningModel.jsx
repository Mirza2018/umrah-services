/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { Person } from "../../../../public/images/AllImages";


const ViewEarningModel = ({
  setIsViewEarningModalVisible,
  isViewEarningModalVisible,
  record,
}) => {
  const currentCompanyRecord={}
  return (
    <Modal
      title={
        <div className="pt-7 text-center">
          <h2 className=" text-base font-normal mb-5">User payment details</h2>
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
          <div className="flex justify-center items-center p-4">
            {/* Avatar */}
            <img
              src={Person.passengerPic}
              alt={currentCompanyRecord?.companyName}
              className="w-12 h-12 sm:w-16  sm:h-16 rounded-full mr-4"
            />
            <div className="text-xl sm:text-2xl font-bold w-44">John Doe</div>
          </div>

          <div className="mt-2">
            <div className="text-lg ">
              <div className="flex justify-between border-b-2 pb-3">
                <div className="text-[#535763]">User Name</div>
                <div>John Doe</div>
              </div>

              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Email:</div>
                <div>abc@gmail.com</div>
              </div>
              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Bank Account:</div>
                <div>12345678</div>
              </div>
              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Time & Date :</div>
                <div>4:15 PM, 13/02/24</div>
              </div>
              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Amount:</div>
                <div>$10</div>
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
