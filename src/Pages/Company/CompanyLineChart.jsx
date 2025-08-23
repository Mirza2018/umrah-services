import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Line,
} from "recharts";

const data = [
  {
    name: "Jan",
    passenger: 500,
    driver: 300,
  },
  {
    name: "Feb",
    passenger: 1100,
    driver: 900,
  },
  {
    name: "Mar",
    passenger: 700,
    driver: 500,
  },
  {
    name: "Apr",
    passenger: 1000,
    driver: 800,
  },
  {
    name: "May",
    passenger: 1400,
    driver: 1200,
  },
  {
    name: "Jun",
    passenger: 1200,
    driver: 1000,
  },
  {
    name: "Jul",
    passenger: 800,
    driver: 600,
  },
  {
    name: "Aug",
    passenger: 600,
    driver: 400,
  },
  {
    name: "Sep",
    passenger: 1300,
    driver: 1100,
  },
  {
    name: "Oct",
    passenger: 1000,
    driver: 800,
  },
  {
    name: "Nov",
    passenger: 800,
    driver: 600,
  },
  {
    name: "Dec",
    passenger: 1400,
    driver: 1200,
  },
];
const CompanyLineChart = () => {
  return (
    <div className="w-full h-96 p-5 ">
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#00000040" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 1500]} />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="passenger"
            stroke="#242424" // Blue for passenger
            strokeWidth={4}
            dot={{
              r: 0,
              stroke: "#242424",
              strokeWidth: 0,
              fill: "#00000040",
            }} // Blue dots with white fill
            activeDot={{ r: 10 }} // Active dot style
          />
          <Line
            type="monotone"
            dataKey="driver"
            stroke="#B4B8BD" // Teal for service users
            strokeWidth={4}
            dot={{ r: 0, stroke: "#B4B8BD", strokeWidth: 0, fill: "#00000040" }} // Teal dots with white fill
            activeDot={{ r: 10 }}
          />
          {/* <Line
              type="monotone"
              dataKey="carer"
              stroke="#559BAC" // Yellow for carers
              strokeWidth={4}
              dot={{ r: 0, stroke: "#559BAC", strokeWidth: 0, fill: "#00000040" }} // Yellow dots with white fill
              activeDot={{ r: 10 }}
            /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompanyLineChart;
