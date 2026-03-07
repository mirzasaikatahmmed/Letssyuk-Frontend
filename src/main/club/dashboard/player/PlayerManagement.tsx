import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, Plus, Edit3, Trash2, ArrowUpDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { players, type Player } from "./_data/data";
import PlayerFormModal from "./_components/PlayerFormModal";

const PlayerManagement = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const [sortConfig, setSortConfig] = useState<{
    key: keyof Player | null;
    direction: "asc" | "desc";
  }>({
    key: null,
    direction: "asc",
  });

  const handleAction = (type: "view" | "edit", id: string) => {
    if (type === "view") {
      navigate(`/club/dashboard/players/details/${id}`);
    } else {
      const player = players.find((p) => p.id === id);
      setSelectedPlayer(player || null);
      setModalMode("edit");
      setIsModalOpen(true);
    }
  };

  const openAddModal = () => {
    setSelectedPlayer(null);
    setModalMode("add");
    setIsModalOpen(true);
  };

  const handleSort = (key: keyof Player) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredPlayers = players.filter(
    (player) =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.playerId.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sortedPlayers = [...filteredPlayers].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const columns = [
    { label: "Name", key: "playerId", sort: true },
    { label: "Position", key: null, sort: false },
    { label: "Age", key: null, sort: false },
    { label: "ID", key: null, sort: false },
    { label: "Availability", key: null, sort: false },
    { label: "Actions", key: null, sort: false },
  ];

  return (
    <div className="p-10 bg-[#0B0E14] min-h-screen space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Players Management
          </h1>
          <p className="text-gray-400 text-sm mt-1 font-medium italic opacity-80">
            Manage your squad roster and player data
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] text-[#0B0E14] font-black py-2.5 px-6 rounded-lg flex items-center gap-2 transition-all cursor-pointer"
        >
          <Plus size={18} strokeWidth={3} />
          <span className="text-sm">Add Player</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative group">
        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-cyan-400 transition-colors"
          size={20}
        />
        <input
          className="w-full bg-[#0B0E14] border border-gray-800/80 pl-14 h-14 text-sm text-gray-300 focus:outline-none focus:border-cyan-500/50 rounded-xl transition-all placeholder:text-gray-700 shadow-inner"
          placeholder="Search by name, position, or ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Table Container */}
      <div className="w-full overflow-hidden border border-gray-800/60 bg-[#0B1219]/40 rounded-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-800">
              {columns.map((col) => (
                <th
                  key={col.label}
                  onClick={() => col.key && handleSort(col.key as keyof Player)}
                  className={`bg-[#235D67]/10 px-6 py-5 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] border-r border-gray-800/40 last:border-r-0 ${col.key ? "cursor-pointer hover:bg-cyan-400/5 transition-colors" : ""}`}
                >
                  <div className="flex items-center gap-2 justify-center">
                    {col.label}
                    {col.sort && (
                      <ArrowUpDown
                        size={14}
                        className={`transition-opacity ${sortConfig.key === col.key ? "opacity-100 text-cyan-400" : "opacity-30"}`}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedPlayers.map((player, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-800/40 hover:bg-cyan-400/5 transition-colors group"
              >
                {/* Name & Country */}
                <td className="px-6 py-4 border-r border-gray-800/40">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 border border-gray-800 group-hover:border-cyan-500/50 transition-colors">
                      <AvatarImage src={player.avatar} />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-[14px] font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {player.name}
                      </p>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                        {player.country}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Position */}
                <td className="px-6 py-4 text-center border-r border-gray-800/40">
                  <span className="text-sm font-bold text-gray-400 group-hover:text-gray-200">
                    {player.position}
                  </span>
                </td>

                {/* Age */}
                <td className="px-6 py-4 text-[15px] font-bold text-gray-400 text-center border-r border-gray-800/40 group-hover:text-gray-200">
                  {player.age}
                </td>

                {/* ID */}
                <td className="px-6 py-4 text-[13px] font-mono font-bold text-cyan-500 text-center border-r border-gray-800/40">
                  <span className="hover:text-white transition-colors">
                    {player.playerId}
                  </span>
                </td>

                {/* Availability */}
                <td className="px-6 py-4 text-center border-r border-gray-800/40">
                  <span
                    className={`${player.availability === "Available" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : player.availability === "Minor Injury" ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-red-500/10 text-red-500 border-red-500/20"} border text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider`}
                  >
                    {player.availability}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleAction("view", player.id)}
                      className="px-4 py-1.5 bg-cyan-500 text-[#0B0E14] text-[11px] font-black rounded-md hover:bg-cyan-400 transition-all cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleAction("edit", player.id)}
                      className="p-1.5 text-cyan-500/60 hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button className="p-1.5 text-red-500/60 hover:text-red-500 transition-colors cursor-pointer">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        {[
          { label: "Total Players", val: filteredPlayers.length.toString() },
          {
            label: "Available",
            val: filteredPlayers
              .filter((p) => p.availability === "Available")
              .length.toString(),
          },
          { label: "Avg Form", val: "7.5" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#11161D]/40 border border-gray-800/60 p-8 rounded-[24px] hover:border-cyan-500/30 transition-all duration-500 group shadow-lg"
          >
            <p className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] mb-3 group-hover:text-gray-400">
              {item.label}
            </p>
            <p className="text-4xl font-black text-white group-hover:text-cyan-400 transition-colors">
              {item.val}
            </p>
          </div>
        ))}
      </div>

      {/* Player Form Modal */}
      {isModalOpen && (
        <PlayerFormModal
          key={selectedPlayer?.id || "add-new"}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          mode={modalMode}
          playerData={selectedPlayer}
        />
      )}
    </div>
  );
};

export default PlayerManagement;
