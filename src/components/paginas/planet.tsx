import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';
import './Familia.css'; // Importe seu arquivo CSS aqui

function planet() {
  return (
    <div className="familia-container">
      <div
          className="image familia"
          data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both"
        >
      <img
        src="https://app.milanote.com/media/p/images/1QOWLI1zWsuy6H/pGU/22-mtkbO.png?w=400&v=2&elementId=1QOWLI1zWsuy6H"
        alt="Família"
        className="familia-image"
      />
      </div>
      <div className="typewriter">
      <Typewriter
        text="The exoplanet we created is called Insalubers63, this planet has a rocky and more arid surface than Earth's, and it's slightly smaller, approximately 83% of Earth's size. However, it has a magnetic field to deflect solar rays, its star is at a standard distance, and its temperature seems reasonable by human standards. In addition to its natural features, the planet boasts an advanced technological infrastructure. Efficient solar energy systems are used for electricity generation, along with nuclear fusion technology powering a geothermal heating system, ensuring suitable temperatures across its entire expanse. Another remarkable aspect is the megastructures present in Insalubers63, which house specially designed artificial plants to continuously produce oxygen.
        This planet is a technological world where technology is used to enhance the quality of life, always in harmony with nature. Cities are designed to minimize environmental impact, and innovation is directed towards sustainable solutions.
        The journey from Earth to Insalubers63 involves several stages: First, a selection and preparation of candidates for planet colonization takes place. Then, space travel commences where colonizers continue their training. As they approach Insalubers63, landing modules are deployed, descending gently to the planet's surface."
        cursorSettings={{ color: "transparent" }}
        typeSettings={{ typeDelay: 0.8, stutterChance: 0.1 }}
      />
      </div>

      <Link to={"/"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Back" />
        </button>
      </Link>
    </div>
  );
}

export default planet;
