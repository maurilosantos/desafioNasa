// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bem_vindo from './components/bem_vindo/Bem_vindo'
import Creditos from './components/creditos/Creditos'
import Insalluvion from './components/paginas/Insalluvion'
import Ha_Onde_estou from './components/paginas/Ha_Onde_estou'
import O_que_esta_acontecendo from './components/paginas/O_que_esta_acontecendo'
import E_qual_e_a_nossa_missao from './components/paginas/E_qual_e_a_nossa_missao'
import Vamos_começar_a_missao from './components/paginas/Vamos_começar_a_missao'
import Voltar_a_escolha_dos_Exoplanetas from './components/paginas/Voltar_a_escolha_dos_Exoplanetas'
import Escolher_Kelt_9b from './components/paginas/Escolher_Kelt_9b'
import Escolher_GJ_1132b from './components/paginas/Escolher_GJ_1132b'
import Escolher_HD_189733_b from './components/paginas/Escolher_HD_189733_b'
import Escolher_Insalubers_63 from './components/paginas/Escolher_Insalubers_63'
import O_que_aconteceu from './components/paginas/O_que_aconteceu'
import Voce_acha_que_e_seguro_se_aproximar from './components/paginas/Voce_acha_que_e_seguro_se_aproximar'
import Consegue_obter_mais_dados_sobre_ele from './components/paginas/Consegue_obter_mais_dados_sobre_ele'
import Si_aproximar_do_novo_exoplaneta from './components/paginas/Si_aproximar_do_novo_exoplaneta'
import Ver_pela_janela_o_novo_exoplaneta_encontrado from './components/paginas/Ver_pela_janela_o_novo_exoplaneta_encontrado'
import IniciarPouso from './components/paginas/IniciarPouso'
import AmbientePlantas from './components/paginas/AmbientePlantas'
import Familia from './components/paginas/Familia'
// import Bem_vindo from './components/paginas/Bem_vindo'
          // <Route path={"/Bem_vindo"} element={<Bem_vindo/>}></Route>

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Bem_vindo/>}></Route>
          <Route path={"/creditos"} element={<Creditos/>}></Route>
          <Route path={"/Insalluvion"} element={<Insalluvion/>}></Route>
          <Route path={"/Ha_Onde_estou"} element={<Ha_Onde_estou/>}></Route>
          <Route path={"/O_que_esta_acontecendo"} element={<O_que_esta_acontecendo/>}></Route>
          <Route path={"/E_qual_e_a_nossa_missao"} element={<E_qual_e_a_nossa_missao/>}></Route>
          <Route path={"/Vamos_começar_a_missao"} element={<Vamos_começar_a_missao/>}></Route>
          <Route path={"/Voltar_a_escolha_dos_Exoplanetas"} element={<Voltar_a_escolha_dos_Exoplanetas/>}></Route>
          <Route path={"/Escolher_Kelt_9b"} element={<Escolher_Kelt_9b/>}></Route>
          <Route path={"/Escolher_GJ_1132b"} element={<Escolher_GJ_1132b/>}></Route>
          <Route path={"/Escolher_HD_189733_b"} element={<Escolher_HD_189733_b/>}></Route>
          <Route path={"/Escolher_Insalubers_63"} element={<Escolher_Insalubers_63/>}></Route>
          <Route path={"/O_que_aconteceu"} element={<O_que_aconteceu/>}></Route>
          <Route path={"/Voce_acha_que_e_seguro_se_aproximar"} element={<Voce_acha_que_e_seguro_se_aproximar/>}></Route>
          <Route path={"/Consegue_obter_mais_dados_sobre_ele"} element={<Consegue_obter_mais_dados_sobre_ele/>}></Route>
          <Route path={"/Si_aproximar_do_novo_exoplaneta"} element={<Si_aproximar_do_novo_exoplaneta/>}></Route>
          <Route path={"/Ver_pela_janela_o_novo_exoplaneta_encontrado"} element={<Ver_pela_janela_o_novo_exoplaneta_encontrado/>}></Route>
          <Route path={"/Iniciar_o_pouso"} element={<IniciarPouso/>}></Route>
          <Route path={"/AmbientePlantas"} element={<AmbientePlantas/>}></Route>
          <Route path={"/familia"} element={<Familia/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
