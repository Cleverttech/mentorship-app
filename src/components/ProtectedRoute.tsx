import { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    // 🔴 Not logged in – redirect to login
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && role && !allowedRoles.includes(role)) {
    // 🔴 Logged in but not allowed role – redirect to their dashboard
    const redirectPath = role === "mentor" ? "/mentor/dashboard" : "/mentee/dashboard";
    return <Navigate to={redirectPath} replace />;
  }

  // ✅ User is authenticated and allowed
  return <>{children}</>;
}
