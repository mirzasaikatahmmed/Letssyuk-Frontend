// import React from 'react';
import { useLocation } from 'react-router';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AgentDNavbar = () => {
  const location = useLocation();

  // Function to convert path to Title
  const getPageTitle = (path: string) => {
    const segments = path.split('/');
    const lastSegment = segments[segments.length - 1];

    switch (lastSegment) {
      case 'overview': return 'Overview';
      case 'suggested-weekly-structure': return 'Weekly Structure';
      case 'priority-focus-areas': return 'Focus Areas';
      case 'nutrition-hydration-guidance': return 'Nutrition & Hydration';
      case 'mental-health': return 'Mental Health';
      case 'data': return 'Data';
      default: return 'Overview';
    }
  };

  const currentTitle = getPageTitle(location.pathname);

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-[#0B0E14] border-b border-gray-800 sticky top-0 z-50">
      {/* Dynamic Breadcrumb */}
      <div className="text-gray-400 text-sm font-medium">
        Player <span className="mx-2 text-gray-600">|</span> 
        <span className="text-[#53DDF5] font-semibold">{currentTitle}</span>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <div className="relative p-2 bg-[#162129] rounded-lg border border-gray-700 cursor-pointer hover:bg-[#1f2e38] transition-colors">
          <Bell size={18} className="text-[#53DDF5]" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#0B0E14]"></span>
        </div>

        {/* User Profile Pill */}
        <div className="flex items-center gap-3 bg-[#162129] p-1 pr-4 rounded-full border border-gray-700 cursor-pointer hover:border-gray-500 transition-all">
          <Avatar className="h-8 w-8 border border-[#53DDF5]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>MC</AvatarFallback>
          </Avatar>
          <div className="text-left hidden sm:block">
            <p className="text-[11px] font-bold text-white leading-tight">Michael Chen</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Midfielder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDNavbar;