// import React from 'react';
import { Card } from "@/components/ui/card";

const PriorityFocusAreas = () => {
  const priorities = [
    {
      title: "Match Exposure",
      stats: "8 matches this season → Target: 12-15 matches",
      action: "Seek additional friendly fixtures or cup competitions to increase match minutes",
      status: "Critical",
      statusColor: "#ef4444", // Red for critical
    },
    {
      title: "Training Balance",
      stats: "Current: 4h technical, 3h physical/week",
      action: "Add 2x 30-min technical sessions focused on passing accuracy and first touch",
      status: "Medium",
      statusColor: "#facc15", // Yellow for medium
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-gray-400 text-sm font-medium ml-1">Priority Focus Area</h3>
      <Card className="bg-[#0B1219] border-gray-800 p-4 rounded-2xl">
        <div className="space-y-3">
          {priorities.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#235D6740] border border-gray-800 rounded-xl p-5 relative overflow-hidden"
            >
              {/* Status Badge */}
              <div 
                className="absolute top-4 right-4 px-3 py-1 rounded-md text-[10px] font-bold border"
                style={{ 
                  color: item.statusColor, 
                  borderColor: `${item.statusColor}44`,
                  backgroundColor: `${item.statusColor}11` 
                }}
              >
                {item.status}
              </div>

              <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
              <p className="text-gray-400 text-xs mb-3">{item.stats}</p>
              <p className="text-[#0DA9A2] text-xs font-medium">{item.action}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default PriorityFocusAreas;