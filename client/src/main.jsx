import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./services/UserContext";

import App from "./App";
import Home from "./pages/Home/Home";
import Produits from "./pages/Produits/Produits";
import SavoirFaire from "./pages/SavoirFaire/SavoirFaire";
import Bricolage from "./pages/Secteurs/Bricolage/Bricolage";
import Plomberie from "./pages/Secteurs/Plomberie/Plomberie";
import Peinture from "./pages/Secteurs/Peinture/Peinture";
import Jardinage from "./pages/Secteurs/Jardinage/Jardinage";
import Electricite from "./pages/Secteurs/Eléctricité/Electricite";
import Decoration from "./pages/Secteurs/Décoration/Decoration";
import Couverture from "./pages/Secteurs/Couverture/Couverture";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Produits", element: <Produits /> },
      { path: "/SavoirFaire", element: <SavoirFaire /> },
      { path: "/Bricolage", element: <Bricolage /> },
      { path: "/Plomberie", element: <Plomberie /> },
      { path: "/Peinture", element: <Peinture /> },
      { path: "/Jardinage", element: <Jardinage /> },
      { path: "/Eléctricité", element: <Electricite /> },
      { path: "/Décoration", element: <Decoration /> },
      { path: "/Couverture", element: <Couverture /> },
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
