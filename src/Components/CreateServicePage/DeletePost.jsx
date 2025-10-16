/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";
import { toast } from "sonner";
import { useDeleteCreateServiceMutation } from "../../redux/api/adminApi";

const DeletePost = ({ setIsDelete, isDelete, postValue }) => {
  const [userBan] = useDeleteCreateServiceMutation();
  const handleDelete = async () => {
    const toastId = toast.loading("Service type is deleteing...");
    try {
      const res = await userBan(postValue?._id);
      toast.success("Service type deleted successfully", {
        id: toastId,
        duration: 2000,
      });
      console.log(res);
      setIsDelete(false);
    } catch (error) {
      toast.error("There is some Problem, please try latter", {
        id: toastId,
        duration: 2000,
      });
      console.log(error);
      setIsDelete(false);
    }
  };
  return (
    <Modal
      title={""}
      open={isDelete}
      onCancel={() => setIsDelete(false)}
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
            onClick={() => setIsDelete(false)}
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
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      }
      centered
      style={{ textAlign: "center" }}
      className="lg:!w-[500px]"
    >
      <p className="text-3xl font-semibold pt-10 pb-4 text-center text-black">
        Do you want to Delete this Service?
      </p>
    </Modal>
  );
};

export default DeletePost;
