import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function Final() {
  return (
		      <div className="container" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
    <div className="familia-container">
      <div
          className="image familia"
          data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both"
        >
      <img
        src="https://app.milanote.com/media/p/images/1QPk8J1zWD7n7O/QuF/Camada%202.png?w=400&v=2&elementId=1QPk8J1zWD7n7O"
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
text="The project involved a space expedition to explore exoplanets in search of a new location for humanity to settle due to the precarious conditions on Earth. The mission team visited different planets, evaluating factors such as the presence of water, oxygen, temperature, and magnetic field. They discovered a promising exoplanet with a rocky surface and signs of water, suggesting the possibility of human life. The mission also faced challenges, such as hostile atmospheres and glass rains. In the end, the team successfully landed on the new exoplanet, providing new hope for humanity."

            cursorSettings={{ color: "transparent" }}
            typeSettings={{ typeDelay: 0.8, stutterChance: 0.1 }}
          />
          </div>
			</div>
      </div>
    </div>
      <Link to={"/Creditos"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Credits" />
        </button>
      </Link>
    </div>
  );
}

export default Final;
