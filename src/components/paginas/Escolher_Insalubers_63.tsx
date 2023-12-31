import { Link } from 'react-router-dom';
import { Typewriter, Glitch } from 'react-teffex';

function Escolher_Insalubers_63() {
  return (
    <>
      <div className="container" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
        <div className="avatar-chat-container">
          <figure className="avatar">
            <img className="ia_confusa2" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border" />
            <figcaption>Insalubera</figcaption>
          </figure>
          <div className="typewriter">
          <Typewriter
            text="My sensors are confused??? //Recalculating...// This is strange, but the calculations are correct…"
            cursorSettings={{ color: "transparent" }}
            typeSettings={{ typeDelay: 0.8, stutterChance: 0.1 }}
          />
          </div>
        </div>
      <div className="button-container">
        <Link to={"/O_que_aconteceu"}>
          <button className="button" data-augmented-ui="br-clip both">
            <Glitch alphabet text="What happened?" />
          </button>
        </Link>
      </div>
      </div>
    </>
  );
}

export default Escolher_Insalubers_63;
