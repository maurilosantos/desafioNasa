import { Link } from 'react-router-dom';
import { Typewriter, Glitch } from 'react-teffex';

function Escolher_Insalubers_63() {
  return (
    <>
    		  <div className="borda" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
		  <div className="chat">
		  <figure className="avatar"><img className="ia" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"/><figcaption>Insalubera</figcaption></figure>
        <Typewriter
          text="My sensors are confused??? //Recalculating...// This is strange, but the calculations are correct…"
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: 0.8, stutterChance: 0.1, }}
        />
	</div>
	</div>
      <Link to={"/O_que_aconteceu"}>
        <button className="button" data-augmented-ui="br-clip both">
          <Glitch alphabet text="What happened?" />
        </button>
      </Link>
    </>
  );
}

export default Escolher_Insalubers_63
