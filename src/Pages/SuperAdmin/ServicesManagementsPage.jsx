import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import AddServiceModal from "../../Components/Modal/Admin/AddServiceModal";
import ServicesManagementsTable from "../../Components/SuperAdminPages/ServicesManagementsPage/ServicesManagementsTable";
import { useAllServiceQuery } from "../../redux/api/adminApi";

const ServicesManagementsPage = () => {
  const [addService, setAddService] = useState(false);
  const [filters, setFilters] = useState({
    page: 1,
    limit: 8,
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
  } = useAllServiceQuery(filters);
  const handleSearch = (search) => {
    setFilters((prev) => ({
      ...prev,
      search: search,
    }));
  };

  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className=" w-full p-4  flex rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between ms-5">
          <p className="text-3xl  font-semibold">All Service Type</p>
          <div className="flex gap-4 items-center"></div>
        </div>

        <div
          onClick={() => setAddService(true)}
          className="bg-transparent text-black flex justify-center items-center gap-2 py-2 w-96 rounded-lg cursor-pointer border-2 border-[#0000002e]"
        >
          <IoMdAdd className="md:text-3xl text-2xl" />
          <p className="md:text-2xl text-lg font-semibold whitespace-nowrap">
            Add Service Type
          </p>
        </div>
      </div>

      <AddServiceModal addService={addService} setAddService={setAddService} />
      <main className="p-5">
        <ServicesManagementsTable
          data={userList?.data?.attributes}
          meta={userList?.data?.attributes?.pagination}
          loading={isLoading}
          onPageChange={onPageChange}
        />
      </main>
    </div>
  );
};

export default ServicesManagementsPage;
