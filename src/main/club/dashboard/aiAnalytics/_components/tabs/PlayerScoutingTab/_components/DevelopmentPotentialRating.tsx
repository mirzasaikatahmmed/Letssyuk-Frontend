import { Activity } from "lucide-react";

interface DevelopmentPotentialRatingProps {
  data?: {
    technical_growth: number;
    tactical_development: number;
    physical_development: number;
    mental_development: number;
    overall_potential: number;
  };
}

const DevelopmentPotentialRating = ({ data }: DevelopmentPotentialRatingProps) => {
  if (!data) return null;

  const ratings = [
    { label: "Technical Growth", score: data.technical_growth },
    { label: "Tactical Development", score: data.tactical_development },
    { label: "Physical Development", score: data.physical_development },
    { label: "Mental Development", score: data.mental_development },
  ];

  return (
    <div className="bg-[#12141B] p-6 rounded-2xl border border-white/5 h-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
          <Activity className="text-cyan-400" size={20} />
        </div>
        <h2 className="text-lg font-semibold text-white">Development Potential Rating</h2>
      </div>

      {/* 2x2 Grid of Ratings */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {ratings.map((item, i) => (
          <div
            key={i}
            className="bg-[#1A1D24] rounded-xl border border-white/5 p-5 transition-all hover:bg-[#23272F]"
          >
            <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2 font-bold">{item.label}</p>
            <p className="text-3xl font-bold text-white">
              {item.score}
              <span className="text-sm font-medium text-zinc-600 ml-1">
                /10
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Overall Potential */}
      <div className="bg-[#1A1D24] rounded-xl border border-cyan-500/20 p-5 bg-linear-to-br from-[#1A1D24] to-cyan-500/5">
        <p className="text-[10px] uppercase tracking-wider text-cyan-500 font-bold mb-2">Overall Potential</p>
        <p className="text-4xl font-black text-white">
          {data.overall_potential}
          <span className="text-lg font-medium text-zinc-600 ml-1">/10</span>
        </p>
      </div>
    </div>
  );
};

export default DevelopmentPotentialRating;
