import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated,
  isAfterAccessDate,
  children,
}: {
  isAuthenticated: boolean;
  isAfterAccessDate: boolean;
  children: React.ReactNode;
}) => {
  if (!isAuthenticated && !isAfterAccessDate) {
    return <Navigate to="/entry" replace />;
  }
  return children;
};

export default ProtectedRoute;
