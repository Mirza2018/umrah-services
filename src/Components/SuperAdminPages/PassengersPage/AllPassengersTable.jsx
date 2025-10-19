/* eslint-disable react/prop-types */
import { Button, Space, Table, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AllImages, Person } from "../../../../public/images/AllImages";
import { CgUnblock } from "react-icons/cg";
import { AiOutlineStop } from "react-icons/ai";

const AllPassengersTable = ({
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
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => (
        <div className="flex items-center gap-2">
          {/* <img
            src={Person.samplePerson}
            alt={text}
            className="w-8 h-8 rounded-full"
          /> */}
          <p className="capitalize">{text}</p>
        </div>
      ),
    },

    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      render: (text) => <p>{text ? text.split(" ")[0] : "No data"}</p>,
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      render: (text) => <p className="capitalize">{text}</p>,
    },
    {
      title: "Join Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => <p>{text.split("T")[0]}</p>,
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Space size="middle">
            {/* Block User Tooltip */}
            <Tooltip
              placement="right"
              title={`${record?.isBan == true ? "Unban User" : "Ban User"} `}
            >
              <button
                onClick={() => {
                  showCompanyBlockModal(record);
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
        dataSource={data} // Use the filtered data here based on selected company
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

export default AllPassengersTable;
