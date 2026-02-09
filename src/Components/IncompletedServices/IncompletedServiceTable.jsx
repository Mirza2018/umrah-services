/* eslint-disable react/prop-types */
import { Button, Space, Table, Tooltip } from "antd";
import { AiOutlineStop } from "react-icons/ai";
import { CgUnblock } from "react-icons/cg";
import { GoEye } from "react-icons/go";

const IncompletedServiceTable = ({
  data,
  loading,
  meta,
  onPageChange,
  showCompanyBlockModal,
}) => {
  const getExceededDays = (dateString) => {
    const givenDate = new Date(dateString);
    const now = new Date();

    const diffInMs = now - givenDate;
    return Math.max(0, Math.floor(diffInMs / (1000 * 60 * 60 * 24)));
  };
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
      title: "Service Title",
      dataIndex: "title",
      key: "title",
      render: (text) => (
        <div className="flex items-center gap-2">
          <p className="capitalize">{text}</p>
        </div>
      ),
    },

    {
      title: "Vendor",
      dataIndex: "action",
      key: "action",
      render: (_, text) => (
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="capitalize">
            <span className="font-semibold">Name:</span> {text.vendorName}
          </p>
          <p className="">
            <span className="font-semibold">Email:</span> 
            {text.vendorEmail}
          </p>
          <Tooltip
            placement="right"
            title={`${text?.vendorIsBan ? "Unban Vendor" : "Ban Vendor"} `}
          >
            <button
              onClick={() => {
                showCompanyBlockModal(text);
                // setCostomerData(record);
              }}
              className="!p-0 cursor-pointer"
            >
              {text?.vendorIsBan ? (
                // <CgUnblock className="text-3xl  text-success-color" />
                <p className="text-sm font-medium bg-green-300 rounded-lg border border-green-400 px-5 py-1 w-fit shadow-lg shadow-green-500">
                  Unban Vendor
                </p>
              ) : (
                <p className="text-sm font-medium bg-red-300 rounded-lg border border-red-400 px-6 py-1 w-fit shadow-lg shadow-red-500">
                  Ban Vendor
                </p>
              )}
            </button>
          </Tooltip>
        </div>
      ),
    },
    {
      title: "Customer",
      dataIndex: "action",
      key: "action",
      render: (_, text) => (
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="capitalize">
            <span className="font-semibold">Name:</span> {text.userFullName}
          </p>
          <p className="">
            <span className="font-semibold">Email:</span> 
            {text.userEmail}
          </p>
        </div>
      ),
    },
    {
      title: "Cost",
      dataIndex: "totalCost",
      key: "totalCost",
      render: (text) => (
        <p className="capitalize whitespace-nowrap">{text} $</p>
      ),
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (text) => (
        <div>
          {text === "paid" ? (
            <p className="text-sm font-medium bg-green-300 rounded-lg border border-green-400 px-5 py-1 w-fit shadow-lg shadow-green-500">
              Paid
            </p>
          ) : (
            <p className="text-sm font-medium bg-yellow-300 rounded-lg border border-yellow-400 px-2 py-1 w-fit shadow-lg shadow-yellow-500">
              Unpaid
            </p>
          )}
        </div>
      ),
    },
    {
      title: "Date exceeded",
      dataIndex: "serviceLastDate",
      key: "serviceLastDate",
      render: (text) => <p>{getExceededDays(text)} day(s)</p>,
    },

    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <>
    //       <Space size="middle">
    //         {/* Block User Tooltip */}
    //         <Tooltip
    //           placement="right"
    //           title={`${record?.isBan == true ? "Unban Vendor" : "UnBan User"} `}
    //         >
    //           <button
    //             onClick={() => {
    //               showCompanyBlockModal(record);
    //               // setCostomerData(record);
    //             }}
    //             className="!p-0 cursor-pointer"
    //           >
    //             {record?.isBan ? (
    //               <CgUnblock className="text-3xl  text-success-color" />
    //             ) : (
    //               <AiOutlineStop className="text-2xl font-extrabold text-error-color" />
    //             )}
    //           </button>
    //         </Tooltip>
    //       </Space>
    //     </>
    //   ),
    // },
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
          total: meta?.totalResult,
          onChange: onPageChange,
          showSizeChanger: true,
        }}
        rowKey="id"
        scroll={{ x: true }}
      />
    </div>
  );
};

export default IncompletedServiceTable;
