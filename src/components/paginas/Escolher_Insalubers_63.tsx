import React from 'react'
import { Link } from 'react-router-dom';
import { Typewriter, Glitch } from 'react-teffex';

function Escolher_Insalubers_63() {
  return (
    <>
      <p>
        <Typewriter
          text="
Insalubera: Meus sensores estão confusos???
//Recalculando...//

Isso é estranho, mas os cálculos estão corretos..."
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: "0.8" }}
        />
      </p>
      <Link to={"/O_que_aconteceu"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch
            alphabet
            text="O que aconteceu?" /></button>
      </Link>
    </>
  );
}

export default Escolher_Insalubers_63
