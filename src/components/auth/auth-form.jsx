import { useState } from "react";
import { useNavigate } from "react-router";

import Input from "../ui/input";
import { signin } from "../../api/request";

const AuthForm = () => {
  const navigation = useNavigate();

  const [formData, setFormData] = useState({ userName: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signin(formData);
      
      window.localStorage.setItem("token", data.data.JWT);
      window.localStorage.setItem("userInfo", JSON.stringify(data.data.user));
      navigation("/agent");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Username"
        type="text"
        name="userName"
        value={formData.userName}
        placeholder="Enter your username"
        onChange={handleChange}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        placeholder="Enter your password"
        onChange={handleChange}
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
