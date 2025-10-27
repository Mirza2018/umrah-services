/* eslint-disable react/prop-types */
import { Button, Space, Table, Tooltip, Input, DatePicker } from "antd";
import dayjs from "dayjs";
import { AiOutlineStop } from "react-icons/ai";
import { CgUnblock } from "react-icons/cg";
import { GoEye } from "react-icons/go";
// RiDeleteBin6Line is imported but not used, keeping imports from original code

const { RangePicker } = DatePicker;
const { Search } = Input;

const AllOwnerTable = ({
  data,
  loading,
  meta,
  onPageChange,
  showVenueViewModal,
  showVenueBlockModal,
  // New Filter Handlers
  onServiceTitleSearch,
  onAvailabilityFilter,
}) => {
  // --- Custom Filter Render Functions ---

  // Service Title Filter UI
  const getServiceTitleFilter = () => (
    <Search
      placeholder="Search Service Title"
      allowClear
      onChange={onServiceTitleSearch} // This function sends the query to the parent component
      style={{ width: 180 }}
    />
  );

  // Availability Date Range Filter UI
  const getAvailabilityDateFilter = () => (
    <RangePicker
      onChange={(_, dateStrings) => {
        // dateStrings is an array: [startDateString, endDateString]
        onAvailabilityFilter({
          startDate: dateStrings[0],
          endDate: dateStrings[1],
        });
      }}
      style={{ width: 290 }}
    />
  );

  // --- Column Definitions ---
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

    // --- SERVICE TITLE COLUMN WITH FILTER ---
    {
      title: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          Service Title
          {getServiceTitleFilter()}
        </div>
      ),
      dataIndex: "serviceTitles",
      key: "serviceTitles",
      render: (text) => {
        return (
          <div className="flex flex-col justify-start gap-2">
            {text?.map((title, index) => (
              <p key={index} className="">
                {`${index + 1}) ${title}`}
              </p>
            ))}
          </div>
        );
      },
    },

    // --- AVAILABILITY COLUMN WITH DATE RANGE FILTER ---
    {
      title: (
        <div style={{ display: "flex", flexDirection: "column"  }}>
          Availability
          {getAvailabilityDateFilter()}
        </div>
      ),
      dataIndex: "availability",
      key: "availability",
      render: (text) => {
        return (
          <div className="flex flex-col items-center justify-start gap-2 ">
            {text?.map((availabe, index) => (
              <p key={availabe?.date} className=" ">
                {` ${index + 1}) ${dayjs(availabe?.date).format("DD-MM-YYYY") }`}
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
            <Tooltip
              placement="right"
              title={`${record?.isBan == true ? "Unban User" : "Ban User"} `}
            >
              <button
                onClick={() => {
                  showVenueBlockModal(record);
                }}
                className="!p-0 cursor-pointer"
              >
                {record?.isBan ? (
                  <CgUnblock className="text-3xl  text-success-color" />
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
        scroll={{ x: 1200 }} // Increased scroll to accommodate new filters
      />
    </div>
  );
};

export default AllOwnerTable;
