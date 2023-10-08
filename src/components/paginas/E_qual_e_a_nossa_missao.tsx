import React from 'react'
import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function E_qual_e_a_nossa_missao() {
  return (
    <>
      <p>
        <Typewriter
          text="
	Insalubera: Então vamos lá! Vamos começar visitando alguns planetas, é importante avaliar se as condições nesse planeta são favoravéis para que a vida humana prospere. Temos alguns pontos a priorizar, como por exemplo: 
1. Água: é muito importante que o nosso planeta de destino tenha água em algum formato acessível. 
2. Oxigênio: Precisamos ter oxigênio, ou algo que possa ser convertido em oxigênio. 
3. Temperatura: Também é importante avaliar o quão frio ou quente é o planeta, sua espécie parece não se adaptar bem em ambientes muito extremos.  
4. Campo magnetico: É importante que o planeta tenha alguma forma de refletir raios solares, como um campo magnetico."
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: "0.8" }}
        />
      </p>
      <Link to={"/Vamos_começar_a_missao"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Vamos começar a missão" />
        </button>
      </Link>
    </>
  );
}

export default E_qual_e_a_nossa_missao
