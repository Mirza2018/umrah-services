/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";
import { toast } from "sonner";
import { useDeleteBannerMutation } from "../../../redux/api/adminApi";

const DeleteBanner = ({ setIsOpen, isOpen, record }) => {
  const [deleteBanner] = useDeleteBannerMutation();
  const handleDelete = async () => {
    const toastId = toast.loading("Banner is deleteing...");
    const data = {
      image: record,
    };
    try {
      const res = await deleteBanner({ id: record, data: data });
      toast.success("Banner is deleted successfully", {
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
    setIsOpen(false);
  };

  return (
    <Modal
      // title="Confirm Delete"
      open={isOpen}
      onOk={() => setIsOpen(false)}
      onCancel={() => setIsOpen(false)}
      okText="block"
      cancelText="Cancel"
      centered
      style={{ textAlign: "center" }}
      // styles.body={{ textAlign: "center" }}
      width={400}
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
            onClick={() => setIsOpen(false)}
            style={{
              marginRight: 12,
              background: "rgba(221, 221, 221, 1)",
            }}
          >
            No
          </Button>
          {/* <Button
            className="text-xl py-5 px-8"
            type="primary"
            style={{ background: "#CE0000" }}
            onClick={() => handleVenueBlock(currentVenueRecord)}
          >
            Block
          </Button> */}

          <Button
            onClick={handleDelete}
            className="text-xl py-5 px-8"
            type="primary"
            style={{ background: "#F5382C" }}
          >
            Yes
          </Button>
        </div>
      }
    >
      <p className="text-3xl font-semibold pt-10 pb-4 text-center text-black">
        Do you want to Delete this Banner?
      </p>
    </Modal>
  );
};

export default DeleteBanner;
