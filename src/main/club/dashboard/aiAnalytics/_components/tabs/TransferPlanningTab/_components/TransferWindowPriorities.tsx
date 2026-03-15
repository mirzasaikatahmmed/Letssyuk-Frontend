import { DollarSign } from "lucide-react";

const positions = [
  { rank: "1. Right-back", note: "Critical need", noteColor: "text-red-400", borderColor: "border-red-500" },
  { rank: "2. Central midfielder", note: "Depth needed", noteColor: "text-yellow-400", borderColor: "border-yellow-500" },
  { rank: "3. Forward", note: "Long-term planning", noteColor: "text-cyan-400", borderColor: "border-cyan-500" },
  { rank: "4. Center-back", note: "Aging player", noteColor: "text-gray-400", borderColor: "border-gray-600" },
];

const budgetRows = [
  { label: "Right back", value: "€15-20M", color: "text-cyan-400" },
  { label: "Midfielder", value: "€10-15M", color: "text-cyan-400" },
  { label: "Forward", value: "€15-20M", color: "text-cyan-400" },
  { label: "Contingency", value: "€5M", color: "text-cyan-400" },
];

const TransferWindowPriorities = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <DollarSign size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Transfer Window Priorities
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Priority Positions */}
        <div>
          <p className="text-xs font-semibold text-gray-400 mb-3">Priority Positions</p>
          <div className="space-y-2">
            {positions.map((item, i) => (
              <div
                key={i}
                className={`bg-[#27272A] border-l-4 ${item.borderColor} rounded-r-xl p-4`}
              >
                <p className="text-sm font-semibold text-white">{item.rank}</p>
                <p className={`text-xs mt-0.5 ${item.noteColor}`}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transfer Budget Optimization */}
        <div>
          <p className="text-xs font-semibold text-gray-400 mb-3">Transfer Budget Optimization</p>
          <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4 mb-3">
            <p className="text-xs text-gray-500 mb-1">Total Budget</p>
            <p className="text-3xl font-bold text-cyan-400">€50M</p>
          </div>
          <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4 space-y-3">
            {budgetRows.map((row, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-sm text-gray-300">{row.label}</span>
                <span className={`text-sm font-semibold ${row.color}`}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferWindowPriorities;
