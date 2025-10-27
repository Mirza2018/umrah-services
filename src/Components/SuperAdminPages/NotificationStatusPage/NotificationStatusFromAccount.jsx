import { Table } from "antd";
import dayjs from "dayjs";
// Sample data for the table

const NotificationStatusFromAccount = ({
  data,
  loading,
  meta,
  onPageChange,
}) => {


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
      title: "Sender",
      dataIndex: "sender",
      key: "sender",
      render: (text) => (
        <p className="capitalize">
          {text?.role == "sub-admin" ? "Sub Admin" : "Admin"}
        </p>
      ),
    },
    {
      title: "Notification For",
      dataIndex: "type",
      key: "type",
      render: (text) => <p className="capitalize">{text}</p>,
    },
    {
      title: "Notification",
      dataIndex: "message",
      key: "message",
      render: (text) => <p className="capitalize">{text}</p>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <p> {dayjs(text).format("DD/MM/YYYY")}</p>,
    },
  ];
  return (
    <div className="p-4">
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
        className="custom-table"
      />

    </div>
  );
};

export default NotificationStatusFromAccount;
