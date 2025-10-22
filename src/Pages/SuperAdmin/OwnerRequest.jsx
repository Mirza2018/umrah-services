import axios from "axios";
import React, { useEffect, useState } from "react";
import OwnerRequestSingle from "../../Components/SuperAdminPages/DriverRequestPage/OwnerRequestSingle";
import { useRequestedVendorQuery } from "../../redux/api/adminApi";

const OwnerRequest = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/allVendorData.json");
        setData(response?.data); // Make sure this is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);


  const { data: vendordata } = useRequestedVendorQuery();

  console.log(vendordata);

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
        {data.map((singleData) => (
          <OwnerRequestSingle data={singleData} key={singleData?.id} />
        ))}
      </div>
    </div>
  );
};

export default OwnerRequest;
