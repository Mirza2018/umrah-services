import { Spin } from "antd";
import { TopCardIcons } from "../../../../public/images/Flad/FladImages";
import { useCountQuery } from "../../../redux/api/adminApi";

// Helper function - add commas + optional 2 decimal places
const formatMoney = (amount) => {
  if (amount == null || isNaN(amount)) return "0";

  // If you want to always show .00 even for whole numbers
  return Number(amount).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // If you want to show decimals ONLY when there are cents
  // return Number(amount).toLocaleString("en-US");
};





const TopCards = () => {
  const { data, isLoading } = useCountQuery();

  const cards = [
    {
      title: "Total Income",
      value: isLoading ? (
        <Spin />
      ) : (
        <>{formatMoney(data?.data?.attributes?.totalEarning || 0.00)} $</>
      ),
      icon: TopCardIcons.income,
    },
    {
      title: "Total Service Booking",
      value: isLoading ? (
        <Spin />
      ) : (
        // No change needed here (just number)
        data?.data?.attributes?.successfullBooking || 0
      ),
      icon: TopCardIcons.users,
    },
    {
      title: "Total Customers",
      value: isLoading ? (
        <Spin />
      ) : (
        <>
          {data?.data?.attributes?.userCount.find(
            (user) => user?._id === "user",
          )?.count || 0}
        </>
      ),
      icon: TopCardIcons.owners,
    },
    {
      title: "Total Vendors",
      value: isLoading ? (
        <Spin />
      ) : (
        <>
          {data?.data?.attributes?.userCount.find(
            (user) => user?._id === "vendor",
          )?.count || 0}
        </>
      ),
      icon: TopCardIcons.drivers,
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-5 gap-3 mb-5">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex bg-white border border-[#d1d1d1] gap-5 flex-wrap rounded-lg py-2 px-1 lg:p-5 items-center justify-center flex-1 text-black"
        >
          <div className="flex gap-2 xl:gap-4 items-center">
            <img src={card.icon} className="h-14 w-12" alt={card.title} />
            <div className="w-fit">
              <p className="text-lg lg:text-xl xl:text-[32px] font-semibold">
                {card.value}
              </p>
              <p className="text-sm lg:text-base xl:text-lg mb-1">
                {card.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCards;
