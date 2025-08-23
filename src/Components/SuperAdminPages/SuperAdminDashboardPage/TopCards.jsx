import { TopCardIcons } from "../../../../public/images/Flad/FladImages";

const TopCards = () => {
  const cards = [
    {
      title: "Total Income",
      value: "$2.5K", // ideally from API: data?.data?.income
      icon: TopCardIcons.income,
    },
    {
      title: "Total Servics",
      value: "203",
      icon: TopCardIcons.users,
    },
    {
      title: "Total Customers",
      value: "309",
      icon: TopCardIcons.owners,
    },
    {
      title: "Total Vendors",
      value: "506",
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
