/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";
import { Link } from "react-router-dom";
import CarteProduit from "../../../components/CarteProduit/CarteProduit";
// import Loupe from "../../../assets/images/loupe.png";

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
            console.info("Données reçues :", result.data);
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

  // SearchBar

  // const [searchTerm, setSearchTerm] = useState("");
  // const [filteredProduits, setFilteredProduit] = useState([]);

  // useEffect(() => {
  //   const produitsJardinage = jardinage.filter(
  //     (produit) => produit?.Secteur?.trim().toLowerCase() === "jardinage"
  //   );
  //   console.info("Produits Secteur Jardinage :", produitsJardinage);

  //   const produitsFiltres = produitsJardinage.filter((produit) =>
  //     produit?.Nom?.trim().toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   console.info("Produits Filtrés :", produitsFiltres);

  //   setFilteredProduit(produitsFiltres);
  // }, [searchTerm, jardinage]);

  // const handleSearchClick = () => {
  //   console.info("Recherche déclenchée :", searchTerm);
  // };

  return (
    <div>
      {/* <div className="Search_Bar_Container">
        <input
          type="text"
          placeholder="Recherchez votre produit"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={Loupe}
          alt="Loupe pour la recherche"
          onClick={() => console.info("Recherche :", searchTerm)}
        />
      </div> */}
      {/* <div>
        {filteredProduits.map((produit) => (
          <div key={produit.id}>
            <Link to={`/${produit.id}`}>
              <CarteProduit produit={produit} />
            </Link>
          </div>
        ))}
      </div> */}
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
