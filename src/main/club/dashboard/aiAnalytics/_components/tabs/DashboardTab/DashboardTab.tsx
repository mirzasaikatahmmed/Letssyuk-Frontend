import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useGetClubCustomDashboardQuery } from "@/redux/features/club/clubsApi";
import Loading from "@/components/share/Loading/Loading";
import LivePerformanceSummary from "./_components/LivePerformanceSummary";
import RecentMatchReports from "./_components/RecentMatchReports";
import RecruitmentNeedsOverview from "./_components/RecruitmentNeedsOverview";
import UpcomingTasksAndSchedule from "./_components/UpcomingTasksAndSchedule";

const DashboardTab = () => {
  const { data: userData, isLoading: isUserLoading } = useGetMeQuery();
  const clubId = userData?.clubOwned?.id || (userData as any)?.data?.clubOwned?.id;

  const {
    data: dashboardRes,
    isLoading: isDashboardLoading,
    error,
  } = useGetClubCustomDashboardQuery(clubId || "", {
    skip: !clubId,
  });

  if (isUserLoading || isDashboardLoading || error)
    return <Loading count={5} className="p-4" />;

  const analysis = dashboardRes?.analysis;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-[1600px] mx-auto">
      <LivePerformanceSummary data={analysis?.live_performance_summary} />

      <div className="grid grid-cols-2 gap-6">
        <RecentMatchReports data={analysis?.recent_match_reports} />
        <UpcomingTasksAndSchedule data={analysis?.upcoming_analysis_tasks} />
      </div>

      <RecruitmentNeedsOverview data={analysis?.recruitment_needs_overview} />
    </div>
  );
};

export default DashboardTab;
