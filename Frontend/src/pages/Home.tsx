import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  const nav = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    nav("/login");
  };

  return (
    <div className="container">
      <h2>Bienvenido, {user}</h2>
      <p>Aquí irá el menú principal del juego.</p>
      <Button text="Cerrar sesión" onClick={handleLogout} />
    </div>
  );
}
