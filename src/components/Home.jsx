import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="welcome-message">
        <h1>Welcome</h1>
        <h2>
          I am Caroline,
          <br /> a junior Full Stack developer 
        </h2>
      </div>
      <div className="card-link">
        <NavLink to="/aboutme" className="card">
        <img className="picAbout"src="/emoticone-id.png" alt="about me" />
          <p className="heading">About me</p>
        </NavLink>
        <NavLink to="/projects" className="card">
        <img className="picProjects"src="/emoticone-projet.png" alt="my projects" />
          <p className="heading">My projects</p>
        </NavLink>
        <NavLink to="/stack" className="card">
        <img className="picBalise"src="/emoticone-balise.png" alt="my stack" />
          <p className="heading">My stack</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
