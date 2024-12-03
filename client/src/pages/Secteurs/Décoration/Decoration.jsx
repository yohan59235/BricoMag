/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";
import { Link } from "react-router-dom";
import CarteProduit from "../../../components/CarteProduit/CarteProduit";

import "../Eléctricité/Electricite.css";

function Decoration() {
  const URL = import.meta.env.VITE_OTHER_VARIABLE;

  const [decoration, setDecoration] = useState([]);

  const showDecorationProduits = () => {
    axios
      .get(`${URL}`)
      .then((response) => {
        Papa.parse(response.data, {
          header: true,
          complete: (result) => {
            setDecoration(result.data);
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    showDecorationProduits();
  }, []);
  return (
    <div className="All_Produits_Container">
      {decoration
        .filter((produit) => produit.Secteur === "Décoration")
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

export default Decoration;
