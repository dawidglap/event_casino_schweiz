import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ButtonPackageCard = ({ packageKey }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact", {
      state: {
        packageKey, // Passa la chiave del pacchetto
      },
    });
  };

  return (
    <button
      onClick={handleButtonClick}
      className="my-10 relative w-full px-4 mt-6 py-4 font-poppins font-medium text-[18px] text-white bg-black-gradient rounded-[10px] overflow-hidden group hover:text-zinc-200 transition-all duration-300"
    >
      <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative z-10">{t("button.reserve")}</span>
      <span className="absolute inset-0 rounded-[10px] border-b-2 border-r-2 border-yellow-400 group-hover:border-yellow-500 transition-all duration-300"></span>
    </button>
  );
};

export default ButtonPackageCard;
