import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Athletes", value: 1892, color: "#22d3ee" },
  { name: "Agents", value: 643, color: "#818cf8" },
  { name: "Clubs", value: 312, color: "#f59e0b" },
];

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { name: string; value: number }[];
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a1d27] border border-white/10 rounded-lg px-3 py-2 text-xs text-white shadow-lg">
        <p className="font-semibold">{payload[0].name}</p>
        <p className="text-gray-400">{payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

const UserDistributionChart = () => {
  const total = data.reduce((acc, d) => acc + d.value, 0);

  return (
    <div className="bg-[#0f1117] border border-white/[0.07] rounded-xl p-5 flex flex-col gap-4">
      <h3 className="text-white font-semibold text-sm">User Distribution</h3>

      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
            <span className="text-white font-bold text-xl">
              {total.toLocaleString()}
            </span>
            <span className="text-gray-500 text-[10px]">Total</span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-400 text-xs">{item.name}</span>
              </div>
              <span className="text-white text-xs font-semibold">
                {item.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDistributionChart;
