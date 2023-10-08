import { Link } from 'react-router-dom';
import { Typewriter, Glitch } from 'react-teffex';

function Bem_vindo() {
  return (
    <>
        		  <div className="borda" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
		  <div className="chat">
		  <figure className="avatar"><img className="ia" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"/><figcaption>Insalubera</figcaption></figure>

        <Typewriter
          text="Approaching the new exoplanet. Get ready for a spectacular view!"
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: 0.8, stutterChance: 0.1, }}
        />
		  </div>
		  </div>
      <Link to={"/Ver_pela_janela_o_novo_exoplaneta_encontrado"}>
        <button className="button" data-augmented-ui="br-clip both">
          <Glitch
            alphabet
            text="Look out the window at the new exoplanet we found"
          />
        </button>
      </Link>
    </>
  );
}

export default Bem_vindo
