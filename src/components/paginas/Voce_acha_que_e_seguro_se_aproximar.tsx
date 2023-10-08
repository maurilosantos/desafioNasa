import React from 'react'
import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function Voce_acha_que_e_seguro_se_aproximar() {
  return (
    <>
      <p>
        <Typewriter
          text="Insalubera: Hmm... I believe so. This planet seems quite interesting; I'm not detecting anything hostile for now. Its star is also at a safe distance. We might find some discoveries there."
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: "0.8" }}
        />
      </p>
      <Link to={"/Consegue_obter_mais_dados_sobre_ele"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Can you obtain more data about it?" />
        </button>
      </Link>
    </>
  );
}

export default Voce_acha_que_e_seguro_se_aproximar

