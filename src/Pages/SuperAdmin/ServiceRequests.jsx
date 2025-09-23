import { LuArrowRightLeft } from "react-icons/lu";
import ServiceRequestsTable from "../../Components/SuperAdminPages/ServiceRequests/ServiceRequestsTable";
 
const ServiceRequests = () => {
  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p className="text-3xl  font-semibold">
            Vendor additional services request
          </p>
          <div className="flex gap-4 items-center"></div>
        </div>
      </div>
      <main className="p-5">
        <ServiceRequestsTable />
      </main>
    </div>
  );
};

export default ServiceRequests;
