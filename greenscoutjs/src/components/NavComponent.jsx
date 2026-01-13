import "./NavComponent.css";
import { Navigate, useNavigate } from "react-router-dom";

function NavComponent() {
  const navigate = useNavigate();

  function navHome() {
    navigate("/home");
  }

  function navForm() {
    navigate("/match");
  }

  return (
    <span>
      <input type="checkbox" id="nav-toggle" />
      <label for="nav-toggle" class="hamburger"></label>
      <nav class="side-nav">
        <div id="usertile">
          <div id="userimage"></div>
          <div id="usertext">
            <h1>Guest</h1>
            <p>User</p>
          </div>
        </div>
        <p className="textp" onClick={navHome}>
          Home
        </p>
        <p className="textp" onClick={navForm}>
          Match Form
        </p>
      </nav>

      <nav id="navbar"></nav>
    </span>
  );
}

export default NavComponent;
