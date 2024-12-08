import { useLoaderData } from "react-router-dom";

import "./ProduitInfos.css";

function ProduitInfos() {
  const produitInfos = useLoaderData();
  return (
    <div className="Description_Container">
      <div>
        <img src={produitInfos.Image} alt="Visseuse, Perceuse" />
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
      <p>{produitInfos.Description}</p>
    </div>
  );
}

export default ProduitInfos;
