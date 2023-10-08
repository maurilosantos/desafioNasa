import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';

function AmbientePlantas() {
  return (
    <>
      <p>
        <img
          src="https://app.milanote.com/media/p/images/1QOWLG1zWsuy6v/0FI/10-0HuvG.png?w=400&v=2&elementId=1QOWLG1zWsuy6v"
          width="40%"
          height="auto"
          style={{borderRadius: 10}}

        />
         <img
          src="https://app.milanote.com/media/p/images/1QOWIX1zWsuy6u/Art/PhotoReal_astronaut_holding_his_helmet_with_his_hand_getting_o_0.jpg?w=800&v=2&elementId=1QOWIX1zWsuy6u"
          width="40%"
          height="auto"
          style={{marginBottom: 60, marginLeft: 15, borderRadius: 10}}
        />

<p>
        <Typewriter
          text=" "
          cursorSettings={{ color: "transparent" }}
          typeSettings={{ typeDelay: 0.8, stutterChance: 0.1, }}
        />
      </p>
      
      </p>
      <Link to={"/familia"}>
        <button className="button" data-augmented-ui="br-clip border">
          <Glitch alphabet text="Initiate Family" />
        </button>
      </Link>
    </>
  );
}

export default AmbientePlantas
