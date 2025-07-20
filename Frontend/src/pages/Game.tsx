import { useState } from "react";
import escenas from "../data/escenas.json";
import reflexiones from "../data/reflexiones.json";
import ReflexionModal from "../components/ReflexionModal";
import { useNavigate } from "react-router-dom";
import EscenaCard from "../components/EsceneCard";

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
    <div style={styles.container}>
      <div style={styles.header}>
        <span>Escena {index + 1} de {escenas.length}</span>
        <button style={styles.salir} onClick={() => nav("/home")}>Salir</button>
      </div>
      <div style={styles.progreso}>
        <div style={{ ...styles.progresoBarra, width: `${((index + 1) / escenas.length) * 100}%` }}></div>
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

const styles = {
  container: { padding: "40px" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    fontWeight: "bold"
  },
  salir: {
    backgroundColor: "#f44336",
    color: "white",
    padding: "6px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  progreso: {
    background: "#eee",
    height: "10px",
    borderRadius: "5px",
    marginBottom: "20px"
  },
  progresoBarra: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: "5px",
    transition: "width 0.3s ease"
  }
};
