import { useState } from 'react';
import { Upload, Save, Phone, Mail, MapPin, User, Building2, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import AgentProfileChangePassword from './_components/ChangePassword';


const AgentUserProfile = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    performance: true,
    contracts: true,
  });

  const inputClass = "w-full bg-[#0B0E14] border border-gray-800 rounded-xl py-3 px-4 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all placeholder:text-gray-700";
  const labelClass = "text-[11px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-2";
  const cardClass = "bg-[#11161D] border border-gray-800 rounded-2xl p-8";

  return (
    <div className="p-8 bg-[#0B0E14] min-h-screen text-white font-sans selection:bg-[#53DDF5]/30">
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-black tracking-tight uppercase">Agent Profile</h1>
          <p className="text-gray-500 text-sm mt-1 font-medium">Manage your professional information and settings</p>
        </div>
        <button className="bg-[#53DDF5] text-[#0B0E14] px-8 py-3 rounded-xl font-black text-xs uppercase tracking-[0.1em] flex items-center gap-2 shadow-lg shadow-[#53DDF5]/20 hover:scale-[1.02] active:scale-95 transition-all">
          Save Changes <Save size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Side: Avatar Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className={`${cardClass} flex flex-col items-center text-center`}>
            <div className="relative group">
              <div className="h-32 w-32 rounded-full border-4 border-[#53DDF5]/20 p-1 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" 
                  alt="Profile" 
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <button className="absolute bottom-6 right-0 bg-[#53DDF5] p-2 rounded-full text-[#0B0E14] hover:scale-110 transition-transform shadow-xl">
                <Upload size={14} strokeWidth={3} />
              </button>
            </div>
            <h2 className="text-2xl font-black tracking-tight">Marcus Reynolds</h2>
            <p className="text-[#53DDF5] text-[10px] font-black uppercase tracking-widest mt-1">Licensed Football Agent</p>
            
            <div className="w-full h-px bg-gray-800 my-8" />
            
            <div className="w-full space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Total Players</span>
                <span className="font-black">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Active Contracts</span>
                <span className="font-black">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Member Since</span>
                <span className="font-black text-gray-400 text-sm">January 2020</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Information Forms */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Section: Personal Information */}
          <div className={cardClass}>
            <h3 className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-8">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}><User size={12} /> Full Name</label>
                <input type="text" defaultValue="Marcus Reynolds" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}><Mail size={12} /> Email Address</label>
                <input type="email" defaultValue="marcus.reynolds@onyxsport.com" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}><Phone size={12} /> Phone Number</label>
                <input type="text" defaultValue="+44 20 7946 0958" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}><MapPin size={12} /> Location</label>
                <input type="text" defaultValue="London, United Kingdom" className={inputClass} />
              </div>
            </div>
          </div>

          {/* Section: Professional Information */}
          <div className={cardClass}>
            <h3 className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-8">Professional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}><Building2 size={12} /> Agency Name</label>
                <input type="text" defaultValue="Reynolds Sports Management" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}><Star size={12} /> Specialization</label>
                <input type="text" defaultValue="Premier League Players" className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Professional Bio</label>
                <textarea 
                  className={`${inputClass} min-h-[120px] resize-none leading-relaxed py-4`}
                  defaultValue="Experienced football agent specializing in Premier League talent development and contract negotiations. Over 15 years in the industry with a focus on young English talent."
                />
              </div>
            </div>
          </div>

          {/* Section: Account Settings (Toggles) */}
          <div className={cardClass}>
            <h3 className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-8">Account Settings</h3>
            <div className="space-y-4">
              {[
                { id: 'email', label: 'Email Notifications', desc: 'Receive updates about your players via email', state: notifications.email },
                { id: 'performance', label: 'Performance Alerts', desc: 'Get notified of significant player performance changes', state: notifications.performance },
                { id: 'contracts', label: 'Contract Reminders', desc: 'Alerts for upcoming contract expirations', state: notifications.contracts },
              ].map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-[#0B0E14] border border-gray-800 rounded-xl">
                  <div>
                    <p className="text-sm font-black uppercase tracking-tight text-white">{item.label}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                  <button 
                    onClick={() => setNotifications(prev => ({...prev, [item.id]: !prev[item.id as keyof typeof notifications]}))}
                    className={`w-12 h-6 rounded-full transition-all relative ${item.state ? 'bg-[#53DDF5]' : 'bg-gray-800'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${item.state ? 'right-1' : 'left-1'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Security */}
          <div className={cardClass}>
            <h3 className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-8">Security</h3>
            <div 
              onClick={() => setShowPasswordModal(true)}
              className="flex items-center justify-between p-5 bg-[#0B0E14] border border-gray-800 rounded-xl cursor-pointer hover:border-[#53DDF5]/30 group transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gray-900 rounded-lg text-gray-500 group-hover:text-[#53DDF5]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tight">Change Password</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Update your account password</p>
                </div>
              </div>
              <ArrowRight size={18} className="text-gray-700 group-hover:text-white transition-all group-hover:translate-x-1" />
            </div>
          </div>

        </div>
      </div>

      {/* Password Modal Trigger */}
      {showPasswordModal && (
        <AgentProfileChangePassword onClose={() => setShowPasswordModal(false)} />
      )}
    </div>
  );
};

export default AgentUserProfile;