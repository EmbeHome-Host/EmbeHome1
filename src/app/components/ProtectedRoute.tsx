import { Navigate } from "react-router";
import { useAuth } from "../lib/AdminAuth";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) return <Navigate to="/admin-login" replace />;
  return <>{children}</>;
}
