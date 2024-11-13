import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { Link } from "react-router-dom";

const QuickContact = ({ styles }) => {
  const { t } = useTranslation(); // Use useTranslation hook

  return (
    <Link to="/contact">
      <div className="">
        <button
          type="button"
          className={`w-full sm:w-1/2 my-6 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
        >
          {t("quickContact.buttonText")} {/* Translate the button text */}
        </button>
      </div>
    </Link>
  );
};

export default QuickContact;
