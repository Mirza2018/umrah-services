import axios from "axios";
import React, { useEffect, useState } from "react";
import OwnerRequestSingle from "../../Components/SuperAdminPages/DriverRequestPage/OwnerRequestSingle";
import { useRequestedVendorQuery } from "../../redux/api/adminApi";
import DeleteVendorRequest from "./DeleteVendorRequest";
import { Pagination } from "antd";

const OwnerRequest = () => {
  const [requestedDrivers, setRequestedDrivers] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/data/allVendorData.json");
  //       setData(response?.data); // Make sure this is an array
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       // setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
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
    useRequestedVendorQuery(filters);
  const handleSearch = (search) => {
    setFilters((prev) => ({
      ...prev,
      search: search,
    }));
  };

  console.log(requestedDrivers);
  // console.log(data?.data?.attributes?.pagination);

  return (
    <div className="bg-white rounded-tl-xl rounded-tr-xl h-full">
      {/* Header  */}
      <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p
            // onClick={() => window.history.back()}
            className="text-3xl  font-semibold flex justify-center items-center gap-2"
          >
            {/* <FaChevronLeft /> */}
            Vendors Platform Onboarding Requests
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-10">
        {data?.data?.attributes?.users?.map((singleData) => (
          <OwnerRequestSingle
            data={singleData}
            key={singleData?._id}
            setRequestedDrivers={setRequestedDrivers}
            setIsDeleted={setIsDeleted}
          />
        ))}

        <DeleteVendorRequest
          isDeleted={isDeleted}
          setIsDeleted={setIsDeleted}
          driverData={requestedDrivers?._id}
          sID={requestedDrivers?.serviceType?.type}
        />
      </div>
      {/* pagination=
      {{
        current: meta?.page,
        pageSize: meta?.limit,
        total: meta?.total,
        onChange: onPageChange,
   
      }} */}

      <Pagination
        align="end"
        current={data?.data?.attributes?.pagination?.current}
        pageSize={data?.data?.attributes?.pagination?.limit}
        total={data?.data?.attributes?.pagination?.total}
        onChange={onPageChange}
      />
    </div>
  );
};

export default OwnerRequest;
