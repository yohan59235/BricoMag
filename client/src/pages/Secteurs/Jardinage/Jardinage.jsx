/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";
import { Link } from "react-router-dom";
import CarteProduit from "../../../components/CarteProduit/CarteProduit";

import "../Eléctricité/Electricite.css";

function Jardinage() {
  const URL = import.meta.env.VITE_OTHER_VARIABLE;
  const [jardinage, setJardinage] = useState([]);

  const showJardinageProduits = () => {
    axios
      .get(`${URL}`)
      .then((response) => {
        Papa.parse(response.data, {
          header: true,
          complete: (result) => {
            setJardinage(result.data);
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    showJardinageProduits();
  }, []);

  return (
    <div>
      <div className="All_Produits_Container">
        {jardinage
          .filter((produit) => produit.Secteur === "Jardinage")
          .map((produit) => (
            <div key={produit.id}>
              <Link to={`/${produit.id}`}>
                <CarteProduit produit={produit} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Jardinage;
