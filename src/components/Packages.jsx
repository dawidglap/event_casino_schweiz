import { useState, useRef } from "react";
import { vid } from "../assets";
import styles, { layout } from "../style";
import PackageCard from "./PackageCard";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import useWindowSize from "../hooks/useWindowSize"; // Custom hook to detect screen size

const Packages = () => {
  const [isHovering, setIsHovering] = useState(false);
  const { t } = useTranslation(); // Use useTranslation for translation

  const { width } = useWindowSize(); // Get window width
  const isMobile = width < 768; // Define mobile based on screen width (e.g., <768px)

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  // Feedback data moved here and translated using t() for each key
  const feedback = [
    {
      id: "feedback-1",
      name: t("feedback.feedback1.name"),
      title: t("feedback.feedback1.title"),
      content: t("feedback.feedback1.content"),
      content2: t("feedback.feedback1.content2"),
      content3: t("feedback.feedback1.content3"),
      content4: t("feedback.feedback1.content4"),
      content5: t("feedback.feedback1.content5"),
      price: t("feedback.feedback1.price"),
      additional: t("feedback.feedback1.additional"),
      bestDeal: t("feedback.feedback1.bestDeal"),
    },
    {
      id: "feedback-2",
      name: t("feedback.feedback2.name"),
      title: t("feedback.feedback2.title"),
      content: t("feedback.feedback2.content"),
      content2: t("feedback.feedback2.content2"),
      content3: t("feedback.feedback2.content3"),
      content4: t("feedback.feedback2.content4"),
      content5: t("feedback.feedback2.content5"),
      content6: t("feedback.feedback2.content6"),
      price: t("feedback.feedback2.price"),
      additional: t("feedback.feedback2.additional"),
      bestDeal: t("feedback.feedback2.bestDeal"),
    },
    // {
    //   id: "feedback-3",
    //   name: t("feedback.feedback3.name"),
    //   title: t("feedback.feedback3.title"),
    //   content: t("feedback.feedback3.content"),
    //   content2: t("feedback.feedback3.content2"),
    //   content3: t("feedback.feedback3.content3"),
    //   content4: t("feedback.feedback3.content4"),
    //   content5: t("feedback.feedback3.content5"),
    //   content6: t("feedback.feedback3.content6"),
    //   content7: t("feedback.feedback3.content7"),
    //   price: t("feedback.feedback3.price"),
    //   additional: t("feedback.feedback3.additional"),
    //   bestDeal: t("feedback.feedback3.bestDeal"),
    // },
    {
      id: "feedback-4",
      name: t("feedback.feedback4.name"),
      title: t("feedback.feedback4.title"),
      content: t("feedback.feedback4.content"),
      content2: t("feedback.feedback4.content2"),
      content3: t("feedback.feedback4.content3"),
      content4: t("feedback.feedback4.content4"),
      content5: t("feedback.feedback4.content5"),
      price: t("feedback.feedback4.price"),
      additional: t("feedback.feedback4.additional"),
    },
  ];

  return (
    <>
      <motion.section
        id="product"
        className={`${layout.section} flex-col lg:flex-row`} // Replaced sectionReverse with a more neutral layout
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.div
          variants={videoVariants}
          className={`flex-1 flex justify-center items-center relative md:pr-4 pr-0 md:mb-0 mb-10`} // Adjusted the layout of the video
        >
          <video
            src={vid}
            className={`w-full h-auto max-w-[600px] relative z-[5] rounded-lg shadow-lg`} // Adjusted video sizing to avoid it being too left-aligned
            autoPlay
            loop
            muted
          />
          <div className="absolute z-[3] w-[50%] h-[50%] left-1/2 transform -translate-x-1/2 top-0 rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] left-1/2 transform -translate-x-1/2 bottom-0 rounded-full pink__gradient" />
        </motion.div>
        <motion.div
          variants={textVariants}
          className={`${layout.sectionInfo} flex-1`} // Aligning the text properly in relation to the video
        >
          <h2 className={styles.heading2}>
            <span className="text-gradient">{t("packages.heading")}</span>{" "}
            {t("packages.subheading")}
            <br className="sm:block hidden" />
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
            {t("packages.description")}
            <br />
            <small className="text-dimWhite">
              {t("packages.importantNote")}
            </small>
          </p>
        </motion.div>
      </motion.section>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {feedback.map((card, index) => (
          <PackageCard
            key={card.id}
            index={index}
            {...card}
            // Apply hover effect by default if on mobile or index === 1 on desktop
            applyHoverEffect={isMobile || (!isHovering && index === 1)}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Packages;
