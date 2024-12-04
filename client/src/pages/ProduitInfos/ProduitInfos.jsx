import { useLoaderData } from "react-router-dom";

import "./ProduitInfos.css";

function ProduitInfos() {
  const produitInfos = useLoaderData();
  return (
    <div className="Description_Container">
      <h1>{produitInfos.Nom}</h1>
      <div className="Image_Infos">
        <img src={produitInfos.Image} alt="Visseuse, Perceuse" />
        <div className="Infos_Produit">
          <p>Ref : {produitInfos.Reference}</p>
          <p>Marque : {produitInfos.Marque}</p>
          <p>{produitInfos.Prix}€</p>
          <p>{produitInfos.Stock} encore en stock</p>
        </div>
      </div>
      <p>{produitInfos.Description}</p>
    </div>
  );
}

export default ProduitInfos;
