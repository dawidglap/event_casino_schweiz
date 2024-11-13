import { video2 } from "../assets";
import styles, { layout } from "../style";
import QuickContact from "./QuickContact";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const NotEnough = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useTranslation(); // Use useTranslation hook

  const sectionVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-5`}
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <motion.div
        variants={sectionVariants}
        className="w-full flex flex-col md:flex-row justify-between items-center sm:mb-16 mb-6 relative z-[1]"
      >
        <motion.div variants={textVariants} className="md:w-1/2 w-full">
          <h2 className={styles.heading2}>
            {t("notEnough.heading")} <br className="sm:block hidden" />
          </h2>

          <div className="w-full md:mt-6 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[768px]`}>
              <span className="text-gradient">{t("notEnough.highlight")}</span>{" "}
              <br />
              {t("notEnough.description")}
            </p>
            <QuickContact />
          </div>
        </motion.div>

        <motion.div
          variants={videoVariants}
          className="md:w-1/2 w-full mt-6 md:mt-0 flex justify-center"
        >
          <video
            src={video2}
            className={`video-container w-full h-auto md:w-[80%] lg:w-[60%] relative z-[5] rounded-lg shadow-lg`}
            autoPlay
            loop
            muted
          />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default NotEnough;
