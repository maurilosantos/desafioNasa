import { Link } from 'react-router-dom';
import { Typewriter, Glitch } from 'react-teffex';

function Consegue_obter_mais_dados_sobre_ele() {
  return (
    <>
      <div className="container" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
        <div className="avatar-chat-container">
          <figure className="avatar">
            <img className="ia" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border" />
            <figcaption>Insalubera</figcaption>
          </figure>
          <div className="typewriter">
          <Typewriter
            text="
	Of course! Here are some important data I managed to obtain so far: This planet has a rocky and more arid surface than Earth's, and it's slightly smaller, approximately 83% of Earth's size. However, it has a magnetic field to deflect solar rays, its star is at a standard distance, and its temperature seems reasonable by human standards. And... look at this! There's a high probability of water being present on this planet!
"
            cursorSettings={{ color: "transparent" }}
            typeSettings={{ typeDelay: 0.8, stutterChance: 0.1 }}
          />
          </div>
        </div>
      </div>
      <div className="button-container">
        <Link to={"/Si_aproximar_do_novo_exoplaneta"}>
          <button className="button" data-augmented-ui="br-clip both">
            <Glitch alphabet text="Approach the new exoplanet" />
          </button>
        </Link>
      </div>
    </>
  );
}

export default Consegue_obter_mais_dados_sobre_ele;
