import ErrorPage from "@/components/error/ErrorPage";
import AgentLayout from "@/layout/AgentLayout";
import ClubLayout from "@/layout/ClubLayout";
import MainLayout from "@/layout/MainLayout";
import PlayerLayout from "@/layout/PlayerLayout";
import ClubOverview from "@/main/club/dashboard/ClubOverview/ClubOverview";
import ClubPlayerDetails from "@/main/club/dashboard/player/_components/PlayerDetails";
import ClubPlayerEdit from "@/main/club/dashboard/player/_components/PlayerEdit";
import PlayerManagement from "@/main/club/dashboard/player/PlayerManagement";
import MentalHealth from "@/main/player/dashboard/home/_components/AiRecommendation/MentalHealth";
import NutritionHydrationGuidance from "@/main/player/dashboard/home/_components/AiRecommendation/NutritionHydrationGuidance";
import PriorityFocusAreas from "@/main/player/dashboard/home/_components/AiRecommendation/PriorityFocusAreas";
import SuggestedWeeklyStructure from "@/main/player/dashboard/home/_components/AiRecommendation/SuggestedWeeklyStructure";
import PlayerDHome from "@/main/player/dashboard/home/PlayerDHome";
import PlayerHelpAndSupport from "@/main/player/dashboard/helpAndSupport/PlayerHelpAndSupport";
import PlayerNotifications from "@/main/player/dashboard/notification/PlayerNotifications";
import PlayerData from "@/main/player/dashboard/playerData/PlayerData";
import PlayerProfile from "@/main/player/dashboard/profile/PlayerProfile";
import { createBrowserRouter } from "react-router";
import PlayerOnboardingLayout from "@/layout/PlayerOnboardingLayout";
// import ClubOnboardingLayout from "@/layout/ClubOnboardingLayout";
import PersonalDetails from "@/main/player/onboarding/PersonalDetails";
import FootballProfile from "@/main/player/onboarding/FootballProfile";
import CareerHistory from "@/main/player/onboarding/CareerHistory";
import PhysicalDevelopment from "@/main/player/onboarding/PhysicalDevelopment";
import TrainingRoutine from "@/main/player/onboarding/TrainingRoutine";
import FatigueRecovery from "@/main/player/onboarding/FatigueRecovery";
import LifestyleNutrition from "@/main/player/onboarding/LifestyleNutrition";
import GoalsAmbitions from "@/main/player/onboarding/GoalsAmbitions";
import ConsentDeclarations from "@/main/player/onboarding/ConsentDeclarations";
// import ClubOnboarding from "@/main/club/onboarding/AgentOnboarding";
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
// import ClubOnboarding from "@/main/club/onboarding/ClubOnboarding";


export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
            path: "players/edit/:id",
            element: <ClubPlayerEdit />,
          },
          {
            path: "available-players",
            element: <AvailablePlayers />,
          },
          {
            path: "available-players/:id",
            element: <AvailablePlayerDetails />,
          },
        ],
      },
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
            path: "add-player",
            element: <AddNewPlayer />,
          },
          {
            path: "profile",
            element: <AgentUserProfile />,
          },
        ],
      },
      {
        path: "club/onboarding",
        element: <ClubOnboarding />
      },
      {
        path: "agent/onboarding", 
        element: <AgentOnboarding />
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
