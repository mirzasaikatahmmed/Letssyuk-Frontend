import { Card } from "@/components/ui/card";
import {
  Info,
  ChevronDown,
  ChevronLeft,
  Activity,
  AlertCircle,
  Brain,
} from "lucide-react";
import { useNavigate } from "react-router";

const PhysicalPerformanceDashboard = () => {
  const navigate = useNavigate();

  const profileMetrics = [
    {
      title: "Speed & Acceleration",
      rating: 8,
      benchmark: "Elite",
      target: "Improve 0-10m sprint",
      color: "bg-[#00C950]",
    },
    {
      title: "Stamina & Endurance",
      rating: 7,
      benchmark: "Good",
      target: "Increase high-intensity running",
      color: "bg-[#155DFC]",
    },
    {
      title: "Strength & Power",
      rating: 6,
      benchmark: "Average",
      target: "Improve lower body strength",
      color: "bg-[#FE9A00]",
    },
    {
      title: "Agility & Mobility",
      rating: 9,
      benchmark: "Elite",
      target: "Maintain",
      color: "bg-[#00C950]",
    },
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

        <div className="flex items-center justify-between gap-4 flex-1 bg-[#111111] border border-gray-800 p-4 rounded-xl col-span-8">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#1A101C] rounded-lg border border-[#9C3DFF]/20 hidden md:block">
              <Activity className="text-[#9C3DFF]" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-none mb-1">
                Physical Performance Dashboard
              </h2>
              <p className="text-gray-500 text-xs leading-none">
                Physical metrics tracking and improvement
              </p>
            </div>
          </div>
          <ChevronDown className="text-gray-600" size={20} />
        </div>
      </div>

      {/* Section 1: Physical Profile */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
          Physical Profile
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profileMetrics.map((metric, idx) => (
            <Card
              key={idx}
              className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white space-y-4"
            >
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-sm">{metric.title}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-500 text-[10px] uppercase font-bold">
                    Rating:
                  </span>
                  <span className="text-white text-sm font-bold">
                    {metric.rating}/10
                  </span>
                </div>
              </div>

              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full ${metric.color}`}
                  style={{ width: `${metric.rating * 10}%` }}
                ></div>
              </div>

              <div className="flex justify-between items-center text-[11px]">
                <div className="space-x-1">
                  <span className="text-gray-500 font-medium">Benchmark:</span>
                  <span className="text-gray-300 font-bold">
                    {metric.benchmark}
                  </span>
                </div>
                <div className="space-x-1">
                  <span className="text-gray-500 font-medium">Target:</span>
                  <button className="text-cyan-400 hover:underline transition-all">
                    {metric.target}
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Section 2: Injury Risk Assessment */}
      <div className="bg-[#1A1610] border border-[#FE9A00]/20 p-5 rounded-xl text-white">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="text-[#FE9A00]" size={16} />
          <h3 className="text-xs font-bold uppercase tracking-widest">
            Injury Risk Assessment
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-1">
            <span className="text-gray-500 text-[11px] font-medium block">
              Risk Level:
            </span>
            <span className="text-[#FE9A00] text-sm font-bold">Medium</span>
          </div>
          <div className="space-y-1">
            <span className="text-gray-500 text-[11px] font-medium block">
              Risk Factors:
            </span>
            <span className="text-gray-300 text-[11px]">
              Previous ankle injury, high training load
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-gray-500 text-[11px] font-medium block">
              Prevention:
            </span>
            <span className="text-gray-300 text-[11px]">
              Ankle strengthening, load management
            </span>
          </div>
        </div>
      </div>

      {/* Section 3: Training Program */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
          Training Program
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl space-y-4">
            <h4 className="font-bold text-sm">Speed & Agility</h4>
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-gray-500 text-[11px] font-bold block uppercase tracking-tighter">
                  Exercises:
                </span>
                <p className="text-[11px] text-gray-300">
                  Cone drills, sprint intervals, change of direction
                </p>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-500">Frequency:</span>
                <span className="font-bold text-cyan-400 uppercase">
                  3x/week
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-gray-500 text-[11px] font-bold block uppercase tracking-tighter">
                  Progression:
                </span>
                <p className="text-[11px] text-gray-300">
                  Increase intensity by 10% weekly
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl space-y-4">
            <h4 className="font-bold text-sm">Strength Training (with gym)</h4>
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-gray-500 text-[11px] font-bold block uppercase tracking-tighter">
                  Exercises:
                </span>
                <p className="text-[11px] text-gray-300">
                  Squats, lunges, calf raises, core work
                </p>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-500">Frequency:</span>
                <span className="font-bold text-cyan-400 uppercase">
                  2x/week
                </span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-500">Intensity:</span>
                <span className="font-bold text-cyan-400">
                  Moderate to high
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Section 4: Weekly Focus */}
      <Card className="bg-[#0F0D15] border-[#9C3DFF]/20 p-6 rounded-xl text-white shadow-[0_0_20px_rgba(156,61,255,0.05)]">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1.5 bg-[#9C3DFF]/10 rounded border border-[#9C3DFF]/20">
            <Brain className="text-[#9C3DFF]" size={16} />
          </div>
          <h3 className="text-sm font-bold uppercase tracking-wider">
            Weekly Focus
          </h3>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-gray-500 text-[11px] font-bold block uppercase tracking-tighter">
              Priority Attributes:
            </span>
            <p className="text-[11px] text-gray-300 font-medium">
              Acceleration, lower body strength
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-gray-500 text-[11px] font-bold block uppercase tracking-tighter">
              Target Improvements:
            </span>
            <p className="text-[11px] text-gray-300 font-medium">
              Reduce 20m sprint time by 0.2s
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-gray-500 text-[11px] font-bold block uppercase tracking-tighter">
              Risk Mitigation:
            </span>
            <p className="text-[11px] text-gray-300 font-medium">
              Regular mobility work, proper warmup
            </p>
          </div>
        </div>
      </Card>

      {/* Footer Info */}
      <div className="bg-[#0D1117] border border-gray-800 p-3 rounded-lg flex items-center gap-3">
        <Info size={16} className="text-gray-600 shrink-0" />
        <p className="text-gray-500 text-[10px] leading-relaxed">
          Physical training guidance. Always work with qualified strength &
          conditioning coaches and sports medicine professionals.
        </p>
      </div>
    </div>
  );
};

export default PhysicalPerformanceDashboard;
