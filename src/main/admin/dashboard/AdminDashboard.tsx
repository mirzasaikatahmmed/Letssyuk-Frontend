import { Users, ShieldCheck, CreditCard, MessageSquare } from "lucide-react";
import StatsCard from "./_components/StatsCard";
import SignupTrendChart from "./_components/SignupTrendChart";
import UserDistributionChart from "./_components/UserDistributionChart";
import RecentSignups from "./_components/RecentSignups";
import RecentPayments from "./_components/RecentPayments";
import PageHeading from "../_components/PageHeading/PageHeading";

const statsData = [
  {
    title: "Total Users",
    value: "2,847",
    trend: "+12.5%",
    trendUp: true,
    subtitle: "Athletes: 1,892 • Agents: 643 • Clubs: 312",
    icon: <Users className="w-4 h-4" />,
  },
  {
    title: "Pending Verifications",
    value: "23",
    trend: "-5 from yesterday",
    trendUp: false,
    subtitle: "Under-18 age verification required",
    icon: <ShieldCheck className="w-4 h-4" />,
  },
  {
    title: "Active Subscriptions",
    value: "1,956",
    trend: "+6.2%",
    trendUp: true,
    subtitle: "MRR: $48,800",
    icon: <CreditCard className="w-4 h-4" />,
  },
  {
    title: "Open Support Tickets",
    value: "17",
    trend: "-3 from yesterday",
    trendUp: false,
    subtitle: "Avg response time: 2.4 hrs",
    icon: <MessageSquare className="w-4 h-4" />,
  },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#080a0f] p-4 sm:p-6 flex flex-col gap-6">
      {/* Page Header */}
      <PageHeading
        title="Dashboard"
        subTitle="Platform health and activity overview"
      />

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statsData.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <SignupTrendChart />
        </div>
        <div className="lg:col-span-1">
          <UserDistributionChart />
        </div>
      </div>

      {/* Recent Activity Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RecentSignups />
        <RecentPayments />
      </div>
    </div>
  );
};

export default AdminDashboard;
