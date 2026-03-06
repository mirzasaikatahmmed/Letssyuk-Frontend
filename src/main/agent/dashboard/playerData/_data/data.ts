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

export interface ContractRisk {
  type: "High Risk" | "Medium Risk";
  title: string;
  description: string;
  recommendation: string;
}

export interface TimelineEvent {
  label: string;
  title: string;
  date: string;
  badge?: string;
  theme: "cyan" | "orange" | "gray";
}

export interface ContractDetails {
  duration: string;
  dateRange: string;
  baseSalary: string;
  annualSalary: string;
  performanceBonuses: string;
  bonusDetail: string;
  imageRights: string;
  imageRightsDetail: string;
  aiSummary: string;
  risks: ContractRisk[];
  talkingPoints: string[];
  strategicConcessions: string[];
  walkAwayThreshold: string;
  timeline: TimelineEvent[];
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
  contractDetails: ContractDetails;
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
    contractDetails: {
      duration: "4 years",
      dateRange: "July 2024 - June 2028",
      baseSalary: "£85,000/week",
      annualSalary: "£4.4M annually",
      performanceBonuses: "£15,000/goal",
      bonusDetail: "Up to £500K/year",
      imageRights: "30% player",
      imageRightsDetail: "70% club owned",
      aiSummary:
        "Strong base salary with competitive bonuses. Image rights split is below market standard for this player's profile.",
      risks: [
        {
          type: "High Risk",
          title: "One-sided Termination Clause",
          description:
            "Club can terminate with 30 days notice during first 2 years. Player has no reciprocal rights.",
          recommendation:
            "Negotiate mutual termination rights or increase buyout clause protection during next renewal window.",
        },
        {
          type: "Medium Risk",
          title: "Performance-Trigger Risks",
          description:
            "Bonuses only trigger at 15+ goals. Current pace: 12 goals/season.",
          recommendation:
            "Request tiered bonus structure (10/15/20 goals) to better align with realistic performance.",
        },
      ],
      talkingPoints: [
        "Performance exceeds contract value - 12 goals vs 8 goal target",
        "Market comparable salaries are 15-20% higher",
        "Image rights split below industry standard for Premier League",
      ],
      strategicConcessions: [
        "Accept lower weekly if image rights increase to 40%",
        "Trade buyout clause for higher loyalty bonus",
      ],
      walkAwayThreshold: "Below £82K/week with no image rights improvements",
      timeline: [
        {
          label: "START",
          title: "Contract Start",
          date: "July 2024",
          badge: "Development Phase",
          theme: "cyan",
        },
        {
          label: "2026",
          title: "Optimal Renewal Window",
          date: "Jan-June 2026",
          badge: "Peak Performance Phase",
          theme: "orange",
        },
        {
          label: "2027",
          title: "Transfer Market Peak",
          date: "Summer 2027",
          badge: "Peak Career Value",
          theme: "cyan",
        },
        {
          label: "END",
          title: "Contract Expiry",
          date: "June 2028",
          theme: "gray",
        },
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
    contractDetails: {
      duration: "5 years",
      dateRange: "July 2023 - June 2028",
      baseSalary: "£300,000/week",
      annualSalary: "£15.6M annually",
      performanceBonuses: "£50,000/trophy",
      bonusDetail: "Champions League win bonus",
      imageRights: "80% player",
      imageRightsDetail: "20% club owned",
      aiSummary:
        "High-value elite contract reflecting senior status. Image rights are exceptionally well-structured for the player.",
      risks: [
        {
          type: "Medium Risk",
          title: "Injury-Related Salary Adjustments",
          description:
            "Salary drops by 20% if availability falls below 50% for 6 consecutive months.",
          recommendation: "Ensure insurance coverage for long-term injuries.",
        },
      ],
      talkingPoints: [
        "Senior squad leader and home-grown icon",
        "Consistent performance profile in top percentile",
      ],
      strategicConcessions: [
        "Willingness to adjust performance targets for fixed base increase",
      ],
      walkAwayThreshold: "Any reduction in base salary for the next 2 cycles",
      timeline: [
        {
          label: "START",
          title: "Contract Start",
          date: "July 2023",
          badge: "Elite Level Intro",
          theme: "cyan",
        },
        {
          label: "2025",
          title: "Mid-Term Review",
          date: "June 2025",
          badge: "Loyalty Bonus Trigger",
          theme: "orange",
        },
        {
          label: "2027",
          title: "Extension Window",
          date: "Jan 2027",
          badge: "Senior Career Phase",
          theme: "cyan",
        },
        {
          label: "END",
          title: "Contract Expiry",
          date: "June 2028",
          theme: "gray",
        },
      ],
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
    contractDetails: {
      duration: "5 years",
      dateRange: "July 2022 - June 2027",
      baseSalary: "£375,000/week",
      annualSalary: "£19.5M annually",
      performanceBonuses: "£100,000/hat-trick",
      bonusDetail: "Highest in the league",
      imageRights: "100% player",
      imageRightsDetail: "Total control maintained",
      aiSummary:
        "The most lucrative contract in world football. Release clause activated in summer 2024 for non-PL clubs.",
      risks: [
        {
          type: "High Risk",
          title: "Release Clause Sensitivity",
          description:
            "Release clause value decreases if specific trophies are not won.",
          recommendation:
            "Monitor club performance and adjust legacy planning accordingly.",
        },
      ],
      talkingPoints: [
        "Unprecedented goal conversion rate",
        "Global brand value surpassing club identity",
      ],
      strategicConcessions: [
        "Extension negotiation window opens in January 2025",
      ],
      walkAwayThreshold: "Immediate activation of release clause",
      timeline: [
        {
          label: "START",
          title: "Contract Start",
          date: "July 2022",
          badge: "Record Breaking Entry",
          theme: "cyan",
        },
        {
          label: "2024",
          title: "Release Clause Active",
          date: "Summer 2024",
          badge: "Key Strategic Window",
          theme: "orange",
        },
        {
          label: "2026",
          title: "Extension Negotiation",
          date: "July 2026",
          badge: "Legacy Planning Phase",
          theme: "cyan",
        },
        {
          label: "END",
          title: "Contract Expiry",
          date: "June 2027",
          theme: "gray",
        },
      ],
    },
  },
];
