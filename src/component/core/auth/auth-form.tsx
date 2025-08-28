import React, { useState } from "react";
import { useNavigate } from "react-router";

import { signin } from "../../../api/request";
import Input from "../../ui/input/input";
import "../../../pages/signin/signin-page.module.css";

const AuthForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ userName: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await signin(formData);
      window.localStorage.setItem("token", data.data.JWT);
      window.localStorage.setItem("userInfo", JSON.stringify(data.data.user));
      navigate("/agent");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
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
      <button type="submit" className="auth-button">
        Sign In
      </button>
    </form>
  );
};

export default AuthForm;
