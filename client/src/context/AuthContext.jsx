import { createContext, useContext, useEffect, useState } from "react";
import api from "../utils/apiRequest"; // this must have withCredentials: true

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (userData) => setUser(userData);
  const logout = async () => {
    try {
      await api.post("/auth/logout"); // clear token cookie from backend
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      setUser(null);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/auth/me"); // 🟢 Server validates the cookie token
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
        console.log("No active session", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
