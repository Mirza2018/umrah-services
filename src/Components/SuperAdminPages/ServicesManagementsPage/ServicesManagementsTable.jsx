import { Button, Table } from "antd";
import { useState } from "react";
import { GoEye } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import ViewServicesManagementsModel from "./ViewServicesManagementsModel";
import AddServiceModal from "../../Modal/Admin/AddServiceModal";
// Sample data for the table
const data = Array.from({ length: 8 }, (_, index) => ({
  key: (index + 1).toString(),
  slNumber: "#1234",
  name: "Umrah Badal",
  type: "Flat Amount",
  amount: "$100",
}));

// Define the columns for the table



const ServicesManagementsTable = () => {
  const [isViewEarningModalVisible, setIsViewEarningModalVisible] =
    useState(false);
      const [addService, setAddService] = useState(false);
  const [record, setRecord] = useState(null);

  const columns = [
    {
      title: "#UID",
      dataIndex: "slNumber",
      key: "slNumber",
    },
    {
      title: "Service Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
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
              setAddService(true)
              record = { record };
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
              record = { record };
            }}
          >
            <FaRegTrashAlt style={{ fontSize: "24px" }} />
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
        pagination={{
          pageSize: 8,
          total: 250, // Total number of items
          showSizeChanger: true,
          pageSizeOptions: ["8", "60", "120"],
          defaultCurrent: 1,
          showTotal: (total, range) =>
            `SHOWING ${range[0]}-${range[1]} OF ${total}`,
        }}
        className="custom-table"
      />
      <ViewServicesManagementsModel
        record={record}
        isViewEarningModalVisible={isViewEarningModalVisible}
        setIsViewEarningModalVisible={setIsViewEarningModalVisible}
      />
      <AddServiceModal addService={addService} setAddService={setAddService} />
    </div>
  );
};

export default ServicesManagementsTable;
