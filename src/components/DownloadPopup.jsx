import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

const DownloadPopup = ({ onClose }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const popupRef = useRef(null); // Reference for the popup content

  // Handle email form submission
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { email },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
        },
        () => {
          setStatus("error");
          setLoading(false);
        }
      );
  };

  // Handle PDF download
  const downloadPDF = () => {
    window.open("/info-event-casino-schweiz.pdf", "_blank");
  };

  // Handle outside click to close the popup
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  // Handle ESC key to close the popup
  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  // Add event listeners for click outside and ESC key
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        ref={popupRef} // Attach the ref to the popup content
        className="bg-zinc-900 p-6 rounded-lg shadow-lg max-w-md w-full text-white"
      >
        <h2 className="text-lg font-semibold mb-4">{t("popup.title")}</h2>
        <p className="text-sm mb-4">{t("popup.description")}</p>

        {/* Email Form */}
        <form onSubmit={handleEmailSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("popup.emailPlaceholder")}
            className="p-3 rounded-lg bg-gray-700 text-white"
            required
          />
          <button
            type="submit"
            className="p-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-black hover:text-yellow-500 transition duration-300"
            disabled={loading}
          >
            {loading ? (
              <FaSpinner className="animate-spin mx-auto" />
            ) : (
              t("popup.sendEmail")
            )}
          </button>
        </form>

        {/* Download Button */}
        <button
          onClick={downloadPDF}
          className="p-3 mt-4 w-full bg-black text-dimWhite font-semibold rounded-lg hover:bg-slate-800 hover:text-yellow-400 transition duration-300"
        >
          {t("popup.downloadPDF")}
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 text-sm text-yellow-500 hover:text-white transition"
        >
          {t("popup.close")}
        </button>

        {/* Success/Error Message */}
        {status === "success" && (
          <p className="text-green-500 text-sm mt-4">
            {t("popup.successMessage")}
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-sm mt-4">{t("popup.errorMessage")}</p>
        )}
      </div>
    </motion.div>
  );
};

export default DownloadPopup;
