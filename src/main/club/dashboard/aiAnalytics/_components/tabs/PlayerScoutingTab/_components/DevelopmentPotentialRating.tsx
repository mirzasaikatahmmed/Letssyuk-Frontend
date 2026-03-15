import { Activity } from "lucide-react";

const ratings = [
  { label: "Technical Growth", score: 8, max: 10 },
  { label: "Tactical Development", score: 7, max: 10 },
  { label: "Physical Development", score: 9, max: 10 },
  { label: "Mental Development", score: 8, max: 10 },
];

const DevelopmentPotentialRating = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <Activity size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Development Potential Rating
        </h2>
      </div>

      {/* 2x2 Grid of Ratings */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {ratings.map((item, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 p-4"
          >
            <p className="text-xs text-gray-500 mb-1">{item.label}</p>
            <p className="text-2xl font-bold text-white">
              {item.score}
              <span className="text-sm font-normal text-gray-500">
                /{item.max}
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Overall Potential */}
      <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
        <p className="text-xs text-gray-500 mb-1">Overall Potential</p>
        <p className="text-3xl font-bold text-white">
          8
          <span className="text-sm font-normal text-gray-500">/10</span>
        </p>
      </div>
    </div>
  );
};

export default DevelopmentPotentialRating;
