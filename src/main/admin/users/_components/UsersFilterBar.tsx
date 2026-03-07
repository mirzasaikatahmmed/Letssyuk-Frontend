import { Search, X } from "lucide-react";

interface UsersFilterBarProps {
  search: string;
  onSearchChange: (v: string) => void;
  role: string;
  onRoleChange: (v: string) => void;
  ageGroup: string;
  onAgeGroupChange: (v: string) => void;
  status: string;
  onStatusChange: (v: string) => void;
  plan: string;
  onPlanChange: (v: string) => void;
  showing: number;
  total: number;
  onClearFilters: () => void;
}

const selectClass =
  "bg-[#0f1117] border border-white/[0.08] text-gray-300 text-sm rounded-lg px-3 py-2 pr-8 appearance-none focus:outline-none focus:border-cyan-500/50 cursor-pointer hover:border-white/20 transition-colors";

const UsersFilterBar = ({
  search,
  onSearchChange,
  role,
  onRoleChange,
  ageGroup,
  onAgeGroupChange,
  status,
  onStatusChange,
  plan,
  onPlanChange,
  showing,
  total,
  onClearFilters,
}: UsersFilterBarProps) => {
  const hasActiveFilters =
    search !== "" ||
    role !== "all" ||
    ageGroup !== "all" ||
    status !== "all" ||
    plan !== "all";

  return (
    <div className="bg-[#0f1117] border border-white/[0.07] rounded-xl p-4 flex flex-col gap-4">
      {/* Filters Row */}
      <div className="flex flex-wrap gap-3 items-center">
        {/* Search */}
        <div className="relative flex-1 min-w-[180px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#080a0f] border border-white/[0.08] text-gray-300 text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-cyan-500/50 placeholder:text-gray-600 hover:border-white/20 transition-colors"
          />
          {search && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Role */}
        <div className="relative">
          <select
            value={role}
            onChange={(e) => onRoleChange(e.target.value)}
            className={selectClass}
          >
            <option value="all">All Roles</option>
            <option value="Athlete">Athlete</option>
            <option value="Agent">Agent</option>
            <option value="Club">Club</option>
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500">
            ▾
          </span>
        </div>

        {/* Age Group */}
        <div className="relative">
          <select
            value={ageGroup}
            onChange={(e) => onAgeGroupChange(e.target.value)}
            className={selectClass}
          >
            <option value="all">All Ages</option>
            <option value="Under 18">Under 18</option>
            <option value="18+">18+</option>
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500">
            ▾
          </span>
        </div>

        {/* Status */}
        <div className="relative">
          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className={selectClass}
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Suspended">Suspended</option>
            <option value="Pending">Pending</option>
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500">
            ▾
          </span>
        </div>

        {/* Plan */}
        <div className="relative">
          <select
            value={plan}
            onChange={(e) => onPlanChange(e.target.value)}
            className={selectClass}
          >
            <option value="all">All Plans</option>
            <option value="Pro Monthly">Pro Monthly</option>
            <option value="Enterprise Annual">Enterprise Annual</option>
            <option value="Free (Under-18)">Free (Under-18)</option>
            <option value="Club Monthly">Club Monthly</option>
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500">
            ▾
          </span>
        </div>
      </div>

      {/* Count Row */}
      <div className="flex items-center justify-between">
        <span className="text-gray-400 text-sm">
          Showing <span className="text-white font-medium">{showing}</span> of{" "}
          <span className="text-white font-medium">{total}</span> users
        </span>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default UsersFilterBar;
