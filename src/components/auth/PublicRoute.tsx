import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "@/redux/hooks";
import { ROLE_DASHBOARDS } from "@/types/auth.types";

const PublicRoute = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  if (isAuthenticated && user) {
    // If already logged in, redirect to their dashboard
    const redirectPath = ROLE_DASHBOARDS[user.role] || "/";
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
