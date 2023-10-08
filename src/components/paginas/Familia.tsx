import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';
import './Familia.css'; // Importe seu arquivo CSS aqui

function Familia() {
  return (
		      <div className="container" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
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
        <div className="avatar-chat-container">
          <figure className="avatar">
            <img className="ia" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border" />
            <figcaption>Insalubera</figcaption>
          </figure>
          <div className="typewriter">
          <Typewriter
text="Message: 'Earth, this is the NASA team on Insalubers-63. Landing operations have been successful, and we are preparing our dome for growing food. Initial soil readings are promising and suggest that this planet could be a new home for humanity. We will continue to collect data and keep you updated on our progress. Rest assured, we are making history here. In this new world, a family's daily life is filled with wonder as they nurture and interact with their robotic-animal hybrids, creating a harmonious existence."

            cursorSettings={{ color: "transparent" }}
            typeSettings={{ typeDelay: 0.8, stutterChance: 0.1 }}
          />
          </div>
			</div>
      </div>
    </div>
      <Link to={"/Final"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Final" />
        </button>
      </Link>
    </div>
  );
}

export default Familia;
