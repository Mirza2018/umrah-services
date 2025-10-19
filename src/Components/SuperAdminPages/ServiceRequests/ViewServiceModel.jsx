/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { Person, RideshareIcon } from "../../../../public/images/AllImages";
import { Link } from "react-router-dom";
import {
  useAcceptervicesRequestMutation,
  useRejectServicesRequestMutation,
  useServicesRequestDetailsQuery,
} from "../../../redux/api/adminApi";
import { getImageUrl } from "../../../redux/getBaseUrl";
import dayjs from "dayjs";
import { toast } from "sonner";

const ViewServiceModel = ({
  setIsViewEarningModalVisible,
  isViewEarningModalVisible,
  record,
}) => {
  const { data, isLoading } = useServicesRequestDetailsQuery(record?._id);
  const user = data?.data?.attributes[0];
  const [acceptervicesRequest] = useAcceptervicesRequestMutation();
  const [rejectServicesRequest] = useRejectServicesRequestMutation();

  const handleAccept = async () => {
    const toastId = toast.loading("Service request is accepting...");
    try {
      const res = await acceptervicesRequest(record?._id);
      toast.success("Service request is accept successfully", {
        id: toastId,
        duration: 2000,
      });
      console.log(res);
    } catch (error) {
      toast.error("There is some Problem please try latter", {
        id: toastId,
        duration: 2000,
      });
      console.log(error);
    }

    setIsViewEarningModalVisible(false);
  };
  const handleReject = async () => {
    const toastId = toast.loading("Service request is rejecting...");
    try {
      const res = await acceptervicesRequest(record?._id);
      toast.success("Service request is reject successfully", {
        id: toastId,
        duration: 2000,
      });
      console.log(res);
    } catch (error) {
      toast.error("There is some Problem please try latter", {
        id: toastId,
        duration: 2000,
      });
      console.log(error);
    }

    setIsViewEarningModalVisible(false);
  };

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
            <img
              src={getImageUrl() + user?.vendorImage}
              className="w-20"
              alt=""
            />
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-xl font-semibold">
                Name: {user?.vendorName}
              </h1>
              <h1 className="text-xl font-semibold">
                Email: {user?.vendorEmail}
              </h1>
            </div>
          </div>

          <div className="flex flex-col justify-start  gap-9">
            <div className="">
              <div className="mt-2">
                <h2 className="font-medium text-lg mb-5 text-start">Details</h2>

                <div className="text-start ">
                  <div className="  flex  justify-start items-start  gap-2  ">
                    <h1 className="">Post Title</h1>
                    <p className="text-[#535763]">{user?.postTitle}</p>
                  </div>
                  <div className="  flex  justify-start items-start  gap-2  ">
                    <h1 className="">Price:</h1>
                    <p className="text-[#535763]">$ {user?.price}</p>
                  </div>

                  <div className="  flex  justify-start items-start  gap-2  ">
                    <h1 className="">Start Date:</h1>
                    <p className="text-[#535763]">
                      {" "}
                      {dayjs(user?.startDate).format("YYYY-MM-DD")}
                    </p>
                  </div>
                  <div className="  flex  justify-start items-start  gap-2  ">
                    <h1 className=""> End Date:</h1>
                    <p className="text-[#535763]">
                      {"   "}
                      {dayjs(user?.endDate).format("YYYY-MM-DD")}
                    </p>
                  </div>
                  <div className="  flex  justify-start items-start  gap-2  ">
                    <h1 className="">package included:</h1>
                    <div className="flex flex-col ">
                      {user?.facilities?.map((f, index) => (
                        <p key={index} className="text-[#535763]">
                          {` ${index + 1} )
                        ${f} .`}
                        </p>
                      ))}
                    </div>
                    {/* <p className="text-[#535763]">
                      We have designed the economy Umrah packages including the
                      listed facilities below:
                    </p> */}
                  </div>
                  <div className="  flex  justify-start items-start  gap-2  ">
                    <h1 className="">Description: </h1>
                    <p className="text-[#535763]">{user?.packageDesc}</p>
                  </div>
                  <h1 className="text-lg font-medium my-5">Availability </h1>
                  <div className="  flex  justify-start items-start  gap-2  ">
                    <h1 className=""> Set date : </h1>
                    {/* <p className="text-[#535763]">
                      01-01-2025, 02-01-2025, 03-01-2025
                    </p> */}
                    <div className="flex flex-col gap-1 font-medium">
                      {user?.availability?.map((availabe, index) => (
                        <p className="text-[#535763]" key={availabe?.date}>
                          {`${index + 1}) ${dayjs(availabe?.date).format(
                            "YYYY-MM-DD"
                          )}`}
                        </p>
                      ))}
                    </div>
                  </div>
                  {/* <div className="  flex  justify-start items-start  gap-2  ">
                    <h1 className=""> Set Time : </h1>
                    <p className="text-[#535763]"> 07.12 PM</p>
                  </div> */}
                </div>
              </div>
            </div>
            <div> </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <button
            onClick={handleReject}
            className="font-semibold text-base rounded-md border border-secondary-color text-secondary-color  px-3 py-2 hover:scale-105 transition delay-100 "
          >
            Delete
          </button>
          {/* <Link to={`accepted`}> */}
          <button
            onClick={handleAccept}
            className="font-semibold text-base bg-secondary-color rounded-md text-white px-3 py-2  hover:scale-105 transition delay-100  text-nowrap"
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
