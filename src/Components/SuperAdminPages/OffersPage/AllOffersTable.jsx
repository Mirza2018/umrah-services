/* eslint-disable react/prop-types */
import { Button, Space, Table, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AllImages } from "../../../../public/images/AllImages";
import { BiSolidEditAlt } from "react-icons/bi";

const AllOffersTable = ({
  data,
  loading,
  showVenueViewModal,
  showVenueBlockModal,
  setCurrentVenueRecord,
  pageSize = 0,
}) => {
  const columns = [
    {
      title: "#Sl",
      dataIndex: "SI",
      key: "SI",
      responsive: ["md"],
    },
    {
      title: "Heading",
      dataIndex: "Heading",
      key: "Heading",
      render: (text) => (
        <div className="flex items-center gap-2">
          <p>{text}</p>
        </div>
      ),
    },

    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
      render: (text) => (
        <div className="flex items-center gap-2 w-52">
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "Valid Until",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (text) => (
        <div className="flex items-center gap-2 ">
          {text == "Active" ? (
            <p className="text-[#17be86]  px-4 py-1 rounded-lg font-medium">
              {text}
            </p>
          ) : (
            <p className="text-[#f35959]  px-3 py-1 rounded-lg font-medium">
              {text}
            </p>
          )}
        </div>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Space size="middle">
            {/* View Details Tooltip */}
            <Tooltip placement="right" title="Edit this offer">
              <Button
                className="!p-0"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  color: "#53DD6C",
                }}
                onClick={() => showVenueViewModal(record)}
              >
                <BiSolidEditAlt
                  style={{ fontSize: "24px", fontWeight: "700px" }}
                />
              </Button>
            </Tooltip>
            {/* Block User Tooltip */}
            <Tooltip placement="left" title="Delete this offer">
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

export default AllOffersTable;
