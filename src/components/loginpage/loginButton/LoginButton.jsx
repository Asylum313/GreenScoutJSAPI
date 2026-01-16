import "./LoginButton.css"
import { Navigate, useNavigate } from "react-router-dom";

function LoginButton () {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/home")
    }

    return (
        <button onClick={handleClick}>Continue</button>
    )
}

export default LoginButton;