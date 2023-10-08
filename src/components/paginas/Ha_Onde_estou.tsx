import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function Ha_Onde_estou() {
  return (
    <>
      <p>
        <Typewriter
          text="Insalubera: Well, it seems like your memory isn't very good today... I'll try to give you an overview: it's the year 2435, life on Earth is facing extinction due to the planet's dire conditions. You know, pollution, scarcity of clean water, atmospheric warming... that kind of thing. Our mission is to find a new place for humanity to thrive. I hope you don't destroy this place too..."
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: 0.8, stutterChance: 0.1, }}
        />
      </p>
      <Link to={"/E_qual_e_a_nossa_missao"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch
            alphabet
            text="
And what is our mission?
    "
          />
        </button>
      </Link>
    </>
  );
}

export default Ha_Onde_estou
