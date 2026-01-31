import { OnboardingProvider } from "@/context/OnboardingContext";
import OnboardingNavbar from "@/main/player/onboarding/_components/OnboardingNavbar/OnboardingNavbar";
import { Outlet, useLocation, Navigate } from "react-router";

const steps = [
  { path: "personal-details", label: "Personal Details" },
  { path: "football-profile", label: "Football Profile" },
  { path: "career-history", label: "Career & Match History" },
  { path: "physical-development", label: "Physical Development" },
  { path: "training-routine", label: "Training Routine" },
  { path: "fatigue-recovery", label: "Fatigue & Recovery" },
  { path: "lifestyle-nutrition", label: "Lifestyle & Nutrition" },
  { path: "goals-ambition", label: "Goals & Ambition" },
  { path: "consent-declarations", label: "Consent & Declarations" },
];

const PlayerOnboardingLayout = () => {
  const location = useLocation();

  const currentIndex = steps.findIndex((step) =>
    location.pathname.includes(step.path),
  );

  //  Invalid route protection
  if (currentIndex === -1) {
    return <Navigate to="personal-details" replace />;
  }

  const currentStep = currentIndex + 1;
  const progress = Math.round((currentStep / steps.length) * 100);

  return (
    <OnboardingProvider>
      <div className="min-h-screen bg-[#0b0f14] flex justify-center">
        <div className="w-full py-5 px-6">
          {/* Top Navbar */}
          <div className="w-full max-w-4xl mx-auto">
            <OnboardingNavbar />
          </div>

          {/* Form Wrapper */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="">
              {/* Progress Bar */}
              <div className="mt-3">
                <div className="flex justify-between mb-5">
                  <p className=" text-gray-400 mt-1">
                    Step {currentStep} of {steps.length} • profile
                  </p>
                  <p className=" text-gray-400 mt-1">
                    {progress}% complete
                  </p>
                </div>
                <div className="h-2 bg-gray-700 rounded">
                  <div
                    className="h-2 bg-cyan-500 rounded transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Active Step */}
            <Outlet />
          </div>
        </div>
      </div>
    </OnboardingProvider>
  );
};

export default PlayerOnboardingLayout;
