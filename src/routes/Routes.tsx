import AgentLayout from "@/layout/AgentLayout";
import ClubLayout from "@/layout/ClubLayout";
import MainLayout from "@/layout/MainLayout";
import PlayerLayout from "@/layout/PlayerLayout";
import ClubOverview from "@/main/club/dashboard/ClubOverview/ClubOverview";
import ClubPlayerDetails from "@/main/club/dashboard/player/_components/PlayerDetails";
import PlayerManagement from "@/main/club/dashboard/player/PlayerManagement";
import MentalHealth from "@/main/player/dashboard/home/_components/AiRecommendation/MentalHealth";
import NutritionHydrationGuidance from "@/main/player/dashboard/home/_components/AiRecommendation/NutritionHydrationGuidance";
import PriorityFocusAreas from "@/main/player/dashboard/home/_components/AiRecommendation/PriorityFocusAreas";
import SuggestedWeeklyStructure from "@/main/player/dashboard/home/_components/AiRecommendation/SuggestedWeeklyStructure";
import MatchPreparationSystem from "@/main/player/dashboard/home/_components/AiRecommendation/MatchPreparationSystem";
import TechnicalSkillsEngine from "@/main/player/dashboard/home/_components/AiRecommendation/TechnicalSkillsEngine";
import PhysicalPerformanceDashboard from "@/main/player/dashboard/home/_components/AiRecommendation/PhysicalPerformanceDashboard";
import TacticalAwarenessAssistant from "@/main/player/dashboard/home/_components/AiRecommendation/TacticalAwarenessAssistant";
import PlayerDevelopmentPathway from "@/main/player/dashboard/home/_components/AiRecommendation/PlayerDevelopmentPathway";
import RecoveryLoadManagement from "@/main/player/dashboard/home/_components/AiRecommendation/RecoveryLoadManagement";
import PlayerDHome from "@/main/player/dashboard/home/PlayerDHome";
import PlayerHelpAndSupport from "@/main/player/dashboard/helpAndSupport/PlayerHelpAndSupport";
import PlayerNotifications from "@/main/player/dashboard/notification/PlayerNotifications";
import PlayerData from "@/main/player/dashboard/playerData/PlayerData";
import PlayerProfile from "@/main/player/dashboard/profile/PlayerProfile";
import { createBrowserRouter } from "react-router";
import PlayerOnboardingLayout from "@/layout/PlayerOnboardingLayout";
import PersonalDetails from "@/main/player/onboarding/PersonalDetails";
import FootballProfile from "@/main/player/onboarding/FootballProfile";
import CareerHistory from "@/main/player/onboarding/CareerHistory";
import PhysicalDevelopment from "@/main/player/onboarding/PhysicalDevelopment";
import TrainingRoutine from "@/main/player/onboarding/TrainingRoutine";
import FatigueRecovery from "@/main/player/onboarding/FatigueRecovery";
import LifestyleNutrition from "@/main/player/onboarding/LifestyleNutrition";
import GoalsAmbitions from "@/main/player/onboarding/GoalsAmbitions";
import ConsentDeclarations from "@/main/player/onboarding/ConsentDeclarations";
import AgentPlayerDetails from "@/main/agent/dashboard/playerData/_components/AgentPlayerDetails";
import AgentUserProfile from "@/main/agent/dashboard/profile/AgentUserProfile";
import AddNewPlayer from "@/main/agent/dashboard/playerData/_components/AddNewPlayer";
import AgentPlayerData from "@/main/agent/dashboard/playerData/AgentPlayerData";
import AgentNotification from "@/main/agent/dashboard/Notification/AgentNotification";
import AgentHelpAndSupport from "@/main/club/dashboard/helpAndSupport/ClubHelpAndSupport";
import AgentOverview from "@/main/agent/dashboard/overview/AgentOverview";
import AvailablePlayers from "@/main/club/dashboard/availablePlayers/AvailablePlayers";
import { AvailablePlayerDetails } from "@/main/club/dashboard/availablePlayers/_components/AvailablePlayerDetails";
import ClubOnboarding from "@/main/club/onboarding/ClubOnboarding";
import AgentOnboarding from "@/main/agent/onboarding/AgentOnboarding";
import ClubUserProfile from "@/main/club/dashboard/profile/ClubUserProfile";
import ClubHelpAndSupport from "@/main/club/dashboard/helpAndSupport/ClubHelpAndSupport";
import ClubNotification from "@/main/club/dashboard/Notification/ClubNotification";
import AIAnalytics from "@/main/club/dashboard/aiAnalytics/AIAnalytics";
import AdminLayout from "@/layout/AdminLayout";
import AuthLayout from "@/layout/AuthLayout";
import AdminDashboard from "@/main/admin/dashboard/AdminDashboard";
import AdminVerifications from "@/main/admin/verification/AdminVerifications";
import AdminSupport from "@/main/admin/support/AdminSupport";
import AdminPayments from "@/main/admin/payments/AdminPayments";
import AdminUsers from "@/main/admin/users/AdminUsers";
import SignIn from "@/main/auth/signin/SignIn";
import SignUp from "@/main/auth/signup/SignUp";
import ForgotPassword from "@/main/auth/forgotPassword/ForgotPassword";
import VerifyOtp from "@/main/auth/verify-otp/VerifyOtp";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import PublicRoute from "@/components/auth/PublicRoute";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <ProtectedRoute allowedRoles={["ATHLETE"]} />,
        children: [
          {
            path: "player/dashboard",
            element: <PlayerLayout />,
            children: [
              {
                path: "overview",
                element: <PlayerDHome />,
              },
              {
                path: "overview/suggested-weekly-structure",
                element: <SuggestedWeeklyStructure />,
              },
              {
                path: "overview/priority-focus-areas",
                element: <PriorityFocusAreas />,
              },
              {
                path: "overview/nutrition-hydration-guidance",
                element: <NutritionHydrationGuidance />,
              },
              {
                path: "overview/mental-health",
                element: <MentalHealth />,
              },
              {
                path: "overview/match-preparation-system",
                element: <MatchPreparationSystem />,
              },
              {
                path: "overview/technical-skills-engine",
                element: <TechnicalSkillsEngine />,
              },
              {
                path: "overview/physical-performance-dashboard",
                element: <PhysicalPerformanceDashboard />,
              },
              {
                path: "overview/tactical-awareness-assistant",
                element: <TacticalAwarenessAssistant />,
              },
              {
                path: "overview/player-development-pathway",
                element: <PlayerDevelopmentPathway />,
              },
              {
                path: "overview/recovery-load-management",
                element: <RecoveryLoadManagement />,
              },
              {
                path: "data",
                element: <PlayerData />,
              },
              {
                path: "profile",
                element: <PlayerProfile />,
              },
              {
                path: "notifications",
                element: <PlayerNotifications />,
              },
              {
                path: "support",
                element: <PlayerHelpAndSupport />,
              },
            ],
          },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={["ADMIN"]} />,
        children: [
          {
            path: "admin/dashboard",
            element: <AdminLayout />,
            children: [
              {
                index: true,
                element: <AdminDashboard />,
              },
              {
                path: "verifications",
                element: <AdminVerifications />,
              },
              {
                path: "support",
                element: <AdminSupport />,
              },
              {
                path: "payments",
                element: <AdminPayments />,
              },
              {
                path: "users",
                element: <AdminUsers />,
              },
            ],
          },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={["CLUB"]} />,
        children: [
          {
            path: "club/dashboard",
            element: <ClubLayout />,
            children: [
              {
                path: "overview",
                element: <ClubOverview />,
              },
              {
                path: "players",
                element: <PlayerManagement />,
              },
              {
                path: "players/details/:id",
                element: <ClubPlayerDetails />,
              },

              {
                path: "available-players",
                element: <AvailablePlayers />,
              },
              {
                path: "available-players/:id",
                element: <AvailablePlayerDetails />,
              },
              {
                path: "ai-analytics",
                element: <AIAnalytics />,
              },
              {
                path: "profile",
                element: <ClubUserProfile />,
              },
              {
                path: "support",
                element: <ClubHelpAndSupport />,
              },
              {
                path: "notifications",
                element: <ClubNotification />,
              },
            ],
          },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={["AGENT"]} />,
        children: [
          {
            path: "agent/dashboard",
            element: <AgentLayout />,
            children: [
              {
                path: "overview",
                element: <AgentOverview />,
              },
              {
                path: "support",
                element: <AgentHelpAndSupport />,
              },
              {
                path: "notifications",
                element: <AgentNotification />,
              },
              {
                path: "player-data",
                element: <AgentPlayerData />,
              },
              {
                path: "player-data/details/:id",
                element: <AgentPlayerDetails />,
              },
              {
                path: "add-player",
                element: <AddNewPlayer />,
              },
              {
                path: "profile",
                element: <AgentUserProfile />,
              },
            ],
          },
        ],
      },
      {
        element: <PublicRoute />,
        children: [
          {
            path: "auth",
            element: <AuthLayout />,
            children: [
              {
                path: "sign-in",
                element: <SignIn />,
              },
              {
                path: "sign-up",
                element: <SignUp />,
              },
              {
                path: "forgot-password",
                element: <ForgotPassword />,
              },
              {
                path: "verify-otp",
                element: <VerifyOtp />,
              },
            ],
          },
        ],
      },
      {
        path: "club/onboarding",
        element: <ClubOnboarding />,
      },
      {
        path: "agent/onboarding",
        element: <AgentOnboarding />,
      },
      {
        path: "player/onboarding",
        element: <PlayerOnboardingLayout />,
        children: [
          {
            path: "personal-details",
            element: <PersonalDetails />,
          },
          {
            path: "football-profile",
            element: <FootballProfile />,
          },
          {
            path: "career-history",
            element: <CareerHistory />,
          },
          {
            path: "physical-development",
            element: <PhysicalDevelopment />,
          },
          {
            path: "training-routine",
            element: <TrainingRoutine />,
          },
          {
            path: "fatigue-recovery",
            element: <FatigueRecovery />,
          },
          {
            path: "lifestyle-nutrition",
            element: <LifestyleNutrition />,
          },
          {
            path: "goals-ambition",
            element: <GoalsAmbitions />,
          },
          {
            path: "consent-declarations",
            element: <ConsentDeclarations />,
          },
        ],
      },
    ],
  },
]);
