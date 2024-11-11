import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for navigation
import { ecsLogo, fullLogo } from "../assets"; // Import both logos

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section
      className={`flex flex-col items-center justify-center mt-40  px-6 md:px-10`}
    >
      {/* Animated Title */}
      <motion.h1
        className="text-white text-center mb-4 text-[60px] md:text-[100px] font-bold leading-[70px] md:leading-[120px]"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {t("notFound.title")} {/* Translation key for the title */}
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.h2
        className="text-dimWhite text-center mb-8 text-[20px] md:text-[28px] leading-[30px] md:leading-[40px]"
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {t("notFound.subtitle")} {/* Translation key for the subtitle */}
      </motion.h2>

      {/* Responsive Logo: fullLogo for tablet/desktop, ecsLogo for mobile */}
      <motion.div
        className="w-full max-w-[300px] sm:max-w-[600px] mb-8"
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
        initial="hidden"
        animate="show"
      >
        <Link to="/" className="block text-center">
          {/* Show fullLogo on larger screens, ecsLogo on mobile */}
          {/* <picture>
            <source media="(min-width: 340px)" srcSet={fullLogo} />
            <img
              src={ecsLogo}
              alt="ecs-logo"
              className="object-cover w-20 h-auto"
            />
          </picture> */}
        </Link>
      </motion.div>

      {/* Back to Home Button with 90vw width on mobile */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
        initial="hidden"
        animate="show"
        className="w-full sm:w-auto flex justify-center" // Full width on mobile, auto width on larger screens
      >
        <Link
          to="/"
          className="px-8 py-4 bg-blue-gradient text-primary font-poppins rounded-[10px] text-[18px] transition-transform hover:scale-105 w-[90vw] sm:w-auto text-center"
        >
          {t("notFound.backHome")} {/* Translation key for "Back to Home" */}
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
