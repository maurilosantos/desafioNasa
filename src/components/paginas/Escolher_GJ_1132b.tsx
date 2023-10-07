import React from 'react'
import { Link } from 'react-router-dom';

function Escolher_GJ_1132b() {
  return (
    <>
<img src="https://spacetoday.com.br/wp-content/uploads/2016/08/image_3428e-GJ-1132b.jpg" width="100%" height="auto"/>
	<p>
Insalubera: Chegamos ao GJ 1132b, um planeta muito semelhante a um mini Netuno, mas agora é um mundo rochoso, um pouco maior que a Terra. Sua atmosfera foi construída pela alta atividade vulcânica. De acordo com os meus dados, ele foi descoberto em 2015. E olha só, o Hubble tem alguns dados sobre esse planeta também, hmm… Mas isso não é nada bom, sua atmosfera é composta com diversos tipos de gases fotoquímicos, como metano e um aerossol de hidrocarbonetos, parecido com a poluição terrestre. Acho que isso não faz muito bem para os pulmões humanos.
	</p>
	      <Link to={"/Voltar_a_escolha_dos_Exoplanetas"}>
<button>Voltar a escolha dos Exoplanetas</button>
      </Link>
      <Link to={"/Escolher_Kelt_9b"}>
<button>Ir para Kelt-9b</button>
      </Link>
      <Link to={"/Escolher_HD_189733_b"}>
<button>Ir para HD 189733 b</button>
      </Link>

    </>
  );
}

export default Escolher_GJ_1132b
