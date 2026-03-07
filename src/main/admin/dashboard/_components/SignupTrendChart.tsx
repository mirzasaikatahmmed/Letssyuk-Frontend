import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Jan 26", signups: 45 },
  { date: "Jan 27", signups: 57 },
  { date: "Jan 28", signups: 41 },
  { date: "Jan 29", signups: 53 },
  { date: "Jan 30", signups: 60 },
  { date: "Jan 31", signups: 50 },
  { date: "Feb 01", signups: 44 },
  { date: "Feb 02", signups: 62 },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a1d27] border border-white/10 rounded-lg px-3 py-2 text-xs text-white shadow-lg">
        <p className="text-gray-400 mb-0.5">{label}</p>
        <p className="font-semibold text-cyan-400">{payload[0].value} sign-ups</p>
      </div>
    );
  }
  return null;
};

const SignupTrendChart = () => {
  return (
    <div className="bg-[#0f1117] border border-white/[0.07] rounded-xl p-5 flex flex-col gap-4">
      <h3 className="text-white font-semibold text-sm">
        Sign-ups Trend (Last 7 Days)
      </h3>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="signupGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.05)"
            vertical={false}
          />
          <XAxis
            dataKey="date"
            tick={{ fill: "#6b7280", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickMargin={8}
          />
          <YAxis
            tick={{ fill: "#6b7280", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickMargin={4}
            domain={[0, 80]}
            ticks={[0, 20, 40, 60, 80]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="signups"
            stroke="#22d3ee"
            strokeWidth={2.5}
            fill="url(#signupGradient)"
            dot={false}
            activeDot={{ r: 4, fill: "#22d3ee", strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SignupTrendChart;
