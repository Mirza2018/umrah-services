import React, { useState } from "react";
import { Table, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { GoEye } from "react-icons/go";
import { use } from "react";
import ViewEarningModel from "./ViewEarningModel";
import dayjs from "dayjs";
// Sample data for the table
const data = Array.from({ length: 8 }, (_, index) => ({
  key: (index + 1).toString(),
  slNumber: "#1234",
  name: "John Doe",
  serviceTitle: "Economy Umrah Package",
  amount: "$2,000",
  date: "4:15 PM, 13/02/24",
}));

// Define the columns for the table

const EarningFromAccount = ({ data, loading, meta, onPageChange }) => {
  const [isViewEarningModalVisible, setIsViewEarningModalVisible] =
    useState(false);
  const [record, setRecord] = useState(null);

  const columns = [
    {
      title: "#Tr.ID",
      dataIndex: "transactionId",
      key: "transactionId",

      // render: (text, _, index) => (
      //   <p>{index + 1 + meta?.limit * (meta?.currentPage - 1)}</p>
      // ),
    },
    {
      title: "Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Service Title",
      dataIndex: "serviceTitle",
      key: "serviceTitle",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => <p>{dayjs(text).format("DD-MM-YYYY")}</p>,
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
              setRecord(record);
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
      <ViewEarningModel
        record={record}
        isViewEarningModalVisible={isViewEarningModalVisible}
        setIsViewEarningModalVisible={setIsViewEarningModalVisible}
      />
    </div>
  );
};

export default EarningFromAccount;
