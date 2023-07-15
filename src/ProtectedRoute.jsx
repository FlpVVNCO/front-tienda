import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const ProtectedRoute = () => {
  const { isAuthenticated, loading, isAdmin } = useAuth();

  if (loading) return <h1>Loading...</h1>;
  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else if (!loading && isAdmin) {
    return <Navigate to="/product" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
