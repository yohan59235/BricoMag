/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";
import { Link } from "react-router-dom";
import CarteProduit from "../../../components/CarteProduit/CarteProduit";

import "./Electricite.css";

function Electricite() {
  const URL = import.meta.env.VITE_OTHER_VARIABLE;
  const [electricite, setElectricite] = useState([]);

  const showElectriciteProduits = () => {
    axios
      .get(`${URL}`)
      .then((response) => {
        Papa.parse(response.data, {
          header: true,
          complete: (result) => {
            setElectricite(result.data);
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    showElectriciteProduits();
  }, []);

  return (
    <div className="All_Produits_Container">
      {electricite
        .filter((produit) => produit.Secteur === "Eléctricité")
        .map((produit) => (
          <div key={produit.id}>
          <Link to={`/${produit.id}`}>
            <CarteProduit produit={produit} />
          </Link>
        </div>
        ))}
    </div>
  );
}

export default Electricite;
