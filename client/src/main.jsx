import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import Papa from "papaparse";

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
import ProduitInfos from "./pages/ProduitInfos/ProduitInfos";

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
      {
        path: "/:id",
        element: <ProduitInfos />,
        loader: ({ params }) =>
          axios
            .get(
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vTznR64l5O63VwDaNERsEZ-v1cEjcDvVGnMkqpHrZsgk_ffKJlAU0xhPSWKlHhXvMldS36kvwM5D7DW/pub?gid=1410178032&single=true&output=csv"
            )
            .then((response) => {
              const parsedData = Papa.parse(response.data, { header: true });
              return parsedData.data.find(
                (produit) => produit.id === params.id
              );
            }),
      },
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
