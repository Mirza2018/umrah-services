import { Button, Table } from "antd";
import { useState } from "react";
import { GoEye } from "react-icons/go";
import ViewServiceModel from "./ViewServiceModel";
import { render } from "react-dom";
// Sample data for the table
const data = Array.from({ length: 8 }, (_, index) => ({
  key: (index + 1).toString(),
  slNumber: "#1234",
  vendorsName: "James Tracy",
  email: "abc@gmail.com",
  postTitle: "abc@gmail.com",
}));

// Define the columns for the table

const ServiceRequestsTable = ({ data, loading, meta, onPageChange }) => {
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
      title: "Vendors Name",
      dataIndex: "vendorName",
      key: "vendorName",
      render: (text) => <p className="capitalize">{text}</p>,
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      render: (text) => {
        return (
          <div className="flex flex-col items-center justify-start gap-2">
            {text?.map((availabe, index) => (
              <p key={availabe?.date} className=" ">
                {`   ${index + 1}) ${availabe?.date?.split("T")[0]}`}
              </p>
            ))}
          </div>
        );
      },
    },
    {
      title: "Service Title",
      dataIndex: "postTitle",
      key: "postTitle",
      render: (text) => (
        <div className="flex flex-col items-center gap-2">
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <p className={`capitalize ${text=="pending"? "text-secondary-color": "text-success-color"} `}>{text}</p>
      ),
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
      <ViewServiceModel
        record={record}
        isViewEarningModalVisible={isViewEarningModalVisible}
        setIsViewEarningModalVisible={setIsViewEarningModalVisible}
      />
    </div>
  );
};

export default ServiceRequestsTable;
