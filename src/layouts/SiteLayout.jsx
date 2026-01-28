import { NavLink } from "react-router-dom";
import logo from "../assets/cloudlasto_logo_black.jpg";
import "../styles/layout.css";

export default function SiteLayout({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container">
          <NavLink to="/" className="brand-link">
            <img src={logo} alt="Cloudlast" className="brand-logo" />
          </NavLink>
          <nav className="site-nav">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/prodotto" className="nav-link">
              Prodotto
            </NavLink>
            <NavLink to="/info" className="nav-link">
              Info
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="site-main">
        <div className="container">{children}</div>
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Cloudlast. Tutti i diritti
            riservati.
          </p>
        </div>
      </footer>
    </div>
  );
}
