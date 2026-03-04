interface SignupEntry {
  name: string;
  type: "Athlete" | "Agent" | "Club";
  age: string;
  location: string;
  timeAgo: string;
}

const signups: SignupEntry[] = [
  {
    name: "Marcus Johnson",
    type: "Athlete",
    age: "22",
    location: "London, UK",
    timeAgo: "2 hours ago",
  },
  {
    name: "Elite Sports Agency",
    type: "Agent",
    age: "N/A",
    location: "Los Angeles, USA",
    timeAgo: "3 hours ago",
  },
  {
    name: "FC Barcelona Youth",
    type: "Club",
    age: "N/A",
    location: "Barcelona, Spain",
    timeAgo: "5 hours ago",
  },
  {
    name: "Sarah Williams",
    type: "Athlete",
    age: "17",
    location: "Manchester, UK",
    timeAgo: "6 hours ago",
  },
  {
    name: "Global Talent Group",
    type: "Agent",
    age: "N/A",
    location: "Dubai, UAE",
    timeAgo: "7 hours ago",
  },
];

const typeBadgeColors: Record<string, string> = {
  Athlete: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/20",
  Agent: "bg-purple-500/15 text-purple-400 border border-purple-500/20",
  Club: "bg-amber-500/15 text-amber-400 border border-amber-500/20",
};

const RecentSignups = () => {
  return (
    <div className="bg-[#0f1117] border border-white/[0.07] rounded-xl p-5 flex flex-col gap-4">
      <h3 className="text-white font-semibold text-sm">Recent Sign-ups</h3>

      <div className="flex flex-col divide-y divide-white/[0.05]">
        {signups.map((entry, i) => (
          <div key={i} className="flex items-start justify-between py-3 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-1.5">
              <span className="text-white text-sm font-medium">{entry.name}</span>
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${typeBadgeColors[entry.type]}`}
                >
                  {entry.type}
                </span>
                <span className="text-gray-500 text-[11px]">Age: {entry.age}</span>
                <span className="text-gray-500 text-[11px]">•</span>
                <span className="text-gray-500 text-[11px]">{entry.location}</span>
              </div>
            </div>
            <span className="text-gray-500 text-[11px] whitespace-nowrap ml-3 mt-0.5 shrink-0">
              {entry.timeAgo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSignups;
