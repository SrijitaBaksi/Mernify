import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const { user, loading } = useAuth();
  if (loading) return <div className="text-center mt-10">Loading...</div>;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedLayout;