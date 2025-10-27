/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";
import { Person } from "../../../../public/images/AllImages";
import { useApproveNotificationMutation } from "../../../redux/api/adminApi";
import { toast } from "sonner";

const RejectNotificationRequestsModel = ({ setIsReject, isReject, record }) => {
  const [acceptRequest] = useApproveNotificationMutation();

  const onFinish = async () => {
    const toastId = toast.loading("Notification Request is rejecting...");
    const data = {
      action: "reject",
    };
    //   return
    try {
      const res = await acceptRequest({ data: data, id: record?._id }).unwrap();
      toast.success("Notification Request rejected successfully", {
        id: toastId,
        duration: 2000,
      });

      setIsReject(false);
      // navigate(`/${userRole?.role}/vendors-request`);
    } catch (error) {
      toast.error(
        error?.data?.message || "There was a problem, please try later",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };
  return (
    <Modal
      // title={
      //   <div className="pt-7 text-center">
      //     <h2 className=" text-2xl font-normal mb-5">Payout Details</h2>
      //     <p className="w-full bg-[#FF9815] h-0.5 "></p>
      //   </div>
      // }
      open={isReject}
      onCancel={() => setIsReject(false)}
      footer={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "40px",
            marginTop: "30px",
          }}
        >
          <Button
            className="text-xl py-5 px-8 !text-black font-medium"
            type="primary"
            onClick={() => setIsReject(false)}
            style={{
              marginRight: 12,
              background: "rgba(221, 221, 221, 1)",
            }}
          >
            Cancel
          </Button>
          <Button
            className="text-xl py-5 px-8"
            type="primary"
            style={{ background: "#F5382C" }}
            onClick={onFinish}
          >
            Yes
          </Button>
        </div>
      }
      centered
      style={{ textAlign: "center" }}
      className="lg:!w-[500px]"
    >
      <p className="text-3xl font-semibold pt-10 pb-4">
        Do you want to Reject this Notification?
      </p>
    </Modal>
  );
};

export default RejectNotificationRequestsModel;
