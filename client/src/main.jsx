import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./services/UserContext";

import App from "./App";
import Home from "./pages/Home/Home";
import Produits from "./pages/Produits/Produits";
import SavoirFaire from "./pages/SavoirFaire/SavoirFaire";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Produits", element: <Produits /> },
      { path: "/SavoirFaire", element: <SavoirFaire /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
