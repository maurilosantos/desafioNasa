import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function Voce_acha_que_e_seguro_se_aproximar() {
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
            text="Hmm... I believe so. This planet seems quite interesting; I'm not detecting anything hostile for now. Its star is also at a safe distance. We might find some discoveries there."
            cursorSettings={{ color: "transparent" }}
            typeSettings={{ typeDelay: 0.8, stutterChance: 0.1 }}
          />
          </div>
        </div>
      <div className="button-container">
        <Link to={"/Consegue_obter_mais_dados_sobre_ele"}>
          <button className="button" data-augmented-ui="br-clip both">
            <Glitch alphabet text="Can you obtain more data about it?" />
          </button>
        </Link>
      </div>
      </div>
    </>
  );
}

export default Voce_acha_que_e_seguro_se_aproximar;
