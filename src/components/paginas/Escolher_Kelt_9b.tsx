import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function Escolher_Kelt_9b() {
  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Artist%27s_impression_of_KELT-9b_orbiting_KELT-9.jpg/640px-Artist%27s_impression_of_KELT-9b_orbiting_KELT-9.jpg"
        width="100%"
        height="auto"
      />
      <p>
        <Typewriter
          text="Insalubera: I feel my sensors overheating; it's really hot here... You can tell we're close to Kelt-9b, the hottest planet ever recorded in my database. No molecule can withstand its bright side; this planet has a star twice the size of the sun. I don't think this would be a good place to live."
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: 0.8, stutterChance: 0.1, }}
        />
      </p>
      <Link to={"/Voltar_a_escolha_dos_Exoplanetas"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Go back to the Exoplanet selection" />
        </button>
      </Link>
      <Link to={"/Escolher_GJ_1132b"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Go to GJ 1132b" />
        </button>
      </Link>
      <Link to={"/Escolher_HD_189733_b"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Go to HD 189733 b" />
        </button>
      </Link>
    </>
  );
}

export default Escolher_Kelt_9b
