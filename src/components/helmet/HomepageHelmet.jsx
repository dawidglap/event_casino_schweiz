import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const HomepageHelmet = () => {
  const { t } = useTranslation();

  return (
    <Helmet>
      {/* Titolo */}
      <title>{t("meta.homepage.title")}</title>

      {/* Meta Descrizione */}
      <meta name="description" content={t("meta.homepage.description")} />

      {/* Meta Parole Chiave */}
      <meta name="keywords" content={t("meta.homepage.keywords")} />

      {/* Open Graph (per social media) */}
      <meta property="og:title" content={t("meta.homepage.title")} />
      <meta
        property="og:description"
        content={t("meta.homepage.description")}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://eventcasinoschweiz.ch" />
      <meta property="og:image" content="/og-image.png" />

      {/* Favicon */}
      <link rel="icon" href="/logo.ico" />
    </Helmet>
  );
};

export default HomepageHelmet;
