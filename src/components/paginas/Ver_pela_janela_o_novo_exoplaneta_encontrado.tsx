import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function Ver_pela_janela_o_novo_exoplaneta_encontrado() {
  return (
    <>
      <div className="container" data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both">
        <img
          className="planet-image"
          src="https://app.milanote.com/media/p/images/1QPk8J1zWD7n7O/QuF/Camada%202.png?w=400&v=2&elementId=1QPk8J1zWD7n7O"
          alt="Exoplanet"
        />
      </div>
      
      <div className="typewriter">
      <Typewriter
        text="Woww!! This is so awesome!!!"
        cursorSettings={{ color: "transparent" }}
        typeSettings={{ typeDelay: 0.8, stutterChance: 0.1 }}
      />
      </div>

      
      <Link to={"/Iniciar_o_pouso"}>
        <button className="button" data-augmented-ui="br-clip both">
          <Glitch alphabet text="Initiate the landing" />
        </button>
      </Link>
    </>

  );
}

export default Ver_pela_janela_o_novo_exoplaneta_encontrado;
