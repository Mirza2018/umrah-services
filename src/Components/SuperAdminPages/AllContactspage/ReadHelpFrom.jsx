/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";
import { useActionFeedbackMutation, useReadSupportMutation } from "../../../redux/api/adminApi";
import { toast } from "sonner";

const ReadHelpFrom = ({
  isContract,
  setIsContract,
  record,
}) => {
  const [readSupport] = useReadSupportMutation();

  const handleAction = async () => {
    const toastId = toast.loading(
      `Support message is making ${record?.isRead ? "unread" : "read"}...`
    );
    try {
      const res = await readSupport(record?._id);
      toast.success(
        `support message has been successfully ${record?.isRead ? "unread" : "read"}.`,
        {
          id: toastId,
          duration: 2000,
        }
      );
      console.log(res);
    } catch (error) {
      toast.error("There is some Problem please try latter", {
        id: toastId,
        duration: 2000,
      });
      console.log(error);
    }

    setIsContract(false);
  };
  return (
    <Modal
      // title="Confirm Delete"
      open={isContract}
      onOk={() => setIsContract(false)}
      onCancel={() => setIsContract(false)}
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
            onClick={() => setIsContract(false)}
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
            onClick={handleAction}
          >
            Yes
          </Button>
        </div>
      }
    >
      <p className="text-3xl font-semibold pt-10 pb-4">
        Do you want to mark this message as {record?.isRead ? "unread" : "read"}?
      </p>
    </Modal>
  );
};

export default ReadHelpFrom;
