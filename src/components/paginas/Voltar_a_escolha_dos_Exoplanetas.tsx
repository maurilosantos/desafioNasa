import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function Voltar_a_escolha_dos_Exoplanetas() {
  return (
    <>
      <p>
        {" "}
        <Typewriter
          text="Insalubera: We've arrived!
I just updated my database with NASA's database, but we still have a lot of information to gather here. I've selected a few planets for us to visit today.
Get to know each of them:
"
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: 0.8, stutterChance: 0.1,}}
        />
      </p>
      <Link to={"/Escolher_Kelt_9b"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Choose Kelt-9b" />
        </button>
      </Link>
      <Link to={"/Escolher_GJ_1132b"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Choose GJ 1132b" />
        </button>
      </Link>
      <Link to={"/Escolher_HD_189733_b"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Choose HD 189733 b" />
        </button>
      </Link>
    </>
  );
}

export default Voltar_a_escolha_dos_Exoplanetas
