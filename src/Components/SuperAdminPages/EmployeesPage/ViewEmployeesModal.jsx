/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { AllImages, Person } from "../../../../public/images/AllImages";

const ViewEmployeesModal = ({
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
          <h2 className=" text-4xl ">Employ Details</h2>
          <p className="text-[#989898] mt-3 text-xl">
            See all details about {currentVenueRecord?.Name}
          </p>
        </div>
      }
      open={isVenueViewModalVisible}
      onCancel={handleCancel}
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
              alt={currentVenueRecord?.companyName}
              className="w-12 h-12 sm:w-16  sm:h-16 rounded-lg mr-4"
            />
            <div className="text-xl sm:text-2xl font-bold w-44">
              {currentVenueRecord?.Name}
            </div>
          </div>

          <div className="mt-2">
            <h2 className=" font-semibold text-2xl mb-5">
              Passengers Information
            </h2>
            <div className="text-lg w-[90%] mx-auto">
              <div className="sm:flex gap-1 sm:gap-2 mb-2">
                <div className="font-bold">Name:</div>
                <div>{currentVenueRecord?.Name}</div>
              </div>
              <div className="sm:flex gap-1 sm:gap-2 mb-2">
                <div className="font-bold">Phone:</div>
                <div>{currentVenueRecord?.Phone}</div>
              </div>
              <div className="sm:flex gap-1 sm:gap-2 mb-2">
                <div className="font-bold">Email:</div>
                <div>{currentVenueRecord?.Email}</div>
              </div>
              <div className="sm:flex gap-1 sm:gap-2 mb-2">
                <div className="font-bold">Location:</div>
                <div>Avenida Cervantes 5, Elantxobe, Biscay, 48310.</div>
              </div>
             
            </div>
          </div>
        </div>
        <button
          onClick={() => (
            handleVenueBlock(currentVenueRecord), showVenueBlockModal()
          )}
          className="bg-secondary-color text-primary-color py-3 text-xl font-semibold rounded-lg mt-8 w-full"
        >
          Block
        </button>
      </div>
    </Modal>
  );
};
  
export default ViewEmployeesModal;
