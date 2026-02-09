import { SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, Input } from "antd";
import { useState } from "react";

//* Modal Table
import IncompletedServiceTable from "../../Components/IncompletedServices/IncompletedServiceTable";
import IncompletedServiceVendorBlockModal from "../../Components/IncompletedServices/IncompletedServiceVendorBlockModal";
import {
  useAllIncompletedServicesQuery,
  useAllUsersQuery,
} from "../../redux/api/adminApi";

const IncompletedServices = () => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 8,
    role: "user",
  });

  const onPageChange = (page, limit) => {
    setFilters((prev) => ({
      ...prev,
      page,
      limit,
    }));
  };

  const {
    data: servicesList,
    currentData,
    isLoading,
    isFetching,
    isSuccess,
  } = useAllIncompletedServicesQuery(filters);
  const handleSearch = (search) => {
    setFilters((prev) => ({
      ...prev,
      search: search,
    }));
  };

  //* It's Use to Block Modal
  const [isCompanyBlockModalVisible, setIsCompanyBlockModalVisible] =
    useState(false);

  //* It's Use to Set Seclected User to Block and view
  const [currentCompanyRecord, setCurrentCompanyRecord] = useState(null);

  const showCompanyBlockModal = (record) => {
    setCurrentCompanyRecord(record);
    setIsCompanyBlockModalVisible(true);
  };

  const handleCancel = () => {
    setIsCompanyBlockModalVisible(false);
  };

  const handleCompanyBlock = (data) => {
    setCurrentCompanyRecord(data);
    setIsCompanyBlockModalVisible(true);
  };

  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className="w-full p-4   rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p className="text-3xl  font-semibold">Incompleted services </p>
          <div className="flex gap-4 items-center">
            <ConfigProvider
              theme={{ token: { colorTextPlaceholder: "#D0D0D1" } }}
            >
              <Input
                placeholder="search here......"
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
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
        <IncompletedServiceTable
          data={servicesList?.data?.attributes?.result}
          meta={servicesList?.data?.attributes?.pagination}
          loading={isLoading}
          onPageChange={onPageChange}
          showCompanyBlockModal={showCompanyBlockModal}
        />
      </div>

      <IncompletedServiceVendorBlockModal
        isCompanyBlockModalVisible={isCompanyBlockModalVisible}
        handleCompanyBlock={handleCompanyBlock}
        handleCancel={handleCancel}
        currentCompanyRecord={currentCompanyRecord}
      />
    </div>
  );
};

export default IncompletedServices;
