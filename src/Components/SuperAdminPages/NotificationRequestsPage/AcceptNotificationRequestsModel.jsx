/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";
import { Person } from "../../../../public/images/AllImages";

const AcceptNotificationRequestsModel = ({
  setIsAccept,
  isAccept,
  record,
}) => {
  const currentCompanyRecord = {};
  return (
    <Modal
      // title={
      //   <div className="pt-7 text-center">
      //     <h2 className=" text-2xl font-normal mb-5">Payout Details</h2>
      //     <p className="w-full bg-[#FF9815] h-0.5 "></p>
      //   </div>
      // }
      open={isAccept}
      onCancel={() => setIsAccept(false)}
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
            onClick={() => setIsAccept(false)}
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
            style={{ background: "#008000" }}
            onClick={() => setIsAccept(false)}
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
        Do you want to Accept this Notification?
      </p>
    </Modal>
  );
};

export default AcceptNotificationRequestsModel;
