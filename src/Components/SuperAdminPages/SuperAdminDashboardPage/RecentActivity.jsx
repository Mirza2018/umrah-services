import React from "react";
import { Link } from "react-router-dom";
import { AllIcons } from "../../../../public/images/AllImages";

const activities = [
  {
    id: "1",
    activity: "You added a driver successfully.",
    description:
      "You added a driver to your app successfully. Now they can add users.",
    time: "2:00 PM",
  },
  {
    id: "2",
    activity: "A driver added 6 Service Users.",
    description: "A driver added 6 Service Users to your app.",
    time: "2:00 PM",
  },
  {
    id: "3",
    activity: "A driver added 4 Carers.",
    description: "A driver added 4 Carers to your app.",
    time: "2:00 PM",
  },
  {
    id: "4",
    activity: "You added a driver successfully.",
    description:
      "You added a driver to your app successfully. Now they can add users.",
    time: "2:00 PM",
  },
  {
    id: "5",
    activity: "A driver added 6 Service Users.",
    description: "A driver added 6 Service Users to your app.",
    time: "2:00 PM",
  },
  {
    id: "6",
    activity: "A driver added 4 Carers.",
    description: "A driver added 4 Carers to your app.",
    time: "2:00 PM",
  },
  {
    id: "7",
    activity: "A driver added 8 Service Users.",
    description: "A driver added 8 Service Users to your app.",
    time: "3:00 PM",
  },
  {
    id: "8",
    activity: "You added a driver successfully.",
    description:
      "You added a driver to your app successfully. Now they can add users.",
    time: "3:30 PM",
  },
  {
    id: "9",
    activity: "A driver added 5 Carers.",
    description: "A driver added 5 Carers to your app.",
    time: "4:00 PM",
  },
  {
    id: "10",
    activity: "A driver added 3 Service Users.",
    description: "A driver added 3 Service Users to your app.",
    time: "4:15 PM",
  },
  {
    id: "11",
    activity: "A driver added 7 Carers.",
    description: "A driver added 7 Carers to your app.",
    time: "5:00 PM",
  },
  {
    id: "12",
    activity: "You added a driver successfully.",
    description:
      "You added a driver to your app successfully. Now they can add users.",
    time: "5:30 PM",
  },
  {
    id: "13",
    activity: "A driver added 10 Service Users.",
    description: "A driver added 10 Service Users to your app.",
    time: "6:00 PM",
  },
  {
    id: "14",
    activity: "A driver added 2 Carers.",
    description: "A driver added 2 Carers to your app.",
    time: "6:15 PM",
  },
  {
    id: "15",
    activity: "You added a driver successfully.",
    description:
      "You added a driver to your app successfully. Now they can add users.",
    time: "6:30 PM",
  },
];
const RecentActivity = () => {
  const user = JSON.parse(localStorage.getItem("home_care_user"));
  return (
    <div
      className="w-full max-h-[300px] xl:max-h-[600px] overflow-y-auto  rounded-xl relative"
      style={{ boxShadow: "0px 0px 5px 1px #00000040" }}
    >
      <div className="flex justify-between items-center sticky top-0 p-5 bg-white z-10">
        <h1 className="text-xl font-semibold text-input-color">
          Recent Activity
        </h1>
        <Link to={`/${user?.role}/notifications`}>
          {/* <Link to={`/notifications`}> */}
          <p className="cursor-pointer text-[#8A8D8E]  ">View all</p>
        </Link>
      </div>
      <div className="flex flex-col gap-5 p-5 bg-white">
        {activities.map((activity, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className=" p-1 bg-[#B4B8BD] rounded-full w-fit">
              <img src={AllIcons.bell} className="w-5 h-5" alt="" />
            </div>
            <div>
              <p className="text-[#242424] text-base">{activity.activity}</p>
              {/* <p className="text-xs text-[#8A8D8E] mt-2">
                {activity.description}
              </p> */}
              <p className="text-xs text-[#8A8D8E] mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
