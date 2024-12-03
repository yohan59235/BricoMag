/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import "../../pages/Secteurs/Eléctricité/Electricite.css";

function CarteProduit({ produit }) {
  return (
    <div className="Produit_Container">
      <h3>{produit.Nom}</h3>
      <img src={produit.Image} alt={produit.Nom} />
      <div className="Ref_Marque">
        <p>Réf: {produit.Reference}</p>
        <p>{produit.Marque}</p>
      </div>
      <div className="Prix_Stock">
        <p>{produit.Prix}€</p>
        <p>{produit.Stock} en stock</p>
      </div>
    </div>
  );
}
CarteProduit.propTypes = {
  produit: PropTypes.shape({
    Nom: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
    Reference: PropTypes.string.isRequired,
    Prix: PropTypes.string.isRequired,
    Marque: PropTypes.string.isRequired,
    Stock: PropTypes.string.isRequired,
  }),
};

export default CarteProduit;
