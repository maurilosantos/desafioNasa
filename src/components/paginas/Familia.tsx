import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';
import './Familia.css'; // Importe seu arquivo CSS aqui

function Familia() {
  return (
    <div className="familia-container">
      <div
          className="image familia"
          data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both"
        >
      <img
        src="https://app.milanote.com/media/p/images/1QOWIX1zWsuy6t/16g/PhotoReal_family_playing_with_a_robot_dog_futuristic_cyberpunk_1.jpg?w=800&v=2&elementId=1QOWIX1zWsuy6t"
        alt="Família"
        className="familia-image"
      />
      </div>
      <div className="typewriter">
      <Typewriter
        text="In this new world, a family's daily life is filled with wonder as they nurture and interact with their robotic-animal hybrids, creating a harmonious existence."
        cursorSettings={{ color: "transparent" }}
        typeSettings={{ typeDelay: 0.8, stutterChance: 0.1 }}
      />
      </div>

      <Link to={"/planet"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="The Description" />

        </button>
      </Link>
    </div>
  );
}

export default Familia;
