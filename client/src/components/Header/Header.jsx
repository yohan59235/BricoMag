import { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import LogoBrico from "../../assets/images/Logo_Bricodefi.png";
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
      <img src={LogoBrico} alt="Logo de l'enseigne Brico Defi" />
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
                <p>Produits</p>
              </Link>
            </li>
            <li>
              <Link to="/SavoirFaire" onClick={closeMenu}>
                <p>Savoir Faire</p>
              </Link>
            </li>
            <li>
              <Link to="/Services" onClick={closeMenu}>
                <p>Services</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
