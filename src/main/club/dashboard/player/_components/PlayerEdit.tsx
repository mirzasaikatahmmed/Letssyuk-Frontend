import React, { useState } from 'react';
import { X, Upload, Save } from 'lucide-react';

const ClubPlayerEdit = () => {
  // Functional State to handle form data
  const [formData, setFormData] = useState({
    fullName: "Marcus Sterling",
    position: "Forward",
    age: "24",
    nationality: "England",
    goals: "18",
    assists: "7",
    appearances: "28",
    contractExpiry: "2025-05-15",
    availability: "Available",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Player Data:", formData);
    // Add your API call here
  };

  const inputClass = "w-full bg-[#162129]/40 border border-gray-800 rounded-lg h-11 px-4 text-sm text-white focus:outline-none focus:border-[#53DDF5]/50 transition-all placeholder:text-gray-600 appearance-none";
  const labelClass = "text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 block";

  return (
    <div className=" bg-[#0B0E14] min-h-screen flex justify-center items-start">
      <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-[#27272A40] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-gray-800 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight">Update Player Data</h1>
            <p className="text-xs text-gray-500 font-bold mt-1 uppercase tracking-tighter">Player ID: OA-ENG-2024-001</p>
          </div>
          <button type="button" className="text-gray-500 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-8 space-y-10">
          
          {/* 1. Profile Picture Section */}
          <section>
            <h3 className={labelClass}>Profile Picture</h3>
            <div className="flex items-center gap-6">
              <div className="relative group">
                <img src="https://github.com/shadcn.png" className="h-24 w-24 rounded-full border-2 border-gray-800 object-cover group-hover:opacity-70 transition-opacity" alt="Current" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
                  <Upload size={20} className="text-white" />
                </div>
              </div>
              <div>
                <p className="text-[12px] text-gray-500 font-bold mb-3">Upload Image</p>
                <label className="bg-[#1C262E] text-white text-[12px] font-bold px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-700 cursor-pointer transition-all w-fit">
                  <Upload size={14} /> 
                  Choose File
                  <input type="file" className="hidden" />
                </label>
                <p className="text-[10px] text-gray-600 mt-2 font-medium italic">JPG, PNG, or GIF</p>
              </div>
            </div>
          </section>

          {/* 2. Basic Information */}
          <section>
            <h3 className={labelClass}>Basic Information</h3>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input name="fullName" type="text" value={formData.fullName} onChange={handleChange} className={inputClass} />
              </div>
              <div className="relative">
                <label className={labelClass}>Position *</label>
                <select name="position" value={formData.position} onChange={handleChange} className={inputClass}>
                  <option value="Forward">Forward</option>
                  <option value="Midfielder">Midfielder</option>
                  <option value="Defender">Defender</option>
                  <option value="Goalkeeper">Goalkeeper</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Age *</label>
                <input name="age" type="number" value={formData.age} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Nationality *</label>
                <input name="nationality" type="text" value={formData.nationality} onChange={handleChange} className={inputClass} />
              </div>
            </div>
          </section>

          {/* 3. Performance Statistics */}
          <section>
            <h3 className={labelClass}>Performance Statistics</h3>
            <div className="grid grid-cols-3 gap-6 mt-4">
              <div>
                <label className={labelClass}>Goals</label>
                <input name="goals" type="number" value={formData.goals} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Assists</label>
                <input name="assists" type="number" value={formData.assists} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Appearances</label>
                <input name="appearances" type="number" value={formData.appearances} onChange={handleChange} className={inputClass} />
              </div>
            </div>
          </section>

          {/* 4. Contract & Availability */}
          <section>
            <h3 className={labelClass}>Contract & Availability</h3>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="relative">
                <label className={labelClass}>Contract Expiry Date *</label>
                <input name="contractExpiry" type="date" value={formData.contractExpiry} onChange={handleChange} className={`${inputClass} block`} />
              </div>
              <div>
                <label className={labelClass}>Availability Status</label>
                <select name="availability" value={formData.availability} onChange={handleChange} className={inputClass}>
                  <option value="Available">Available</option>
                  <option value="Minor Injury">Minor Injury</option>
                  <option value="Long-term Injury">Long-term Injury</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className={labelClass}>Injury / Fatigue Notes</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any injury concerns, recovery status, or fatigue management notes..."
                  className="w-full bg-[#162129]/40 border border-gray-800 rounded-lg p-4 text-sm text-white focus:outline-none focus:border-[#53DDF5]/50 transition-all min-h-[120px] resize-none placeholder:text-gray-700"
                />
              </div>
            </div>
          </section>

          {/* Footer Actions */}
          <div className="flex justify-end pt-4 border-t border-gray-800/50">
            <button type="submit" className="bg-[#53DDF5] hover:shadow-[0_0_20px_rgba(83,221,245,0.3)] text-[#0B0E14] font-black py-3 px-10 rounded-xl flex items-center gap-3 transition-all active:scale-95">
              Update Player <Save size={18} strokeWidth={3} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClubPlayerEdit;