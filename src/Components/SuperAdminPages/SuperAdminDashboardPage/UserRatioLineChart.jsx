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

const data = [
  {
    name: "Jan",
    earning: 500,
    driver: 300,
    owner: 400,
  },
  {
    name: "Feb",
    earning: 1100,
    driver: 900,
    owner: 400,
  },
  {
    name: "Mar",
    earning: 700,
    driver: 500,
    owner: 400,
  },
  {
    name: "Apr",
    earning: 1000,
    driver: 800,
    owner: 400,
  },
  {
    name: "May",
    earning: 1400,
    driver: 1200,
    owner: 400,
  },
  {
    name: "Jun",
    earning: 1200,
    driver: 1000,
    owner: 400,
  },
  {
    name: "Jul",
    earning: 800,
    driver: 600,
    owner: 400,
  },
  {
    name: "Aug",
    earning: 600,
    driver: 400,
    owner: 400,
  },
  {
    name: "Sep",
    earning: 1300,
    driver: 1100,
    owner: 400,
  },
  {
    name: "Oct",
    earning: 1000,
    driver: 800,
    owner: 400,
  },
  {
    name: "Nov",
    earning: 800,
    driver: 600,
    owner: 400,
  },
  {
    name: "Dec",
    earning: 1400,
    driver: 1200,
    owner: 400,
  },
];
const UserRatioLineChart = () => {
  return (
    <div className="w-full h-96 p-5 ">
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          barCategoryGap="25%" // more space between categories
        >
          <CartesianGrid vertical={false} stroke="#A1A1A1" strokeDasharray="" />
          <XAxis dataKey="name" />
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
            dataKey="earning"
            fill="#FE4101"
            barSize={30} // <— reduce bar width
            radius={[4,4, 0, 0]} // <— rounded top corners
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
    </div>
  );
};

export default UserRatioLineChart;

        
