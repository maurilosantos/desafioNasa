import React from 'react'
import { Link } from 'react-router-dom';
import { Typewriter, Glitch } from 'react-teffex';

function Consegue_obter_mais_dados_sobre_ele() {
  return (
    <>
      <p>
        <Typewriter
          text="
	Insalubera: Claro! Aqui estão alguns dados importantes que consegui obter até agora: 
  Esse planeta tem uma superficíe rochosa e mais árida que a do planeta Terra, seu tamanho também 
  é um pouco menor, com aproximadamente 83% de seu tamanho, mas há um campo magnético para reflexão 
  dos raios solares, sua estrela está a uma distancîa dentro dos padrões e parece que sua temperatura 
  está razoavél para os padões humanos. E... Veja isso! Há uma grande probabilidade de ter água nesse 
  planeta!"
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: "0.8" }}
        />
      </p>
      <Link to={"/Si_aproximar_do_novo_exoplaneta"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch
            alphabet
            text="Si aproximar do novo exoplaneta"/></button>
      </Link>
    </>
  );
}

export default Consegue_obter_mais_dados_sobre_ele
