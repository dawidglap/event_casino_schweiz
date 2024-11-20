import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { LampContainer } from "../components/ui/lamp";
import { FaSpinner } from "react-icons/fa";
import FAQ from "../components/Faq";
import ContactHelmet from "../components/helmet/ContactHelmet";

const Contact = () => {
  const { t } = useTranslation();
  const location = useLocation(); // Riceve i dati dal navigatore
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  // Precompila i dettagli in base alla chiave del pacchetto
  const packageKey = location.state?.packageKey;
  const packageDetails = packageKey
    ? `${t("form.predefinedMessage")} ${packageKey}`
    : "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: packageDetails, // Precompila con i dettagli del pacchetto
    date: new Date().toLocaleDateString(),
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          setStatus("success");
          setLoading(false);
          navigate("/message-success", { state: { fromForm: true } });
        },
        (error) => {
          setStatus("error");
          setLoading(false);
          navigate("/message-error", {
            state: { fromForm: true, errorMessage: error.text },
          });
        }
      );
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 pb-40">
      <ContactHelmet />
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5, y: 270 }}
          whileInView={{ opacity: 1, y: 220 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-poppins font-semibold bg-gradient-to-r from-zinc-400 via-white to-zinc-500 py-4 bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl"
        >
          {t("form.heading")}
        </motion.h2>
      </LampContainer>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[700px] border-b-2 border-r-2 border-yellow-400 mx-auto mt-1 p-8 bg-zinc-900 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <label className="text-white mb-2">{t("form.nameLabel")}</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 mb-4 rounded-lg bg-gray-700 text-white"
          placeholder={t("form.namePlaceholder")}
          required
        />

        <label className="text-white mb-2">{t("form.emailLabel")}</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 mb-4 rounded-lg bg-gray-700 text-white"
          placeholder={t("form.emailPlaceholder")}
          required
        />

        <label className="text-white mb-2">{t("form.messageLabel")}</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 mb-4 rounded-lg bg-gray-700 text-white"
          placeholder={t("form.messagePlaceholder")}
          required
        />

        <button
          type="submit"
          className="p-3 bg-blue-gradient text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
          disabled={loading}
        >
          {loading ? (
            <FaSpinner className="animate-spin mx-auto" />
          ) : (
            t("form.submitButton")
          )}
        </button>
      </motion.form>
      <div className="pb-10"></div>
      <FAQ />
    </div>
  );
};

export default Contact;
