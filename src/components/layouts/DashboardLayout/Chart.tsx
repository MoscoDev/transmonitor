import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Total: 1200 },
  { name: "Feb", Total: 2100 },
  { name: "Mar", Total: 800 },
  { name: "Apr", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "Jun", Total: 1700 },
];

const Chart = ({ aspect = 3.2 / 1, title = "Sales Stats" }) => {
  return (
    <div className="bg-white z--1">
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
        //   width={730}
        //   height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1875f0" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1875f0" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            stroke="gray"
            orientation="top"
            tick={{ fontSize: 14 }}
            axisLine={false}
          />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#1875f0"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
