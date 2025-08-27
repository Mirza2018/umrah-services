import { Button, Table } from "antd";
import { useState } from "react";
import { GoEye } from "react-icons/go";
import ViewPayoutsModel from "./ViewPayoutsModel";
import ViewContactsModel from "./ViewContactsModel";
// Sample data for the table
const data = Array.from({ length: 8 }, (_, index) => ({
  key: (index + 1).toString(),
  slNumber: "#1234",
  name: "John Doe",
  role: "Vendors",
  PaymentMethod: "Stripe",
  email: "abc@gmail.com",
  amount: "$2,000",
  type: "Customer",
  reason: "reason",
}));

// Define the columns for the table



const PayoutsFromAccount = () => {
  const [isViewEarningModalVisible, setIsViewEarningModalVisible] =
    useState(false);
  const [record, setRecord] = useState(null);

  const columns = [
    {
      title: "#SI",
      dataIndex: "slNumber",
      key: "slNumber",
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
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "reason",
      key: "reason",
      render: () => <p className="text-[#EAB90A]">Pending</p>,
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
      <ViewContactsModel
        record={record}
        isViewEarningModalVisible={isViewEarningModalVisible}
        setIsViewEarningModalVisible={setIsViewEarningModalVisible}
      />
    </div>
  );
};

export default PayoutsFromAccount;
