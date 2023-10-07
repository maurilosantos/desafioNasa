 import React from 'react'
import { Link } from 'react-router-dom';

function O_que_aconteceu() {
  return (
    <>
	<p>
Insalubera: Estou detectando um novo planeta na região, tentei buscar algo sobre ele em outros bancos de dados, mas não consegui encontrar nada. 
	</p>
      <Link to={"/Voce_acha_que_e_seguro_se_aproximar"}>
<button>
Você acha que é seguro se aproximar?
</button>
      </Link>
    </>
  );
}

export default O_que_aconteceu

