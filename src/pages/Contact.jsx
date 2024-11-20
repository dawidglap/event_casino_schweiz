import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom"; // For redirection
import { LampContainer } from "../components/ui/lamp";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon
import FAQ from "../components/Faq";
import ContactHelmet from "../components/helmet/ContactHelmet";

const Contact = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: new Date().toLocaleDateString(), // Automatically set the date
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for button

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when form is submitted

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Use import.meta.env for Vite
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          setStatus("success");
          setLoading(false); // Stop loading when the submission is successful
          navigate("/message-success", { state: { fromForm: true } }); // Redirect to success page with state
        },
        (error) => {
          setStatus("error");
          setLoading(false); // Stop loading when there is an error
          navigate("/message-error", {
            state: { fromForm: true, errorMessage: error.text },
          }); // Redirect to error page with error message
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
        className=" flex flex-col max-w-[700px] border-b-2 border-r-2 border-yellow-400  mx-auto mt-1 p-8 bg-zinc-900 rounded-lg shadow-lg"
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
          disabled={loading} // Disable button when loading
        >
          {loading ? (
            <FaSpinner className="animate-spin mx-auto" /> // Show spinner when loading
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
