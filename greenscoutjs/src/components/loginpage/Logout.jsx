import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/authContext";

const Logout = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken();
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogout();
  }, 1 * 1);

  return <div></div>;
};

export default Logout;
