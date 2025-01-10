import React from "react";
import Home from "./Screen/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import WebDevelopment from "./Screen/WebDevelopment";
import AppDevelopment from "./Screen/AppDevelopment";
import GraphicDesign from "./Screen/GraphicDesign";
import UIUXDesign from "./Screen/UIUXDesign";
import Cybersecurity from "./Screen/Cybersecurity";
import DigitalMarketing from "./Screen/DigitalMarketing";
import Blockchain from "./Screen/Blockchain";
import AIML from "./Screen/AIML";
import SocialMediaManagement from "./Screen/SocialMediaManagement";
import ConsultationForm from "./Screen/CosultationForm";
import "./App.css";
import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/services/web-development",
      element: <WebDevelopment />,
    },
    {
      path: "/services/app-development",
      element: <AppDevelopment />,
    },
    {
      path: "/services/graphic-design",
      element: <GraphicDesign />,
    },
    {
      path: "/services/ui-ux-design",
      element: <UIUXDesign />,
    },
    {
      path: "/services/cybersecurity",
      element: <Cybersecurity />,
    },
    {
      path: "/services/digital-marketing",
      element: <DigitalMarketing />,
    },
    {
      path: "/services/blockchain",
      element: <Blockchain />,
    },
    {
      path: "/services/ai-ml",
      element: <AIML />,
    },
    {
      path: "/services/social-media-management",
      element: <SocialMediaManagement />,
    },
    {
      path: "/client/form",
      element: <ConsultationForm />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
