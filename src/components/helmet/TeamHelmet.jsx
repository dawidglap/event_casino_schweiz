import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const TeamHelmet = () => {
  const { t } = useTranslation();

  return (
    <Helmet>
      {/* Titolo */}
      <title>{t("meta.team.title", "Unser Team | Event Casino Schweiz")}</title>

      {/* Meta Descrizione */}
      <meta
        name="description"
        content={t(
          "meta.team.description",
          "Lernen Sie das professionelle Team von Event Casino Schweiz kennen. Mit jahrzehntelanger Erfahrung bieten unsere Croupiers und Experten erstklassige Casinounterhaltung und maßgeschneiderte Events in der Schweiz."
        )}
      />

      {/* Meta Parole Chiave */}
      <meta
        name="keywords"
        content={t(
          "meta.team.keywords",
          "event casino team, professionelle croupiers, beste croupiers schweiz, casino experten, maßgeschneiderte casino-events"
        )}
      />

      {/* Open Graph (per social media) */}
      <meta
        property="og:title"
        content={t("meta.team.title", "Unser Team | Event Casino Schweiz")}
      />
      <meta
        property="og:description"
        content={t(
          "meta.team.description",
          "Lernen Sie das professionelle Team von Event Casino Schweiz kennen. Mit jahrzehntelanger Erfahrung bieten unsere Croupiers und Experten erstklassige Casinounterhaltung und maßgeschneiderte Events in der Schweiz."
        )}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://eventcasinoschweiz.ch/team" />
      <meta property="og:image" content="/og-image.png" />

      {/* Favicon */}
      <link rel="icon" href="/logo.ico" />
    </Helmet>
  );
};

export default TeamHelmet;
