import { Link } from "react-router-dom"; //
import { useTranslation } from "react-i18next"; // Import useTranslation

const Button = ({ styles }) => {
  const { t } = useTranslation(); // Destructure the useTranslation hook

  return (
    <Link to="/contact">
      <button
        type="button"
        className={`my-10 relative min-w-[70vw] px-4 ss:min-w-[15vw] mt-6 py-4  font-poppins font-medium text-[18px]   text-white bg-black-gradient rounded-[10px] overflow-hidden group hover:text-zinc-200 transition-all duration-300`}
      >
        {/* Effetto Glow quando si passa sopra */}
        <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Contenuto del bottone */}
        <span className="relative z-10">{t("button.reserve")}</span>

        {/* Linea di bordi Glow */}
        <span className="absolute inset-0 rounded-[10px] border-b-2 border-r-2 border-yellow-400 group-hover:border-yellow-500  transition-all duration-300"></span>
      </button>
    </Link>
  );
};

export default Button;
