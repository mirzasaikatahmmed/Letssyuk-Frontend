import { Star } from "lucide-react";

const markers = [
  "Exceptional vision identified",
  "Leadership qualities emerging",
  "Technical proficiency high",
  "Physical development on track",
];

const TalentMarkers = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <div className="flex items-center gap-2 mb-5">
        <Star size={16} className="text-cyan-400" />
        <h2 className="text-base font-semibold text-cyan-400">Talent Markers</h2>
      </div>

      <div className="space-y-3">
        {markers.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span className="text-sm text-gray-300">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalentMarkers;
