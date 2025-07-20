
interface Pregunta {
  idRespuesta: string;
  texto: string;
}

interface EscenaProps {
  titulo: string;
  descripcion: string;
  preguntas: Pregunta[];
  onRespuesta: (idRespuesta: string) => void;
}

export default function EscenaCard({ titulo, descripcion, preguntas, onRespuesta }: EscenaProps) {
  return (
    <div style={styles.card}>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <div style={styles.preguntas}>
        {preguntas.map((p) => (
          <button key={p.idRespuesta} style={styles.boton} onClick={() => onRespuesta(p.idRespuesta)}>
            {p.texto}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    maxWidth: "600px",
    margin: "auto",
    textAlign: "center" as const
  },
  preguntas: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px"
  },
  boton: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none"
  }
};
