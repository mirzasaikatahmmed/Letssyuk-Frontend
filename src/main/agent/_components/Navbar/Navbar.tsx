import { useLocation, useNavigate } from "react-router";
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AgentDNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Mapping logic to ensure Navbar title matches Sidebar paths exactly
  const getPageTitle = (path: string) => {
    const segments = path.split("/");
    const lastSegment = segments[segments.length - 1];

    const titleMap: Record<string, string> = {
      overview: "Dashboard Overview",
      "player-data": "Player Management",
      profile: "Agent Profile",
      support: "Help & Support",
      notifications: "Notifications",
    };

    return titleMap[lastSegment] || "Overview";
  };

  const currentTitle = getPageTitle(location.pathname);

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-[#0B0E14] border-b border-gray-800 sticky top-0 z-50">
      {/* Left: Dynamic Breadcrumb & Title */}
      <div className="flex flex-col">
        <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-0.5">
          Agent Console <span className="mx-1 text-gray-700">/</span>
          <span className="text-[#53DDF5]">{currentTitle}</span>
        </div>
        <h2 className="text-xl font-black text-white tracking-tight">
          {currentTitle}
        </h2>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-6">
        {/* Functional Search Bar */}
        <div className="hidden md:flex items-center gap-2 bg-[#162129]/40 border border-gray-800 px-4 py-2 rounded-xl group focus-within:border-[#53DDF5]/50 transition-all">
          <Search
            size={16}
            className="text-gray-500 group-focus-within:text-[#53DDF5]"
          />
          <input
            type="text"
            placeholder="Search players..."
            className="bg-transparent text-sm text-white outline-none w-48 placeholder:text-gray-600 font-medium"
          />
        </div>

        {/* Notification Bell with Pulse Badge */}
        <div
          onClick={() => navigate("/agent/dashboard/notifications")}
          className="relative p-2.5 bg-[#162129] rounded-xl border border-gray-800 cursor-pointer hover:bg-[#1f2e38] transition-all group"
        >
          <Bell
            size={20}
            className="text-gray-400 group-hover:text-[#53DDF5] transition-colors"
          />
          {/* Active Notification Indicator */}
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#53DDF5] rounded-full border-2 border-[#0B0E14] animate-pulse"></span>
        </div>

        {/* User Profile Pill */}
        <div
          onClick={() => navigate("/agent/dashboard/profile")}
          className="flex items-center gap-3 bg-[#162129] p-1.5 pr-5 rounded-full border border-gray-800 cursor-pointer hover:border-[#53DDF5]/40 transition-all group"
        >
          <div className="relative">
            <Avatar className="h-9 w-9 border-2 border-[#53DDF5]/30 group-hover:border-[#53DDF5]">
              <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" />
              <AvatarFallback className="bg-gray-800 text-[#53DDF5] text-xs font-bold">
                MR
              </AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#05DF72] rounded-full border-2 border-[#0B0E14]"></div>
          </div>

          <div className="text-left hidden sm:block">
            <p className="text-xs font-black text-white leading-tight">
              Marcus Reynolds
            </p>
            <p className="text-[10px] text-[#53DDF5] font-bold uppercase tracking-widest mt-0.5">
              Licensed Agent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDNavbar;
