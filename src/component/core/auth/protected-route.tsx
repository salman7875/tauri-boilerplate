import React from "react";
import { Navigate } from "react-router";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  let isAuthenticated = true;
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}
