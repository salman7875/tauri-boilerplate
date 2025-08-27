export default function ProtectedRoute({ children }) {
  let isAuthenticated = true;
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}
