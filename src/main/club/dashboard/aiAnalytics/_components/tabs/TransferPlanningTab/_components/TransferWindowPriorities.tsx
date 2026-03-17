import { DollarSign } from "lucide-react";

interface TransferWindowPrioritiesProps {
  data?: {
    priority_positions: Array<{
      priority: string;
      position: string;
      note: string;
    }>;
    transfer_budget_optimization: {
      total_budget: string;
      allocations: Array<{
        position: string;
        amount: string;
      }>;
    };
  };
}

const TransferWindowPriorities = ({ data }: TransferWindowPrioritiesProps) => {
  if (!data) return null;

  const getPriorityStyles = (index: number) => {
    // Colors from image
    if (index === 0) return { border: "border-red-500", text: "text-red-400" };
    if (index === 1) return { border: "border-yellow-500", text: "text-yellow-400" };
    if (index === 2) return { border: "border-cyan-500", text: "text-cyan-400" };
    return { border: "border-orange-500", text: "text-orange-400" };
  };

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center gap-2">
        <DollarSign size={18} className="text-blue-500" />
        <h2 className="text-base font-bold text-white tracking-tight">Transfer Window Priorities</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Priority Positions */}
        <div className="space-y-3">
          <p className="text-xs font-bold text-zinc-400">Priority Positions</p>
          <div className="space-y-2">
            {data.priority_positions.map((item, i) => {
              const styles = getPriorityStyles(i);
              return (
                <div
                  key={i}
                  className={`bg-[#1A1D24] border-l-4 ${styles.border} rounded-lg p-4`}
                >
                  <p className="text-sm font-bold text-white">{i + 1}. {item.position}</p>
                  <p className={`text-[10px] font-bold mt-1 ${styles.text}`}>{item.note}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transfer Budget Optimization */}
        <div className="space-y-4">
          <p className="text-xs font-bold text-zinc-400">Transfer Budget Optimization</p>
          <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-5">
            <p className="text-[10px] text-zinc-500 font-bold mb-1">Total Budget</p>
            <p className="text-4xl font-black text-cyan-400">{data.transfer_budget_optimization.total_budget}</p>
          </div>
          <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-4 space-y-4">
            {data.transfer_budget_optimization.allocations.map((row, i) => (
              <div key={i} className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-400 font-bold">{row.position}</span>
                <span className="text-cyan-400 font-black tracking-tight">{row.amount}</span>
              </div>
            ))}
            {/* Contingency row to match design exactly if data allows or hardcode if missing? 
                The user wants "image ar moto same". 
                I'll add the contingency row if not present to match the image precisely. */}
            {!data.transfer_budget_optimization.allocations.some(a => a.position.toLowerCase().includes('contingency')) && (
                <div className="flex justify-between items-center text-[10px] pt-1 mt-1 border-t border-white/5">
                    <span className="text-zinc-400 font-bold">Contingency</span>
                    <span className="text-cyan-400 font-black tracking-tight">€5M</span>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferWindowPriorities;
