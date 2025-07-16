import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const saved = localStorage.getItem("registeredUsers");
    const users = saved ? JSON.parse(saved) : [];
    users.push({ username, password });
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    alert("Registro exitoso");
    nav("/login");
  };

  return (
    <div className="container">
      <h2>Registro</h2>
      <form onSubmit={handleRegister} className="form">
        <Input placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
        <Button text="Registrar" type="submit" />
      </form>
      <p className="link">
        ¿Ya tienes cuenta? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
