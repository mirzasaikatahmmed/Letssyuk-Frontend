import { useNavigate, useSearchParams } from "react-router";
import {
  X,
  Calendar,
  FileText,
  TrendingUp,
  Briefcase,
  DollarSign,
  Zap,
  Target,
  Bell,
  User,
} from "lucide-react";
import BasicInfoForm from "./add-player-forms/BasicInfoForm";
import ContractStructureForm from "./add-player-forms/ContractStructureForm";
import MarketDataForm from "./add-player-forms/MarketDataForm";
import AlternativeOffersForm from "./add-player-forms/AlternativeOffersForm";
import NegotiationForm from "./add-player-forms/NegotiationForm";
import CareerTimelineForm from "./add-player-forms/CareerTimelineForm";
import DealContextForm from "./add-player-forms/DealContextForm";
import OpportunitiesForm from "./add-player-forms/OpportunitiesForm";
import MonitoringForm from "./add-player-forms/MonitoringForm";

const AddNewPlayer = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "Basic Info";

  const setActiveTab = (tabName: string) => {
    setSearchParams({ tab: tabName });
  };

  const tabs = [
    { name: "Basic Info", icon: <User size={14} /> },
    { name: "Contract Structure", icon: <Briefcase size={14} /> },
    { name: "Market Data", icon: <TrendingUp size={14} /> },
    { name: "Alternative Offers", icon: <FileText size={14} /> },
    { name: "Negotiation", icon: <DollarSign size={14} /> },
    { name: "Career Timeline", icon: <Calendar size={14} /> },
    { name: "Deal Context", icon: <Target size={14} /> },
    { name: "Opportunities", icon: <Zap size={14} /> },
    { name: "Monitoring", icon: <Bell size={14} /> },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Basic Info":
        return <BasicInfoForm />;
      case "Contract Structure":
        return <ContractStructureForm />;
      case "Market Data":
        return <MarketDataForm />;
      case "Alternative Offers":
        return <AlternativeOffersForm />;
      case "Negotiation":
        return <NegotiationForm />;
      case "Career Timeline":
        return <CareerTimelineForm />;
      case "Deal Context":
        return <DealContextForm />;
      case "Opportunities":
        return <OpportunitiesForm />;
      case "Monitoring":
        return <MonitoringForm />;
      default:
        return <BasicInfoForm />;
    }
  };

  return (
    <div className="bg-[#0B0E14] min-h-screen text-white font-sans selection:bg-cyan-500/30 pb-20">
      {/* Header */}
      <div className="px-6 pt-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Add New Player
            </h1>
            <p className="text-gray-500 text-sm mt-1 font-medium italic">
              Enter player data and contract details
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="p-2.5 bg-[#11161D] cursor-pointer hover:bg-gray-800 rounded-xl border border-gray-800/60 transition-all group shadow-lg"
          >
            <X size={20} className="text-gray-400 group-hover:text-white" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar border-b border-gray-800/40 mb-10 pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-5 py-3 text-[11px] font-bold tracking-widest whitespace-nowrap transition-all relative ${
                activeTab === tab.name
                  ? "text-cyan-400"
                  : "text-gray-500 hover:text-gray-300 hover:cursor-pointer"
              }`}
            >
              {tab.icon}
              {tab.name}
              {activeTab === tab.name && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Form Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AddNewPlayer;
