import { Link } from "react-router-dom";

import "./Produits.css";

import Plomberie from "../../assets/images/plomberie.png";
import Bricolage from "../../assets/images/bricolage.png";
import Couverture from "../../assets/images/couveture.png";
import Decoration from "../../assets/images/decoration.png";
import Electricite from "../../assets/images/electricite.png";
import Jardinage from "../../assets/images/jardinage.png";
import Peinture from "../../assets/images/peintures.png";

function Produits() {
  return (
    <div className="Produits_Container">
      <h1>Retrouvez nos produits</h1>
      <div className="Produits_List">
        <Link to="/Bricolage">
          <div>
            <img src={Bricolage} alt="Logo bricolage" />
            <p>Bricolage</p>
          </div>
        </Link>
        <Link to="/Décoration">
          <div>
            <img src={Decoration} alt="Logo décoration" />
            <p>Décoration</p>
          </div>
        </Link>
        <Link to="/Peinture">
          <div>
            <img src={Peinture} alt="Logo peinture" />
            <p>Peinture</p>
          </div>
        </Link>
        <Link to="/Eléctricité">
          <div>
            <img src={Electricite} alt="Logo éléctricité" />
            <p>Eléctricité</p>
          </div>
        </Link>
        <Link to="/Plomberie">
          <div>
            <img src={Plomberie} alt="Logo plomberie" />
            <p>Plomberie</p>
          </div>
        </Link>
        <Link to="/Couverture">
          <div>
            <img src={Couverture} alt="Logo couverture" />
            <p>Couverture</p>
          </div>
        </Link>
        <Link to="/Jardinage">
          <div>
            <img src={Jardinage} alt="Logo jardinage" />
            <p>Jardinage</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Produits;
