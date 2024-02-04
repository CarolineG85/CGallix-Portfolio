import { Outlet, Link, useLocation, NavLink } from "react-router-dom";

function App() {
  const location = useLocation();
  const handleMail = () => {
    window.location.href = "mailto:caroline.gallix85@gmail.com";
  };

  return (
    <div>
      <div className="header">
        <div>
          {location.pathname !== "/" && (
            <NavLink to="/">
              <div className="header-button-container">
                <button className="button">Home</button>
              </div>
            </NavLink>
          )}
        </div>
        <div className="header-link">
          <Link onClick={handleMail}>
            <img
              className="contact"
              src="/email.png"
              alt="contact"
              title="caroline.gallix85@gmail.com"
            />
          </Link>
          <Link to="https://github.com/CarolineG85">
            <img className="github" src="/github2.png" alt="github" />
          </Link>
          <Link to="https://www.linkedin.com/in/carolinegallix/">
            <img className="linkedin" src="/linkedin2.png" alt="linkedin" />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
