import React from 'react'
import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from "react-teffex";

function Insalluvion() {
   
  return (
    <>
      <p>
        <Typewriter
          text="Insalubera: Good morning, Crew member! It's time to wake up, we have a lot of work to do today.
	"
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: "0.8" }}
        />
      </p>
      <Link to={"/Ha_Onde_estou"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Uh? Where am I?" />
        </button>
      </Link>
      <Link to={"/O_que_esta_acontecendo"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="What is happening?" />
        </button>
      </Link>
    </>
  );
}

export default Insalluvion
