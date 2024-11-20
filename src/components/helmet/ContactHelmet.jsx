import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const ContactHelmet = () => {
  const { t } = useTranslation();

  return (
    <Helmet>
      {/* Titolo */}
      <title>
        {t("meta.contact.title", "Kontaktieren Sie uns | Event Casino Schweiz")}
      </title>

      {/* Meta Descrizione */}
      <meta
        name="description"
        content={t(
          "meta.contact.description",
          "Kontaktieren Sie Event Casino Schweiz für Fragen, Buchungen oder individuelle Angebote. Wir sind Ihr Partner für erstklassige Casinounterhaltung in der Schweiz."
        )}
      />

      {/* Meta Parole Chiave */}
      <meta
        name="keywords"
        content={t(
          "meta.contact.keywords",
          "kontakt event casino schweiz, buchungsanfragen casino-events, casino-event angebote, kundenservice event casino"
        )}
      />

      {/* Open Graph (per social media) */}
      <meta
        property="og:title"
        content={t(
          "meta.contact.title",
          "Kontaktieren Sie uns | Event Casino Schweiz"
        )}
      />
      <meta
        property="og:description"
        content={t(
          "meta.contact.description",
          "Kontaktieren Sie Event Casino Schweiz für Fragen, Buchungen oder individuelle Angebote. Wir sind Ihr Partner für erstklassige Casinounterhaltung in der Schweiz."
        )}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://eventcasinoschweiz.ch/contact" />
      <meta property="og:image" content="/og-image.png" />

      {/* Favicon */}
      <link rel="icon" href="/logo.ico" />
    </Helmet>
  );
};

export default ContactHelmet;
