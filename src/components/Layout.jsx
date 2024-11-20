// Layout.jsx
import { Navbar, Footer } from "../components";
import styles from "../style";
import CookiePolicy from "./CookiePolicy";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavbarBanner from "./NavbarBanner";

const Layout = ({ children }) => (
  <div className="bg-primary w-full overflow-hidden">
    {/* Navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavbarBanner />
        <Navbar />
      </div>
    </div>

    {/* Main Content */}
    <div className="min-h-screen">{children}</div>

    {/* Footer */}
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
        <CookiePolicy />
        <Analytics />
        <SpeedInsights />
      </div>
    </div>
  </div>
);

export default Layout;
