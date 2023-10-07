import React from 'react'
import { Link } from 'react-router-dom';

      // <Link to={"/Texto2"}>
      //   <button>Clique aqui</button>
      // </Link>

function bem_vindo() {
   
  return (
    <>
    <h1>Seja bem vindo!</h1>
      <Link to={"/Insalluvion"}>
        <button>Clique aqui</button>
      </Link>
    </>
  );
}

export default bem_vindo

