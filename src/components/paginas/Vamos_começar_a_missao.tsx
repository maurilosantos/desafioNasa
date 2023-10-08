import React from 'react'
import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function Vamos_começar_a_missão() {
  return (
    <>
      <h3>
        <Typewriter
          text="Depois de muito tempo no espaço..."
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: "0.8" }}
        />
      </h3>
      <Link to={"/Voltar_a_escolha_dos_Exoplanetas"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Próximo" />
        </button>
      </Link>
    </>
  );
}

export default Vamos_começar_a_missão
