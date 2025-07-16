interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({ text, onClick, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px 15px",
        marginTop: "10px",
        width: "100%",
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      {text}
    </button>
  );
}
