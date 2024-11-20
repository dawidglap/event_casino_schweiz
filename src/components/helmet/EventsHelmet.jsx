import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const EventsHelmet = () => {
  const { t } = useTranslation();
  return (
    <Helmet>
      {/* Titolo */}
      <title>
        {t(
          "meta.events.title",
          "Unvergessliche Casino-Events | Event Casino Schweiz"
        )}
      </title>

      {/* Meta Descrizione */}
      <meta
        name="description"
        content={t(
          "meta.events.description",
          "Entdecken Sie unsere unvergesslichen Casino-Events in der Schweiz. Ob glamouröse Pokerturniere, James Bond Black Tie-Abende oder eine royale Casinonacht – beeindrucken Sie Ihre Gäste mit Luxus und Eleganz."
        )}
      />

      {/* Meta Parole Chiave */}
      <meta
        name="keywords"
        content={t(
          "meta.events.keywords",
          "casino events, poker turniere, royal casino night, glamorous events, james bond casino, monte carlo gala, casino für veranstaltungen in der schweiz"
        )}
      />

      {/* Open Graph (per social media) */}
      <meta
        property="og:title"
        content={t(
          "meta.events.title",
          "Unvergessliche Casino-Events | Event Casino Schweiz"
        )}
      />
      <meta
        property="og:description"
        content={t(
          "meta.events.description",
          "Entdecken Sie unsere unvergesslichen Casino-Events in der Schweiz. Ob glamouröse Pokerturniere, James Bond Black Tie-Abende oder eine royale Casinonacht – beeindrucken Sie Ihre Gäste mit Luxus und Eleganz."
        )}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://eventcasinoschweiz.ch/events" />
      <meta property="og:image" content="/og-image.png" />

      {/* Favicon */}
      <link rel="icon" href="/logo.ico" />
    </Helmet>
  );
};

export default EventsHelmet;
