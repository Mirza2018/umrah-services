import { SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, Input } from "antd";
import { useState } from "react";

//* Modal Table

import AllOwnerTable from "../../Components/SuperAdminPages/AllDriverPage/AllOwnerTable";
import BlockOwnerModal from "../../Components/SuperAdminPages/AllDriverPage/BlockOwnerModal";
import ViewOwnerModal from "../../Components/SuperAdminPages/AllDriverPage/ViewOwnerModal";
import { useAllVendorQuery } from "../../redux/api/adminApi";

const AllOwner = () => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 8,
    // serviceTitle: "",
    startDate: "", // Use null for initial date values
    endDate: "",
  });

  const onPageChange = (page, limit) => {
    setFilters((prev) => ({
      ...prev,
      page,
      limit,
    }));
  };

  const {
    data: userList,
    currentData,
    isLoading,
    isFetching,
    isSuccess,
  } = useAllVendorQuery(filters);
  const handleSearch = (search) => {
    setFilters((prev) => ({
      ...prev,
      serviceTitle:"",
      search: search,
    }));
  };
  // Function to handle filtering for serviceTitle
  const handleServiceTitleSearch = (serviceTitle) => {
    setFilters((prev) => ({
      ...prev,
      serviceTitle: serviceTitle,
    }));
  };

  const handleAvailabilityFilter = (dates) => {
    // Assuming 'dates' is an array or object like { startDate: '...', endDate: '...' }
    // Adjust based on your date picker component's output
    setFilters((prev) => ({
      ...prev,
      serviceTitle: "",
      startDate: dates?.startDate || "",
      endDate: dates?.endDate || "",
    }));
  };
  //* Store Search Value
  const [searchText, setSearchText] = useState("");

  //* Use to set user

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/data/allVendorData.json");
  //       setData(response?.data); // Make sure this is an array
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p className="text-3xl  font-semibold">All Vendors</p>
          <div className="flex gap-4 items-center">
            <ConfigProvider
              theme={{ token: { colorTextPlaceholder: "#D0D0D1" } }}
            >
              <Input
                placeholder="search here......"
                onChange={(e) => handleSearch(e.target.value)}
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
        <AllOwnerTable
          data={userList?.data?.attributes?.users}
          meta={userList?.data?.attributes?.pagination}
          loading={isLoading}
          onPageChange={onPageChange}
          onServiceTitleSearch={handleServiceTitleSearch}
          onAvailabilityFilter={handleAvailabilityFilter}
          showVenueViewModal={showVenueViewModal}
          showVenueBlockModal={showVenueBlockModal}
        />
      </div>

      <ViewOwnerModal
        isVenueViewModalVisible={isVenueViewModalVisible}
        handleCancel={handleCancel}
        currentVenueRecord={currentVenueRecord}
        handleVenueBlock={handleVenueBlock}
        showVenueBlockModal={showVenueBlockModal}
      />
      <BlockOwnerModal
        isVenueBlockModalVisible={isVenueBlockModalVisible}
        handleVenueBlock={handleVenueBlock}
        handleCancel={handleCancel}
        currentVenueRecord={currentVenueRecord}
      />
    </div>
  );
};

export default AllOwner;
