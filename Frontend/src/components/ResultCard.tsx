interface ResultadoCardProps {
  mensaje: string;
  porcentaje: number;
  consejos: string[];
  onReiniciar: () => void;
}

export default function ResultadoCard({ mensaje, porcentaje, consejos, onReiniciar }: ResultadoCardProps) {
  return (
    <div className="card-resultado">
      <h2>{mensaje}</h2>
      <p>Tu porcentaje: {porcentaje}%</p>
      {consejos.length > 0 && (
        <div>
          <h3>Consejos para mejorar:</h3>
          <ul>
            {consejos.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      )}
      <button className="btn-primario" onClick={onReiniciar}>Reintentar</button>
    </div>
  );
}
