import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function Familia() {
  return (
    <>
              		  <div className="borda" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
      <div className="image planeta" data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both">
        <img
          src="https://app.milanote.com/media/p/images/1QOWIX1zWsuy6t/16g/PhotoReal_family_playing_with_a_robot_dog_futuristic_cyberpunk_1.jpg?w=800&v=2&elementId=1QOWIX1zWsuy6t"
          width="60%"
          height="auto"
          style={{borderRadius: 10}}

        />
      </div>
		  <div className="chat">
		  		  <figure className="avatar"><img className="ia" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"/><figcaption>Insalubera</figcaption></figure>
		<Typewriter
		  text="Message: 'Earth, this is the NAZA team on Insalubers-63. Landing operations have been successful, and we are preparing our dome for growing food. Initial soil readings are promising and suggest that this planet could be a new home for humanity. We will continue to collect data and keep you updated on our progress. Rest assured, we are making history here.'
I was really emotional

"
		  cursorSettings={{ color: "transparent" }}
		/>
      </div>
      </div>
      
      <Link to={"/Creditos"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Credits" />
        </button>
      </Link>
    </>
  );
}

export default Familia
