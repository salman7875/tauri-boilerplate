import { useState } from "react";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl border border-gray-200">
        {/* Logo / Branding */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
            <span className="text-xl font-bold">C</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Company Portal</h1>
          <p className="mt-1 text-sm text-gray-500">
            Please sign in to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}
