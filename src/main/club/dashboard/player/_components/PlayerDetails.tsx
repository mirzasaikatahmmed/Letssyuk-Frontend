// import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Target, Activity, Users, Star } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'M1', score: 7.2 },
  { name: 'M2', score: 7.5 },
  { name: 'M3', score: 7.8 },
  { name: 'M4', score: 8.0 },
  { name: 'M5', score: 7.8 },
];

const ClubPlayerDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className=" bg-[#0B0E14] min-h-screen text-gray-300 space-y-6">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-white transition-colors"
      >
        <ArrowLeft size={14} /> Back to Players
      </button>

      {/* Top Profile Header */}
      <div className="relative p-6 border rounded-md border-[#53DDF5]/30 bg-[#162129]/20 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="h-16 w-16 rounded-full border-2 border-[#53DDF5]/50 overflow-hidden">
            <img src="https://github.com/shadcn.png" alt="Profile" className="object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white leading-none">James Mitchell</h1>
            <p className="text-sm text-gray-500 font-bold mt-1">Midfielder</p>
            <div className="flex gap-3 mt-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              <span>Player ID: <span className="text-[#53DDF5]">{id || 'OA-ENG-2024-002'}</span></span>
              <span>• 27 Years Old</span>
              <span>• England</span>
            </div>
          </div>
        </div>
        <div className="bg-[#00A63E] px-4 py-2 rounded flex flex-col items-center">
          <span className="text-[10px] font-black text-white/80 uppercase">AI Score</span>
          <span className="text-2xl font-black text-white leading-none">87</span>
        </div>
      </div>

      {/* Metric Grid */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Goals', val: '5', icon: <Target size={14}/> },
          { label: 'Assists', val: '12', icon: <Activity size={14}/> },
          { label: 'Appearances', val: '30', icon: <Users size={14}/> },
          { label: 'Recent Form', val: '7.8', icon: <Star size={14}/> },
        ].map((item, i) => (
          <div key={i} className="bg-[#162129]/40 border border-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              {item.icon} <span className="text-[11px] font-black uppercase tracking-widest">{item.label}</span>
            </div>
            <p className="text-2xl font-black text-white">{item.val}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-[#162129]/20 border border-gray-800 p-6 rounded-xl">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-sm font-black uppercase tracking-widest text-white">Performance Trend</h3>
          <span className="text-[11px] font-bold text-[#53DDF5] bg-[#53DDF5]/10 px-3 py-1 rounded-full border border-[#53DDF5]/20">— Stable</span>
        </div>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
              <XAxis dataKey="name" stroke="#4b5563" fontSize={11} tickLine={false} axisLine={false} dy={10} />
              <YAxis stroke="#4b5563" fontSize={11} tickLine={false} axisLine={false} domain={[0, 10]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#162129', border: '1px solid #374151', fontSize: '12px' }}
                itemStyle={{ color: '#53DDF5' }}
              />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#53DDF5" 
                strokeWidth={3} 
                dot={{ r: 4, fill: '#53DDF5', strokeWidth: 2 }} 
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Assessment */}
      <div className="bg-[#162129]/20 border border-gray-800 p-5 rounded-xl">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-black uppercase tracking-widest text-white">AI Recruitment Assessment</h3>
          <span className="bg-[#00A63E]/10 text-[#00A63E] border border-[#00A63E]/30 text-[10px] font-black px-3 py-1 rounded uppercase">Strong Recommend</span>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          James Mitchell demonstrates excellent form and fitness. Highly recommended for upcoming matches. Performance metrics consistently exceed team average.
        </p>
      </div>
    </div>
  );
};

export default ClubPlayerDetails;