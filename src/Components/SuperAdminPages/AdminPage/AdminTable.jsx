import { Button, Modal, Table } from "antd";
import { useState } from "react";
import { GoEye } from "react-icons/go";
import ViewAdminModel from "./ViewAdminModel";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import AddAdminModal from "../../Modal/Admin/AddAdminModal";
import { toast } from "sonner";
import { useDeleteAdminMutation } from "../../../redux/api/adminApi";
import EditAdminModal from "../../Modal/Admin/EditAdminModal";
// Sample data for the table

// Define the columns for the table

const AdminTable = ({ data, onPageChange, loading, meta }) => {
  const [deleteAdmin] = useDeleteAdminMutation();
  const [isViewEarningModalVisible, setIsViewEarningModalVisible] =
    useState(false);
  const [isAddAdmin, setisAddAdmin] = useState(false);
  const [isblock, setIsBLock] = useState(false);
  const [record, setRecord] = useState(null);

  const columns = [
    {
      title: "#UID",
      dataIndex: "_id",
      key: "_id",
      render: (text, _, index) => (
        <p>{index + 1 + meta?.limit * (meta?.currentPage - 1)}</p>
      ),
    },
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Category",
      dataIndex: "categoryPermissions",
      key: "categoryPermissions",
      render: (text) => <div>{text.join(",")}</div>,
    },
    {
      title: "Role",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <div>Sub Admin</div>,
    },
    {
      title: "Status",
      dataIndex: "active",
      key: "active",
      render: (text) => (
        <p className={` ${text ? "text-[#45AE68] " : "text-[#e21212] "}`}>
          {text ? "Active" : "Deactive"}
        </p>
      ),
    },
    {
      title: "ACTION",
      key: "action",
      render: (record) => (
        <div className="flex justify-center items-center gap-2">
          <Button
            className="!p-0"
            style={{
              background: "#FFFFFF",
              border: "none",
            }}
            onClick={() => {
              setisAddAdmin(true);
              setRecord(record);
            }}
          >
            <MdEdit style={{ fontSize: "24px" }} />
          </Button>
          <Button
            className="!p-0"
            style={{
              background: "#FFFFFF",
              border: "none",
            }}
            onClick={() => {
              setIsViewEarningModalVisible(true);
              setRecord(record);
            }}
          >
            <GoEye style={{ fontSize: "24px" }} />
          </Button>

          <Button
            className="!p-0"
            style={{
              background: "#FFFFFF",
              border: "none",
            }}
            onClick={() => {
              setIsBLock(true);
              setRecord(record);
            }}
          >
            <FaRegTrashAlt style={{ fontSize: "24px" }} />
          </Button>
        </div>
      ),
    },
  ];

  const handleDelete = async () => {
    const toastId = toast.loading("Admin is deleteing...");
    try {
      const res = await deleteAdmin(record?.userId);
      toast.success("Admin is deleted successfully", {
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

setIsBLock(false);
  };
  return (
    <div className="p-4">
      <Table
        columns={columns}
        dataSource={data} // Use the filtered data here based on selected company
        loading={loading}
        pagination={{
          current: meta?.currentPage,
          pageSize: meta?.limit,
          total: meta?.totalResults,
          onChange: onPageChange,
          showSizeChanger: true,
        }}
        className="custom-table"
        // scroll={{ x: true }}
      />
      <ViewAdminModel
        record={record}
        isViewEarningModalVisible={isViewEarningModalVisible}
        setIsViewEarningModalVisible={setIsViewEarningModalVisible}
      />
      <EditAdminModal
        record={record}
        isAddAdmin={isAddAdmin}
        setisAddAdmin={setisAddAdmin}
      />

      <Modal
        // title="Confirm Delete"
        open={isblock}
        onOk={() => setIsBLock(false)}
        onCancel={() => setIsBLock(false)}
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
              onClick={() => setIsBLock(false)}
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
              Block
            </Button>
          </div>
        }
      >
        <p className="text-3xl font-semibold pt-10 pb-4 text-center text-black">
          Do you want to block this Admin?
        </p>
      </Modal>
    </div>
  );
};

export default AdminTable;
