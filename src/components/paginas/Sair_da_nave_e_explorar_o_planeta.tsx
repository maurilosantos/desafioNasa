import { Link } from 'react-router-dom';
import { Glitch, Typewriter } from "react-teffex";

function Sair_da_nave_e_explorar_o_planeta() {
  return (
    <>
              		  <div className="borda" data-augmented-ui="tl-clip tr-clip-y br-2-clip-x both">
      <div className="image planeta" data-augmented-ui="tl-2-clip-y tr-clip br-2-clip-x bl-clip both">
        <img
          src="https://1.bp.blogspot.com/-KKtvwGsYPXM/XpetdC7bKhI/AAAAAAABEa8/54PzwU0Otdw9GctMmtXn881Kv-FnlGm8QCLcBGAsYHQ/s1600/Ilustra%25C3%25A7%25C3%25A3o%2Bdo%2BPlaneta%2BKepler-1649c.webp"
          width="40%"
          height="auto"
        />
      </div>
		  <div className="chat">
		  <figure className="avatar"><img className="ia_confusa2" data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"/><figcaption>Insalubera</figcaption></figure>
		<Typewriter
		  text="/Analyzing soil data// Initial readings are promising. Concentrations of nitrogen, phosphorus and potassium are sufficient to support a variety of crops. Soil acidity is within acceptable parameters, and contaminant levels are minimal.
Based on these findings, it is promising to believe that we could start a cultivation dome here."
		  cursorSettings={{ color: "transparent" }}
		  typeSettings={{ typeDelay: 0.8, stutterChance: 0.1, }}
		/>
		  </div>
		  </div>
      <Link to={"/AmbientePlantas"}>
        <button className="button" data-augmented-ui="br-clip both">
          <Glitch alphabet text="Start a dome" />
        </button>
      </Link>
    </>
  );
}

export default Sair_da_nave_e_explorar_o_planeta
