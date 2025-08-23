/* eslint-disable react/prop-types */
import { Button, Space, Table, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AllImages, Person } from "../../../../public/images/AllImages";

const AllWithdrawTable = ({
  data,
  loading,
  showVenueViewModal,
  showVenueBlockModal,
  pageSize = 0,
}) => {
  const columns = [
    {
      title: "#SI",
      dataIndex: "Sl",
      key: "Sl",
      responsive: ["md"],
    },
    {
      title: "Passenger Name",
      dataIndex: "Passenger Name",
      key: "Passenger Name",
      render: (text) => (
        <div className="flex items-center gap-2">
          {/* <img
            src={Person.samplePerson}
            alt={text}
            className="w-8 h-8 rounded-full"
          /> */}
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "Owner Name",
      dataIndex: "Owner Name",
      key: "Owner Name",
    },
    {
      title: "Driver Name",
      dataIndex: "Driver Name",
      key: "Driver Name",
    },
    {
      title: "Payment Method",
      dataIndex: "Payment Method",
      key: "Payment Method",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
    {
      title: "Processing Fee",
      dataIndex: "Processing Fee",
      key: "Processing Fee",
    },
    {
      title: "Auto Withdraw Date",
      dataIndex: "Auto Withdraw Date",
      key: "Auto Withdraw Date",
    },
    {
      title: "Days Remaining",
      dataIndex: "Days Remaining",
      key: "Days Remaining",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Space size="middle">
            {/* Block User Tooltip */}
            {/* <Tooltip placement="left" title="Block this User">
              <Button
                className="!p-0"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  color: "#C50000",
                }}
                onClick={() => showVenueBlockModal(record)}
              >
                <RiDeleteBin6Line style={{ fontSize: "24px" }} />
              </Button>
            </Tooltip> */}
            {/* View Details Tooltip */}
            <Tooltip placement="right" title="View Details">
              <Button
                className="!p-0"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  color: "#53DD6C",
                }}
                onClick={() => showVenueViewModal(record)}
              >
                <GoEye style={{ fontSize: "24px" }} />
              </Button>
            </Tooltip>
          </Space>
        </>
      ),
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={pageSize > 0 ? { pageSize } : false}
        rowKey="id"
        scroll={{ x: true }}
      />
    </div>
  );
};

export default AllWithdrawTable;
