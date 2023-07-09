import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const ProtectedAdminRoute = () => {
  const { isAdmin, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;
  if (!loading && !isAdmin) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedAdminRoute;
