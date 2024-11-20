import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const TrainingHelmet = () => {
  const { t } = useTranslation();

  return (
    <Helmet>
      {/* Titolo */}
      <title>
        {t(
          "meta.training.title",
          "Croupier-Ausbildung | Werde ein Meister der Casinospiele"
        )}
      </title>

      {/* Meta Descrizione */}
      <meta
        name="description"
        content={t(
          "meta.training.description",
          "Erfahre alles über unsere professionelle Croupier-Ausbildung in der Schweiz. Von der Spieltisch-Expertise bis zum Kundenservice – bereite dich mit unserem mehrsprachigen und berufsbegleitenden Kurs auf eine Karriere in den renommiertesten Casinos vor."
        )}
      />

      {/* Meta Parole Chiave */}
      <meta
        name="keywords"
        content={t(
          "meta.training.keywords",
          "Croupier-Ausbildung, game school, berufsbegleitende Schulung, Casinospiele lernen, Einstieg als Croupier, Führungszeugnis für Croupier, Ausbildung ab 18 Jahre"
        )}
      />

      {/* Open Graph (per social media) */}
      <meta
        property="og:title"
        content={t(
          "meta.training.title",
          "Croupier-Ausbildung | Werde ein Meister der Casinospiele"
        )}
      />
      <meta
        property="og:description"
        content={t(
          "meta.training.description",
          "Erfahre alles über unsere professionelle Croupier-Ausbildung in der Schweiz. Von der Spieltisch-Expertise bis zum Kundenservice – bereite dich mit unserem mehrsprachigen und berufsbegleitenden Kurs auf eine Karriere in den renommiertesten Casinos vor."
        )}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://eventcasinoschweiz.ch/training"
      />
      <meta property="og:image" content="/og-image.jpg" />

      {/* Favicon */}
      <link rel="icon" href="/logo.ico" />
    </Helmet>
  );
};

export default TrainingHelmet;
