import { Link } from "react-router-dom";

import "./SavoirFaire.css";

import LogoBosch from "../../assets/images/Logo_Bosch.png";
import LogoFacom from "../../assets/images/Logo_Facom.png";
import LogoHagh from "../../assets/images/Logo_Haghebaert.png";
import LogoLegrand from "../../assets/images/Logo_Legrand.png";
import LogoStanley from "../../assets/images/Logo_Stanley.png";
import LogoTheolaur from "../../assets/images/Logo_Theolaur.png";
import LogoV33 from "../../assets/images/Logo_V33.png";
import LogoAbus from "../../assets/images/Logo_Abus.png";
import LogoSika from "../../assets/images/Logo_Sika.png";
import LogoBlanchon from "../../assets/images/Logo_Blanchon.png";
import LogoNorton from "../../assets/images/Logo_Norton.png";
import LogoRevex from "../../assets/images/Logo_Revex.png";

function SavoirFaire() {
  return (
    <div className="Savoir_Faire_Container">
      <h1>Ecoute et Conseil</h1>
      <p>
        Notre équipe est constituée de spécialistes qui sauront vous écouter et
        conseiller. Venez nous exposer vos problèmes et nous vous aiderons a
        trouver la solution, en vous proposant une gamme de produits
        sélectionnés pour leurs qualités tout en restant dans un budget adapté.
      </p>
      <div className="Partenairs_List">
        <Link to="https://www.bosch.fr/">
          <div className="Bosch">
            <img src={LogoBosch} alt="Logo de la marque Bosch" />
            <p>Bosch</p>
          </div>
        </Link>
        <Link to="https://www.facom.com/">
          <div className="Facom">
            <img src={LogoFacom} alt="Logo de la marque Facom" />
            <p>Facom</p>
          </div>
        </Link>
        <Link to="https://www.haghebaert-fremaux.com/">
          <div className="Hagh">
            <img src={LogoHagh} alt="Logo de la marque Haghebaert et Fremaux" />
            <p>Haghebaert et Fremaux</p>
          </div>
        </Link>
        <Link to="https://www.legrand.fr/">
          <div className="Legrand">
            <img src={LogoLegrand} alt="Logo de la marque Legrand" />
            <p>Legrand</p>
          </div>
        </Link>
        <Link to="https://www.stanleyoutillage.fr/">
          <div className="Stanley">
            <img src={LogoStanley} alt="Logo de la marque Stanley" />
            <p>Stanley</p>
          </div>
        </Link>
        <Link to="https://www.theolaur.com/">
          <div className="Theolaur">
            <img src={LogoTheolaur} alt="Logo de la marque Theodore Lefebvre" />
            <p>Théodore Lefebvre</p>
          </div>
        </Link>
        <Link to="https://www.v33.fr/">
          <div className="V33">
            <img src={LogoV33} alt="Logo de la marque V33" />
            <p>V33</p>
          </div>
        </Link>
        <Link to="https://www.abus.com/fr">
          <div className="Abus">
            <img src={LogoAbus} alt="Logo de la marque Abus" />
            <p>Abus</p>
          </div>
        </Link>
        <Link to="https://fra.sika.com/">
          <div className="Sika">
            <img src={LogoSika} alt="Logo de la marque Sika" />
            <p>Sika</p>
          </div>
        </Link>
        <Link to="https://www.blanchon.com/">
          <div className="Blanchon">
            <img src={LogoBlanchon} alt="logo de la marque Blanchon" />
            <p>Blanchon</p>
          </div>
        </Link>
        <Link to="https://www.nortonabrasives.com/fr-fr">
          <div className="Norton">
            <img src={LogoNorton} alt="Logo de la marque Norton abrasifs" />
            <p>Norton</p>
          </div>
        </Link>
        <Link to="https://www.revex.fr/">
          <div className="Revex">
            <img src={LogoRevex} alt="Logo de la marque Revex" />
            <p>Revex</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SavoirFaire;
