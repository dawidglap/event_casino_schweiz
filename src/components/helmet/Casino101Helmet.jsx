import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Casino101Helmet = () => {
  const { t } = useTranslation();

  return (
    <Helmet>
      {/* Titolo */}
      <title>
        {t(
          "meta.casino101.title",
          "Casino101: Lerne die Kunst der Casinospiele"
        )}
      </title>

      {/* Meta Descrizione */}
      <meta
        name="description"
        content={t(
          "meta.casino101.description",
          "Entdecken Sie die Geheimnisse der Casinospiele! Unsere Einführungskurse für Blackjack, Roulette und Poker bieten Ihnen die perfekte Möglichkeit, die Regeln und Strategien der beliebtesten Spiele zu lernen und ein Profi zu werden."
        )}
      />

      {/* Meta Parole Chiave */}
      <meta
        name="keywords"
        content={t(
          "meta.casino101.keywords",
          "Casino101, Blackjack lernen, Roulette Strategien, Poker Grundlagen, Casinospiele lernen, Casino Einführungskurse"
        )}
      />

      {/* Open Graph (per social media) */}
      <meta
        property="og:title"
        content={t(
          "meta.casino101.title",
          "Casino101: Lerne die Kunst der Casinospiele"
        )}
      />
      <meta
        property="og:description"
        content={t(
          "meta.casino101.description",
          "Entdecken Sie die Geheimnisse der Casinospiele! Unsere Einführungskurse für Blackjack, Roulette und Poker bieten Ihnen die perfekte Möglichkeit, die Regeln und Strategien der beliebtesten Spiele zu lernen und ein Profi zu werden."
        )}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://eventcasinoschweiz.ch/casino101"
      />
      <meta property="og:image" content="/og-image.png" />

      {/* Favicon */}
      <link rel="icon" href="/logo.ico" />
    </Helmet>
  );
};

export default Casino101Helmet;
