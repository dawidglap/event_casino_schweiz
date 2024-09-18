// pages/Home.jsx
import styles from "../style";
import { Hero, Business, Packages, NotEnough, Brand, CTA } from "../components";

const Home = () => (
  <div className={`bg-primary w-full overflow-hidden`}>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Packages />
        <NotEnough />
        <Brand />
        <CTA />
      </div>
    </div>
  </div>
);

export default Home;
