import { RouterProvider, createBrowserRouter, Navigate } from "react-router";
import Signin from "./pages/signin";
import ProtectedRoute from "./components/auth/protected-route";
import Agents from "./pages/agents";
import NotFound from "./pages/not-found";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="signin" replace /> },
  { path: "/signin", Component: Signin },
  {
    path: "/agent",
    element: (
      <ProtectedRoute>
        <Agents />
      </ProtectedRoute>
    ),
  },
  { path: "*", Component: NotFound },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
