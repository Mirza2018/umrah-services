import { SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, Input } from "antd";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

//* Modal Table
import AllFeedbackTable from "../../Components/SuperAdminPages/FeedbackPage/AllFeedbackTable";
import BlockFeedbackModal from "../../Components/SuperAdminPages/FeedbackPage/BlockFeedbackModal";
import ViewFeedbackModal from "../../Components/SuperAdminPages/FeedbackPage/ViewFeedbackModal";

const Feedbacks = () => {
  //* Store Search Value
  const [searchText, setSearchText] = useState("");

  //* Use to set user
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  //* It's Use to Show Modal
  const [isCompanyViewModalVisible, setIsCompanyViewModalVisible] =
    useState(false);

  //* It's Use to Block Modal
  const [isCompanyBlockModalVisible, setIsCompanyBlockModalVisible] =
    useState(false);

  //* It's Use to Add Modal
  const [isAddCompanyModalVisible, setIsAddCompanyModalVisible] =
    useState(false);

  //* It's Use to Set Seclected User to Block and view
  const [currentCompanyRecord, setCurrentCompanyRecord] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/allFeedback.json");
        setData(response?.data); // Make sure this is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCompanyData = useMemo(() => {
    if (!searchText) return data;
    return data.filter((item) =>
      item.customerName.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [data, searchText]);

  const onSearch = (value) => {
    setSearchText(value);
  };

  const showAddCompanyModal = () => {
    setIsAddCompanyModalVisible(true);
  };

  const showCompanyViewModal = (record) => {
    setCurrentCompanyRecord(record);
    setIsCompanyViewModalVisible(true);
  };

  const showCompanyBlockModal = (record) => {
    setCurrentCompanyRecord(record);
    setIsCompanyBlockModalVisible(true);
  };

  const handleCancel = () => {
    setIsCompanyViewModalVisible(false);
    setIsCompanyBlockModalVisible(false);
    setIsAddCompanyModalVisible(false);
  };

  const handleCompanyBlock = (data) => {
    console.log("Blocked Company:", {
      id: data?.id,
      companyName: data?.companyName,
    });
    setIsCompanyViewModalVisible(false);
    setIsCompanyBlockModalVisible(false);
  };

  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className="w-full p-4   rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p className="text-3xl  font-semibold">Feedback</p>
          <div className="flex gap-4 items-center">
            <ConfigProvider
              theme={{ token: { colorTextPlaceholder: "#D0D0D1" } }}
            >
              <Input
                placeholder="search here......"
                value={searchText}
                onChange={(e) => onSearch(e.target.value)}
                className="text-black font-semibold !border-[#D0D0D1] !bg-transparent py-2 !rounded-full"
                prefix={
                  <SearchOutlined className="!text-black font-bold text-lg mr-2" />
                }
              />
            </ConfigProvider>
          </div>
        </div>
      </div>

      {/* Table  */}
      <div className="px-10 py-10">
        <AllFeedbackTable
          data={filteredCompanyData}
          loading={loading}
          showCompanyViewModal={showCompanyViewModal}
          showCompanyBlockModal={showCompanyBlockModal}
          pageSize={12}
        />
      </div>

      {/* Modals */}
      {/* <AddCompanyModal
        isAddCompanyModalVisible={isAddCompanyModalVisible}
        handleCancel={handleCancel}
      /> */}
      <ViewFeedbackModal
        isCompanyViewModalVisible={isCompanyViewModalVisible}
        handleCancel={handleCancel}
        currentCompanyRecord={currentCompanyRecord}
        handleCompanyBlock={handleCompanyBlock}
      />
      <BlockFeedbackModal
        isCompanyBlockModalVisible={isCompanyBlockModalVisible}
        handleCompanyBlock={handleCompanyBlock}
        handleCancel={handleCancel}
        currentCompanyRecord={currentCompanyRecord}
      />
    </div>
  );
};

export default Feedbacks;
