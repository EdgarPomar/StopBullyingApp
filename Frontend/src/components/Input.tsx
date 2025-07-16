interface InputProps {
  type?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type = "text", placeholder, onChange }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      style={{
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "16px"
      }}
    />
  );
}
