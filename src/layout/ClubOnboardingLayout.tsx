import { ClubFormProvider } from "@/main/club/onboarding/context/ClubFormContext";
import { Outlet } from "react-router";

export default function ClubOnboardingLayout() {
  return (
    <ClubFormProvider>
      <Outlet />
    </ClubFormProvider>
  );
}
