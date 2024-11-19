import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { close, ecsLogo, menu } from "../assets";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [active, setActive] = useState("navLinks.home");
  const [toggle, setToggle] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = useMemo(
    () => [
      { id: "home", title: "navLinks.home", path: "/" },
      { id: "events", title: "navLinks.events", path: "/events" },
      { id: "casino101", title: "navLinks.casino101", path: "/casino101" },
      { id: "training", title: "navLinks.training", path: "/training" },
      { id: "team", title: "navLinks.team", path: "/team" },
      { id: "contact", title: "navLinks.contact", path: "/contact" },
    ],
    []
  );

  useEffect(() => {
    const currentPath = location.pathname;
    const currentLink = navLinks.find((nav) => nav.path === currentPath);

    if (currentPath === "/") {
      setActive("navLinks.home");
    } else if (currentLink) {
      setActive(currentLink.title);
    }
  }, [location, navLinks]);

  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      x: "100%",
      transition: { type: "spring", stiffness: 70, damping: 20 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="w-full flex justify-between items-center navbar">
      <Link to="/">
        <img
          src={ecsLogo}
          alt="ecs-logo"
          className="w-16 xs:w-[96px] ss:w-[60px] sm:w-[72px] md:w-[200px] mb-4 mt-2 md:pt-3 pt-3"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-light cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={nav.path}>{t(nav.title)}</Link>
          </li>
        ))}

        {/* Language Switcher for Desktop */}
        <div className="flex space-x-4 ml-10">
          <button
            onClick={() => changeLanguage("en")}
            className={`${
              i18n.language === "en" ? "text-white" : "text-gradient"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("de")}
            className={`${
              i18n.language === "de" ? "text-white" : "text-gradient"
            }`}
          >
            DE
          </button>
          <button
            onClick={() => changeLanguage("it")}
            className={`${
              i18n.language === "it" ? "text-white" : "text-gradient"
            }`}
          >
            IT
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className={`${
              i18n.language === "fr" ? "text-white" : "text-gradient"
            }`}
          >
            FR
          </button>
        </div>
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden flex flex-1 justify-end items-center z-[10000]">
        {/* Language Switcher for Mobile */}
        <div className="text-sm flex space-x-2 mr-2">
          <button
            onClick={() => changeLanguage("en")}
            className={`${
              i18n.language === "en" ? "text-white" : "text-gradient"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("de")}
            className={`${
              i18n.language === "de" ? "text-white" : "text-gradient"
            }`}
          >
            DE
          </button>
          <button
            onClick={() => changeLanguage("it")}
            className={`${
              i18n.language === "it" ? "text-white" : "text-gradient"
            }`}
          >
            IT
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className={`${
              i18n.language === "fr" ? "text-white" : "text-gradient"
            }`}
          >
            FR
          </button>
        </div>

        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[24px] h-[24px] object-contain mr-2"
          onClick={() => setToggle(!toggle)}
        />

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
              className="fixed inset-0 bg-black-gradient z-[9999] flex flex-col justify-center items-center p-4"
            >
              {/* Close button aligned with burger button */}
              <button
                onClick={() => setToggle(false)}
                className="absolute top-8 right-6 mr-4"
              >
                <img src={close} alt="close" className="w-6 h-6" />
              </button>

              {/* Navigation Links */}
              <ul className="list-none flex flex-col justify-center items-center w-full p-6 space-y-4">
                {navLinks.map((nav) => (
                  <motion.li
                    key={nav.id}
                    variants={itemVariants}
                    className={`font-poppins uppercase cursor-pointer text-[24px] ${
                      active === nav.title ? "text-white" : "text-dimWhite"
                    }`}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(false);
                    }}
                  >
                    <Link to={nav.path}>{t(nav.title)}</Link>
                  </motion.li>
                ))}
              </ul>

              {/* Divider directly under last list item */}
              <hr className="border-t-2 border-gold w-full my-6" />

              {/* Social Media Links and Contact Info */}
              <div className="text-center space-y-4">
                <div className="flex justify-center space-x-4 text-yellow-500">
                  <a
                    href="https://www.instagram.com/eventcasinoschweiz/"
                    aria-label="Instagram"
                    className="transition-transform duration-200 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/event-casino-schweiz/"
                    aria-label="LinkedIn"
                    className="transition-transform duration-200 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="text-xl" />
                  </a>
                </div>
                <p className="text-dimWhite">
                  Email:{" "}
                  <a
                    href="mailto:info@eventcasinoschweiz.ch"
                    className="transition-colors duration-200 hover:text-yellow-500 hover:underline"
                  >
                    info@eventcasinoschweiz.ch
                  </a>
                </p>
                <a
                  href="https://calendly.com/eventcasinoschweiz-info/30min"
                  className="mt-4 inline-block bg-blue-gradient text-black font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-400 transition-transform duration-200"
                >
                  {t("footer.bookACall")}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
