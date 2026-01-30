import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Search, Plus, Eye, Edit3, Trash2, ArrowUpDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const INITIAL_PLAYERS = Array(8).fill({
  id: "OA-ENG-2024-001",
  name: "Marcus Sterling",
  country: "England",
  position: "Forward",
  age: 24,
  aiScore: 94,
  availability: "Available",
  avatar: "https://github.com/shadcn.png",
});

const PlayerManagement = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleAction = (type: "view" | "edit", id: string) => {
    const path =
      type === "view"
        ? `/club/dashboard/players/details/${id}`
        : `/club/dashboard/players/edit/${id}`;
    navigate(path);
  };

  return (
    <div className="p-7 bg-[#0B0E14] min-h-screen space-y-7">
      {/* Header - Balanced Scale */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Players Management
          </h1>
          <p className="text-gray-400 text-sm mt-0.5 font-medium">
            Manage your squad roster and player data
          </p>
        </div>
        <button className="bg-[#53DDF5] hover:shadow-[0_0_12px_#53DDF530] text-[#0B0E14] font-extrabold py-2.5 px-6 rounded-lg flex items-center gap-2 transition-all">
          <Plus size={18} strokeWidth={3} />
          <span className="text-sm">Add Player</span>
        </button>
      </div>

      {/* Search Bar - Balanced height */}
      <div className="relative group">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#53DDF5] transition-colors"
          size={18}
        />
        <input
          className="w-full bg-[#0B0E14] border border-gray-800 pl-12 h-13 text-sm text-gray-300 focus:outline-none focus:border-[#30D5C8]/70 rounded-xl transition-all placeholder:text-gray-700"
          placeholder="Search by name, position, or ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Table Container - Sharp Grid, No Radius */}
      <div className="w-full overflow-hidden border border-gray-800 bg-[#0B0E14]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-800">
              {[
                { label: "Name", sort: true },
                { label: "Position", sort: true },
                { label: "Age", sort: false },
                { label: "ID", sort: false },
                { label: "AI Score", sort: true },
                { label: "Availability", sort: false },
                { label: "Actions", sort: false },
              ].map((col, i) => (
                <th
                  key={i}
                  className="bg-[#235D67]/20 px-5 py-4 text-[12px] font-black text-gray-300 uppercase tracking-widest border-r border-gray-800 last:border-r-0"
                >
                  <div
                    className={`flex items-center gap-2 ${i > 1 && i < 6 ? "justify-center" : ""}`}
                  >
                    {col.label}
                    {col.sort && (
                      <ArrowUpDown size={14} className="opacity-40" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-[#162129]/10">
            {INITIAL_PLAYERS.map((player, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-800/60 hover:bg-[#53DDF5]/5 transition-colors group"
              >
                <td className="px-5 py-4 border-r border-gray-800/50">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 border border-gray-700 group-hover:border-[#30D5C8]/60 transition-all">
                      <AvatarImage src={player.avatar} />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-[15px] font-bold text-white leading-tight">
                        {player.name}
                      </p>
                      <p className="text-[11px] text-gray-500 font-bold uppercase tracking-tighter">
                        England
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm font-bold text-gray-300 border-r border-gray-800/50">
                  {player.position}
                </td>
                <td className="px-5 py-4 text-sm font-bold text-gray-300 text-center border-r border-gray-800/50">
                  {player.age}
                </td>
                <td className="px-5 py-4 text-[13px] font-mono font-bold text-[#53DDF5] text-center border-r border-gray-800/50">
                  <span className="underline underline-offset-4 cursor-pointer hover:text-white">
                    {player.id}
                  </span>
                </td>
                <td className="px-5 py-4 text-xl font-black text-[#00A63E] text-center border-r border-gray-800/50">
                  {player.aiScore}
                </td>
                <td className="px-5 py-4 text-center border-r border-gray-800/50">
                  <span className="bg-[#00A63E]/10 text-[#00A63E] border border-[#00A63E]/40 text-[10px] font-black px-3 py-1.5 rounded-md uppercase tracking-wider">
                    {player.availability}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => handleAction("view", player.id)}
                      className="p-2 bg-[#53DDF5]/10 text-[#53DDF5] rounded-lg hover:bg-[#53DDF5] hover:text-[#0B0E14] transition-all"
                    >
                      <Eye size={16} strokeWidth={2.5} />
                    </button>
                    <button
                      onClick={() => handleAction("edit", player.id)}
                      className="p-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition-all"
                    >
                      <Edit3 size={16} strokeWidth={2.5} />
                    </button>
                    <button className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all">
                      <Trash2 size={16} strokeWidth={2.5} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Cards - Balanced padding and size */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Players", val: "6" },
          { label: "Available", val: "4" },
          { label: "Avg AI Score", val: "83" },
          { label: "Avg Form", val: "7.5" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#162129]/30 border border-gray-800 p-6 rounded-2xl"
          >
            <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-2">
              {item.label}
            </p>
            <p className="text-3xl font-black text-white leading-none">
              {item.val}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerManagement;
