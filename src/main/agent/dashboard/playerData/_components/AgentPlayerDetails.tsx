import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Edit3, X, TrendingUp, Clock, ExternalLink } from "lucide-react";
import { playersData } from "../_data/data";

import OverviewView from "./OverviewView";
import ContractView from "./ContractView";
import OpportunitiesView from "./OpportunitiesView";

const AgentPlayerDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<string>("Overview");

  const player = playersData.find((p) => p.id === Number(id)) || playersData[0];

  if (!player) {
    return <div className="p-20 text-center text-white">Player not found</div>;
  }

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return <OverviewView player={player} />;
      case "Contract":
        return <ContractView player={player} />;
      case "Opportunities":
        return <OpportunitiesView player={player} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#0B0E14] min-h-screen text-white p-6 pb-12 font-sans overflow-x-hidden">
      {/* Top Navigation Header */}
      <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full border-2 border-cyan-500/30 overflow-hidden shadow-lg shadow-cyan-500/10">
            <img
              src={player.image}
              alt={player.name}
              className="h-full w-full object-center"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{player.name}</h1>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
              <span>{player.position}</span>
              <span className="text-gray-700">•</span>
              <span className="flex items-center gap-1">
                🏴 {player.nation}
              </span>
              <span className="text-gray-700">•</span>
              <span>{player.club}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1A232E] hover:bg-[#252F3C] border border-cyan-900/30 rounded-lg text-cyan-400 text-xs font-bold transition-all cursor-pointer font-sans">
            <Edit3 size={14} />
            Edit Player Data
          </button>
          <button
            onClick={() => navigate(-1)}
            className="p-2 text-gray-500 hover:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-8 border-b border-gray-800 mb-8 max-w-7xl mx-auto">
        <button
          onClick={() => setActiveTab("Overview")}
          className={`pb-4 px-2 border-b-2 text-sm font-bold flex items-center gap-2 transition-all cursor-pointer font-sans ${activeTab === "Overview" ? "border-cyan-500 text-cyan-500" : "border-transparent text-gray-500 hover:text-gray-300"}`}
        >
          <TrendingUp size={16} /> Overview
        </button>
        <button
          onClick={() => setActiveTab("Contract")}
          className={`pb-4 px-2 border-b-2 text-sm font-bold flex items-center gap-2 transition-all cursor-pointer font-sans ${activeTab === "Contract" ? "border-cyan-500 text-cyan-500" : "border-transparent text-gray-500 hover:text-gray-300"}`}
        >
          <Clock size={16} /> Contract
        </button>
        <button
          onClick={() => setActiveTab("Opportunities")}
          className={`pb-4 px-2 border-b-2 text-sm font-bold flex items-center gap-2 transition-all cursor-pointer font-sans ${activeTab === "Opportunities" ? "border-cyan-500 text-cyan-500" : "border-transparent text-gray-500 hover:text-gray-300"}`}
        >
          <ExternalLink size={16} /> Opportunities
        </button>
      </div>

      <div className="max-w-7xl mx-auto">{renderContent()}</div>
    </div>
  );
};

export default AgentPlayerDetails;
