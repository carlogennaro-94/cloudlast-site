import "../styles/pages.css";

export default function Product() {
  return (
    <div className="page">
      <section className="page-hero">
        <h1 className="page-title">Prodotto</h1>
        <p className="page-lead">
          Scopri le funzionalità della nostra piattaforma e come può aiutare il
          tuo business.
        </p>
      </section>

      <section className="panel">
        <h2 className="panel-title">Funzioni principali</h2>
        <ul className="list">
          <li>Catalogo dei servizi con ownership e livelli di servizio.</li>
          <li>Tracciamento delle modifiche con cronologia leggibile.</li>
          <li>Modelli di configurazione coerenti tra ambienti.</li>
        </ul>
      </section>

      <section className="panel">
        <h2 className="panel-title">Operatività</h2>
        <p className="panel-text">
          Ogni area è progettata per supportare decisioni rapide, con dati
          contestuali e un linguaggio condiviso.
        </p>
      </section>
    </div>
  );
}
