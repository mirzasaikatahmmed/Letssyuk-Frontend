import type { LucideIcon } from "lucide-react";

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon | null;
  color: string;
}

export interface PerformanceStat {
  label: string;
  value: string;
  trend?: string;
  target?: string;
  max?: string;
  percent?: string;
  color: string;
}

export interface ProgressStat {
  label: string;
  value: number;
  max: number;
  bonus?: string;
  status?: string;
  color?: string;
}

export interface Player {
  id: number;
  name: string;
  age: number;
  nation: string;
  position: string;
  foot: string;
  club: string;
  contract: string;
  goals: number;
  assists: number;
  matches: number;
  minutes: string;
  value: string;
  status: "Rising" | "Declining";
  image: string;
  // Detail data
  height: string;
  performanceTracking: PerformanceStat[];
  developmentProgress: ProgressStat[];
  marketReadiness: {
    overall: number;
    technical: number;
    physical: number;
    mental: number;
    assessment: string;
    preparations: string[];
  };
}


export const playersData: Player[] = [
  {
    id: 1,
    name: "James Mitchell",
    age: 24,
    nation: "England",
    position: "Striker",
    foot: "Right Foot",
    club: "Manchester United",
    contract: "Jun 2026",
    goals: 12,
    assists: 7,
    matches: 25,
    minutes: "1,890",
    value: "€22M",
    status: "Rising",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    height: "185 cm",
    performanceTracking: [
      {
        label: "Pass Accuracy",
        value: "89%",
        trend: "+2%",
        color: "text-cyan-400",
      },
      {
        label: "Assists",
        value: "7",
        target: "Target: 8",
        color: "text-white",
      },
      { label: "Avg Rating", value: "7.2", max: "/10", color: "text-white" },
      {
        label: "Minutes Played",
        value: "1890",
        percent: "89%",
        color: "text-white",
      },
    ],
    developmentProgress: [
      { label: "Weak Foot", value: 6, max: 10, bonus: "+1" },
      { label: "Defensive Work", value: 7, max: 10, status: "Improved" },
      {
        label: "Leadership",
        value: 5,
        max: 10,
        status: "Growing",
        color: "bg-orange-500",
      },
      { label: "Physical Strength", value: 8, max: 10, bonus: "+15%" },
    ],
    marketReadiness: {
      overall: 8.0,
      technical: 9.0,
      physical: 8.0,
      mental: 7.0,
      assessment:
        "Ready for top 5 league move. Consider opportunities in 2026 summer window.",
      preparations: [
        "Big match experience needed",
        "Media training recommended",
        "Language prep for international move",
      ],
    },
  },
  {
    id: 2,
    name: "Marcus Rashford",
    age: 26,
    nation: "England",
    position: "Forward",
    foot: "Right Foot",
    club: "Manchester United",
    contract: "Jun 2028",
    goals: 8,
    assists: 5,
    matches: 22,
    minutes: "1,750",
    value: "€60M",
    status: "Rising",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    height: "180 cm",
    performanceTracking: [
      {
        label: "Pass Accuracy",
        value: "84%",
        trend: "+1%",
        color: "text-cyan-400",
      },
      {
        label: "Assists",
        value: "5",
        target: "Target: 10",
        color: "text-white",
      },
      { label: "Avg Rating", value: "7.0", max: "/10", color: "text-white" },
      {
        label: "Minutes Played",
        value: "1750",
        percent: "85%",
        color: "text-white",
      },
    ],
    developmentProgress: [
      { label: "Weak Foot", value: 7, max: 10, bonus: "+2" },
      { label: "Defensive Work", value: 5, max: 10, status: "Stable" },
      {
        label: "Leadership",
        value: 6,
        max: 10,
        status: "Improving",
        color: "bg-cyan-500",
      },
      { label: "Physical Strength", value: 9, max: 10, bonus: "+5%" },
    ],
    marketReadiness: {
      overall: 8.5,
      technical: 9.0,
      physical: 9.0,
      mental: 8.0,
      assessment:
        "Established elite player. Market value remains high despite fluctuations.",
      preparations: ["Brand management review", "Contract extension strategy"],
    },
  },
  {
    id: 3,
    name: "Erling Haaland",
    age: 23,
    nation: "Norway",
    position: "Striker",
    foot: "Left Foot",
    club: "Manchester City",
    contract: "Jun 2027",
    goals: 25,
    assists: 4,
    matches: 24,
    minutes: "2,100",
    value: "€180M",
    status: "Rising",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    height: "194 cm",
    performanceTracking: [
      {
        label: "Pass Accuracy",
        value: "78%",
        trend: "-2%",
        color: "text-red-400",
      },
      {
        label: "Assists",
        value: "4",
        target: "Target: 5",
        color: "text-white",
      },
      { label: "Avg Rating", value: "8.5", max: "/10", color: "text-white" },
      {
        label: "Minutes Played",
        value: "2100",
        percent: "95%",
        color: "text-white",
      },
    ],
    developmentProgress: [
      { label: "Weak Foot", value: 6, max: 10, bonus: "+1" },
      { label: "Defensive Work", value: 4, max: 10, status: "Developing" },
      {
        label: "Leadership",
        value: 7,
        max: 10,
        status: "Strong",
        color: "bg-cyan-500",
      },
      { label: "Physical Strength", value: 10, max: 10, bonus: "Maxed" },
    ],
    marketReadiness: {
      overall: 9.8,
      technical: 10.0,
      physical: 10.0,
      mental: 9.0,
      assessment: "World class talent. Ready for any global challenge.",
      preparations: ["Global marketing focus", "Legacy planning"],
    },
  },
];
