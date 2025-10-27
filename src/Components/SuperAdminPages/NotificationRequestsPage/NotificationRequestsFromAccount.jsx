import { Button, Table } from "antd";
import { useState } from "react";
import AcceptNotificationRequestsModel from "./AcceptNotificationRequestsModel";
import RejectNotificationRequestsModel from "./RejectNotificationRequestsModel";
import dayjs from "dayjs";
// Sample data for the table

// Define the columns for the table

const NotificationRequestsFromAccount = ({ data,meta, loading, onPageChange }) => {
  const [isAccept, setIsAccept] = useState(false);
  const [isReject, setIsReject] = useState(false);

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
      dataIndex: "sender",
      key: "sender",
      render: (text) => <p className="">{text?.fullName}</p>,
    },
    {
      title: "Notification",
      dataIndex: "message",
      key: "message",
    },
    // {
    //   title: "Status",
    //   dataIndex: "reason",
    //   key: "reason",
    //   render: () => <p className="text-[#EAB90A]">Pending</p>,
    // },
    {
      title: "Date",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (text) => <p className="">{dayjs(text).format("DD/MM/YYYY")}</p>,
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
              setRecord(record);
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
              setRecord(record);
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
