import React from 'react'
import { Link } from 'react-router-dom';
import { Typewriter, Glitch } from 'react-teffex';

function Bem_vindo() {
  return (
    <>
      <p>
        <Typewriter
          text="Insalubera: Approaching the new exoplanet. Get ready for a spectacular view!"
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: "0.8" }}
        />
      </p>
      <Link to={"/Ver_pela_janela_o_novo_exoplaneta_encontrado"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch
            alphabet
            text="Look out the window at the new exoplanet we found"
          />
        </button>
      </Link>
    </>
  );
}

export default Bem_vindo
