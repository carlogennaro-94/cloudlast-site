import { NavLink, Outlet } from "react-router-dom";
import CookieBanner from "../components/CookieBanner";
import logo from "../assets/cloudlasto_logo_black.jpg";
import "../styles/layout.css";

export default function SiteLayout() {
  return (
    <div className="app-shell">
      <CookieBanner />
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
            <NavLink to="/seo" className="nav-link">
              SEO
            </NavLink>
            <NavLink to="/info" className="nav-link">
              Info
            </NavLink>
            <NavLink to="/corporate" className="nav-link">
              Trust
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p className="slogan">Think Cloud build Last</p>
          <p>
            &copy; {new Date().getFullYear()} Cloudlast. Tutti i diritti
            riservati.
          </p>
        </div>
      </footer>
    </div>
  );
}
