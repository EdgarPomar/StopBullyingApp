import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const saved = localStorage.getItem("registeredUsers");
    if (!saved) return alert("No hay usuarios registrados");

    const users = JSON.parse(saved);
    const found = users.find((u: any) => u.username === username && u.password === password);

    if (found) {
      localStorage.setItem("user", username);
      nav("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="form">
        <Input placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
        <Button text="Entrar" type="submit" />
      </form>
      <p className="link">
        ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
      </p>
    </div>
  );
}
