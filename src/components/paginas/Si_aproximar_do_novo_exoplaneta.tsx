import React from 'react'
import { Link } from 'react-router-dom';

function Bem_vindo() {
  return (
    <>
	<p>
	Insalubera: Aproximando-se do novo exoplaneta. Prepare-se para uma vista espetacular!
	</p>
      <Link to={"/Ver_pela_janela_o_novo_exoplaneta_encontrado"}>
<button>
Ver pela janela o novo exoplaneta encontrado
</button>
      </Link>
    </>
  );
}

export default Bem_vindo
