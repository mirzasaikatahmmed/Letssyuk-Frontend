interface SquadDepthProps {
  data?: {
    position: string;
    chart: Array<{
      rank: number;
      role: string;
      player: string;
      score: number;
    }>;
    depth_score: number;
    depth_rating: string;
  };
}

const SquadDepth = ({ data }: SquadDepthProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5 space-y-3 h-full">
      <h2 className="text-base font-bold text-white tracking-tight">Squad Depth: {data.position}</h2>

      <div className="space-y-2">
        {data.chart.map((item, i) => (
          <div
            key={i}
            className="bg-[#1A1D24] rounded-lg border border-white/5 p-4 flex justify-between items-center"
          >
            <span className="text-sm text-zinc-300 font-bold">
              {item.rank}. {item.role}: <span className="text-white ml-1">{item.player}</span>
            </span>
            <span className="text-sm font-bold text-cyan-400">{item.score}/10</span>
          </div>
        ))}
      </div>

      {/* Depth Score */}
      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
        <p className="text-sm font-bold text-green-400">
          Depth Score: {data.depth_score}/10 ({data.depth_rating})
        </p>
      </div>
    </div>
  );
};

export default SquadDepth;
