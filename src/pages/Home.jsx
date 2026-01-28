import "../styles/pages.css";

export default function Home() {
  return (
    <div className="page">
      <section className="page-hero">
        <h1 className="page-title">Cloudlast</h1>
        <p className="page-lead">
          Una piattaforma essenziale per gestire servizi cloud in modo ordinato,
          con attenzione alla stabilità e alla chiarezza operativa.
        </p>
      </section>

      <div className="content-grid">
        <section className="panel">
          <h2 className="panel-title">Cosa offre</h2>
          <p className="panel-text">
            Un controllo centralizzato su ambienti, configurazioni e flussi di
            lavoro, pensato per ridurre complessità e ambiguità.
          </p>
        </section>

        <section className="panel">
          <h2 className="panel-title">Principi di progetto</h2>
          <ul className="list">
            <li>Interfacce pulite, senza elementi superflui.</li>
            <li>Processi ripetibili e facilmente verificabili.</li>
            <li>Comunicazione chiara tra team tecnici e decisionali.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
