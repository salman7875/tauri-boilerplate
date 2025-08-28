import { HashRouter, Routes, Route, Navigate } from "react-router";
import SigninPage from "./pages/signin/signin-page";
import AgentPage from "./pages/agents/agent-page";
import NotFound from "./pages/not-found/not-found";
import ProtectedRoute from "./component/core/auth/protected-route";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route
          path="/agent"
          element={
            <ProtectedRoute>
              <AgentPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
