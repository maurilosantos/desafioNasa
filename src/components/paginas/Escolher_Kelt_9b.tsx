import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';
import './kelt9b.css';

function Escolher_Kelt_9b() {
  return (
    <>
      <div className="container" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
        <div className="avatar-chat-container">
          <figure className="avatar">
            <img className="ia_confusa" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border" />
            <figcaption>Insalubera</figcaption>
          </figure>
          <div className="image-container" data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both">
            <img
              className="planet-image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Artist%27s_impression_of_KELT-9b_orbiting_KELT-9.jpg/640px-Artist%27s_impression_of_KELT-9b_orbiting_KELT-9.jpg"
              alt="Kelt-9b"
            />
          </div>
          <div className="typewriter">
          <Typewriter
            text="I feel my sensors overheating; it's really hot here... You can tell we're close to Kelt-9b, the hottest planet ever recorded in my database. No molecule can withstand its bright side; this planet has a star twice the size of the sun. I don't think this would be a good place to live."
            cursorSettings={{ color: "transparent" }}
            typeSettings={{ typeDelay: 0.8, stutterChance: 0.1 }}
          />
          </div>
        </div>
      <div className="button-container">
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
        <Link to={"/Escolher_HD_189733_b"}>
          <button className="button" data-augmented-ui="br-clip both">
            <Glitch alphabet text="Go to HD 189733 b" />
          </button>
        </Link>
      </div>
      </div>
    </>
  );
}

export default Escolher_Kelt_9b;
