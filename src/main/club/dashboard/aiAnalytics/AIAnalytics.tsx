import { useSearchParams } from "react-router";
import {
  LayoutDashboard,
  Users,
  Target,
  Shield,
  GraduationCap,
  Brain,
  UserPlus,
  TrendingUp,
  Archive,
  Clipboard,
} from "lucide-react";
import DashboardTab from "./_components/tabs/DashboardTab";
import PlayerScoutingTab from "./_components/tabs/PlayerScoutingTab/PlayerScoutingTab";
import TacticalAnalysisTab from "./_components/tabs/TacticalAnalysisTab/TacticalAnalysisTab";
import OppositionTab from "./_components/tabs/OppositionTab/OppositionTab";
import AcademyTab from "./_components/tabs/AcademyTab";
import SquadIntelligenceTab from "./_components/tabs/SquadIntelligenceTab";
import RecruitmentTab from "./_components/tabs/RecruitmentTab";
import TransferPlanningTab from "./_components/tabs/TransferPlanningTab";
import MatchArchiveTab from "./_components/tabs/MatchArchiveTab";
import StaffBriefingTab from "./_components/tabs/StaffBriefingTab";

const AIAnalytics = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "Dashboard";

  const setActiveTab = (tabName: string) => {
    setSearchParams({ tab: tabName });
  };

  const tabs = [
    { name: "Dashboard", icon: <LayoutDashboard size={16} /> },
    { name: "Player Scouting", icon: <Users size={16} /> },
    { name: "Tactical Analysis", icon: <Target size={16} /> },
    { name: "Opposition", icon: <Shield size={16} /> },
    { name: "Academy", icon: <GraduationCap size={16} /> },
    { name: "Squad Intelligence", icon: <Brain size={16} /> },
    { name: "Recruitment", icon: <UserPlus size={16} /> },
    { name: "Transfer Planning", icon: <TrendingUp size={16} /> },
    { name: "Match Archive", icon: <Archive size={16} /> },
    { name: "Staff Briefing", icon: <Clipboard size={16} /> },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <DashboardTab />;
      case "Player Scouting":
        return <PlayerScoutingTab />;
      case "Tactical Analysis":
        return <TacticalAnalysisTab />;
      case "Opposition":
        return <OppositionTab />;
      case "Academy":
        return <AcademyTab />;
      case "Squad Intelligence":
        return <SquadIntelligenceTab />;
      case "Recruitment":
        return <RecruitmentTab />;
      case "Transfer Planning":
        return <TransferPlanningTab />;
      case "Match Archive":
        return <MatchArchiveTab />;
      case "Staff Briefing":
        return <StaffBriefingTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <div className="bg-[#0B0E14] min-h-screen text-white font-sans selection:bg-cyan-500/30 pb-10">
      <div className="px-2">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
              <Brain className="text-cyan-400" size={24} />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              AI Analytics Hub
            </h1>
          </div>
          <p className="text-gray-500 text-sm font-medium">
            Advanced AI-powered analysis tools for data-driven decision making
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto mb-10 custom-scrollbar bg-[#1D1F1F] rounded-md">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all rounded-lg ${
                activeTab === tab.name
                  ? "bg-[#00D3F2] text-black"
                  : "text-gray-400 hover:text-gray-300 hover:bg-gray-800/50"
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        <div>
          {/* Tab Content */}
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AIAnalytics;
