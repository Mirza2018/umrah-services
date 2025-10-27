import { useState } from "react";
import NotificationStatusFromAccount from "../../Components/SuperAdminPages/NotificationStatusPage/NotificationStatusFromAccount";
import AddNotification from "../../Components/Modal/Admin/AddNotification";
import { useHistoryNotificationQuery } from "../../redux/api/adminApi";

const NotificationStatus = () => {
  const [isDirect, setIsDirect] = useState(false);
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
    
      const { data, isLoading, isFetching, isSuccess } =
        useHistoryNotificationQuery(filters);
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
        <div className=" w-[95%] mx-auto  flex items-center justify-center gap-5">
          <button
            onClick={() => setIsDirect(true)}
            className={`border border-secondary-color text-secondary-color text-lg font-medium px-8 py-1 rounded-lg  ${
              isDirect ? "bg-[#FFC4B0]" : ""
            }`}
          >
            Direct Notification
          </button>
          <button
            onClick={() => setIsDirect(false)}
            className={`border border-secondary-color text-secondary-color text-lg font-medium px-5 py-1 rounded-lg ${
              isDirect ? "" : "bg-[#FFC4B0]"
            }`}
          >
            Communication History
          </button>
        </div>
      </div>
      <main className="p-5">
        {isDirect ? (
          <AddNotification />
        ) : (
          <NotificationStatusFromAccount
            data={data?.data?.attributes?.notification}
            meta={data?.data?.attributes?.pagination}
            loading={isLoading}
            onPageChange={onPageChange}
          />
        )}
      </main>
    </div>
  );
};

export default NotificationStatus;
