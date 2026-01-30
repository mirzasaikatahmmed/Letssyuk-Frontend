import  { useState } from 'react';
import { Check, Trash2, Info, CheckCircle2, AlertCircle, CheckSquare } from 'lucide-react';

const ClubNotification = () => {
  // Functional State for Notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'info',
      title: 'Welcome to OnyxSport AI',
      message: 'Your club dashboard is ready to use',
      time: '4m ago',
      isRead: false
    },
    {
      id: 2,
      type: 'success',
      title: 'Match Data Updated',
      message: 'Post-match performance data successfully recorded for 6 players against Manchester United.',
      time: 'Yesterday',
      isRead: true
    },
    {
      id: 3,
      type: 'warning',
      title: 'Contract Expiring Soon',
      message: "Oliver Thompson's contract expires on Dec 31, 2024. Consider renewal negotiations.",
      time: '5h ago',
      isRead: false
    },
    {
        id: 4,
        type: 'success',
        title: 'Match Data Updated',
        message: 'Post-match performance data successfully recorded for 6 players against Manchester United.',
        time: 'Yesterday',
        isRead: true
    },
    {
        id: 5,
        type: 'warning',
        title: 'Contract Expiring Soon',
        message: "Oliver Thompson's contract expires on Dec 31, 2024. Consider renewal negotiations.",
        time: '5h ago',
        isRead: false
    }
  ]);

  // Actions
  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="p-8 bg-[#0B0E14] min-h-screen text-white font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Notifications</h1>
          <p className="text-gray-500 text-sm mt-1 font-medium">
            You have <span className="text-[#53DDF5]">{unreadCount}</span> unread notifications
          </p>
        </div>
        <button 
          onClick={markAllRead}
          className="bg-[#53DDF5] hover:bg-[#42c5db] text-[#0B0E14] px-6 py-2.5 rounded-lg font-black text-sm flex items-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(83,221,245,0.2)]"
        >
          <CheckSquare size={18} strokeWidth={3} /> Mark all as read
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notif) => (
          <div 
            key={notif.id} 
            className={`group relative flex items-start gap-5 p-6 rounded-xl border transition-all duration-200 ${
              notif.type === 'info' ? 'border-[#53DDF5]/20 bg-[#11161D]' :
              notif.type === 'success' ? 'border-[#05DF72]/20 bg-[#11161D]' :
              'border-[#FFB01F]/20 bg-[#11161D]'
            } hover:bg-[#161d26]`}
          >
            {/* Icon */}
            <div className="mt-1">
              {notif.type === 'info' && <Info className="text-[#53DDF5]" size={20} />}
              {notif.type === 'success' && <CheckCircle2 className="text-[#05DF72]" size={20} />}
              {notif.type === 'warning' && <AlertCircle className="text-[#FFB01F]" size={20} />}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-[15px] font-black tracking-wide text-gray-100">{notif.title}</h3>
              </div>
              <p className="text-sm text-gray-400 font-medium leading-relaxed max-w-4xl">{notif.message}</p>
              <span className="text-[11px] text-gray-600 font-bold uppercase tracking-wider mt-2 block">{notif.time}</span>
            </div>

            {/* Actions Panel */}
            <div className="flex items-center gap-4">
              {!notif.isRead && (
                <div className="h-2 w-2 rounded-full bg-[#53DDF5] shadow-[0_0_8px_#53DDF5]" />
              )}
              
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {!notif.isRead && (
                  <button 
                    onClick={() => markAsRead(notif.id)}
                    className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-[#05DF72] transition-colors"
                    title="Mark as read"
                  >
                    <Check size={18} />
                  </button>
                )}
                <button 
                  onClick={() => deleteNotification(notif.id)}
                  className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="text-center py-20 bg-[#11161D] rounded-2xl border border-dashed border-gray-800">
            <p className="text-gray-500 font-bold uppercase tracking-widest">No notifications found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClubNotification;