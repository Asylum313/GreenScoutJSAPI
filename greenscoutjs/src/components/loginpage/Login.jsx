import "./Login.css";
import Username from "./username/username";
import Password from "./password/passwordBox";
import LoginButton from "./loginButton/LoginButton";
import GuestButton from "./loginButton/GuestButton";
import NavComponentLogin from "../NavComponentLogin";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../UseAuth";

function Login({ accountList }) {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/GreenScoutJS/home");
    }
  }, [user, navigate]);

  const handleLogin = (e) => {
    if(e) e.preventDefault();

    const account = accountList.find(
      (acc) => acc.user === username && acc.pass === password,
    );

    if (account) {
      const token = "mock-token-" + Date.now();

      login(account, token);

      navigate("/GreenScoutJS/home");
    } else {
      setError("This Account Does Not Exist");
    }
  };

  const handleGuestLogin = () => {
    const guestAccount = {
      id: 0,
      user: "Guest",
      role: "Guest",
      matchesLogged: 0,
    };
    const token = "guest-token-" + Date.now();

    login(guestAccount, token);
    navigate("/GreenScoutJS/home");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div id="body">
      <NavComponentLogin></NavComponentLogin>
      <div id="parent" className="text" onKeyPress={handleKeyPress}>
        <h1 className="textlogin">Login</h1>
        <Username className="input" onUserChange={setUsername}></Username>
        <Password className="input" onPasswordChange={setPassword}></Password>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <LoginButton onClick={handleLogin}></LoginButton>
        <GuestButton onClick={handleGuestLogin}></GuestButton>
      </div>
    </div>
  );
}

export default Login;
