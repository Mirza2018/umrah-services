import { Button, Switch, Table, Tooltip } from "antd";
import { useState } from "react";
import { GoEye } from "react-icons/go";
import ViewContactsModel from "./ViewContactsModel";
import BlockFeedbackModal from "../FeedbackPage/BlockFeedbackModal";
import ReadHelpFrom from "./ReadHelpFrom";

// Define the columns for the table

const ContactsFromAccount = ({ data, loading, meta, onPageChange }) => {
  const [isViewEarningModalVisible, setIsViewEarningModalVisible] =
    useState(false);
  const [record, setRecord] = useState(null);
  const [isContract, setIsContract] = useState(false);

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
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
    },

    {
      title: "ACTION",
      key: "action",
      render: (record) => (
        <div className="flex justify-between gap-5 items-center">
          {record?.isRead ? (
            <Tooltip placement="left" title={`Unread this Support request`}>
              <Button
                className="!p-0"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  color: "#C50000",
                }}
                onClick={() => {
                  setIsContract(true);
                  setRecord(record);
                }}
              >
                <Switch checked={record?.isRead} />
              </Button>
            </Tooltip>
          ) : (
            <Tooltip placement="left" title={`Read this Support request`}>
              <Button
                className="!p-0"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  color: "#C50000",
                }}
                onClick={() => {
                  setIsContract(true);
                  setRecord(record);
                }}
              >
                <Switch checked={record?.isRead} />
              </Button>
            </Tooltip>
          )}

          <Button
            className="!p-0"
            style={{
              background: "#FFFFFF",
              border: "none",
              color: "#53DD6C",
            }}
            onClick={() => {
              setIsViewEarningModalVisible(true);
              setRecord(record);
            }}
          >
            <GoEye style={{ fontSize: "24px" }} />
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div className="p-4">
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
        className="custom-table"
      />
      <ViewContactsModel
        record={record}
        isViewEarningModalVisible={isViewEarningModalVisible}
        setIsViewEarningModalVisible={setIsViewEarningModalVisible}
      />

      <ReadHelpFrom
        record={record}
        isContract={isContract}
        setIsContract={setIsContract}
      />
    </div>
  );
};

export default ContactsFromAccount;
