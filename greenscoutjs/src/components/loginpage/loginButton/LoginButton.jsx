import "./LoginButton.css";

function LoginButton({ onClick }) {
  return (
    <button id="loginButton" onClick={onClick}>
      Continue
    </button>
  );
}

export default LoginButton;
