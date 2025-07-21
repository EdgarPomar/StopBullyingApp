import { useLocation, useNavigate } from "react-router-dom";

export default function Resultado() {
  const { state } = useLocation();
  const nav = useNavigate();
  const { puntos, maxPuntos, respuestas } = state;

  const porcentaje = Math.round((puntos / maxPuntos) * 100);

  let mensaje = "";
  if (porcentaje <= 40) mensaje = "Necesitas mejorar. Recuerda que actuar marca la diferencia.";
  else if (porcentaje <= 70) mensaje = "Buen intento. Aún puedes intervenir más en situaciones difíciles.";
  else mensaje = "¡Excelente! Demuestras empatía y responsabilidad.";

  // Consejos dinámicos
  const consejos: string[] = [];
  if (respuestas.filter((r: string) => r === "A").length > 3)
    consejos.push("Evitar actuar deja sola a la víctima. Intenta intervenir.");
  if (respuestas.filter((r: string) => r === "B").length > 1)
    consejos.push("No te unas al acoso. Sé valiente y actúa con empatía.");
  if (respuestas.filter((r: string) => r === "C").length === 0)
    consejos.push("Defender con respeto ayuda a crear un ambiente sano.");
  if (respuestas.filter((r: string) => r === "D").length === 0)
    consejos.push("Buscar ayuda en adultos es clave para frenar el acoso.");

  return (
    <div className="resultado-container">
      <h2>Resultado Final</h2>
      <p className="resultado-mensaje">{mensaje}</p>
      <p className="resultado-score">Puntuación: {puntos}/{maxPuntos} ({porcentaje}%)</p>

      {consejos.length > 0 && (
        <>
          <h3>Consejos para mejorar:</h3>
          <ul>
            {consejos.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </>
      )}

      <button className="btn-primario" onClick={() => nav("/home")}>Volver al inicio</button>
    </div>
  );
}
