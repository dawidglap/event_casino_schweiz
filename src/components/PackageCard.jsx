import { useRef } from "react";
import styles from "../style";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import useTranslation

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
  const { t } = useTranslation(); // Use useTranslation hook

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
      className={`flex justify-between flex-col px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 rounded-[20px] max-w-[100%] feedback-card ${
        applyHoverEffect ? "feedback-card-hover" : ""
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-row pt-6 sm:pt-8 md:pt-10">
        <div className="flex flex-col ml-4">
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
          <p className="font-poppins font-bold text-[18px] leading-[32.4px] text-white mt-4">
            {t(price)}
          </p>
          {additional && (
            <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white mt-4">
              {t(additional)}
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
      </div>
    </motion.div>
  );
};

export default PackageCard;
