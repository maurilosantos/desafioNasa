import React from 'react'
import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function Ha_Onde_estou() {
  return (
    <>
      <p>
        <Typewriter
          text="
Insalubera: Bem, parece que sua memória não está muito boa hoje... 
Vou tentar te dar um panorama geral: estamos em 2435, a vida na Terra está entrando em extinção devido as pessimas condições do planeta. Sabe, poluição, escassez de água potavél, aquecimento da atmosféra... Esse tipo de coisa. Nossa missão é encontrar um novo lugar para que a humanidade possa se desenvolver. Espero que vocês não destuam esse lugar também..."
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: "0.8" }}
        />
      </p>
      <Link to={"/E_qual_e_a_nossa_missao"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch
            alphabet
            text="
E qual é a nossa missão?
    "
          />
        </button>
      </Link>
    </>
  );
}

export default Ha_Onde_estou
