import { Button, Table } from "antd";
import { useState } from "react";
import { GoEye } from "react-icons/go";
import ViewRefundsModel from "./ViewRefundsModel";
// Sample data for the table
const data = Array.from({ length: 8 }, (_, index) => ({
  key: (index + 1).toString(),
  slNumber: "#1234",
  name: "John Doe",
  email: "abc@gmail.com",
  amount: "$2,000",
  type: "Customer",
  reason: "reason",
}));

// Define the columns for the table

const RefundsFromAccount = ({ data, loading, meta, onPageChange }) => {
  const [isViewEarningModalVisible, setIsViewEarningModalVisible] =
    useState(false);
  const [record, setRecord] = useState(null);

  const columns = [
    {
      title: "#SI",
      dataIndex: "_id",
      key: "_id",
      render: (text, _, index) => (
        <p>{index + 1 + meta?.limit * (meta?.currentPage - 1)}</p>
      ),
    },
    {
      title: "Name",
      dataIndex: "appUserName",
      key: "appUserName",
    },
    {
      title: "Email",
      dataIndex: "appUserEmail",
      key: "appUserEmail",
    },
    {
      title: "Price",
      dataIndex: "totalCost",
      key: "totalCost",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => <p className={` capitalize`}>{ text}</p>,
    },
    {
      title: "ACTION",
      key: "action",
      render: (record) => (
        <>
          <Button
            className="!p-0"
            style={{
              background: "#FFFFFF",
              border: "none",
              color: "#53DD6C",
            }}
            onClick={() => {
              setIsViewEarningModalVisible(true);
              record = { record };
            }}
          >
            <GoEye style={{ fontSize: "24px" }} />
          </Button>
        </>
      ),
    },
  ];
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
      />
      <ViewRefundsModel
        record={record}
        isViewEarningModalVisible={isViewEarningModalVisible}
        setIsViewEarningModalVisible={setIsViewEarningModalVisible}
      />
    </div>
  );
};

export default RefundsFromAccount;
