import React from "react";
import { ExternalLink } from "lucide-react";

import type { Player } from "../_data/data";

interface OpportunitiesViewProps {
  player: Player;
}

const OpportunitiesView: React.FC<OpportunitiesViewProps> = ({ player }) => {
  return (
    <div className="p-20 text-center text-gray-500 bg-[#11161D]/40 rounded-3xl border border-gray-800/60 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
      <ExternalLink size={48} className="mx-auto mb-4 opacity-20" />
      <h3 className="text-lg font-bold text-white mb-2">
        Opportunities Dashboard for {player.name}
      </h3>
      <p className="text-sm">Coming soon in the next update.</p>
    </div>
  );
};

export default OpportunitiesView;
