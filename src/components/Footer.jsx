import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import fullLogo from "../assets/fullLogo.png"; // Replace with your logo asset

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black py-10 text-dimWhite">
      {/* Logo in the Middle */}
      <div className="mb-10 md:mb-28 flex justify-center">
        <Link to="/">
          <div className="flex cursor-pointer flex-row items-center">
            <div className="mb-2 mt-2 h-40 w-72 md:h[192px] md:w-[384px]">
              <img src={fullLogo} alt="Event Casino Schweiz" />
            </div>
            <strong className=" select-none text-4xl md:text-6xl text-white"></strong>
          </div>
        </Link>
      </div>

      <div className="mx-auto max-w-[1440px]">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-lg font-semibold text-white">
              {t("footer.navigation")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-yellow-500 hover:underline"
                >
                  {t("navLinks.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="transition-colors duration-200 hover:text-yellow-500 hover:underline"
                >
                  {t("navLinks.events")}
                </Link>
              </li>
              <li>
                <Link
                  to="/casino101"
                  className="transition-colors duration-200 hover:text-yellow-500 hover:underline"
                >
                  {t("navLinks.casino101")}
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="transition-colors duration-200 hover:text-yellow-500 hover:underline"
                >
                  {t("navLinks.training")}
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="transition-colors duration-200 hover:text-yellow-500 hover:underline"
                >
                  {t("navLinks.team")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors duration-200 hover:text-yellow-500 hover:underline"
                >
                  {t("navLinks.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-center">
            <h4 className="mb-4 text-lg font-semibold text-white">
              {t("footer.followUs")}
            </h4>
            <div className="flex justify-center space-x-4 md:justify-center">
              <a
                href="https://www.instagram.com/webfast.ch/"
                aria-label="Instagram"
                className="transition-transform duration-200 hover:scale-110"
              >
                <FaInstagram className="text-xl hover:text-yellow-500" />
              </a>
              <a
                href="https://x.com/DawidGlapi40180"
                aria-label="Twitter"
                className="transition-transform duration-200 hover:scale-110"
              >
                <FaTwitter className="text-xl hover:text-yellow-500" />
              </a>
              <a
                href="https://linkedin.com/dawid-glapiak"
                aria-label="LinkedIn"
                className="transition-transform duration-200 hover:scale-110"
              >
                <FaLinkedinIn className="text-xl hover:text-yellow-500" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-right">
            <h4 className="mb-4 text-lg font-semibold text-white">
              {t("footer.contactUs")}
            </h4>
            <p>
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
              className="mt-4 inline-block bg-blue-gradient text-black font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-400 transition-transform duration-200 "
            >
              {t("footer.bookACall")}
            </a>
          </div>
        </div>

        {/* Terms & Privacy Policy Links */}
        <div className="mt-8 text-center">
          <Link
            to="/terms-and-conditions"
            className="transition-colors duration-200 hover:text-yellow-500 hover:underline"
          >
            {t("footer.termsConditions")}
          </Link>{" "}
          |
          <Link
            to="/privacy-policy"
            className="ml-2 transition-colors duration-200 hover:text-yellow-500 hover:underline"
          >
            {t("footer.privacyPolicy")}
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs text-dimWhite">
            &copy; {new Date().getFullYear()} Event Casino Schweiz.{" "}
            {t("footer.allRightsReserved")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
