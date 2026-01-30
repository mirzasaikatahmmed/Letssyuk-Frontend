import { useState } from 'react';
import { Upload, Save, Lock } from 'lucide-react';
import ClubProfileChangePassword from './_components/ChangePassword';
// import { useNavigate } from 'react-router';

const ClubUserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clubInfo, setClubInfo] = useState({
    name: "OnyxSport AI",
    region: "England",
    email: "admin@onyxsport.com"
  });

  const inputClass = "w-full bg-[#162129]/40 border border-gray-800 rounded-lg h-11 px-4 text-sm text-white focus:outline-none focus:border-[#53DDF5]/50 transition-all placeholder:text-gray-600";
  const labelClass = "text-[11px] font-black text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2";

  return (
    <div className=" bg-[#0B0E14] min-h-screen text-white">
      <div className="mb-8">
        <h1 className="text-2xl font-black tracking-tight">Club Profile</h1>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter mt-1">Manage your club information and account settings</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Profile Card */}
        <div className="w-full lg:w-72">
          <div className="bg-[#11161D] border border-gray-800 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="relative group mb-6">
              <div className="h-28 w-28 rounded-full border-4 border-[#53DDF5]/20 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Avatar" className="object-cover h-full w-full" />
              </div>
              <button className="absolute bottom-1 right-1 bg-[#53DDF5] p-2 rounded-full text-[#0B0E14] hover:scale-110 transition-transform shadow-lg">
                <Upload size={14} strokeWidth={3} />
              </button>
            </div>
            <h2 className="text-xl font-black">Marcus Reynolds</h2>
            <p className="text-[11px] font-bold text-[#53DDF5] uppercase tracking-widest mt-1">Licensed Football Agent</p>
            
            <div className="w-full mt-8 pt-8 border-t border-gray-800 space-y-4">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 font-bold uppercase">Total Players</span>
                <span className="font-black">12</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 font-bold uppercase">Member Since</span>
                <span className="font-black text-gray-400">January 2020</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Forms & Info */}
        <div className="flex-1 space-y-6">
          {/* Club Information Section */}
          <div className="bg-[#11161D] border border-gray-800 rounded-2xl p-8">
            <h3 className="text-sm font-black uppercase tracking-widest mb-8 border-l-4 border-[#53DDF5] pl-4">Club Information</h3>
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className={labelClass}>Club Name *</label>
                <input 
                  className={inputClass} 
                  value={clubInfo.name} 
                  onChange={(e) => setClubInfo({...clubInfo, name: e.target.value})} 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>📍 Region *</label>
                  <input 
                    className={inputClass} 
                    value={clubInfo.region} 
                    onChange={(e) => setClubInfo({...clubInfo, region: e.target.value})} 
                  />
                </div>
                <div>
                  <label className={labelClass}>✉️ Email Address *</label>
                  <input 
                    className={inputClass} 
                    value={clubInfo.email} 
                    onChange={(e) => setClubInfo({...clubInfo, email: e.target.value})} 
                  />
                </div>
              </div>
              <button className="bg-[#53DDF5] text-[#0B0E14] font-black py-2.5 px-6 rounded-lg flex items-center gap-2 hover:shadow-[0_0_15px_#53DDF540] transition-all">
                Save Changes <Save size={16} />
              </button>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-[#11161D] border border-gray-800 rounded-2xl p-6 flex justify-between items-center">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest">Security</h3>
              <p className="text-xs text-gray-500 font-bold mt-1">Update your password to keep your account secure</p>
            </div>
           <button 
              onClick={() => setIsModalOpen(true)}
              className="border border-gray-700 hover:border-[#53DDF5] text-gray-300 hover:text-white px-5 py-2 rounded-lg text-xs font-black flex items-center gap-2 transition-all bg-gray-800/30"
            >
              <Lock size={14} /> Change Password
            </button>
          </div>

          {/* Account Information Summary */}
          <div className="bg-[#11161D] border border-gray-800 rounded-2xl p-8">
            <h3 className="text-sm font-black uppercase tracking-widest mb-8">Account Information</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-8 gap-x-12">
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Account Type</p>
                <p className="text-sm font-black">Club Administrator</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Member Since</p>
                <p className="text-sm font-black">January 2024</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Total Players</p>
                <p className="text-sm font-black text-[#53DDF5]">6</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Active Status</p>
                <p className="text-sm font-black text-[#05DF72] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#05DF72] shadow-[0_0_8px_#05DF72]" /> Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ClubProfileChangePassword onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default ClubUserProfile;