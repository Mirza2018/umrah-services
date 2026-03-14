import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

import AddDiscountModal from "../../Components/Modal/Admin/AddDiscountModal";
import DiscountTable from "../../Components/SuperAdminPages/AdminPage/DiscountTable";
import {
  useAllDiscountQuery,
} from "../../redux/api/adminApi";

const DiscountPage = () => {
  const [isAddAdmin, setisAddAdmin] = useState(false);

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

  const { data, currentData, isLoading, isFetching, isSuccess } =
    useAllDiscountQuery(filters);
  const handleSearch = (search) => {
    setFilters((prev) => ({
      ...prev,
      search: search,
    }));
  };
  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      // style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className=" w-full p-4  flex rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between ms-5">
          <p className="text-3xl  font-semibold">Discount Page</p>
          <div className="flex gap-4 items-center"></div>
        </div>

        <div
          onClick={() => setisAddAdmin(true)}
          className="bg-transparent text-black flex justify-center items-center gap-2 py-2 w-96 rounded-lg cursor-pointer border-2 border-[#0000002e]"
        >
          <IoMdAdd className="md:text-3xl text-2xl" />
          <p className="md:text-2xl text-lg font-semibold whitespace-nowrap">
            Add Discount
          </p>
        </div>
      </div>

      <AddDiscountModal isAddAdmin={isAddAdmin} setisAddAdmin={setisAddAdmin} />
      <main className="p-5">
        <DiscountTable
          data={data?.data?.attributes?.result}
          meta={data?.data?.attributes?.pagination}
          loading={isLoading}
          onPageChange={onPageChange}
        />
      </main>
    </div>
  );
};

export default DiscountPage;
