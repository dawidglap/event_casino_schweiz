import { useRef, useState } from "react";
import styles from "../style";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import ButtonPackageCard from "./ButtonPackageCard";
import { IoCloudDownloadOutline } from "react-icons/io5";
import DownloadPopup from "./DownloadPopup"; // Importa il componente del popup

const PackageCard = ({
  name,
  title,
  content,
  content2,
  content2_5,
  content3,
  content4,
  content5,
  content6,
  price,
  additional,
  bestDeal,
  index,
  applyHoverEffect,
  onMouseEnter,
  onMouseLeave,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false); // Stato per gestire il popup

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={`flex flex-col justify-between px-6 border-yellow-400 border-b border-r py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 rounded-[20px] max-w-[100%] ${
        index === 1
          ? "custom-bg-card hover:feedback-card-hover"
          : "feedback-card"
      }`}
      onMouseEnter={index === 1 ? undefined : onMouseEnter}
      onMouseLeave={index === 1 ? undefined : onMouseLeave}
    >
      <div className="flex-grow">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white text-gradient">
          {t(name)}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
          {t(title)}
        </p>
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white mt-6 sm:mt-8 md:mt-10">
          {t(content)}
        </p>
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white">
          {t(content2)}
        </p>
        {content2_5 && (
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white">
            {t(content2_5)}
          </p>
        )}
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white">
          {t(content3)}
        </p>
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-dimWhite mt-4">
          {t(content4)}
        </p>
        {content5 && (
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white mt-4">
            {t(content5)}
          </p>
        )}
        {content6 && (
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-dimWhite mt-4">
            {t(content6)}
          </p>
        )}
        <div className="flex flex-row items-center py-[6px] rounded-[10px] mb-2">
          {bestDeal && (
            <p className={`${styles.paragraph} mt-6`}>
              <span className="text-black bg-blue-gradient pr-3 pl-3 rounded-xl">
                {t(bestDeal)}
              </span>
            </p>
          )}
        </div>
      </div>

      {/* Button aligned at the bottom */}
      <div className="mt-4">
        <ButtonPackageCard packageKey={name} />
        <p className="text-center font-poppins text-sm sm:text-base text-gradient">
          {t("navbarBanner.message")}{" "}
        </p>
        <div className="text-center">
          <button
            onClick={() => setShowPopup(true)} // Mostra il popup al click
            className="mt-2 underline text-white hover:text-yellow-400 transition-colors duration-200"
          >
            {t("navbarBanner.downloadCTA")}
          </button>
          {showPopup && <DownloadPopup onClose={() => setShowPopup(false)} />}{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
