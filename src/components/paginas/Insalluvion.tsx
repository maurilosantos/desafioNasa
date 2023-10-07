import React from 'react'
import { Link } from 'react-router-dom';

function Insalluvion() {
   
  return (
    <>
	<p>
	Insalubera: Bom dia, Tribulante! Está na hora de acordar, temos muito trabalho a fazer hoje. 
	</p>
      <Link to={"/Ha_Onde_estou"}>
<button>Hã? Onde estou?</button>
      </Link>
      <Link to={"/O_que_esta_acontecendo"}>
<button>O que está acontecendo?</button>
      </Link>
    </>
  );
}

export default Insalluvion
