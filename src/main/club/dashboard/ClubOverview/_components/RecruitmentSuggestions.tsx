import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export const RecruitmentSuggestions = () => (
  <Card className="bg-[#0B1219] border-gray-800 p-6">
    <div className="flex items-center gap-2 mb-6">
      <Sparkles size={18} className="text-[#30D5C8]" />
      <div>
        <h3 className="text-base font-bold text-white leading-none">AI Recruitment Suggestions</h3>
        <p className="text-[12px] text-gray-500">Recommendations for next match lineup</p>
      </div>
    </div>
    
    <div className="space-y-4">
      {[
        { name: "Marcus Sterling", tag: "Strong Recommend", color: "#00A63E" },
        { name: "Ethan Clarke", tag: "Recommend", color: "#00A63E" },
        { name: "Oliver Thompson", tag: "Caution", color: "#E17100" },
      ].map((item, i) => (
        <div key={i} className="flex justify-between items-center p-3 rounded-lg border border-gray-800 hover:bg-[#162129] transition-colors">
          <div>
            <p className="text-base font-bold text-white">{item.name}</p>
            <p className="text-[13px] text-gray-500">Forward • AI Score: 94 • ID: OA-ENG-2024-001</p>
          </div>
          <span className="text-[12px] font-bold px-2 py-1 rounded" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
            {item.tag}
          </span>
        </div>
      ))}
    </div>
  </Card>
);