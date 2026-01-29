import React, { useState, useEffect } from "react";
import "../styles/cookie-banner.css";

const COOKIE_KEY = "cookie_consent";

const defaultPrefs = {
  necessary: true,
  analytics: false,
  marketing: false,
};

function getConsent() {
  try {
    return JSON.parse(localStorage.getItem(COOKIE_KEY)) || null;
  } catch {
    return null;
  }
}

function setConsent(prefs) {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState(defaultPrefs);

  useEffect(() => {
    const consent = getConsent();
    if (!consent) setOpen(true);
  }, []);

  const handleAcceptAll = () => {
    setConsent({ ...defaultPrefs, analytics: true, marketing: true });
    setOpen(false);
  };

  const handleSave = () => {
    setConsent(prefs);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          Utilizziamo cookie per migliorare l'esperienza utente e raccogliere
          dati statistici. Puoi gestire le tue preferenze. Per dettagli consulta
          la nostra{" "}
          <a href="/PrivacyPolicy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          .
        </p>
        <form className="cookie-prefs">
          <label>
            <input type="checkbox" checked disabled /> Cookie necessari (sempre
            attivi)
          </label>
          <label>
            <input
              type="checkbox"
              checked={prefs.analytics}
              onChange={(e) =>
                setPrefs((p) => ({ ...p, analytics: e.target.checked }))
              }
            />
            Cookie analitici
          </label>
          <label>
            <input
              type="checkbox"
              checked={prefs.marketing}
              onChange={(e) =>
                setPrefs((p) => ({ ...p, marketing: e.target.checked }))
              }
            />
            Cookie marketing
          </label>
        </form>
        <div className="cookie-actions">
          <button
            type="button"
            onClick={handleAcceptAll}
            className="accept-all"
          >
            Accetta tutti
          </button>
          <button type="button" onClick={handleSave} className="save-prefs">
            Salva preferenze
          </button>
        </div>
      </div>
    </div>
  );
}
