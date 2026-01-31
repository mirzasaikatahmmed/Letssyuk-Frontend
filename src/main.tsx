import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Routes } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import { FormProvider } from "./main/club/onboarding/context/FormContext";
import { AgentFormProvider } from "./main/agent/onboarding/context/AgentFormContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormProvider>
      <AgentFormProvider>
        <RouterProvider router={Routes} />
        <ToastContainer />
      </AgentFormProvider>
    </FormProvider>
  </StrictMode>,
);
