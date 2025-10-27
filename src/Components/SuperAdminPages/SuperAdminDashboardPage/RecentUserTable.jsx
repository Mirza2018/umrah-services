/* eslint-disable react/prop-types */
import { ConfigProvider, Table } from "antd";
import { Person } from "../../../../public/images/AllImages";

const columns = [
  // {
  //   title: "#SI",
  //   dataIndex: "id",
  //   key: "id",
  //   render: (text) => `#${text}`,
  //   responsive: ["md"],
  // },
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Phone",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Date",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => <p>{text.split("T")[0]}</p>,
  },
  {
    title: "Type",
    dataIndex: "role",
    key: "role",
    // filters: [
    //   {
    //     text: "Customers",
    //     value: "user",
    //   },
    //   {
    //     text: "Vendors",
    //     value: "Vendor",
    //   },
    // ],
    // onFilter: (value, record) => record.userType.indexOf(value) === 0,
  },
];

const RecentUserTable = ({ data, loading, meta, onPageChange }) => {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={2}
        rowKey="id"
        // scroll={{ x: true }}
      />
    </div>
  );
};

export default RecentUserTable;
