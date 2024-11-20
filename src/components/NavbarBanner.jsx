import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import DownloadPopup from "./DownloadPopup"; // Importa il componente del popup
import { IoCloudDownloadOutline } from "react-icons/io5";

const NavbarBanner = () => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false); // Stato per gestire il popup

  return (
    <>
      <div className=" bg-black border-b-[1px] border-yellow-500  flex-col md:flex-row items-center justify-center py-2 z-50 navbar">
        <p className="text-center font-poppins text-sm sm:text-base text-gradient">
          {t("navbarBanner.message")}{" "}
        </p>
        <button
          onClick={() => setShowPopup(true)} // Mostra il popup al click
          className="ms-1 text-center text-white hover:text-yellow-400 transition-colors duration-200"
        >
          {t("navbarBanner.downloadCTA")}
          <IoCloudDownloadOutline className="ms-1 mt-1" />
        </button>
      </div>
      {showPopup && <DownloadPopup onClose={() => setShowPopup(false)} />}{" "}
      {/* Popup */}
    </>
  );
};

export default NavbarBanner;
