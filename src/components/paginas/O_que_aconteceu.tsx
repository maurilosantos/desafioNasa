 import React from 'react'
import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from "react-teffex";

function O_que_aconteceu() {
  return (
    <>
      <p>
        <Typewriter
          text="Insalubera: I am detecting a new planet in the region. I tried to search for information about it in other databases, but I couldn't find anything."
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: "0.8" }}
        />
      </p>
      <Link to={"/Voce_acha_que_e_seguro_se_aproximar"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch
            alphabet
            text="Do you think it's safe to approach?" /></button>
      </Link>
    </>
  );
}

export default O_que_aconteceu

