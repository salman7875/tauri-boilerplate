import type { ChangeEvent } from "react";
import "./input.module.css";

interface InputProps {
  label: string;
  name: string;
  type: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function Input({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="input-field"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
