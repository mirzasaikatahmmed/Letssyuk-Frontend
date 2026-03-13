import { NavLink } from "react-router";
import {
  LayoutDashboard,
  ShieldCheck,
  Users,
  CreditCard,
  LifeBuoy,
  ChevronLeft,
  LogOut,
  X,
} from "lucide-react";
import logo from "@/assets/logo/logo.png";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";

interface AdminSidebarProps {
  onClose?: () => void;
}

const AdminSidebar = ({ onClose }: AdminSidebarProps) => {
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Successfully logged out");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard",                   path: "/admin/dashboard" },
    { icon: ShieldCheck,     label: "Verifications (Under 18)",    path: "/admin/dashboard/verifications" },
    { icon: Users,           label: "Users",                       path: "/admin/dashboard/users" },
    { icon: CreditCard,      label: "Payments",                    path: "/admin/dashboard/payments" },
    { icon: LifeBuoy,        label: "Support",                     path: "/admin/dashboard/support" },
  ];

  return (
    <div className="w-64 h-screen bg-[#0B0E14] border-r border-gray-800 flex flex-col p-4 text-gray-400">
      {/* Logo + mobile close button */}
      <div className="flex items-center justify-between mb-10 px-2">
        <div className="overflow-hidden h-20 flex-1 flex items-center justify-center">
          <img
            className="scale-125 object-contain"
            src={logo}
            alt="OnyxSport AI Logo"
          />
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/6 transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === "/admin/dashboard"}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                isActive
                  ? "bg-[#53DDF520] text-[#53DDF5] shadow-md shadow-[#53DDF5]/20"
                  : "bg-transparent text-gray-400 hover:bg-gray-900 hover:text-white"
              }`
            }
          >
            <item.icon size={20} className="shrink-0" />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-800 pt-4 space-y-1">
        <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-900 rounded-xl cursor-pointer transition-colors">
          <ChevronLeft size={20} className="shrink-0" />
          <span className="text-sm">Collapse</span>
        </button>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-3 hover:bg-gray-900 rounded-xl cursor-pointer transition-colors text-red-400/80 hover:text-red-400"
        >
          <LogOut size={20} className="shrink-0" />
          <span className="text-sm">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
