import styles from "../style";
import { discount, gaming } from "../assets";
import GetStarted from "./GetStarted";
import Button from "./Button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import useTranslation

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const Hero = () => {
  const { t } = useTranslation(); // Use useTranslation hook

  return (
    <section id="home" className={`flex md:flex-row flex-col py-1 md:py-1`}>
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="show"
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <motion.div
          variants={textVariants}
          className="flex flex-row mx-auto sm:mx-0 items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-4"
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 text-[14px] md:text-[18px]`}>
            <span className="text-white">{t("hero.discountAmount")}</span>{" "}
            {t("hero.discountText")}
            {t(" ")}
            <span className="text-white">{t("hero.discountDate")}</span>
          </p>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="flex flex-row justify-between items-center w-full"
        >
          {/* Desktop Title - Restored */}
          <h1 className="flex-1 font-poppins font-semibold sm:text-left text-center xs:text-[42px] text-[32px] ss:text-[68px] text-white ss:leading-[100.8px] leading-[54px]">
            {t("hero.mainTextPart1")} <br className="sm:block hidden" />{" "}
            <span className="text-gradient">{t("hero.mainTextPart2")}</span>{" "}
          </h1>
          {/* <div className="md:flex hidden md:mr-4 mr-0 ps-8">
            <GetStarted />
          </div> */}
        </motion.div>

        {/* Desktop Subtitle */}
        <motion.h1
          variants={textVariants}
          className="font-poppins font-semibold  sm:text-left text-center xs:text-[42px] text-[32px] ss:text-[68px] text-white ss:leading-[100.8px] leading-[54px] w-full"
        >
          {t("hero.mainTextPart3")} <br />
          {t("hero.mainTextPart4")}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={textVariants}
          className={`${styles.paragraph} text-center md:text-left  text-gradient max-w-[512px] mt-5`}
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          variants={textVariants}
          className={` w-full flex justify-center sm:justify-start  ${styles.flexCenter}`}
        >
          <Button />
        </motion.div>
      </motion.div>

      <motion.div
        variants={imageVariants}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-1 relative`}
      >
        <img
          src={gaming}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]" // Restored to the original desktop size
          id="hero-img"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[15%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[20%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[25%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>
    </section>
  );
};

export default Hero;
