import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/authContext";
import LoginPage from "./LoginPage";
import { useState } from "react";
//   const [password, setPassword] = useState("");

function Login() {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState();

  const handleLogin = () => {
    setToken(username);
    navigate("/GreenScoutJS/home", { replace: true });
  };

  return (
    <LoginPage
      login={handleLogin}
      username={username}
      setUsername={setUsername}
    />
  );
}

export default Login;
