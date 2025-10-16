import { LuArrowRightLeft } from "react-icons/lu";
import ServiceRequestsTable from "../../Components/SuperAdminPages/ServiceRequests/ServiceRequestsTable";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import AddServiceModal from "../../Components/Modal/Admin/AddServiceModal";
import CreteServiceForm from "../../Components/CreateServicePage/CreteServiceForm";
import AllPost from "../../Components/CreateServicePage/AllPost";
import VendorServiceRequest from "../../Components/CreateServicePage/VendorServiceRequest";

const CreateService = () => {
  const [isService, setService] = useState("create");
  const [addService, setAddService] = useState(false);
  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      <div className=" w-full p-4  flex rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between ms-5">
          <p className="text-3xl  font-semibold">Create Service</p>
          <div className="flex gap-4 items-center"></div>
        </div>

        {/* <div
          onClick={() => setAddService(true)}
          className="bg-transparent text-black flex justify-center items-center gap-2 py-2 w-96 rounded-lg cursor-pointer border-2 border-[#0000002e] select-none"
        >
          <IoMdAdd className="md:text-3xl text-2xl" />
          <p className="md:text-2xl text-lg font-semibold whitespace-nowrap">
            Add Service
          </p>
        </div> */}
      </div>
      <AddServiceModal addService={addService} setAddService={setAddService} />

      <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl select-none">
        <div className=" w-[95%] mx-auto  flex items-center justify-center gap-5">
          <button
            onClick={() => setService("create")}
            className={`border border-secondary-color text-secondary-color text-lg font-medium px-10 py-1 rounded-lg  ${
              isService == "create" ? "bg-[#FFC4B0]" : ""
            }`}
          >
            Create Service
          </button>
          <button
            onClick={() => setService("post")}
            className={`border border-secondary-color text-secondary-color text-lg font-medium px-16 py-1 rounded-lg  ${
              isService == "post" ? "bg-[#FFC4B0]" : ""
            }`}
          >
            All Post
          </button>
          {/* <button
            onClick={() => setService("vendor")}
            className={`border border-secondary-color text-secondary-color text-lg font-medium px-4 py-1 rounded-lg  ${
              isService == "vendor" ? "bg-[#FFC4B0]" : ""
            }`}
          >
            Vendor Service Request
          </button> */}
        </div>
        {isService == "create" && <CreteServiceForm setService={setService} />}
        {isService == "post" && <AllPost />}
        {/* {isService == "vendor" && <VendorServiceRequest />} */}
      </div>
    </div>
  );
};

export default CreateService;
