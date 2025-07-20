import { useNavigate } from "react-router-dom";
export default function Home() {
  const nav = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    nav("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>¡Bienvenido, {user}!</h1>
        <p style={styles.text}>Elige una opción para continuar:</p>
        
        <div style={styles.buttons}>
          <button style={{ ...styles.btn, backgroundColor: "#4CAF50" }} onClick={() => nav("/juego")}>
            Iniciar Juego
          </button>
          <button style={{ ...styles.btn, backgroundColor: "#f44336" }} onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #74ebd5, #9face6)",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    textAlign: "center" as const,
    maxWidth: "400px",
    width: "90%",
  },
  title: {
    fontSize: "26px",
    marginBottom: "10px",
    color: "#333",
  },
  text: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#555",
  },
  buttons: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
  },
  btn: {
    padding: "12px",
    fontSize: "18px",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};
