import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Line,
  BarChart,
  Bar,
  Rectangle,
  Legend,
} from "recharts";
import { useEarningRatioQuery } from "../../../redux/api/adminApi";
import { useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const UserRatioLineChart = () => {
  const currentYear = new Date().getFullYear();
  // console.log(currentYear);
  const [filter, setFilter] = useState({ year: currentYear });
  const { data, isLoading } = useEarningRatioQuery(filter);

  const onChange = (date, dateString) => {
    console.log(dateString);
    setFilter({ year: dateString });
  };
  return (
    <div className="  rounded-lg">
      <div className="flex justify-between items-center mx-5 my-5">
        <h1 className="text-xl font-bold">Earning</h1>

        <div>
          <DatePicker
            defaultValue={dayjs(new Date())}
            onChange={onChange}
            picker="year"
            prefix=""
          />
        </div>
      </div>
      <div className="w-full h-96 p-5 ">
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data?.data?.attributes}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            barCategoryGap="25%" // more space between categories
          >
            <CartesianGrid
              vertical={false}
              stroke="#A1A1A1"
              strokeDasharray=""
            />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              // Show "$<earning>" in the popup
              formatter={(value) => [`$${value}`, ""]} // only the value line
              // optional: small styling tweaks
              contentStyle={{ borderRadius: 8, borderColor: "#E5E7EB" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "rgba(0,0,0,0.04)" }}
            />
            <Bar
              dataKey="earnings"
              fill="#FE4101"
              barSize={30} // <— reduce bar width
              radius={[4, 4, 0, 0]} // <— rounded top corners
              // Hover effect: slightly darker fill + outline while active
              activeBar={
                <Rectangle
                  radius={[4, 4, 0, 0]}
                  fill="#e43a00"
                  stroke="#A1A1A1"
                  strokeWidth={1}
                  opacity={0.95}
                />
              }
            />
          </BarChart>
        </ResponsiveContainer>
      </div>{" "}
    </div>
  );
};

export default UserRatioLineChart;
