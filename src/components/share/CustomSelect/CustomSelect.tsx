import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export const CustomSelect = ({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="text-xs font-bold text-gray-500 mb-2 block">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#11161D] border border-gray-800/80 rounded-xl h-12 px-4 flex items-center justify-between text-sm text-gray-300 font-bold focus:outline-none focus:border-cyan-500/50 transition-all group"
      >
        <span className="font-bold">{value}</span>
        <ChevronDown
          size={18}
          className={`text-gray-600 group-hover:text-cyan-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-[#11161D] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl py-2 animate-in fade-in zoom-in duration-200">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2.5 text-left text-sm font-bold transition-all ${
                value === option
                  ? "bg-[#22d3ee] text-[#0B0E14]"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
