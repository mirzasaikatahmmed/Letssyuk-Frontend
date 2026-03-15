import LivePerformanceSummary from "./_components/LivePerformanceSummary";
import RecentMatchReports from "./_components/RecentMatchReports";
import RecruitmentNeedsOverview from "./_components/RecruitmentNeedsOverview";
import UpcomingTasksAndSchedule from "./_components/UpcomingTasksAndSchedule";

const DashboardTab = () => {
  return (
    <div className="space-y-6">
      <LivePerformanceSummary />

      <div className="grid grid-cols-2 gap-6">
        <RecentMatchReports />
        <UpcomingTasksAndSchedule />
      </div>

      <RecruitmentNeedsOverview />
    </div>
  );
};

export default DashboardTab;
