import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function E_qual_e_a_nossa_missao() {
  return ( 
    <>
      <div className="container" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
        <div className="avatar-chat-container">
          <figure className="avatar">
            <img className="ia" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border" />
            <figcaption>Insalubera</figcaption>
          </figure>
          <Typewriter
            text="So here we go! Let's start by visiting some planets, it's important to assess whether the conditions on this planet are favorable for human life to thrive. We have some priorities, such as: 1. Water: It's crucial that our destination planet has water in some accessible form. 2. Oxygen: We need to have oxygen, or something that can be converted into oxygen. 3. Temperature: It's also important to evaluate how cold or hot the planet is; your species doesn't seem to adapt well to extremely harsh environments. 4. Magnetic field: It's important that the planet has some way to deflect solar rays, like a magnetic field. Let's begin the mission."
            cursorSettings={{ color: "transparent" }}
            typeSettings={{ typeDelay: 0.8, stutterChance: 0.1 }}
          />
        </div>
      </div>
      <div className="button-container">
        <Link to={"/Vamos_começar_a_missao"}>
          <button className="button" data-augmented-ui="br-clip both">
            <Glitch alphabet text="Let's begin the mission." />
          </button>
        </Link>
      </div>
    </>
  );
}

export default E_qual_e_a_nossa_missao;
