import "../styles/pages.css";

export default function Info() {
  return (
    <div className="page">
      <section className="page-hero">
        <h1 className="page-title">Informazioni</h1>
        <p className="page-lead">
          Cloudlast è una piattaforma progettata per semplificare la gestione
          delle infrastrutture cloud.
        </p>
      </section>

      <section className="panel">
        <h2 className="panel-title">Metodo</h2>
        <p className="panel-text">
          Ogni elemento è descritto in modo consistente: contesto,
          responsabilità e stato attuale. Questo consente verifiche rapide e
          riduce le interpretazioni.
        </p>
      </section>

      <section className="panel">
        <h2 className="panel-title">Documentazione</h2>
        <ul className="list">
          <li>Struttura informativa uniforme per team diversi.</li>
          <li>Indicazioni operative sempre aggiornate.</li>
          <li>Riduzione dei passaggi non necessari.</li>
        </ul>
      </section>
    </div>
  );
}
