import React from 'react'
import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from "react-teffex";
import "./Insalluvion.css";

function Insalluvion() {
   
  return (
    <>
      <p>
        <Typewriter
          text="
	Insalubera: Bom dia, Tripulante! Está na hora de acordar, temos muito trabalho a fazer hoje.
	"
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: "0.8" }}
        />
      </p>
      <Link to={"/Ha_Onde_estou"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch
            alphabet
            text="
Hã? Onde estou?
    "
          />
        </button>
      </Link>
      <Link to={"/O_que_esta_acontecendo"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="O que está acontecendo" />
        </button>
      </Link>
    </>
  );
}

export default Insalluvion
