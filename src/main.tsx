import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Routes } from "./routes/Routes";
import { Toaster } from "./components/ui/sonner";
import { FormProvider } from "./main/club/onboarding/context/FormContext";
import { AgentFormProvider } from "./main/agent/onboarding/context/AgentFormContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <FormProvider>
        <AgentFormProvider>
          <RouterProvider router={Routes} />
          <Toaster />
        </AgentFormProvider>
      </FormProvider>
    </Provider>
  </StrictMode>,
);
