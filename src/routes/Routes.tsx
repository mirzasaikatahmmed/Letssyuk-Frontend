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
import AvailablePlayers from "@/main/club/dashboard/availablePlayers/AvailablePlayers";
import { AvailablePlayerDetails } from "@/main/club/dashboard/availablePlayers/_components/AvailablePlayerDetails";
import ClubUserProfile from "@/main/club/dashboard/profile/ClubUserProfile";
import ClubHelpAndSupport from "@/main/club/dashboard/helpAndSupport/PlayerHelpAndSupport";
import ClubNotification from "@/main/club/dashboard/Notification/ClubNotification";
// import ClubProfileChangePassword from "@/main/club/dashboard/profile/_components/ChangePassword";


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
            element: <PlayerManagement />
          },
          {
            path: "players/details/:id" ,
            element: <ClubPlayerDetails />
          }, 
          {
            path: "players/edit/:id",
            element: <ClubPlayerEdit />
          },
          {
            path: "available-players" ,
            element: <AvailablePlayers />
          },
          {
            path: "available-players/:id" ,
            element: <AvailablePlayerDetails />
          },
          {
            path: "profile" , 
            element: <ClubUserProfile />
          }, 
          {
            path: "support" , 
            element: <ClubHelpAndSupport />
          },
          {
            path: "notifications" , 
            element: <ClubNotification />
          }
        ],
      },
      {
        path: "agent/dashboard",
        element: <AgentLayout />,
      },
    ],
  },
]);
