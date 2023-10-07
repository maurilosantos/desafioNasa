import React from 'react'
import { Link } from 'react-router-dom';

function Vamos_começar_a_missão() {
  return (
    <>
	<h3>Depois de muito tempo no espaço...</h3>
      <Link to={"/Voltar_a_escolha_dos_Exoplanetas"}>
<button>
Próximo
</button>
      </Link>
    </>
  );
}

export default Vamos_começar_a_missão
