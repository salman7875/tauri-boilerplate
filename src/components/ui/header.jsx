import { useNavigate } from "react-router";

export default function Header() {
  const navigation = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userInfo");
    navigation("/signin");
  };

  return (
    <header className="mb-8 flex items-center justify-between rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-6 shadow-lg">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-lg">
          Agents Directory
        </h1>
        <p className="mt-1 text-sm font-medium text-indigo-100">
          A complete list of agents in the system
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="group relative inline-flex items-center gap-2 rounded-xl bg-white/90 px-5 py-2.5 text-sm font-semibold text-gray-800 shadow-md transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-0.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600 transition-colors group-hover:text-red-500"
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
