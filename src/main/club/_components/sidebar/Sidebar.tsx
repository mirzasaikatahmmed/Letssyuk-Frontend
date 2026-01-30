// import React from 'react';
import { NavLink } from 'react-router'; // Changed to react-router-dom
import { Home,  User, LifeBuoy, Bell, ChevronLeft, LogOut } from 'lucide-react';
import logo from "@/assets/logo/logo.png";
import { FiUsers } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";

const ClubDSidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', path: '/club/dashboard/overview' },
    { icon: FiUsers, label: 'Players', path: '/club/dashboard/players' },
    { icon: LuSearch , label: 'Available Players', path: '/club/dashboard/available-players' },
    { icon: User, label: 'Profile', path: '/club/dashboard/profile' },
    { icon: LifeBuoy, label: 'Help and Support', path: '/club/dashboard/support' },
    { icon: Bell, label: 'Notifications', path: '/club/dashboard/notifications' },
  ];

  return (
    <div className="w-64 h-screen bg-[#0B0E14] border-r border-gray-800 flex flex-col p-4 text-gray-400">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-10 px-2">
        <div className='overflow-hidden h-20 w-full flex items-center justify-center'>
          <img 
            className="scale-125 object-contain" 
            src={logo} 
            alt="OnyxSport AI Logo" 
          />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200  ${
                isActive 
                  ? 'bg-[#53DDF520] text-[#53DDF5] shadow-md shadow-[#53DDF5]' 
                  : 'bg-transparent border-transparent text-gray-400 hover:bg-gray-900'
              }`
            }
          >
            <item.icon size={20} />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer Section */}
      <div className="border-t border-gray-800 pt-4 space-y-2">
        <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-900 rounded-xl cursor-pointer transition-colors">
          <ChevronLeft size={20} />
          <span className="text-sm">Collapse</span>
        </button>
        <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-900 rounded-xl cursor-pointer transition-colors text-red-400/80 hover:text-red-400">
          <LogOut size={20} />
          <span className="text-sm">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default ClubDSidebar;