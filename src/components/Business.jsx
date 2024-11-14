import styles, { layout } from "../style";
import Button from "./Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { star, shield, send } from "../assets"; // Import icons directly

const features = [
  {
    id: "feature-1",
    icon: star,
    title: "features.feature1.title",
    content: "features.feature1.content",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "features.feature2.title",
    content: "features.feature2.content",
  },
  {
    id: "feature-3",
    icon: send,
    title: "features.feature3.title",
    content: "features.feature3.content",
  },
];

const FeatureCard = ({ icon, title, content, index }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 50 },
        show: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className={`ms-0 mx-4 flex flex-col p-6 rounded-[20px] min-w-[300px] md:min-w-[500px] max-w-[800px] flex-1  border-yellow-400 border-r border-b ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`} // Set consistent width
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img
          src={icon}
          alt="feature-icon"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col ml-3 ">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {t(title)}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {t(content)}
        </p>
      </div>
    </motion.div>
  );
};

const Business = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useTranslation();

  const sectionVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  return (
    <section id="features" className={layout.section} ref={ref}>
      <div className="flex flex-col md:flex-row-reverse md:space-x-0 space-y-10 md:space-y-0">
        {/* Right section on mobile, left section on desktop */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          // className={`${layout.sectionInfo} ps-0 md:ps-10`}
          className="ps-10 text-center sm:text-left  mt-auto mb-auto"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className={`${styles.heading2}`}
          >
            {t("business.heading")} <br className="sm:block hidden" />
            <span>{t("business.subheading")}</span>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className={`${styles.paragraph} max-w-[470px] mt-5 text-dimWhite  `}
          >
            {t("business.description")}
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="ss:flex hidden md:mr-4 mr-0 "
          >
            <Button styles={`mt-10`} />
          </motion.div>
        </motion.div>

        {/* Left section on mobile, right section on desktop */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className={`${layout.sectionImg} flex-col`}
        >
          <div className="flex flex-wrap justify-between">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                content={feature.content}
                index={index}
              />
            ))}
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className={`ss:hidden ${styles.flexCenter}`}
          >
            <Button styles={`mt-10`} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Business;
