import "../styles/pages.css";

export default function Seo() {
  return (
    <div className="page">
      <section className="page-hero">
        <h1 className="page-title">SEO</h1>
        <p className="page-lead">
          Ottimizziamo la tua presenza online con un approccio metodico e
          trasparente.
        </p>
      </section>

      <section className="panel">
        <h2 className="panel-title">Cosa facciamo</h2>
        <ul className="list">
          <li>Analisi keyword e contenuti.</li>
          <li>Ottimizzazione tecnica.</li>
          <li>Monitoraggio risultati.</li>
        </ul>
      </section>

      <section className="panel">
        <h2 className="panel-title">Come lavoriamo</h2>
        <ul className="list">
          <li>Strategia chiara e condivisa.</li>
          <li>Interventi mirati, niente sprechi.</li>
          <li>Report mensili leggibili.</li>
        </ul>
      </section>

      <section className="panel">
        <h2 className="panel-title">Risultati</h2>
        <ul className="list">
          <li>Crescita organica sostenibile.</li>
          <li>Visibilità su ricerche rilevanti.</li>
          <li>Traffico qualificato.</li>
        </ul>
      </section>
    </div>
  );
}
