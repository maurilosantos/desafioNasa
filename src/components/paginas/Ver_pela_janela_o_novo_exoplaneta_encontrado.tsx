import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from "react-teffex";

function Ver_pela_janela_o_novo_exoplaneta_encontrado() {
  return (
	<>
							  <div className="borda" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
  <div className="image-container image planeta image-container" data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both">
		<img
		  src="https://app.milanote.com/media/p/images/1QPk8J1zWD7n7O/QuF/Camada%202.png?w=400&v=2&elementId=1QPk8J1zWD7n7O"
		  width="30%"
		  height="auto"
		/>
  </div>
		  <div className="chat">
		  <figure className="avatar"><img className="ia" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"/><figcaption>Insalubera</figcaption></figure>
		<Typewriter
		  text="This exoplanet is truly spectacular; So astronaut, let's explore and check it out?"
		  cursorSettings={{ color: "transparent" }}
		  typeSettings={{ typeDelay: 0.8, stutterChance: 0.1, }}
		/>
		  </div>
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
