import { Card } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, FileText } from "lucide-react";

const stats = [
  { label: "High Performers", value: "4", sub: "Players with AI score > 85", icon: TrendingUp, color: "#00A63E" },
  { label: "Low Form Alerts", value: "2", sub: "Players with form below 7.0", icon: AlertTriangle, color: "#E17100" },
  { label: "Contract Expiring", value: "3", sub: "Contracts ending before June 2025", icon: FileText, color: "#ef4444" },
];

export const StatSummary = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
    {stats.map((stat, i) => (
      <Card key={i} className="bg-[#0B1219] border-gray-800 p-6 flex flex-col gap-2 shadow-lg">
        <div className="flex items-center gap-3 mb-1">
          <div className="p-2 rounded-lg" style={{ backgroundColor: `${stat.color}20` }}>
            <stat.icon size={20} style={{ color: stat.color }} />
          </div>
          <span className="text-sm font-bold text-gray-200 uppercase tracking-widest">{stat.label}</span>
        </div>
        <div className="text-5xl font-black text-white py-1">{stat.value}</div>
        <div className="text-sm text-gray-400 font-medium">{stat.sub}</div>
      </Card>
    ))}
  </div>
);