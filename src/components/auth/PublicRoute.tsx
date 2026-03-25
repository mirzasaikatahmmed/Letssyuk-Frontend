import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "@/redux/hooks";
import { ROLE_DASHBOARDS, ROLE_ONBOARDING } from "@/types/auth.types";

interface PublicRouteProps {
  redirectTo?: "dashboard" | "onboarding";
}

const PublicRoute = ({ redirectTo = "dashboard" }: PublicRouteProps) => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  if (isAuthenticated && user) {
    // Dynamically choose redirect path
    const redirectPath =
      redirectTo === "onboarding"
        ? ROLE_ONBOARDING[user.role] || "/"
        : ROLE_DASHBOARDS[user.role] || "/";

    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
