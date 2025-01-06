import React from "react";
import Home from "./Screen/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import WebDevelopment from "./Screen/WebDevelopment";

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
