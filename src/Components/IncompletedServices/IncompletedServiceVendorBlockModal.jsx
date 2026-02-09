/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";

import { toast } from "sonner";
import { useVendorsBanMutation } from "../../redux/api/adminApi";

const IncompletedServiceVendorBlockModal = ({
  isCompanyBlockModalVisible,
  handleCompanyBlock,
  handleCancel,
  currentCompanyRecord,
}) => {
  const [userBan] = useVendorsBanMutation();

  const handleBan = async () => {
    const toastId = toast.loading("Vendor is Baning");
    try {
      const res = await userBan(currentCompanyRecord?.vendorId);
      toast.success("Vendor is Ban successfully", {
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
    const toastId = toast.loading("Vendor is Unbaning");
    try {
      const res = await userBan(currentCompanyRecord?.vendorId);
      toast.success("Vendor is Unban successfully", {
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
          {currentCompanyRecord?.vendorIsBan ? (
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
        </div>
      }
    >
      <p className="text-3xl font-semibold pt-10 pb-4">
        Do you want to {currentCompanyRecord?.vendorIsBan ? "Unban" : "Ban"}{" "}
        this Vendor?
      </p>
    </Modal>
  );
};

export default IncompletedServiceVendorBlockModal;
