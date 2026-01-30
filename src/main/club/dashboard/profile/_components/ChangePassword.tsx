import { useState } from 'react';
import { Eye, EyeOff, ChevronRight, ShieldAlert, X } from 'lucide-react';

const ClubProfileChangePassword = ({ onClose }: { onClose: () => void }) => {
  const [showPass, setShowPass] = useState({ current: false, new: false, confirm: false });

  const inputClass = "w-full bg-[#0B0E14] border border-gray-800 rounded-lg h-12 px-4 pr-12 text-sm text-white focus:outline-none focus:border-[#53DDF5]/50 transition-all";
  const labelClass = "text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 block";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-[#11161D] border border-[#53DDF5]/30 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 relative">
        
        {/* Close Button on top right */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-black text-white">Password Change</h2>
            <p className="text-xs text-gray-500 font-bold mt-1">Ensure your account remains protected with a strong password</p>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <label className={labelClass}>Current Password</label>
              <input 
                type={showPass.current ? "text" : "password"} 
                placeholder="Enter current password" 
                className={inputClass} 
              />
              <button onClick={() => setShowPass({...showPass, current: !showPass.current})} className="absolute right-4 bottom-3 text-gray-600 hover:text-gray-400">
                {showPass.current ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <label className={labelClass}>New Password</label>
              <input 
                type={showPass.new ? "text" : "password"} 
                placeholder="Enter new password" 
                className={inputClass} 
              />
              <button onClick={() => setShowPass({...showPass, new: !showPass.new})} className="absolute right-4 bottom-3 text-gray-600 hover:text-gray-400">
                {showPass.new ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <label className={labelClass}>Confirm New Password</label>
              <input 
                type={showPass.confirm ? "text" : "password"} 
                placeholder="Confirm new password" 
                className={inputClass} 
              />
              <button onClick={() => setShowPass({...showPass, confirm: !showPass.confirm})} className="absolute right-4 bottom-3 text-gray-600 hover:text-gray-400">
                {showPass.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="bg-[#53DDF5]/5 border border-[#53DDF5]/10 rounded-xl p-5">
              <p className="text-[11px] font-black text-[#53DDF5] uppercase tracking-widest mb-3 flex items-center gap-2">
                <ShieldAlert size={14} /> Password requirements:
              </p>
              <ul className="space-y-2">
                {['At least 8 characters long', 'Contains uppercase letters', 'Contains numbers'].map((req, i) => (
                  <li key={i} className="text-[11px] text-gray-400 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#53DDF5]" /> {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={onClose}
              className="flex-1 bg-gray-800/50 hover:bg-gray-800 text-gray-400 font-black py-3 rounded-xl transition-all"
            >
              Cancel
            </button>
            <button className="flex-[2] bg-[#53DDF5] hover:shadow-[0_0_20px_#53DDF550] text-[#0B0E14] font-black py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
              Update Password <ChevronRight size={18} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubProfileChangePassword;