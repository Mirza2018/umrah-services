import React, { useState } from "react";
import { Table, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { GoEye } from "react-icons/go";
import { use } from "react";
import ViewEarningModel from "./ViewEarningModel";
// Sample data for the table
const data = Array.from({ length: 8 }, (_, index) => ({
  key: (index + 1).toString(), 
  slNumber: "#1234",
  accNumber: "45123456789",
  timeDate: "4:15 PM, 13/02/24",
  amount: "33 Cents",
}));

// Define the columns for the table



const EarningFromAccount = () => {

  const [isViewEarningModalVisible, setIsViewEarningModalVisible] =
    useState(false);
  const [record, setRecord] = useState(null);
  
  const columns = [
    {
      title: "SL NUMBER",
      dataIndex: "slNumber",
      key: "slNumber",
    },
    {
      title: "ACC NUMBER",
      dataIndex: "accNumber",
      key: "accNumber",
    },
    {
      title: "TIME & DATE",
      dataIndex: "timeDate",
      key: "timeDate",
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
      key: "amount",
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
            onClick={() => { setIsViewEarningModalVisible(true);  record={record}}}
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
      <ViewEarningModel
        record={record}
        isViewEarningModalVisible={isViewEarningModalVisible}
        setIsViewEarningModalVisible={setIsViewEarningModalVisible}
      />
    </div>
  );
};

export default EarningFromAccount;
