import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import AuthContext from "./authContext";

export const AuthProvider = ({ children }) => {
  // Changed to named export
  const [token, setToken_] = useState(() => {
    try {
      return localStorage.getItem("token");
    } catch (error) {
      console.error("Failed to read token from localStorage:", error);
      return null;
    }
  });

  const setToken = (newToken) => {
    setToken_(newToken);
  };

  useEffect(() => {
    try {
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem("token", token);
      } else {
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.error("Failed to update localStorage:", error);
    }
  }, [token]);

  // Sync across tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "token") {
        setToken_(e.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
