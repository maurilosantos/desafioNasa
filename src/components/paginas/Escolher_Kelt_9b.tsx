import React from 'react'
import { Link } from 'react-router-dom';

function Escolher_Kelt_9b() {
  return (
    <>
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Artist%27s_impression_of_KELT-9b_orbiting_KELT-9.jpg/640px-Artist%27s_impression_of_KELT-9b_orbiting_KELT-9.jpg" width="100%" height="auto"/>
	<p>
Insalubera: Sinto meus sensores superaquecendo, está realmente muito calor aqui… Dá pra sentir que estamos perto de Kelt-9b, o planeta mais quente já registrado em meu banco de dados. Nenhuma molécula resiste ao seu lado claro, esse planeta possui uma estrela duas vezes maior que o sol. Acho que esse não seria um bom lugar para morar.
	Bom dia, Tribulante! Está na hora de acordar, temos muito trabalho a fazer hoje. 
	</p>
      <Link to={"/Voltar_a_escolha_dos_Exoplanetas"}>
<button>Voltar a escolha dos Exoplanetas</button>
      </Link>
      <Link to={"/Escolher_GJ_1132b"}>
<button>Ir para GJ 1132b</button>
      </Link>
      <Link to={"/Escolher_HD_189733_b"}>
<button>Ir para HD 189733 b</button>
      </Link>
    </>
  );
}

export default Escolher_Kelt_9b
