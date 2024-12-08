import "./Footer.css";

import Position from "../../assets/images/Position.png";

function Footer() {
  return (
    <div>
      <div className="Footer_Container">
        <div className="Footer_Infos">
          <div>
            <h1>BRICO DEFI</h1>
          </div>
          <div>
            <p>199 rue de lille 59520 Marquette-lez-Lille</p>
            <p>Téléphone : 03 20 39 52 20</p>
            <p>Fax : 03 28 04 80 20</p>
            <p>Email : contact@bricodefi.com</p>
          </div>
        </div>
        <div className="Footer_Horaires">
          <div>
            <p>Lundi : de 8h30 à 12h et de 13h30 à 18h</p>
            <p>Mardi : de 8h30 à 12h et de 13h30 à 18h</p>
            <p>Mercredi : de 8h30 à 12h et de 13h30 à 18h</p>
            <p>Jeudi : de 8h30 à 12h et de 13h30 à 18h</p>
            <p>Vendredi : de 8h30 à 12h et de 13h30 à 18h</p>
            <p>Samedi : de 8h30 à 12h30</p>
            <p>Dimanche : fermé</p>
          </div>
        </div>
      </div>
      <div className="Footer_Maps">
        <img src={Position} alt="Logo de positionnement" />
        <li>
          <a href="https://www.google.fr/maps/place/199+Rue+de+Lille,+59520+Marquette-lez-Lille/@50.6706442,3.0641249,16z/data=!3m1!4b1!4m6!3m5!1s0x47c32a500209acd7:0x781d7309b4565c51!8m2!3d50.6706442!4d3.0666998!16s%2Fg%2F11cnckdy6y?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D">
            Nous situer sur la carte
          </a>
        </li>
      </div>
    </div>
  );
}

export default Footer;
