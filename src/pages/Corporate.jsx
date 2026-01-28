import React from "react";
import "../styles/pages.css";

const Corporate = () => {
  return (
    <div className="page-container">
      <div className="glass-container">
        <h1>Dati Fiscali e Societari</h1>
        <div className="corporate-info">
          <h2>Dati fiscali Cloud Last S.r.l.</h2>
          <ul>
            <li>
              <strong>P.IVA / CF:</strong> 1094351213
            </li>
            <li>
              <strong>VAT UE:</strong> IT1094351213 (attiva su VIES)
            </li>
            <li>
              <strong>Stato:</strong> Startup innovativa
            </li>
          </ul>

          <h2>Cloud Last S.r.l.</h2>
          <p>
            <strong>Startup innovativa – Dichiarazione Registro Imprese</strong>
          </p>

          <h3>Dati legale rappresentante</h3>
          <ul>
            <li>
              <strong>Nome e cognome:</strong> Carlo Gennaro
            </li>
            <li>
              <strong>Luogo e data di nascita:</strong> Napoli, 21/09/1994
            </li>
            <li>
              <strong>Cittadinanza:</strong> Italiana
            </li>
            <li>
              <strong>Residenza:</strong> Napoli (NA)
            </li>
            <li>
              <strong>Indirizzo:</strong> Via Domenico Quaranta, 3
            </li>
            <li>
              <strong>Codice fiscale:</strong> GNNCRL94P21F839R
            </li>
          </ul>

          <h3>Dati società</h3>
          <ul>
            <li>
              <strong>Ragione sociale:</strong> Cloud Last S.r.l.
            </li>
            <li>
              <strong>Forma giuridica:</strong> S.r.l.
            </li>
            <li>
              <strong>Sede legale:</strong> Napoli (NA)
            </li>
            <li>
              <strong>Indirizzo sede:</strong> Viale Maria Bakunin, 12
            </li>
            <li>
              <strong>Codice fiscale / P. IVA:</strong> 1094351213
            </li>
            <li>
              <strong>REA:</strong> —
            </li>
          </ul>

          <h3>Qualifica</h3>
          <ul>
            <li>
              <strong>Ruolo:</strong> Legale rappresentante
            </li>
          </ul>

          <h3>Inquadramento</h3>
          <ul>
            <li>
              <strong>Registro:</strong> Registro delle Imprese – sezione
              speciale Startup Innovative
            </li>
            <li>
              <strong>Normativa di riferimento:</strong>
              <ul>
                <li>Art. 25, commi 2, 2-bis, 2-ter L. 221/2012</li>
                <li>DL 179/2012 (conv. L. 221/2012)</li>
              </ul>
            </li>
          </ul>

          <h3>Stato startup innovativa</h3>
          <ul>
            <li>
              La società{" "}
              <strong>
                dichiara il possesso dei requisiti di startup innovativa
              </strong>
            </li>
            <li>
              Iscrizione / permanenza nella sezione speciale del Registro
              Imprese
            </li>
            <li>
              Possibile transizione a fase <strong>“scale-up”</strong> dopo i
              cinque anni complessivi
            </li>
          </ul>

          <h3>Documento ufficiale</h3>
          <ul>
            <li>
              <strong>Titolo:</strong> Dichiarazione di possesso o conferma del
              possesso dei requisiti di impresa startup innovativa
            </li>
            <li>
              <strong>Fonte:</strong> registroimprese.it
            </li>
            <li>
              <strong>Pagina:</strong> 1 di 6
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
