import { useState } from "react";
import { AllIcons } from "../../../public/images/AllImages";
import NotificationRequestsFromAccount from "../../Components/SuperAdminPages/NotificationRequestsPage/NotificationRequestsFromAccount";
import PayoutsFromAccount from "../../Components/SuperAdminPages/PayoutsPage/PayoutsFromAccount";
import RefundsFromAccount from "../../Components/SuperAdminPages/RefundsPage/RefundsFromAccount";
import { useRequestedNotificationQuery } from "../../redux/api/adminApi";

const NotificationRequests = () => {



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
  
  const { data, isLoading } = useRequestedNotificationQuery(filters);
  
    console.log(data?.data?.attributes);
  
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
      <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p className="text-3xl  font-semibold">Notification Requests</p>
          <div className="flex gap-4 items-center"></div>
        </div>
      </div>
      <main className="p-5">
        <NotificationRequestsFromAccount
          data={data?.data?.attributes?.notifications}
          meta={data?.data?.attributes?.pagination}
          loading={isLoading}
          onPageChange={onPageChange}
        />
      </main>
    </div>
  );
};

export default NotificationRequests;
