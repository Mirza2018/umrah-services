/* eslint-disable react/prop-types */
import { Button, Rate, Space, Switch, Table, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AllImages, Person } from "../../../../public/images/AllImages";
import { FaStar } from "react-icons/fa";

const AllFeedbackTable = ({
  data,
  loading,
  meta,
  onPageChange,
  showCompanyViewModal,
  showCompanyBlockModal,
}) => {
  const columns = [
    {
      title: "#SI",
      dataIndex: "_id",
      key: "_id",
      responsive: ["md"],
      render: (text, _, index) => (
        <p>{index + 1 + meta?.limit * (meta?.currentPage - 1)}</p>
      ),
    },
    {
      title: "Customers Name",
      dataIndex: "reviewer",
      key: "reviewer",
      render: (text) => (
        <div className="flex items-center gap-2">
          {/* <img
            src={Person.samplePerson}
            alt={text}
            className="w-8 h-8 rounded-full"
          /> */}
          <p className="capitalize">{text?.fullName}</p>
        </div>
      ),
    },

    {
      title: "Service Title",
      dataIndex: "service",
      key: "service",
      render: (text) => (
        <div className="flex items-center gap-2">
          <p className="capitalize">{text?.title}</p>
        </div>
      ),
    },
    {
      title: "Feedback",
      dataIndex: "text",
      key: "text",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (text) => (
        <div className="flex justify-center items-center gap-1">
          <FaStar className="text-[#FADB14]" />
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
            <Tooltip
              placement="left"
              title={`${
                record?.isPublic ? "Private this Post" : "Public this Post"
              } `}
            >
              <Button
                className="!p-0"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  color: "#C50000",
                }}
                onClick={() => showCompanyBlockModal(record)}
              >
                <Switch checked={record?.isPublic} />
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
        pagination={{
          current: meta?.currentPage,
          pageSize: meta?.limit,
          total: meta?.totalResults,
          onChange: onPageChange,
          showSizeChanger: true,
        }}
        rowKey="id"
        scroll={{ x: true }}
      />
    </div>
  );
};

export default AllFeedbackTable;
