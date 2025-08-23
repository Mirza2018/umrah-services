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
    render: (text) => (
      <div className="flex justify-center items-center gap-2">
        {" "}
        <img src={Person.samplePerson} alt="" /> <p className="">{text}</p>
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
    title: "Date",
    dataIndex: "joiningDate",
    key: "joiningDate",
  },
  {
    title: "Type",
    dataIndex: "userType",
    key: "userType",
    filters: [
      {
        text: "Customers",
        value: "Customer",
      },
      {
        text: "Vendors",
        value: "Vendor",
      },
    ],
    onFilter: (value, record) => record.userType.indexOf(value) === 0,
  },
];

const RecentUserTable = ({ data, loading }) => {
  return (
    <div>
   
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
          pagination={2}
          scroll={{ x: true }}
          // style={{ boxShadow: "0px 0px 5px 1px #00000040" }}
        />
   
    </div>
  );
};

export default RecentUserTable;
