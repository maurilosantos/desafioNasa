import React from 'react'
import { Link } from 'react-router-dom';

function Ha_Onde_estou() {
  return (
    <>
	<p>
Insalubera: Bem, parece que sua memória não está muito boa hoje... 
Vou tentar te dar um panorama geral: estamos em 2435, a vida na Terra está entrando em extinção devido as pessimas condições do planeta. Sabe, poluição, escassez de água potavél, aquecimento da atmosféra... Esse tipo de coisa. Nossa missão é encontrar um novo lugar para que a humanidade possa se desenvolver. Espero que vocês não destuam esse lugar também...
	</p>
      <Link to={"/E_qual_e_a_nossa_missao"}>
<button>E qual é a nossa missão?</button>
      </Link>
    </>
  );
}

export default Ha_Onde_estou
