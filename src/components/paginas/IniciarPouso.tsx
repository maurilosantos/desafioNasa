import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';


function IniciarPouso() {
  return (
  <>
		      <div className="container" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
      <div className="image-container" data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both">
        <img
          src="https://app.milanote.com/media/p/images/1QOWLI1zWsuy6K/QFx/2-ASvkC.png?w=400&v=2&elementId=1QOWLI1zWsuy6K"
          alt="Imagem do planeta"
          className="planet-image"
        />
      </div>
        <div className="avatar-chat-container">
          <figure className="avatar">
            <img className="ia" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border" />
            <figcaption>Insalubera</figcaption>
          </figure>
		  <div className="typewriter">
		  <Typewriter
									  text="After a long time, we have finally arrived! Let's explore the specially named planet of Insalubers-63!"

			cursorSettings={{ color: "transparent" }}
			typeSettings={{ typeDelay: 0.8, stutterChance: 0.1 }}
		  />
		  </div>
	  </div>
	  <Link to={"/Sair_da_nave_e_explorar_o_planeta"}>
		<button className="button" data-augmented-ui="br-clip both">
		  <Glitch alphabet text="Exit the ship and explore the planet" />
		</button>
	  </Link>
	</div>
  </>
  );
}

export default IniciarPouso;
