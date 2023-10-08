import React from 'react'
import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function Voce_acha_que_e_seguro_se_aproximar() {
  return (
    <>
      <p>
        <Typewriter
          text="
	Insalubera: Hummm... Acredito que sim. Esse planeta parece ser bem interessante, 
  não estou conseguindo detectar nada hostil por enquanto. Sua estrela também está 
  a uma distância segura. Podemos encontrar algum progresso lá."
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: "0.8" }}
        />
      </p>
      <Link to={"/Consegue_obter_mais_dados_sobre_ele"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch
            alphabet
            text="Consegue obter mais dados sobre ele?"/></button>
      </Link>
    </>
  );
}

export default Voce_acha_que_e_seguro_se_aproximar

