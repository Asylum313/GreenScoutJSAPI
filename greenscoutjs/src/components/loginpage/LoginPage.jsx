import Username from "./username/username";
import Password from "./password/passwordBox";
import LoginButton from "./loginButton/LoginButton";
import GuestButton from "./loginButton/GuestButton";
import NavComponentLogin from "../NavComponentLogin";
import "./Login.css";

function LoginPage({ login, username, setUsername }) {
  return (
    <div id="body">
      <NavComponentLogin></NavComponentLogin>
      <div id="parent" className="text">
        <h1 className="textlogin">Login</h1>
        <form
          id="loginPageForm"
          onSubmit={(e) => {
            e.preventDefault();
            login();
          }}
        >
          <Username
            className="input"
            onUserChange={setUsername(username)}
            value={username}
          ></Username>
          <Password
            className="input"
            // onPasswordChange={setPassword}
            // value={password}
          ></Password>
          <LoginButton type="submit"></LoginButton>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
