/* eslint-disable react/prop-types */
import { ConfigProvider, Modal } from "antd";
import { toast } from "sonner";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useDeleteVendorRequestMutation } from "../../redux/api/adminApi";

const DeleteVendorRequest = ({ isDeleted, setIsDeleted, driverData, sID }) => {
  const [deleteVendorRequest] = useDeleteVendorRequestMutation();
  const token = useSelector((state) => state.auth?.accessToken);
  const userRole = jwtDecode(token);
  const navigate = useNavigate();

  const onFinish = async () => {
    const toastId = toast.loading("Vendor Request is deleting...");

    //   return
    try {
      const res = await deleteVendorRequest({ driverData, sID }).unwrap();
      toast.success("Vendor Request deleted successfully", {
        id: toastId,
        duration: 2000,
      });

      setIsDeleted(false);
      navigate(`/${userRole?.role}/vendors-request`);
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
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "#E8EBEC",
            headerBg: "#E8EBEC",
          },
        },
      }}
    >
      <Modal
        open={isDeleted}
        onCancel={() => setIsDeleted(false)}
        footer={[]}
        centered
        style={{ textAlign: "center" }}
        className=""
      >
        <div className="p-10">
          <h1 className="text-2xl font-medium">
            Do you want to delete this Vendor Request?
          </h1>
          <div className="flex justify-center gap-5 mt-8">
            <button
              className="bg-green-500 text-white px-10 py-1 rounded-md text-xl"
              onClick={onFinish}
            >
              Yes
            </button>
            <button
              className="bg-red-500 text-white px-10 py-1 rounded-md text-xl"
              onClick={() => setIsDeleted(false)}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default DeleteVendorRequest;
