/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/ui/card";
import { Activity } from "lucide-react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

const getRgba = (hex: string, opacity = 0.3) => {
  // Support both 3-digit and 6-digit hex codes
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(char => char + char).join('');
  }
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const SignalCard = ({ label, value, unit, color, status }: any) => {
  const isWarning = status === "Can Improve";

  // ADDED THE RETURN KEYWORD HERE
  return (
    <Card className="bg-[#111820] border-gray-800 p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Activity size={16} style={{ color }} />
          <span className="text-sm font-medium">{label}</span>
        </div>
      </div>
      
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-gray-500 text-xs">{unit}</span>
      </div>

      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden mb-3">
        <div className="h-full" style={{ width: '75%', backgroundColor: color }}></div>
      </div>

      <div
        style={{ backgroundColor: getRgba(color, 0.3) }}
        className="flex items-center gap-1.5 p-1.5 px-3 rounded-md inline-flex"
      >
        <span style={{ color: color }} className="text-sm">
          {isWarning ? <MdErrorOutline size={16} /> : <IoIosCheckmarkCircleOutline size={16} />}
        </span>
        <span
          style={{ color: color }}
          className="text-[11px] font-bold uppercase tracking-wider"
        >
          {status}
        </span>
      </div>
    </Card>
  );
};