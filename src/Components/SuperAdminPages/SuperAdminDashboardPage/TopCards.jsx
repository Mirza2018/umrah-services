import { Spin } from "antd";
import { TopCardIcons } from "../../../../public/images/Flad/FladImages";
import { useCountQuery } from "../../../redux/api/adminApi";

const TopCards = () => {
  const { data, isLoading } = useCountQuery();

  // console.log(data?.data?.attributes);

  const cards = [
    {
      title: "Total Income",
      value: isLoading ? (
        <Spin />
      ) : (
        `${data?.data?.attributes?.totalEarning || 0} $`
      ), // ideally from API: data?.data?.income
      icon: TopCardIcons.income,
    },
    {
      title: "Total Service Booking",
      value: isLoading ? (
        <Spin />
      ) : (
        `${data?.data?.attributes?.successfullBooking || 0}`
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
            (user) => user?._id === "user"
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
            (user) => user?._id === "vendor"
          )?.count || 0}
        </>
      ),
      icon: TopCardIcons.drivers,
    },
  ];
  return (
    <div className="grid lg:grid-cols-4  grid-cols-2 md:gap-5 gap-3 mb-5">
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
              <p className="text-sm lg:text-base xl:text-lg mb-1 ">
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
