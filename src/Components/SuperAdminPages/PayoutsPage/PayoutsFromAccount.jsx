import { Button, Table } from "antd";
import { useState } from "react";
import { GoEye } from "react-icons/go";
import ViewPayoutsModel from "./ViewPayoutsModel";
// Sample data for the table

// Define the columns for the table

const PayoutsFromAccount = ({ data, loading, meta, onPageChange }) => {
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
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Payment Method",
      dataIndex: "PaymentMethod",
      key: "PaymentMethod",
    },
    {
      title: "Amount",
      dataIndex: "totalCost",
      key: "totalCost",
      render: (text) => <p className="">$ {text}</p>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => <p className="capitalize">{text}</p>,
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
      <ViewPayoutsModel
        record={record}
        isViewEarningModalVisible={isViewEarningModalVisible}
        setIsViewEarningModalVisible={setIsViewEarningModalVisible}
      />
    </div>
  );
};

export default PayoutsFromAccount;
