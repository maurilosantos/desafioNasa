import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';
import './AmbientePlanas.css';

function AmbientePlantas() {

	return (
		<>
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

			<div className="typewriter">
				<Typewriter
					text="On this extraordinary exoplanet, artificial plant-based technologies play a crucial role in maintaining a breathable atmosphere, providing a sustainable source of oxygen for its alien ecosystems."
					cursorSettings={{ color: "transparent" }}
					typeSettings={{ typeDelay: 0.8, stutterChance: 0.1 }}
				/>
			</div>

			<Link to={"/familia"}>
				<button className="button" data-augmented-ui="br-clip both">
					<Glitch alphabet text="Initiate Family" />
				</button>
			</Link>
		</>
	);

}

export default AmbientePlantas;
