import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';


function IniciarPouso() {
  return (
    <div className="container">
      <div className="image-container" data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both">
        <img
          src="https://app.milanote.com/media/p/images/1QOWLI1zWsuy6K/QFx/2-ASvkC.png?w=400&v=2&elementId=1QOWLI1zWsuy6K"
          alt="Imagem do planeta"
          className="planet-image"
        />
      </div>
      <div className="typewriter">
      <Typewriter
        text="Let's go!"
        cursorSettings={{ color: "transparent" }}
        typeSettings={{ typeDelay: 0.8, stutterChance: 0.1 }}
      />
      </div>
      <Link to={"/AmbientePlantas"}>
        <button className="button" data-augmented-ui="br-clip both">
          <Glitch alphabet text="Initiate Plants" />
        </button>
      </Link>
    </div>
  );
}

export default IniciarPouso;
