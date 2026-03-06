import { useState } from "react";
import {
  TrendingUp,
  Clock,
  AlertCircle,
  AlertTriangle,
  CheckCheck,
} from "lucide-react";
import { toast } from "sonner";

const initialNotifications = [
  {
    id: 1,
    title: "Strong Performance Alert",
    description:
      "James Mitchell has scored 3 goals in the last 2 matches. Market value trending upward.",
    time: "2 hours ago",
    type: "performance",
    isUnread: true,
    icon: <TrendingUp size={18} className="text-cyan-400" />,
  },
  {
    id: 2,
    title: "Contract Expiring Soon",
    description:
      "Oliver Bennett's contract expires in 5 months. Consider renewal negotiations.",
    time: "5 hours ago",
    type: "contract",
    isUnread: true,
    icon: <AlertTriangle size={18} className="text-amber-500" />,
  },
  {
    id: 3,
    title: "Contract Expiring Soon",
    description:
      "Oliver Bennett's contract expires in 5 months. Consider renewal negotiations.",
    time: "5 hours ago",
    type: "contract",
    isUnread: true,
    icon: <AlertTriangle size={18} className="text-amber-500" />,
  },
  {
    id: 4,
    title: "Contract Expiring Soon",
    description:
      "Oliver Bennett's contract expires in 5 months. Consider renewal negotiations.",
    time: "5 hours ago",
    type: "contract",
    isUnread: true,
    icon: <AlertTriangle size={18} className="text-amber-500" />,
  },
  {
    id: 5,
    title: "Player Milestone Achieved",
    description: "Harry Collins has reached 100 Premier League appearances.",
    time: "2 days ago",
    type: "milestone",
    isUnread: false,
    icon: <TrendingUp size={18} className="text-cyan-400" />,
  },
  {
    id: 6,
    title: "Performance Dip Detected",
    description:
      "Liam Richardson has had reduced playing time over the last 4 matches.",
    time: "4 days ago",
    type: "alert",
    isUnread: false,
    icon: <AlertCircle size={18} className="text-red-500" />,
  },
];

const AgentNotification = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter((n) => n.isUnread).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isUnread: false })));
    toast.success("All notifications marked as read");
  };

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isUnread: false } : n)),
    );
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white p-6 md:p-12 font-primary">
      <div className="space-y-12">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-[32px] font-bold tracking-tight">
                Notifications
              </h1>
              <p className="text-[#6B7280] text-[15px] font-medium leading-relaxed">
                Stay updated on your players' performance and contracts
              </p>
            </div>
            <div className="">
              {unreadCount > 0 && (
                <span className="bg-[#0B2129] text-cyan-400 text-[11px] font-bold px-4 py-1.5 rounded-full border border-cyan-500/20 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full"></span>
                  {unreadCount} unread
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={markAllAsRead}
              disabled={unreadCount === 0}
              className="bg-[#11161D] border border-gray-800/60 rounded-[18px] py-4 px-6 flex items-center gap-4 transition-all hover:bg-gray-800/60 hover:border-gray-700 cursor-pointer shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <div className="p-2.5 bg-[#0B2129] rounded-xl text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                <CheckCheck size={24} />
              </div>
              <div className="text-left pr-4">
                <p className="text-[14px] font-bold text-gray-100">
                  Mark All as Read
                </p>
                <p className="text-[11px] text-[#6B7280] font-medium">
                  Clear all notifications
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              onClick={() => markAsRead(notif.id)}
              className={`relative bg-[#11161D]/40 border border-gray-800/40 rounded-[20px] p-7 transition-all hover:bg-[#11161D]/60 hover:border-gray-700/60 cursor-pointer animate-in fade-in slide-in-from-bottom-2 duration-500`}
            >
              <div className="flex items-start gap-7">
                {/* Icon Container */}
                <div
                  className={`h-[54px] w-[54px] shrink-0 bg-[#0B0E14] rounded-[14px] border border-gray-800/60 flex items-center justify-center transition-transform hover:scale-105`}
                >
                  {notif.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between pr-4">
                    <div className="space-y-2">
                      <h3
                        className={`text-[17px] font-bold transition-colors ${notif.isUnread ? "text-gray-100" : "text-gray-400"}`}
                      >
                        {notif.title}
                      </h3>
                      <p className="text-[#6B7280] text-[14px] leading-relaxed max-w-4xl font-medium">
                        {notif.description}
                      </p>
                      <div className="flex items-center gap-2 pt-2 text-[#4B5563]">
                        <Clock size={14} className="opacity-70" />
                        <span className="text-[12px] font-medium">
                          {notif.time}
                        </span>
                      </div>
                    </div>

                    {/* Blue Unread Dot on the right */}
                    {notif.isUnread && (
                      <span className="mt-2 h-2.5 w-2.5 bg-[#00D1FF] rounded-full shadow-[0_0_12px_rgba(0,209,255,0.6)]"></span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentNotification;
