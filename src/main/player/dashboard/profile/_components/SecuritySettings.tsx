import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { ChevronRight, Eye, EyeOff, Lock } from "lucide-react";

export const SecuritySettings = () => {
  const [showPass, setShowPass] = useState(false);
  const [pass, setPass] = useState({ current: '', new: '', confirm: '' });

  const handleUpdate = (e : any) => {
    e.preventDefault();
    if (!pass.current || !pass.new || !pass.confirm) return alert("Please fill all fields");
    if (pass.new !== pass.confirm) return alert("Passwords do not match!");
    alert("Password updated successfully!");
    setPass({ current: '', new: '', confirm: '' }); // Reset
  };

  return (
    <Card className="bg-[#0B1219] border-gray-800 p-6 rounded-xl border-[0.5px]">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-[#162129] rounded-lg text-[#30D5C8]"><Lock size={20} /></div>
        <h3 className="text-base font-bold text-white">Security Settings</h3>
      </div>

      <div className="space-y-5">
        {(Object).keys(pass).map((field) => (
          <div key={field} className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{field} password</label>
            <div className="relative">
              <input 
                type={showPass ? "text" : "password"} 
                value={pass[field] }
                onChange={(e) => setPass(prev => ({...prev, [field]: e.target.value}))}
                placeholder={`••••••••`}
                className="w-full bg-[#0A0A0A] border border-gray-800 rounded-lg p-3 text-sm text-gray-300 focus:border-[#30D5C8]/50 outline-none placeholder:text-gray-700" 
              />
              <button 
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-3 text-gray-600 hover:text-gray-400 p-1"
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        ))}

        <button 
          onClick={handleUpdate}
          className="w-full md:w-auto px-10 py-3.5 bg-gradient-to-r from-[#30D5C8] to-[#BED1FF] text-[#0B0E14] font-bold rounded-xl text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Update Password <ChevronRight size={18} />
        </button>
      </div>
    </Card>
  );
};