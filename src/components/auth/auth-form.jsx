import { useState } from "react";
import Input from "../ui/input";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Username"
        type="text"
        value={username}
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        value={username}
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        Sign In
      </button>
    </form>
  );
};

export default AuthForm;
