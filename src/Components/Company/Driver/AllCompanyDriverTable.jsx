/* eslint-disable react/prop-types */
import { Button, Space, Table, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";

const AllCompanyDriverTable = ({
  data,
  loading,
  showVenueViewModal,
  showVenueBlockModal,
  pageSize = 0,
}) => {
  const columns = [
    {
      title: "#SI",
      dataIndex: "id",
      key: "id",
      responsive: ["md"],
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Vehicle",
      dataIndex: "Vehicle",
      key: "Vehicle",
      render: (text) => (
        <div className="flex items-center gap-2">
          {/* <img
            src={Person.samplePerson}
            alt={text}
            className="w-8 h-8 rounded-full"
          /> */}
          <p>BMW G05</p>
        </div>
      ),
    },
    {
      title: "Location",
      dataIndex: "Location",
      key: "Location",
      render: (text) => (
        <div className="flex items-center gap-2">
          {/* <img
            src={Person.samplePerson}
            alt={text}
            className="w-8 h-8 rounded-full"
          /> */}
          <p>Dhaka, Bangladesh</p>
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
                onClick={() => showVenueBlockModal(record)}
              >
                <RiDeleteBin6Line style={{ fontSize: "24px" }} />
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

export default AllCompanyDriverTable;
