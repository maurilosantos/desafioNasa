import { Link } from "react-router-dom";
import { Glitch, Typewriter } from "react-teffex";

function Escolher_HD_189733_b() {
  return (
    <>
    		  <div className="borda" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
		  <div className="chat">
		  <figure className="avatar"><img className="ia" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"/><figcaption>Insalubera</figcaption></figure>
		  <div><div className="image" data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both">
      <img
        src="https://mega.ibxk.com.br/2022/01/14/14102521508108.jpg"
        alt="Imagem do planeta"
        width="100%"
        height="auto"
      />
		  </div>
        <Typewriter
          text="
⚠️ Atmosphere hostile alert! Keep your distance; we're on HD 189733 b! This gas giant is approximately 11 times the size of your Earth. Its blue atmosphere doesn't come from sea reflections like on your planet; it comes from silicate clouds that make up the atmosphere. Additionally, it has winds blowing at about 7800 kilometers per hour, and its temperature exceeds 1000 degrees Celsius. So, be cautious; the glass rain could shred us into pieces if we get too close."
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: 0.8, stutterChance: 0.1,}}
        />
	</div>
	</div>
	</div>
      <Link to={"/Voltar_a_escolha_dos_Exoplanetas"}>
        <button className="button" data-augmented-ui="br-clip both">
          <Glitch alphabet text="Go back to the Exoplanet selection" />
        </button>
      </Link>
      <Link to={"/Escolher_GJ_1132b"}>
        <button className="button" data-augmented-ui="br-clip both">
          <Glitch alphabet text="Go to GJ 1132b" />
        </button>
      </Link>
      <Link to={"/Escolher_Insalubers_63"}>
        <button className="button" data-augmented-ui="br-clip both">
          <Glitch alphabet text="???" />
        </button>
      </Link>
    </>
  );
}

export default Escolher_HD_189733_b;
