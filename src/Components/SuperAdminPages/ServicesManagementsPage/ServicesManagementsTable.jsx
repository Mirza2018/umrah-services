import { Button, Table } from "antd";
import { useState } from "react";
import { GoEye } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import ViewServicesManagementsModel from "./ViewServicesManagementsModel";
import AddServiceModal from "../../Modal/Admin/AddServiceModal";
import EditServiceModal from "../../Modal/Admin/EditServiceModal";
// Sample data for the table

// Define the columns for the table

const ServicesManagementsTable = ({ data, loading, meta, onPageChange }) => {
  const [isViewEarningModalVisible, setIsViewEarningModalVisible] =
    useState(false);
  const [addService, setAddService] = useState(false);
  const [record, setRecord] = useState(null);

  const columns = [
    {
      title: "#UID",
      dataIndex: "slNumber",
      key: "slNumber",
      // render: (text, _, index) => (
      //   <p>{index + 1 + meta?.limit * (meta?.currentPage - 1)}</p>
      // ),
    },
    {
      title: "Service Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p className="capitalize">{text}</p>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text) => <p className="capitalize">{text}</p>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
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
              // setIsViewEarningModalVisible(true);
              setAddService(true);
              setRecord(record);
            }}
          >
            <MdEdit style={{ fontSize: "24px" }} />
          </Button>
          {/* <Button
            className="!p-0"
            style={{
              background: "#FFFFFF",
              border: "none",
            }}
            onClick={() => {
              setIsViewEarningModalVisible(true);
              record = { record };
            }}
          >
            <GoEye style={{ fontSize: "24px" }} />
          </Button> */}

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
            <FaRegTrashAlt style={{ color: "#CE0000", fontSize: "24px" }} />
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div className="p-4">
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{
          current: meta?.currentPage,
          pageSize: meta?.limit,
          total: meta?.totalResults,
          onChange: onPageChange,
          showSizeChanger: true,
        }}
        className="custom-table"
      />
      <ViewServicesManagementsModel
        record={record}
        isViewEarningModalVisible={isViewEarningModalVisible}
        setIsViewEarningModalVisible={setIsViewEarningModalVisible}
      />
      <EditServiceModal
        record={record}
        addService={addService}
        setAddService={setAddService}
      />
    </div>
  );
};

export default ServicesManagementsTable;
