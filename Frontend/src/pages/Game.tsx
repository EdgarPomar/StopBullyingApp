import { useState } from "react";
import escenas from "../data/escenas.json";
import reflexiones from "../data/reflexiones.json";
import ReflexionModal from "../components/ReflexionModal";
import { useNavigate } from "react-router-dom";
import EscenaCard from "../components/EsceneCard";
import "../styles/game.css"; // Importamos el CSS separado

export default function Juego() {
  const [index, setIndex] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<string | null>(null);
  const nav = useNavigate();

  const escena = escenas[index];
  const reflexion = reflexiones.find(r => r.idRespuesta === respuestaSeleccionada)?.texto;

  const handleRespuesta = (id: string) => {
    setRespuestaSeleccionada(id);
  };

  const handleSiguiente = () => {
    setRespuestaSeleccionada(null);
    if (index < escenas.length - 1) {
      setIndex(index + 1);
    } else {
      alert("¡Has completado todas las escenas!");
      nav("/home");
    }
  };

  return (
    <div className="juego-container">
      <div className="juego-header">
        <span>Escena {index + 1} de {escenas.length}</span>
        <button className="btn-salir" onClick={() => nav("/home")}>Salir</button>
      </div>
      <div className="progreso">
        <div
          className="progreso-barra"
          style={{ width: `${((index + 1) / escenas.length) * 100}%` }}
        ></div>
      </div>
      <EscenaCard
        titulo={escena.titulo}
        descripcion={escena.descripcion}
        preguntas={escena.preguntas}
        onRespuesta={handleRespuesta}
      />
      {respuestaSeleccionada && reflexion && (
        <ReflexionModal texto={reflexion} onClose={handleSiguiente} />
      )}
    </div>
  );
}
