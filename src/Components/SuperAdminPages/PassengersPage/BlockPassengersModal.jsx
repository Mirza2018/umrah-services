/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";
import { useUsersBanMutation, useUsersUnbanMutation } from "../../../redux/api/adminApi";
import { toast } from "sonner";

const BlockPassengersModal = ({
  isCompanyBlockModalVisible,
  handleCompanyBlock,
  handleCancel,
  currentCompanyRecord,
}) => {
    const [userBan] = useUsersBanMutation();
  const [userUnban] = useUsersUnbanMutation();
    const handleBan = async () => {
      const toastId = toast.loading("User is Baning");
      try {
        const res = await userBan(currentCompanyRecord?._id);
        toast.success("User is Ban successfully", {
          id: toastId,
          duration: 2000,
        });
        console.log(res);
        handleCancel(false);
      } catch (error) {
        toast.error("There is some Problem please try latter", {
          id: toastId,
          duration: 2000,
        });
        console.log(error);
        handleCancel(false);
      }
    };
    const handleUnBan = async () => {
      const toastId = toast.loading("User is Unbaning");
      try {
        const res = await userBan(currentCompanyRecord?._id);
        toast.success("User is Unban successfully", {
          id: toastId,
          duration: 2000,
        });
        console.log(res);
        handleCancel(false);
      } catch (error) {
        toast.error("There is some Problem please try latter", {
          id: toastId,
          duration: 2000,
        });
        console.log(error);
        handleCancel(false);
      }
    };
  return (
    <Modal
      // title="Confirm Delete"
      open={isCompanyBlockModalVisible}
      onOk={handleCompanyBlock}
      onCancel={handleCancel}
      okText="block"
      cancelText="Cancel"
      centered
      style={{ textAlign: "center" }}
      // styles.body={{ textAlign: "center" }}
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
            onClick={handleCancel}
            style={{
              marginRight: 12,
              background: "rgba(221, 221, 221, 1)",
            }}
          >
            Cancel
          </Button>
          {currentCompanyRecord?.isBan ? (
            <Button
              onClick={handleUnBan}
              className="text-xl py-5 px-8"
              type="primary"
              style={{ background: "#F5382C" }}
            >
              Unban
            </Button>
          ) : (
            <Button
              onClick={handleBan}
              className="text-xl py-5 px-8"
              type="primary"
              style={{ background: "#F5382C" }}
            >
              Ban
            </Button>
          )}

          {/* <Button
            className="text-xl py-5 px-8"
            type="primary"
            style={{ background: "#F5382C" }}
            onClick={() => handleCompanyBlock(currentCompanyRecord)}
          >
            Block
          </Button> */}
        </div>
      }
    >
      <p className="text-3xl font-semibold pt-10 pb-4">
        Do you want to {currentCompanyRecord?.isBan ? "Unban" : "Ban"} this
        Customer?
      </p>
    </Modal>
  );
};

export default BlockPassengersModal;
