import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { close, ecsLogo, menu } from "../assets";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation(); // Get the current location from React Router
  const [active, setActive] = useState("navLinks.home"); // Default active to home
  const [toggle, setToggle] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Wrap the navLinks array inside useMemo to prevent it from being recreated on every render
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

  // Update the active link based on the current location.
  useEffect(() => {
    const currentPath = location.pathname;
    const currentLink = navLinks.find((nav) => nav.path === currentPath);

    if (currentPath === "/") {
      setActive("navLinks.home");
    } else if (currentLink) {
      setActive(currentLink.title);
    }
  }, [location, navLinks]);

  return (
    <nav className="w-full flex justify-between items-center navbar">
      <Link to="/">
        <img
          src={ecsLogo}
          alt="ecs-logo"
          className="w-24 xs:w-[40px] ss:w-[60px] sm:w-[72px] md:w-[140px] mb-4 mt-2 md:pt-3 pt-3"
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
            onClick={() => setActive(nav.title)} // Keep this for manual setting in case of custom navigation
          >
            <Link to={nav.path}>{t(nav.title)}</Link>
          </li>
        ))}

        {/* Language Switcher for Desktop */}
        <div className="flex space-x-4 ml-10">
          <button
            onClick={() => changeLanguage("en")}
            className={`${
              i18n.language === "en" ? "text-gradient" : "text-dimWhite"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("de")}
            className={`${
              i18n.language === "de" ? "text-gradient" : "text-dimWhite"
            }`}
          >
            DE
          </button>
          <button
            onClick={() => changeLanguage("it")}
            className={`${
              i18n.language === "it" ? "text-gradient" : "text-dimWhite"
            }`}
          >
            IT
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className={`${
              i18n.language === "fr" ? "text-gradient" : "text-dimWhite"
            }`}
          >
            FR
          </button>
        </div>
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden flex flex-1 justify-end items-center z-[10000]">
        {/* Language Switcher for Mobile */}
        <div className="flex space-x-4 mr-4">
          <button
            onClick={() => changeLanguage("en")}
            className={`${
              i18n.language === "en" ? "text-gradient" : "text-dimWhite"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("de")}
            className={`${
              i18n.language === "de" ? "text-gradient" : "text-dimWhite"
            }`}
          >
            DE
          </button>
          <button
            onClick={() => changeLanguage("it")}
            className={`${
              i18n.language === "it" ? "text-gradient" : "text-dimWhite"
            }`}
          >
            IT
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className={`${
              i18n.language === "fr" ? "text-gradient" : "text-dimWhite"
            }`}
          >
            FR
          </button>
        </div>

        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 mx-4 my-2 min-w-80 rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins uppercase cursor-pointer text-[24px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false); // Close the menu after clicking a link
                }}
              >
                <Link to={nav.path}>{t(nav.title)}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
