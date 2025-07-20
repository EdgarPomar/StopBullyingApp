interface ModalProps {
  texto: string;
  onClose: () => void;
}

export default function ReflexionModal({ texto, onClose }: ModalProps) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <p>{texto}</p>
        <button onClick={onClose} style={styles.boton}>Siguiente</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center" as const,
    maxWidth: "400px"
  },
  boton: {
    marginTop: "20px",
    padding: "10px 15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};
