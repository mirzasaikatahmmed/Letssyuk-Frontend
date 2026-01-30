import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Routes } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import { FormProvider } from "./main/agent/onboarding/context/FormContext";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormProvider>
      <RouterProvider router={Routes} />
      <ToastContainer />
    </FormProvider>
  </StrictMode>
);
