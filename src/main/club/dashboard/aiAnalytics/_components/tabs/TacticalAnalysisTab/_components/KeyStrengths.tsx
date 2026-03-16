import { TrendingUp } from "lucide-react";

interface KeyStrengthsProps {
  data?: Array<{
    label: string;
    score: number;
  }>;
}

const KeyStrengths = ({ data }: KeyStrengthsProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5 h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp size={18} className="text-green-500" />
        <h2 className="text-base font-bold text-green-500">Key Strengths</h2>
      </div>

      <div className="space-y-4">
        {data.map((item, i) => (
          <div key={i} className="bg-[#1A1D24] p-4 rounded-xl border border-white/5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-zinc-300 font-medium">{item.label}</span>
              <span className="text-xs font-bold text-green-500">
                {item.score}/10
              </span>
            </div>
            <div className="w-full h-2 bg-[#12141B] rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${(item.score / 10) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyStrengths;
