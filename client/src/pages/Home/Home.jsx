import "./Home.css";

import Devanture from "../../assets/images/Devanture.png";
import Chrono from "../../assets/images/Chrono.png";
import Delivery from "../../assets/images/Delivery.png";
import Decoupe from "../../assets/images/Decoupe.png";
import Couleurs from "../../assets/images/Couleurs.png";

function Home() {
  return (
    <div className="Home_Container">
      <div className="Devanture_Titre">
        <div>
          <img src={Devanture} alt="Devanture du magasin Brico Defi" />
        </div>
        <div className="Home_Presentation">
          <h1>Bienvenue chez Brico Defi</h1>
          <h3>
            Tout le nécessaire pour construire, rénover et embellir, à portée de
            main !
          </h3>
        </div>
      </div>
      <h4>Les avantages avec Brico Defi</h4>
      <div className="Avantages_Container">
        <div className="Home_React">
          <div>
            <img src={Chrono} alt="Logo d'un chronomètre" />
            <p>Réactivité</p>
          </div>
          <p>
            Grâce à un large réseau de fournisseurs partenaires, nous nous
            engageons à vous aider à obtenir en un temps record l'article
            "spécial" qui vous manque, et ceci dans des domaines complexes tels
            que la plomberie, la quincaillerie ou l'outillage. Nous sommes à
            votre écoute afin de vous conseiller au mieux et de vous dépanner
            afin de vous permettre de réaliser vos ouvrages dans les meilleures
            conditions et dans les plus brefs délais.
          </p>
        </div>
        <div className="Home_Delivery">
          <div>
            <img src={Delivery} alt="Logo d'un livreur à domicile" />
            <p>Livraison à domicile</p>
          </div>
          <p>
            Nous vous permettons d'être livré à votre domicile si vous ne pouvez
            pas ou n'avez pas les moyens de venir le chercher vous-même afin que
            vous puissiez entamer vos travaux sans vous soucier du transport.
          </p>
        </div>
        <div className="Home_Decoupe">
          <div>
            <img src={Decoupe} alt="Logo de la découpe de bois" />
            <p>Découpe de bois et de verre</p>
          </div>
          <p>
            Nous vous ferons avec plaisir les découpes de bois ou de verre dont
            vous aurez besoin.
          </p>
        </div>
        <div className="Home_Couleurs">
          <div>
            <img src={Couleurs} alt="Logo de palette de couleurs" />
            <p>Coloris personnalisés</p>
          </div>
          <p>
            Nous sommes également équipés d'un outil de pointe vous permettant
            de disposer de la peinture de la couleur de votre choix. En quelques
            minutes, définissez et obtenez la nuance désirée.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
