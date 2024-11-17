import "./Home.css";

import Devanture from "../assets/images/Devanture.png";

function Home() {
  return (
    <div className="Home_Container">
      <div>
        <img src={Devanture} alt="Devanture du magasin Brico Defi" />
      </div>
      <div className="Home_Presentation">
        <h1>Bienvenue chez Brico Defi</h1>
        <h3>
          Le magasin où vous pourrez retouver tout ce qu'il vous faut pour faire
          toutes sortes de travaux ainsi que du jardinage.
        </h3>
      </div>
    </div>
  );
}

export default Home;
