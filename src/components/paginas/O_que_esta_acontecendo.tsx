import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function O_que_esta_acontecendo() {
  return (
    <>
      <div className="container" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
        <div className="avatar-chat-container">
          <figure className="avatar">
            <img className="ia" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border" />
            <figcaption>Insalubera</figcaption>
            </figure>

          <Typewriter
            text="Well, it seems like your memory isn't very good today... I'll try to give you an overview: it's the year 2435, life on Earth is facing extinction due to the planet's dire conditions. You know, pollution, scarcity of clean water, atmospheric warming... that kind of thing. Our mission is to find a new place for humanity to thrive. I hope you don't destroy this place too..."
            cursorSettings={{ color: "transparent" }}
            typeSettings={{ typeDelay: 0.8, stutterChance: 0.1, }}
          />
        </div>
      <Link to={"/E_qual_e_a_nossa_missao"}>
        <button className="button" data-augmented-ui="br-clip both">
          <Glitch alphabet text="And what is our mission?" />
        </button>
      </Link>
      </div>
    </>
  );
}

export default O_que_esta_acontecendo

