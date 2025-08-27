import { Button, Table } from "antd";
import { useState } from "react";
import AcceptNotificationRequestsModel from "./AcceptNotificationRequestsModel";
import RejectNotificationRequestsModel from "./RejectNotificationRequestsModel";
// Sample data for the table
const data = Array.from({ length: 8 }, (_, index) => ({
  key: (index + 1).toString(),
  slNumber: "#1234",
  name: "John Doe",
  notification: "Special quarantine prom up to 20%",
  PaymentMethod: "Stripe",
  date: "16 Apr 2024",
}));

// Define the columns for the table



const NotificationRequestsFromAccount = () => {
  const [isAccept, setIsAccept] = useState(false);
  const [isReject, setIsReject] = useState(false);
  


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
      title: "Notification",
      dataIndex: "notification",
      key: "notification",
    },
    {
      title: "Status",
      dataIndex: "reason",
      key: "reason",
      render: () => <p className="text-[#EAB90A]">Pending</p>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "ACTION",
      key: "action",
      render: (record) => (
        <div className="flex justify-center items-center gap-5">
          <Button
            className="!px-2"
            style={{
              background: "#53DD6C",
              border: "none",
              color: "#FFFFFF",
            }}
            onClick={() => {
              setIsAccept(true);
              record = { record };
            }}
          >
            Accept
          </Button>
          <Button
            className="!px-2"
            style={{
              background: "#F5382C",
              border: "none",
              color: "#FFFFFF",
            }}
            onClick={() => {
              setIsReject(true);
              record = { record };
            }}
          >
            Reject
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

      {/* <ViewNotificationRequestsModel
        record={record}
        isViewEarningModalVisible={isViewEarningModalVisible}
        setIsViewEarningModalVisible={setIsViewEarningModalVisible}
      /> */}
      <AcceptNotificationRequestsModel
        record={record}
        isAccept={isAccept}
        setIsAccept={setIsAccept}
       
      />
      <RejectNotificationRequestsModel
        record={record}
        isReject={isReject}
        setIsReject={setIsReject}
      />
    </div>
  );
};

export default NotificationRequestsFromAccount;
