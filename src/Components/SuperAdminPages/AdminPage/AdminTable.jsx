import { Button, Table } from "antd";
import { useState } from "react";
import { GoEye } from "react-icons/go";
import ViewAdminModel from "./ViewAdminModel";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
// Sample data for the table
const data = Array.from({ length: 8 }, (_, index) => ({
  key: (index + 1).toString(),
  slNumber: "#1234",
  name: "John Doe",
  email: "abc@gmail.com",
  category: "Notification & Feedback",
  role: "Admin",
}));

// Define the columns for the table



const AdminTable = () => {
  const [isViewEarningModalVisible, setIsViewEarningModalVisible] =
    useState(false);
  const [record, setRecord] = useState(null);

  const columns = [
    {
      title: "#UID",
      dataIndex: "slNumber",
      key: "slNumber",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "role",
      key: "role",
      render: () => <p className="text-[#45AE68]">Active</p>,
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
              setIsViewEarningModalVisible(true);
              record = { record };
            }}
          >

            <MdEdit  style={{ fontSize: "24px" }}/>
          </Button>
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
            <GoEye style={{ fontSize: "24px" }} />
          </Button>


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
      <ViewAdminModel
        record={record}
        isViewEarningModalVisible={isViewEarningModalVisible}
        setIsViewEarningModalVisible={setIsViewEarningModalVisible}
      />
    </div>
  );
};

export default AdminTable;
