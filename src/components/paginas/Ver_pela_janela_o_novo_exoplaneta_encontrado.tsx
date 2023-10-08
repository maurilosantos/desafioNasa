import { Link } from 'react-router-dom';
import { Glitch } from 'react-teffex';

function Ver_pela_janela_o_novo_exoplaneta_encontrado() {
  return (
    <>
  <div className="image planeta" data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both">
        <img
          src="https://app.milanote.com/media/p/images/1QPk8J1zWD7n7O/QuF/Camada%202.png?w=400&v=2&elementId=1QPk8J1zWD7n7O"
          width="30%"
          height="auto"
        />
  </div>
      <Link to={"/Iniciar_o_pouso"}>
        <button className="button" data-augmented-ui="br-clip both">
          <Glitch alphabet text="Initiate the landing" />
        </button>
      </Link>
    </>
  );
}

export default Ver_pela_janela_o_novo_exoplaneta_encontrado
