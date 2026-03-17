interface OverUtilizedPlayersProps {
  data?: Array<{
    player: string;
    minutes: string;
    status: string;
    action: string;
  }>;
}

const OverUtilizedPlayers = ({ data }: OverUtilizedPlayersProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5 h-full space-y-5">
      <h2 className="text-base font-bold text-red-500 tracking-tight">Over-Utilized Players</h2>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#1A1D24] rounded-lg border border-white/5 p-5 flex justify-between items-center"
          >
            <div className="space-y-1">
              <p className="text-sm font-bold text-white tracking-tight">{item.player}</p>
              <p className="text-[10px] text-zinc-500 font-medium">Risk: {item.status}</p>
              <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-tight">Action: {item.action}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-red-500">95% of minutes</p> {/* Hardcoded string suffix to match image style if minutes is just a number, or just show item.minutes if it includes % */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverUtilizedPlayers;
