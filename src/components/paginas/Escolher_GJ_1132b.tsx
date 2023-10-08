import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function Escolher_GJ_1132b() {
  return (
    <>
      <div className="container" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
        <div className="avatar-chat-container">
          <figure className="avatar">
            <img className="ia" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border" />
            <figcaption>Insalubera</figcaption>
          </figure>
          <div className="image-container" data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both">
            <img
              className="planet-image"
              src="https://spacetoday.com.br/wp-content/uploads/2016/08/image_3428e-GJ-1132b.jpg"
              alt="GJ 1132b"
            />
          </div>
		  <div className="typewriter">
          <Typewriter
            text="We've arrived at GJ 1132b, a planet very similar to a mini Neptune, but now it's a rocky world, slightly larger than Earth. Its atmosphere was built by high volcanic activity. According to my data, it was discovered in 2015. And look, Hubble has some data on this planet too, hmm... But that's not good news; its atmosphere is composed of various types of photochemical gases, such as methane and a hydrocarbon aerosol, similar to Earth's pollution. I don't think that's very good for human lungs."
            cursorSettings={{ color: "transparent" }}
            typeSettings={{ typeDelay: 0.8, stutterChance: 0.1 }}
          />
		  </div>
        </div>
      </div>
      <div className="button-container">
        <Link to={"/Voltar_a_escolha_dos_Exoplanetas"}>
          <button className="button" data-augmented-ui="br-clip both">
            <Glitch alphabet text="Go back to the Exoplanet selection" />
          </button>
        </Link>
        <Link to={"/Escolher_Kelt_9b"}>
          <button className="button" data-augmented-ui="br-clip both">
            <Glitch alphabet text="Go to Kelt-9b" />
          </button>
        </Link>
        <Link to={"/Escolher_HD_189733_b"}>
          <button className="button" data-augmented-ui="br-clip both">
            <Glitch alphabet text="Go to HD 189733 b" />
          </button>
        </Link>
      </div>
    </>
  );
}

export default Escolher_GJ_1132b;
