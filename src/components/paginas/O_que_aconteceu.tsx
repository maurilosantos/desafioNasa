import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from "react-teffex";

function O_que_aconteceu() {
  return (
    <>
	    		  <div className="borda" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
		  <div className="chat">
		  <figure className="avatar"><img className="ia" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"/><figcaption>Insalubera</figcaption></figure>
        <Typewriter
          text="I am detecting a new planet in the region. I tried to search for information about it in other databases, but I couldn't find anything."
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: 0.8, stutterChance: 0.1,}}
        />
		  </div>
		  </div>
      <Link to={"/Voce_acha_que_e_seguro_se_aproximar"}>
        <button className="button" data-augmented-ui="br-clip both">
          <Glitch
            alphabet
            text="Do you think it's safe to approach?" /></button>
      </Link>
    </>
  );
}

export default O_que_aconteceu

