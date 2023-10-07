import React from 'react'
import { Link } from 'react-router-dom';

function Escolher_HD_189733_b() {
  return (
    <>
	<img src="https://mega.ibxk.com.br/2022/01/14/14102521508108.jpg" alt="Imagem do planeta" width="100%" height="auto"/>
	<p>
Insalubera: ⚠️ Alerta de atmosfera hostil!
Mantenha distância, estamos em HD 189733 b!  
Esse gigante de gás tem aproximadamente 11 vezes o tamanho de sua Terra. Sua  atmosfera azul não vem do reflexo dos mares como em seu planeta, vem das nuvens de silicato que compõem a atmosfera. Além disso, possui ventos de aproximadamente 7800 quilômetros por hora e sua temperatura ultrapassa os 1000 graus Celsius. Então fique atento, a chuva de vidro pode nos cortar em pedacinhos se chegarmos muito perto.
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
      <Link to={"/Escolher_Insalubers_63"}>
<button>???</button>
      </Link>
    </>
  );
}

export default Escolher_HD_189733_b
