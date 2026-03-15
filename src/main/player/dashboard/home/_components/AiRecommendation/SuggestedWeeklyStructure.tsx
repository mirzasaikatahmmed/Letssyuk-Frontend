import { useNavigate } from "react-router";
import { Card } from "@/components/ui/card";
import { Info, ChevronLeft, ChevronDown, Calendar } from "lucide-react";

const SuggestedWeeklyStructure = () => {
  const navigate = useNavigate();
  const days = [
    { day: "Mon", type: "Technical", time: "90 min", color: "#0DA9A2" },
    { day: "Tue", type: "Physical", time: "60 min", color: "#9810FA" },
    { day: "Wed", type: "Match", time: "90 min", color: "#E17100" },
    { day: "Thu", type: "Recovery", time: "Light", color: "#00A63E" },
    { day: "Fri", type: "Technical", time: "90 min", color: "#0DA9A2" },
    { day: "Sat", type: "Match Prep", time: "60 min", color: "#155DFC" },
    { day: "Sun", type: "Rest", time: "Full", color: "#364153" },
  ];

  return (
    <div className="bg-[#0B0E14] text-white p-6 space-y-6 min-h-screen font-sans">
      {/* Top Header with Back Button */}
      <div className="grid grid-cols-12 items-center gap-4 mb-2">
        <div className="col-span-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-900/50 text-gray-300 hover:border-cyan-500/50 transition-all text-sm font-medium bg-[#0B0E14] group shrink-0 cursor-pointer"
          >
            <ChevronLeft
              size={18}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Back
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 flex-1 bg-[#111111] border border-gray-800 p-4 rounded-xl col-span-8 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#0A101C] rounded-lg border border-[#0DA9A2]/20 hidden md:block">
              <Calendar className="text-[#0DA9A2]" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-none mb-1">
                Suggested Weekly Structure
              </h2>
              <p className="text-gray-500 text-xs leading-none">
                AI-optimized training and recovery cycle
              </p>
            </div>
          </div>
          <ChevronDown className="text-gray-600" size={20} />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
          Weekly Training Cycle
        </h3>
        <Card className="bg-[#0B1219] border-gray-800 p-6 rounded-2xl shadow-xl">
          {/* Horizontal Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 mb-8">
            {days.map((item, index) => (
              <div
                key={index}
                className="rounded-xl p-4 flex flex-col justify-between h-36 transition-all hover:scale-[1.03] cursor-default border border-white/10 shadow-lg"
                style={{ backgroundColor: item.color }}
              >
                <div>
                  <p className="text-white/80 text-[10px] font-bold uppercase tracking-wider">
                    {item.day}
                  </p>
                  <p className="text-white text-sm font-extrabold mt-1 leading-tight">
                    {item.type}
                  </p>
                </div>
                <div className="bg-black/20 p-1.5 rounded-md text-center border border-white/5">
                  <p className="text-white/90 text-[10px] font-bold">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 px-1">
            <div className="space-y-2">
              <span className="text-[10px] text-gray-500 font-bold uppercase">
                Volume:
              </span>
              <p className="text-xs text-gray-300">
                Total high-intensity load: 180 min
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] text-gray-500 font-bold uppercase">
                Focus:
              </span>
              <p className="text-xs text-gray-300">
                Aerobic base & specific technical drills
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] text-gray-500 font-bold uppercase">
                Match Day:
              </span>
              <p className="text-xs text-gray-300">
                Wednesday (Competitive/Friendly)
              </p>
            </div>
          </div>

          {/* Disclaimer Footer */}
          <div className="bg-[#0D161E] border border-[#0DA9A2]/30 p-4 rounded-xl flex items-start gap-3 shadow-inner">
            <Info size={18} className="text-[#0DA9A2] mt-0.5 shrink-0" />
            <p className="text-gray-400 text-[11px] leading-relaxed">
              This structure is an AI-generated guidance model. It does not
              replace professional coaching or medical advice. Always consult
              your coaching staff before making significant changes to your
              routine.
            </p>
          </div>
        </Card>
      </div>

      {/* Footer Info Box */}
      <div className="bg-[#0D1117] border border-gray-800 p-3 rounded-lg flex items-center gap-3">
        <Info size={16} className="text-gray-600 shrink-0" />
        <p className="text-gray-500 text-[10px] leading-relaxed">
          Weekly structures are dynamically updated based on your match
          schedule, load metrics, and developmental goals.
        </p>
      </div>
    </div>
  );
};

export default SuggestedWeeklyStructure;
