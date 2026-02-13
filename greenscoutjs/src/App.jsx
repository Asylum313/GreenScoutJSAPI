import "./App.css";
import { AuthProvider } from "./provider/authProvider";
import Routes from "./routes";

function App() {
  const accounts = [
    {
      id: 1,
      user: "Noah",
      role: "Admin",
      matchesLogged: 9999999999999,
      pass: "1816",
    },
  ];

  return (
    <AuthProvider>
      <Routes accounts={accounts} />
    </AuthProvider>
  );
}

export default App;
