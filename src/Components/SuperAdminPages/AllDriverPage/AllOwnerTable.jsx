/* eslint-disable react/prop-types */
import { Button, Space, Table, Tooltip } from "antd";
import { AiOutlineStop } from "react-icons/ai";
import { CgUnblock } from "react-icons/cg";
import { GoEye } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";

const AllOwnerTable = ({
  data,
  loading,
  meta,
  onPageChange,
  showVenueViewModal,
  showVenueBlockModal,
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
      title: "Vendors Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => (
        <div className="flex items-center gap-2">
          <p className="capitalize">{text}</p>
        </div>
      ),
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
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
      dataIndex: "serviceTitles",
      key: "serviceTitles",
      render: (text) => {
        return (
          <div className="flex flex-col  justify-start gap-2">
            {text?.map((availabe, index) => (
              <p key={availabe?.date} className="">
                {`   ${index + 1}) ${availabe}`}
              </p>
            ))}
          </div>
        );
      },
    },
    {
      title: "Revenue",
      dataIndex: "revenue",
      key: "revenue",
      sorter: (a, b) => a.revenue - b.revenue,
    },
    {
      title: "Join Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => <p className="capitalize">{text?.split("T")[0]}</p>,
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

            <Tooltip
              placement="right"
              title={`${record?.isBan == true ? "Unban User" : "Ban User"} `}
            >
              <button
                onClick={() => {
                  showVenueBlockModal(record);
                  // setCostomerData(record);
                }}
                className="!p-0 cursor-pointer"
              >
                {record?.isBan ? (
                  <CgUnblock className="text-3xl  text-success-color" />
                ) : (
                  <AiOutlineStop className="text-2xl font-extrabold text-error-color" />
                )}
              </button>
            </Tooltip>

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

export default AllOwnerTable;
