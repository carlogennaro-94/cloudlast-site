export default function App() {
  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <div style={styles.badge}>cloudlast.it</div>

        <h1 style={styles.h1}>Cloudlast</h1>

        <p style={styles.p}>
          ATS tascabile per gestione candidature, pipeline e documenti.
          <br />
          Progettato per team moderni.
        </p>

        <div style={styles.row}>
          <a style={styles.primary} href="https://cloudlast.cloud">
            Vai al prodotto
          </a>
          <a style={styles.secondary} href="https://cloudlast.info">
            Documentazione
          </a>
        </div>

        <div style={styles.footer}>
          Status: online • {new Date().getFullYear()}
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
  },
  card: {
    width: "100%",
    maxWidth: 560,
    borderRadius: 18,
    border: "1px solid #222",
    background: "#0b0b0b",
    padding: 20,
    boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
  },
  badge: {
    display: "inline-block",
    fontSize: 12,
    opacity: 0.7,
    padding: "6px 10px",
    border: "1px solid #222",
    borderRadius: 999,
    marginBottom: 14,
  },
  h1: { margin: 0, fontSize: 30, letterSpacing: -0.5 },
  p: { marginTop: 12, marginBottom: 18, opacity: 0.82, lineHeight: 1.5 },
  row: { display: "flex", gap: 10, flexWrap: "wrap" },
  primary: {
    background: "#fff",
    color: "#000",
    padding: "12px 14px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 800,
    fontSize: 14,
  },
  secondary: {
    background: "transparent",
    color: "#fff",
    padding: "12px 14px",
    borderRadius: 12,
    border: "1px solid #333",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 14,
  },
  footer: { marginTop: 18, fontSize: 12, opacity: 0.5 },
};
