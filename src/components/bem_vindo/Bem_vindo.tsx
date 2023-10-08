import React from 'react'
import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from "react-teffex";
import './Bem_vindo.css'
import 'augmented-ui/augmented-ui.css'; // Importe o arquivo CSS do augmented-ui

function bem_vindo() {
   
  return (
    <>

        <div
          className="borda"
          data-augmented-ui="tl-clip tr-clip bl-clip br-clip b-clip-x border"
        >
          <h1>
            <Typewriter
              text="Seja Bem Vindo!"
              cursorSettings={{ color: "transparent" }}
            />
          </h1>
          <h3>
            <Link to={"/Insalluvion"}>
              <button className="button" data-augmented-ui="br-clip border">
                <Glitch alphabet text="COMEÇAR" />
              </button>
            </Link>
            <button className="button" data-augmented-ui="br-clip border">
              <Typewriter
                text="CRÉDITOS"
                cursorSettings={{ color: "transparent" }}
              />
            </button>
          </h3>
        </div>
      
    </>
  );
}

export default bem_vindo

