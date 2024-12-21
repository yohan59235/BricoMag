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

function Decoration() {
  const [decoration, setDecoration] = useState([]);

  const showDecorationProduits = () => {
    axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTznR64l5O63VwDaNERsEZ-v1cEjcDvVGnMkqpHrZsgk_ffKJlAU0xhPSWKlHhXvMldS36kvwM5D7DW/pub?gid=1410178032&single=true&output=csv"
      )
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

  // SearchBar

  const [searchProduit, setSearchProduit] = useState("");
  const [filteredProduit, setFilteredProduit] = useState([]);

  const handleSearchProduit = (e) => {
    setSearchProduit(e.target.value);
  };

  useEffect(() => {
    if (!searchProduit || searchProduit.trim() === "") {
      setFilteredProduit(decoration);
    } else {
      const produitsFiltres = decoration.filter((produit) => {
        const produitNomNormalized = produit.Nom
          ? removeAccents(produit.Nom.toLowerCase())
          : "";
        const searchNormalized = removeAccents(searchProduit.toLowerCase());
        const matchSecteur = produit.Secteur === "Décoration";
        const matchNom = produitNomNormalized.includes(searchNormalized);
        return matchSecteur && matchNom;
      });
      setFilteredProduit(produitsFiltres);
    }
  }, [searchProduit, decoration]);

  return (
    <div>
      <div className="Search_Bar_Container">
        <SearchBar
          handleSearchProduit={handleSearchProduit}
          searchProduit={searchProduit}
        />
      </div>
      <div className="All_Produits_Container">
        {filteredProduit
          .filter((produit) => produit.Secteur === "Décoration")
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

export default Decoration;
