import { SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, Input } from "antd";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
 
//* Modal Table
import AddOffersModel from "../../Components/SuperAdminPages/OffersPage/AddOffersModel";
import AllOffersTable from "../../Components/SuperAdminPages/OffersPage/AllOffersTable";
import BlockOffersModal from "../../Components/SuperAdminPages/OffersPage/BlockOffersModal";
import ViewOffersModal from "../../Components/SuperAdminPages/OffersPage/ViewOffersModal";

const Offers = () => {
  //* Store Search Value
  const [searchText, setSearchText] = useState("");

  //* Use to set user
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  //* It's Use to Show Modal
  const [isVenueViewModalVisible, setIsVenueViewModalVisible] = useState(false);

  //* It's Use to Block Modal
  const [isVenueBlockModalVisible, setIsVenueBlockModalVisible] =
    useState(false);

  //* It's Use to Add Modal
  const [isAddVenueModalVisible, setIsAddVenueModalVisible] = useState(false);

  //* It's Use to Set Seclected User to Block and view
  const [currentVenueRecord, setCurrentVenueRecord] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/offersData.json");
        setData(response?.data); // Make sure this is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredVenueData = useMemo(() => {
    if (!searchText) return data;
    return data.filter((item) =>
      item.Heading.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [data, searchText]);

  const onSearch = (value) => {
    setSearchText(value);
  };

  const showAddVenueModal = () => {
    setIsAddVenueModalVisible(true);
  };

  const showVenueViewModal = (record) => {
    setCurrentVenueRecord(record);
    setIsVenueViewModalVisible(true);
  };

  const showVenueBlockModal = (record) => {
    setCurrentVenueRecord(record);
    setIsVenueBlockModalVisible(true);
  };

  const handleCancel = () => {
    setIsVenueViewModalVisible(false);
    setIsVenueBlockModalVisible(false);
    setIsAddVenueModalVisible(false);
  };

  const handleVenueBlock = (data) => {
    console.log("Blocked Venue:", {
      id: data?.id,
      VenueName: data?.VenueName,
    });
    setIsVenueViewModalVisible(false);
    setIsVenueBlockModalVisible(false);
  };

  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl">
        <AddOffersModel />
        <div className=" w-[95%] mx-auto  flex items-center justify-between mt-5">
          <p className="text-3xl  font-semibold">Offers</p>
          <div className="flex gap-4 items-center">
            {/* <ConfigProvider
              theme={{ token: { colorTextPlaceholder: "#f3f3f3" } }}
            >
              <Input
                placeholder="Search offers..."
                value={searchText}
                onChange={(e) => onSearch(e.target.value)}
                className="text-primary-color font-semibold !border-primary-color !bg-transparent py-2 !rounded-full"
                prefix={
                  <SearchOutlined className="text-primary-color font-bold text-lg mr-2" />
                }
              />
            </ConfigProvider> */}
          </div>
        </div>
      </div>

      {/* Table  */}
      <div className="px-10 py-10">
        <AllOffersTable
          data={filteredVenueData}
          loading={loading}
          showVenueViewModal={showVenueViewModal}
          showVenueBlockModal={showVenueBlockModal}
          setCurrentVenueRecord={setCurrentVenueRecord}
          pageSize={8}
        />
      </div>

      <ViewOffersModal
        isVenueViewModalVisible={isVenueViewModalVisible}
        handleCancel={handleCancel}
        currentVenueRecord={currentVenueRecord}
        handleVenueBlock={handleVenueBlock}
        showVenueBlockModal={showVenueBlockModal}
      />
      <BlockOffersModal
        isVenueBlockModalVisible={isVenueBlockModalVisible}
        handleVenueBlock={handleVenueBlock}
        handleCancel={handleCancel}
        currentVenueRecord={currentVenueRecord}
      />
    </div>
  );
};

export default Offers;
