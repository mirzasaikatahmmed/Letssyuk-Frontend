/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { User, Check, Edit2 } from "lucide-react";

export const PersonalInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Marcus",
    lastName: "Thompson",
    email: "marcus.thompson@example.com",
    phone: "+44 7700 900123"
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="bg-[#0B1219] border-gray-800 p-6 rounded-xl border-[0.5px]">
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#162129] rounded-lg text-[#30D5C8]"><User size={20} /></div>
          <div>
            <h3 className="text-base font-bold text-white">Personal Information</h3>
            <p className="text-xs text-gray-500">Update your account details</p>
          </div>
        </div>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-xs font-bold transition-all ${
            isEditing 
              ? "bg-[#30D5C8] text-[#0B0E14] border-[#30D5C8]" 
              : "border-[#30D5C8]/40 text-[#30D5C8] hover:bg-[#30D5C8]/10"
          }`}
        >
          {isEditing ? <Check size={14} /> : <Edit2 size={14} />}
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
              {key.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              name={key}
              value={value}
              disabled={!isEditing}
              onChange={handleChange}
              className={`w-full bg-[#0A0A0A] border rounded-lg p-3 text-sm transition-all outline-none ${
                isEditing 
                  ? "border-[#30D5C8]/50 text-white focus:border-[#30D5C8]" 
                  : "border-gray-800 text-gray-400 cursor-not-allowed"
              }`}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};