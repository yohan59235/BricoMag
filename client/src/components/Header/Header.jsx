import { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import Enseigne from "../../assets/images/Enseigne.png";
import MenuBurger from "../../assets/images/Menu_Burger.png";

function Header() {
  const [showLiks, setShowLinks] = useState(false);

  const clickBurgerMenu = () => {
    setShowLinks(!showLiks);
  };

  const closeMenu = () => {
    setShowLinks(false);
  };

  return (
    <div className="Header_Container">
      <img src={Enseigne} alt="Logo de l'enseigne Brico Defi" />
      <div className="Menu_Desktop">
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              <p>Accueil</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/Produits" onClick={closeMenu}>
              <p>Nos produits</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/SavoirFaire" onClick={closeMenu}>
              <p>Notre Savoir Faire</p>
            </Link>
          </li>
        </ul>
      </div>
      <img
        className="Burger_Menu"
        src={MenuBurger}
        onClick={clickBurgerMenu}
        aria-hidden="true"
        alt="Icone du menu"
      />
      {showLiks && (
        <div className="Burger_Links">
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                <p>Accueil</p>
              </Link>
            </li>
            <li>
              <Link to="/Produits" onClick={closeMenu}>
                <p>Nos produits</p>
              </Link>
            </li>
            <li>
              <Link to="/SavoirFaire" onClick={closeMenu}>
                <p>Notre Savoir Faire</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
