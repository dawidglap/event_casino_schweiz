import { LampContainer } from "../components/ui/lamp";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { FeaturesSectionDemo } from "../components/ui/features-section-demo";
import styles from "../style";
import Button from "../components/Button";
import croupier from "../assets/croupierschool.png";
import { FeaturesSectionDemo2 } from "../components/ui/why-ausbildung";
import { IoMdCheckmark } from "react-icons/io";
import CtaCroupier from "../components/CtaCroupier";

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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Training = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const initialY = isMobile ? 270 : 270;
  // const whileInViewY = isMobile ? 100 : 160;

  return (
    <div>
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5, y: 270 }}
          whileInView={{ opacity: 1, y: 220 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" font-poppins font-semibold bg-gradient-to-r from-gray-500 via-white to-gray-500 py-4 bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl"
        >
          {t("training.heading")}
        </motion.h2>
      </LampContainer>

      {/* Contenuto Hero aggiornato */}
      <section className="flex md:flex-row flex-col py-10 md:py-20 max-w-[1440px] mx-auto items-center">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="show"
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <motion.h3
            variants={textVariants}
            className="font-poppins font-bold text-white text-3xl md:text-5xl leading-tight mb-6"
          >
            {t("training.mainTitle")}
          </motion.h3>

          <motion.p
            variants={textVariants}
            className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8 max-w-[600px]"
          >
            {t("training.introText")}
          </motion.p>

          <motion.div variants={textVariants}>
            <Button />
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <div className="relative w-full h-full max-w-lg mx-auto rounded-2xl">
            <img
              src={croupier}
              alt="Croupier School"
              className="w-full h-full object-cover relative z-10 rounded-2xl"
            />
            {/* Sovrapposizione Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80 z-20 rounded-2xl" />
          </div>
        </motion.div>
      </section>

      {/* Carte esistenti */}
      <div className="max-w-[1440px] mx-auto">
        <FeaturesSectionDemo />
      </div>

      {/* Integrazione del nuovo contenuto */}
      <div className="max-w-[1440px] mx-auto px-6">
        <section className="py-10">
          {/* Contenitore Flex Responsivo */}
          <div className="flex flex-col lg:flex-row">
            {/* Prima Colonna */}
            <div className="flex-3 lg:mr-6">
              {/* Warum sollten Sie unseren Kurs wählen? */}
              <motion.h3
                variants={textVariants}
                className="font-poppins font-bold text-white text-3xl md:text-4xl leading-tight mb-6 text-center lg:text-left mt-12"
              >
                {t("training.whyChooseUsTitle")}
              </motion.h3>

              <div>
                <FeaturesSectionDemo2 />
              </div>
            </div>

            {/* Seconda Colonna */}
            <div className="flex-2 lg:ml-6">
              {/* Teilnahmevoraussetzungen */}
              <motion.h4
                variants={textVariants}
                className="font-poppins font-semibold text-neutral-400 text-2xl md:text-4xl leading-tight mb-6 text-left lg:text-left mt-12"
              >
                {t("training.requirementsTitle")}
              </motion.h4>

              <motion.p
                variants={textVariants}
                className="text-white text-base font-semibold md:text-lg leading-relaxed mb-8 text-left lg:text-left"
              >
                {t("training.requirementsIntro")}
              </motion.p>

              <ul className="list-inside text-neutral-400 space-y-2 mb-8 lg:pl-5">
                <li>
                  <div className="flex">
                    <IoMdCheckmark className="me-2 mt-1 text-green-500" />
                    {t("training.requirementsList.item1")}
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <IoMdCheckmark className="me-2 mt-1 text-green-500" />
                    {t("training.requirementsList.item2")}
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <IoMdCheckmark className="me-2 mt-1 text-green-500" />
                    {t("training.requirementsList.item3")}
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <IoMdCheckmark className="me-2 mt-1 text-green-500" />
                    {t("training.requirementsList.item4")}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          {/* <motion.h3
            variants={textVariants}
            className="font-poppins font-bold text-white text-3xl md:text-4xl leading-tight mb-6 text-center mt-12"
          >
            {t("training.callToActionTitle")}
          </motion.h3>

          <motion.p
            variants={textVariants}
            className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8 max-w-[800px] mx-auto text-center"
          >
            {t("training.callToActionText")}
          </motion.p>

          <motion.div variants={textVariants} className="flex justify-center">
            <Button />
          </motion.div> */}
        </section>
        <CtaCroupier />
      </div>
    </div>
  );
};

export default Training;
