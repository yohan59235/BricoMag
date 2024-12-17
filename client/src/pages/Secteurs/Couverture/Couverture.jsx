/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";
import { Link } from "react-router-dom";
import CarteProduit from "../../../components/CarteProduit/CarteProduit";
import SearchBar from "../../../components/SearchBar/SearchBar";

import "../Eléctricité/Electricite.css";

function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-\s]+/g, "")
    .trim();
}

function Couverture() {
  const URL = import.meta.env.VITE_OTHER_VARIABLE;

  const [couverture, setCouverture] = useState([]);

  const showCouvertureProduits = () => {
    axios
      .get(`${URL}`)
      .then((response) => {
        Papa.parse(response.data, {
          header: true,
          complete: (result) => {
            setCouverture(result.data);
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    showCouvertureProduits();
  }, []);

  // SearchBar

  const [searchProduit, setSearchProduit] = useState("");
  const [filteredProduit, setFilteredProduit] = useState([]);

  const handleSearchProduit = (e) => {
    setSearchProduit(e.target.value);
  };

  useEffect(() => {
    if (!searchProduit || searchProduit.trim() === "") {
      setFilteredProduit(couverture);
    } else {
      const produitsFiltres = couverture.filter((produit) => {
        const produitNomNormalized = produit.Nom
          ? removeAccents(produit.Nom.toLowerCase())
          : "";
        const searchNormalized = removeAccents(searchProduit.toLowerCase());
        const matchSecteur = produit.Secteur === "Couverture";
        const matchNom = produitNomNormalized.includes(searchNormalized);
        return matchSecteur && matchNom;
      });
      setFilteredProduit(produitsFiltres);
    }
  }, [searchProduit, couverture]);

  return (
    <div>
      {" "}
      <div className="Search_Bar_Container">
        <SearchBar
          handleSearchProduit={handleSearchProduit}
          searchProduit={searchProduit}
        />
      </div>
      <div className="All_Produits_Container">
        {filteredProduit
          .filter((produit) => produit.Secteur === "Couverture")
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

export default Couverture;
