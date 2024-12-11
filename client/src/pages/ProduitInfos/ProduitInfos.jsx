import { useLoaderData } from "react-router-dom";

import "./ProduitInfos.css";

function ProduitInfos() {
  const produitInfos = useLoaderData();
  return (
    <div>
      <div className="Description_Container">
        <div className="Produit_Image">
          <img src={produitInfos.Image} alt="Visseuse, Perceuse" />
        </div>
        <div className="Ref_Nom">
          <p>Ref : {produitInfos.Reference}</p>
          <h1>{produitInfos.Nom}</h1>
          <div className="Infos_Produit">
            <p>Marque : {produitInfos.Marque}</p>
            <p>{produitInfos.Stock} encore en stock</p>
            <p>{produitInfos.Prix}€</p>
          </div>
        </div>
      </div>
      <div className="Produit_Description">
        <p>{produitInfos.Description}</p>
      </div>
    </div>
  );
}

export default ProduitInfos;
