import { useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();

  return (
    <div style={styles.container}>
      <img
        src="https://cdn.pixabay.com/photo/2017/06/30/09/21/stop-2452758_960_720.png"
        alt="Stop Bullying"
        style={styles.image}
      />
      <h1 style={styles.title}>Guardianes de la Convivencia</h1>
      <p style={styles.text}>
        ¡Detén el bullying! Aprende a identificar y prevenir el acoso escolar con un juego interactivo. 
        Conviértete en un guardián y crea un ambiente seguro para todos.
      </p>
      <button style={styles.button} onClick={() => nav("/login")}>
        ¡Comenzar!
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    textAlign: "center" as const,
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
  },
  image: { width: "150px", marginBottom: "20px" },
  title: { fontSize: "28px", color: "#4CAF50", marginBottom: "15px" },
  text: { fontSize: "16px", color: "#555", marginBottom: "25px" },
  button: {
    padding: "12px 20px",
    fontSize: "18px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};
