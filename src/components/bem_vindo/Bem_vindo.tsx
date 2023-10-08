import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';
import './Bem_vindo.css';
import 'augmented-ui/augmented-ui.css';

function bem_vindo() {
  return (
    <>
      <div
        className="borda"
        data-augmented-ui="tl-clip tr-clip bl-clip br-clip b-clip-x border"
      >
        <h1>
          <Typewriter
            text="Welcome!"
            cursorSettings={{ color: "transparent" }}
            typeSettings={{ typeDelay: 0.8,  stutterChance: 0.1, }}
          />
        </h1>
        <h3>
          <Link to={"/Insalluvion"}>
            <button className="button" data-augmented-ui="br-clip border">
              <Glitch alphabet text="START" />
            </button>
          </Link>
          <button className="button" data-augmented-ui="br-clip border">
            <Typewriter
              text="CREDITS"
              cursorSettings={{ color: "transparent" }}
            />
          </button>
        </h3>
      </div>
    </>
  );
}

export default bem_vindo;
