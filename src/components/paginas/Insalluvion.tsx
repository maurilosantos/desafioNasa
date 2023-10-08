import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from "react-teffex";

function Insalluvion() {
   
  return (
  <>
          		  <div className="borda" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
		  <div className="chat">
		  <figure className="avatar"><img className="ia" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"/><figcaption>Insalubera</figcaption></figure>
		<Typewriter
		  text="Good morning, Crew member! It's time to wake up, we have a lot of work to do today.
	"
		  cursorSettings={{ color: "transparent" }}
		  typeSettings={{ typeDelay: 0.8, stutterChance: 0.1, }}
		/>
		  </div>
		  </div>
	  <Link to={"/Ha_Onde_estou"}>
		<button className="button" data-augmented-ui="br-clip both">
		  <Glitch alphabet text="Uh? Where am I?" />
		</button>
	  </Link>
	  <Link to={"/O_que_esta_acontecendo"}>
		<button className="button" data-augmented-ui="br-clip both">
		  <Glitch alphabet text="What is happening?" />
		</button>
	  </Link>
  </>
  );
}

export default Insalluvion
