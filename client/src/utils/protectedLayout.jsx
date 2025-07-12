import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const { user } = useAuth();  
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedLayout;
