
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { StatSummary } from "./_components/StatSummary";
import { PlayerGrid } from "./_components/PlayerGrid";
import { RecruitmentSuggestions } from "./_components/RecruitmentSuggestions";

const ClubOverview = () => {
  return (
    <div className=" bg-[#0B0E14] min-h-screen">
      <div className=" mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight">Dashboard Overview</h1>
          <p className="text-gray-400 text-xs">AI-powered insights for club management and recruitment</p>
        </div>

        <StatSummary />

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Player Overview</h2>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
              <Input 
                className="bg-[#162129] border-gray-800 pl-10 h-9 text-xs text-white" 
                placeholder="Search by name, position, or ID..." 
              />
            </div>
          </div>
          <PlayerGrid />
        </div>

        <RecruitmentSuggestions />
      </div>
    </div>
  );
};

export default ClubOverview;