import { Link } from 'react-router-dom';
import { Glitch } from 'react-teffex';

function Ver_pela_janela_o_novo_exoplaneta_encontrado() {
  return (
    <>
      <p>
        <img
          src="https://app.milanote.com/media/p/images/1QOWLH1zWsuy6A/8Ak/15.png?w=1600&v=2&elementId=1QOWLH1zWsuy6A"
          width="100%"
          height="auto"
        />
      </p>
      <Link to={"/Iniciar_o_pouso"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Initiate the landing" />
        </button>
      </Link>
    </>
  );
}

export default Ver_pela_janela_o_novo_exoplaneta_encontrado
