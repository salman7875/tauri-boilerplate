import { useNavigate } from "react-router";
import "./header.module.css";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userInfo");
    navigate("/signin");
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">Agents Directory</h1>
        <p className="header-subtitle">
          A complete list of agents in the system
        </p>
      </div>

      <button onClick={handleLogout} className="logout-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="logout-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5m-5 9a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
        Logout
      </button>
    </header>
  );
}
