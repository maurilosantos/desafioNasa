import React from 'react'
import { Link } from 'react-router-dom';


function texto1() {
   
  return (
    <>
      <p>Abacaxi</p>
      <Link to={"/Texto2"}>
        <button>Clique aqui</button>
      </Link>
    </>
  );
}

export default texto1

