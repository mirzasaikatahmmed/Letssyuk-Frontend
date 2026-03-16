interface SetPieceTendenciesProps {
  data?: {
    attacking_corners: {
      near_post_percent: number;
      far_post_percent: number;
      short_corner_percent: number;
      other_percent: number;
    };
    key_target: {
      name: string;
      height: string;
      note: string;
    };
  };
}

const SetPieceTendencies = ({ data }: SetPieceTendenciesProps) => {
  if (!data) return null;

  const corners = [
    { label: "Near post", pct: data.attacking_corners.near_post_percent },
    { label: "Far post", pct: data.attacking_corners.far_post_percent },
    { label: "Short corner", pct: data.attacking_corners.short_corner_percent },
    { label: "Other", pct: data.attacking_corners.other_percent },
  ];

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6">
      <h2 className="text-base font-bold text-white mb-6 tracking-tight">Set-Piece Tendencies</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Attacking Corners */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-5">
          <p className="text-xs font-bold text-white mb-6">Attacking Corners</p>
          <div className="space-y-6">
            {corners.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">{item.label}</span>
                  <span className="text-xs font-bold text-cyan-400">
                    {item.pct}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-400 rounded-full"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Target */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-5">
          <p className="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-tight">Key Target</p>
          <p className="text-2xl font-bold text-white mb-1">{data.key_target.name}</p>
          <p className="text-xs text-zinc-500 font-medium mb-4">Height: {data.key_target.height}</p>
          <p className="text-xs text-cyan-400 font-medium leading-relaxed">
            {data.key_target.note}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SetPieceTendencies;
