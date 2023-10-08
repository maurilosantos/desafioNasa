import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from 'react-teffex';
import './Creditos.css';
import 'augmented-ui/augmented-ui.css';

function Creditos() {
const desenvolvedores = [
{
nome: "ALINE SOGLIA",
github: "https://github.com/alinesoglia",
linkedin: "https://www.linkedin.com/in/aline-soglia",
},
{
nome: "JÉSSICA MENDES",
github: "https://github.com/JesscMendesr",
linkedin: "https://www.linkedin.com/in/jessicamendesraulino",
},
{
nome: "LARISSA PIMENTA",
github: "https://github.com/LarissaMarquesPimenta",
linkedin: "https://www.linkedin.com/in/larissamarquespimenta",
},
{
nome: "MAURILIO SANTOS",
github: "https://github.com/maurilosantos",
linkedin: "https://www.linkedin.com/in/maurilosantos",
},
{
nome: "RENATO NUNES",
github: "https://github.com/renatonunes74",
linkedin: "https://www.linkedin.com/in/renato-nunes",
},
{
nome: "VINICIUS SILVA",
github: "https://github.com/VinnyPC",
linkedin: "https://www.linkedin.com/in/larissamarquespimenta",
},
]
  return (
		<>
	  <div
		className="borda"
		data-augmented-ui="tl-clip tr-clip bl-clip br-clip b-clip-x both"
	  >
		<h1>
		  <Typewriter
			text="Credits"
			cursorSettings={{ color: "transparent" }}
			typeSettings={{ typeDelay: 0.8,  stutterChance: 0.1, }}
		  />
		</h1>
		<div style={{flexFlow: 'wrap', alignContent: 'center', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
		{desenvolvedores.map(desenvolvedor => (
	  <div style={{margin: '20px', width: '20em'}}>
	  <div className="" style={{padding: '10px', marginBottom: '10px'}} data-augmented-ui="tl-clip tr-clip bl-clip br-clip b-clip-x border">
	  <img data-augmented-ui="tl-clip tr-clip bl-clip br-clip b-clip-x both" width="200px" src={desenvolvedor.github + ".png"}/>
	  </div>
	  <div className="" style={{padding: '10px'}} data-augmented-ui="tl-clip t-rect-x tr-clip r-clip-xy br-clip bl-clip l-clip-xy both">
	  <h4><Glitch alphabet text={desenvolvedor.nome} /></h4>
          <Link to={desenvolvedor.github} style={{color: 'white'}}>
	  <h4><Glitch alphabet text="GITHUB" /></h4>
	  </Link>
          <Link to={desenvolvedor.linkedin} style={{color: 'white'}}>
	  <h4><Glitch alphabet text="LINKEDIN" /></h4>
	  </Link>
	  </div>
	  </div>
		))}
	  </div>
	  </div>
		<h3>
		  <Link to={"/"}>
			<button className="button" data-augmented-ui="br-clip border">
			  <Glitch alphabet text="BACK" />
			</button>
		  </Link>
		</h3>
		</>
  );
}

export default Creditos;
