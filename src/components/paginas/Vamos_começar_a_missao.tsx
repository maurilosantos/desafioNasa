import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function Vamos_começar_a_missão() {
  return (
    <>
        	  <div
		className="borda chat"
		data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both"
	  >
	  <h3 className="chat">
        <Typewriter
          text="After a long time in space…"
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: 0.8, stutterChance: 0.1, }}
        />
	</h3>
	</div>
      <Link to={"/Voltar_a_escolha_dos_Exoplanetas"}>
        <button className="button" data-augmented-ui="br-clip both">
          <Glitch alphabet text="Next" />
        </button>
      </Link>
    </>
  );
}

export default Vamos_começar_a_missão
