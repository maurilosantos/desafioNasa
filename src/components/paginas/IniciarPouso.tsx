import { Link } from 'react-router-dom';
import { Glitch } from 'react-teffex';

function IniciarPouso() {
  return (
    <>
      <div className="image planeta" data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both">
        <img
          src="https://app.milanote.com/media/p/images/1QOWLI1zWsuy6K/QFx/2-ASvkC.png?w=400&v=2&elementId=1QOWLI1zWsuy6K"
          width="40%"
          height="auto"
        />
      </div>
      <Link to={"/AmbientePlantas"}>
        <button className="button" data-augmented-ui="br-clip both">
          <Glitch alphabet text="Initiate Plants" />
        </button>
      </Link>
    </>
  );
}

export default IniciarPouso
