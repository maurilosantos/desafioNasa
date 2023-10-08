import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function Familia() {
  return (
    <>
      <p>
        <img
          src="https://app.milanote.com/media/p/images/1QOWIX1zWsuy6t/16g/PhotoReal_family_playing_with_a_robot_dog_futuristic_cyberpunk_1.jpg?w=800&v=2&elementId=1QOWIX1zWsuy6t"
          width="60%"
          height="auto"
          style={{borderRadius: 10}}

        />

<p>
        <Typewriter
          text=" olá mundoooo "
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: 0.8, stutterChance: 0.1, }}
        />
      </p>
      
      </p>
      <Link to={"/AmbientePlantas"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Initiate Plants" />
        </button>
      </Link>
    </>
  );
}

export default Familia
