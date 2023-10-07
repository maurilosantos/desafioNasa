import React from 'react'
import { Link } from 'react-router-dom';

function Voce_acha_que_e_seguro_se_aproximar() {
  return (
    <>
	<p>
	Insalubera: Hummm... Acredito que sim. Esse planeta parece ser bem interessante, não estou conseguindo detectar nada hostil por enquanto. Sua estrela também está a uma distância segura. Podemos encontrar algum progresso lá. 
	</p>
      <Link to={"/Consegue_obter_mais_dados_sobre_ele"}>
<button>
Consegue obter mais dados sobre ele?
</button>
      </Link>
    </>
  );
}

export default Voce_acha_que_e_seguro_se_aproximar

