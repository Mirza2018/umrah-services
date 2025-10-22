import { useState } from "react";
import { AllIcons } from "../../../public/images/AllImages";
import EarningFromAccount from "../../Components/SuperAdminPages/EarningPage/EarningFromAccount";
import {
  useAllTransactionsQuery,
  useTotalTransactionQuery,
} from "../../redux/api/adminApi";
import { Spin } from "antd";

const EarningsPage = () => {
  const { data: earningsData, isLoading:earningLoading } = useTotalTransactionQuery();
  const topBarEarning = [
    {
      title: "Today Income",
      value: earningLoading ? (
        <Spin />
      ) : (
        `$ ${earningsData?.data?.attributes?.today || 0}`
      ),
      icon: AllIcons.todayIncome,
    },
    {
      title: "Total Income",
      value: earningLoading ? (
        <Spin />
      ) : (
        `$ ${earningsData?.data?.attributes?.total || 0}`
      ),
      icon: AllIcons.totalIncome,
    },
  ];

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

  const { data, isLoading } = useAllTransactionsQuery(filters);

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
          <p className="text-3xl  font-semibold">Earnings</p>
          <div className="flex gap-4 items-center"></div>
        </div>
      </div>
      <main className="p-5">
        {/* <section className="flex justify-center gap-5">
          <div className="text-lg font-normal bg-secondary-color  px-4 py-[14px] rounded-lg flex items-center text-white gap-4 w-fit">
            <LuArrowRightLeft className="text-xl" />
            <p className="text-lg ">Today’s Earning</p>
            <p className="text-2xl">$3230</p>
          </div>
          <div className="text-lg font-normal text-white  bg-secondary-color  px-4 py-[14px] rounded-lg flex items-center gap-4 w-fit">
            <LuArrowRightLeft className="text-xl" />
            <p className="text-lg ">All Earning</p>
            <p className="text-2xl">$3230</p>
          </div>
        </section> */}
        <div className="flex flex-wrap gap-7">
          {topBarEarning.map((t, index) => (
            <div
              key={index}
              className="bg-[#F2F2F2] px-8 py-7 rounded-lg flex-1 flex justify-start items-center gap-7"
            >
              <div className="bg-[#D2F6FF] rounded-3xl w-20 aspect-square flex justify-center items-center">
                <img src={t.icon} alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-medium">{t.title}</h1>
                <p className="text-2xl font-semibold">{t.value}</p>
              </div>
            </div>
          ))}{" "}
        </div>
        <EarningFromAccount
          data={data?.data?.attributes?.transactions}
          meta={data?.data?.attributes?.pagination}
          loading={isLoading}
          onPageChange={onPageChange}
        />
      </main>
    </div>
  );
};

export default EarningsPage;
