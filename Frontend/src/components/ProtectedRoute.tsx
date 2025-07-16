import { JSX } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isLogged = localStorage.getItem("user");
  return isLogged ? children : <Navigate to="/login" />;
}
