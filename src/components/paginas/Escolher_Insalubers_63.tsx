import { Link } from 'react-router-dom';
import { Typewriter, Glitch } from 'react-teffex';

function Escolher_Insalubers_63() {
  return (
    <>
      <p>
        <Typewriter
          text="
IInsalubera: My sensors are confused??? //Recalculating...// This is strange, but the calculations are correct…"
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: 0.8, stutterChance: 0.1, }}
        />
      </p>
      <Link to={"/O_que_aconteceu"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="What happened?" />
        </button>
      </Link>
    </>
  );
}

export default Escolher_Insalubers_63
