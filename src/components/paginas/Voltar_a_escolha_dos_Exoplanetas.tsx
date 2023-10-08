import React from 'react'
import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function Voltar_a_escolha_dos_Exoplanetas() {
  return (
    <>
      <p>
        {" "}
        <Typewriter
          text="
	Insalubera: Chegamos! 
    Acabei de atualizar meu banco de dados com o banco de dados da NAZA, mas ainda temos muitas informações para coletar por aqui. Selecionei alguns planetas para visitarmos hoje.
  
 Conheça cada um deles:"
          cursorSettings={{ color: "transparent" }}
          typeSettings={{typeDelay: "0.8"}}
        />
      </p>
      <Link to={"/Escolher_Kelt_9b"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Escolher Kelt-9b" />
        </button>
      </Link>
      <Link to={"/Escolher_GJ_1132b"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Escolher GJ 1132b" />
        </button>
      </Link>
      <Link to={"/Escolher_HD_189733_b"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Escolher HD 189733 b" />
        </button>
      </Link>
    </>
  );
}

export default Voltar_a_escolha_dos_Exoplanetas
