/* eslint-disable react/prop-types */
import { Button, Space, Switch, Table, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AllImages, Person } from "../../../../public/images/AllImages";
import { FaStar } from "react-icons/fa";

const AllFeedbackTable = ({
  data,
  loading,
  showCompanyViewModal,
  showCompanyBlockModal,
  pageSize = 0,
}) => {
  const columns = [
    {
      title: "#SI",
      dataIndex: "SI",
      key: "SI",
      responsive: ["md"],
    },
    {
      title: "Customers Name",
      dataIndex: "CustomerName",
      key: "CustomerName",
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
      title: "Service Title",
      dataIndex: "ServiceTitle",
      key: "ServiceTitle",
    },
    {
      title: "Feedback",
      dataIndex: "Feedback",
      key: "Feedback",
    },
    {
      title: "Rating",
      dataIndex: "Rating",
      key: "Rating",
      render: (text) => (
        <div className="flex justify-center items-center gap-1">
          <FaStar className="text-orange-400" />
          {text}
        </div>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Space size="middle">
            {/* Block User Tooltip */}
            <Tooltip placement="left" title="Block this User">
              <Button
                className="!p-0"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  color: "#C50000",
                }}
                onClick={() => showCompanyBlockModal(record)}
              >
                <Switch defaultChecked  />
              </Button>
            </Tooltip>
            {/* View Details Tooltip */}
            <Tooltip placement="right" title="View Details">
              <Button
                className="!p-0"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  color: "#53DD6C",
                }}
                onClick={() => showCompanyViewModal(record)}
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

export default AllFeedbackTable;
