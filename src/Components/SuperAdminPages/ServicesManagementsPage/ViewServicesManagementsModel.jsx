/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";


const ViewServicesManagementsModel = ({
  setIsViewEarningModalVisible,
  isViewEarningModalVisible,
  record,
}) => {
  const currentCompanyRecord = {};
  return (
    <Modal
      title={""}
      open={isViewEarningModalVisible}
      onCancel={() => setIsViewEarningModalVisible(false)}
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
            onClick={() => setIsViewEarningModalVisible(false)}
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
            style={{ background: "#CE0000" }}
            onClick={() => setIsViewEarningModalVisible(false)}
          >
            Block
          </Button>
        </div>
      }
      centered
      style={{ textAlign: "center" }}
      className="lg:!w-[500px]"
    >
      <p className="text-3xl font-semibold pt-10 pb-4 text-center text-black">
        Do you want to block this Service?
      </p>
    </Modal>
  );
};

export default ViewServicesManagementsModel;
