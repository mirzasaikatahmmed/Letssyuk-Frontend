import { Search, X } from "lucide-react";

interface PaymentsFilterBarProps {
  search: string;
  onSearchChange: (v: string) => void;
  status: string;
  onStatusChange: (v: string) => void;
  plan: string;
  onPlanChange: (v: string) => void;
  showing: number;
  total: number;
}

const selectClass =
  "bg-[#0f1117] border border-white/[0.08] text-gray-300 text-sm rounded-lg px-3 py-2 pr-8 appearance-none focus:outline-none focus:border-cyan-500/50 cursor-pointer hover:border-white/20 transition-colors flex-1";

const PaymentsFilterBar = ({
  search,
  onSearchChange,
  status,
  onStatusChange,
  plan,
  onPlanChange,
  showing,
  total,
}: PaymentsFilterBarProps) => {
  return (
    <div className="bg-[#0f1117] border border-white/[0.07] rounded-xl p-4 flex flex-col gap-3">
      <div className="flex flex-wrap gap-3 items-center">
        {/* Search */}
        <div className="relative flex-1 min-w-[180px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search transactions..."
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

        {/* Status */}
        <div className="relative">
          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className={selectClass}
          >
            <option value="all">All Status</option>
            <option value="Paid">Paid</option>
            <option value="Active">Active</option>
            <option value="Failed">Failed</option>
            <option value="Refunded">Refunded</option>
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
            <option value="Free">Free</option>
            <option value="Free (Under-18)">Free (Under-18)</option>
            <option value="Pro Monthly">Pro Monthly</option>
            <option value="Club Monthly">Club Monthly</option>
            <option value="Enterprise Annual">Enterprise Annual</option>
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500">
            ▾
          </span>
        </div>
      </div>

      <span className="text-gray-400 text-sm">
        Showing <span className="text-white font-medium">{showing}</span> of{" "}
        <span className="text-white font-medium">{total}</span> transactions
      </span>
    </div>
  );
};

export default PaymentsFilterBar;
