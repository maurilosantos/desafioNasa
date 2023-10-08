import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';
import './AmbientePlanas.css';

function AmbientePlantas() {

	return (
		<>
		      <div className="container" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">

			<div className="image-container">
				<div
					className="image planeta"
					data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both"
				>
					<img
						src="https://app.milanote.com/media/p/images/1QOWLG1zWsuy6v/0FI/10-0HuvG.png?w=400&v=2&elementId=1QOWLG1zWsuy6v"
						alt="Planeta 1"
					/>
				</div>
				<div
					className="image planeta"
					data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both"
				>
					<img
						src="https://app.milanote.com/media/p/images/1QOWIX1zWsuy6u/Art/PhotoReal_astronaut_holding_his_helmet_with_his_hand_getting_o_0.jpg?w=800&v=2&elementId=1QOWIX1zWsuy6u"
						alt="Planeta 2"
					/>
				</div>
			</div>
        <div className="avatar-chat-container">
          <figure className="avatar">
            <img className="ia" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border" />
            <figcaption>Insalubera</figcaption>
          </figure>
          <div className="typewriter">
          <Typewriter
				  text="My God! How quick the preparation of the dome was, but astronaut, you didn't forget to communicate with Earth, right? A whole planet wants to know what's going on with the NAZA team"
            cursorSettings={{ color: "transparent" }}
            typeSettings={{ typeDelay: 0.8, stutterChance: 0.1 }}
          />
          </div>
			</div>
			<Link to={"/familia"}>
				<button className="button" data-augmented-ui="br-clip both">
					<Glitch alphabet text="Communicate with the Earth" />
				</button>
			</Link>
      </div>
		</>
	);

}

export default AmbientePlantas;
