import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import teamImage1 from "../assets/teamImage1.png";
import teamImage2 from "../assets/teamImage2.png";
import teamImage3 from "../assets/teamImage3.png";
import teamImage4 from "../assets/teamImage4.png";
import teamImage5 from "../assets/teamImage5.png";
import teamImage6 from "../assets/teamImage6.png";
import teamImage7 from "../assets/teamImage7.png";

import { LampContainer } from "../components/ui/lamp";
import CtaTeam from "../components/CtaTeam";

// Example data for team members
const teamMembers = [
  {
    id: "member-1",
    name: "team.member1.name",
    role: "team.member1.role",
    description: "team.member1.description",
    image: teamImage1,
  },
  {
    id: "member-2",
    name: "team.member2.name",
    role: "team.member2.role",
    description: "team.member2.description",
    image: teamImage2,
  },
  {
    id: "member-3",
    name: "team.member3.name",
    role: "team.member3.role",
    description: "team.member3.description",
    image: teamImage3,
  },
  {
    id: "member-4",
    name: "team.member4.name",
    role: "team.member4.role",
    description: "team.member4.description",
    image: teamImage4,
  },
];

// Reusable card component for team members
// Reusable card component for team members
const TeamCard = ({ image, name, role, description, isAboutCard = false }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className={`feature-card team-card  rounded-[20px] z-[51] flex flex-col items-center ${
        isAboutCard ? "p-0" : "p-6"
      }`}
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
    >
      <img
        src={image}
        alt="team-member"
        className={`${
          isAboutCard
            ? "w-full h-[250px] object-cover rounded-t-[20px]"
            : "w-[250px] h-[250px] rounded-full"
        } mb-4`}
      />
      <div className={`${isAboutCard ? "p-4" : ""} text-center`}>
        <h4 className="font-poppins font-semibold text-white text-[20px] leading-[26px] mb-2">
          {t(name)}
        </h4>
        <p className="font-poppins font-normal text-gradient text-[18px] leading-[24px] mb-6">
          {t(role)}
        </p>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {t(description)}
        </p>
      </div>
    </motion.div>
  );
};

// Team section component
const Team = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and update isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind 'md' breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Set initial and whileInView values based on screen size
  const initialY = isMobile ? 270 : 270;
  const whileInViewY = isMobile ? 100 : 160;

  return (
    <div className="relative max-w-[1440px] mx-auto px-4">
      {/* <div className="absolute inset-0 flex items-start justify-center z-50 bg-black bg-opacity-70">
        <h1 className="text-white text-4xl md:text-6xl font-bold z-[100] mt-80 p-4 text-gradient">
          Coming Soon...
        </h1>
      </div> */}
      {/* Blurred content */}
      <div className="blur-[0px]">
        <LampContainer>
          <motion.h2
            initial={{ opacity: 0.5, y: initialY }}
            whileInView={{ opacity: 1, y: whileInViewY }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="font-poppins font-semibold bg-gradient-to-r from-gray-500 via-white to-gray-500 py-4 bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl"
          >
            {t("team.heading")}
          </motion.h2>
        </LampContainer>

        {/* About Section */}
        {/* <motion.div
          className="mt-10 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="border-b-2 border-r-2 border-yellow-400 shadow-lg rounded-[20px] boss-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <TeamCard
              image={teamImage5}
              name="team.member5.name"
              role="team.member5.role"
              isAboutCard={true} // Pass this prop to apply full-width styling
            />
          </motion.div>

          <motion.div
            className="flex items-center justify-center lg:justify-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="p-4 font-poppins font-normal text-dimWhite text-lg leading-relaxed max-w-[600px] lg:text-left text-center">
              {t("team.member5.description")}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 "
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="flex items-center justify-center lg:justify-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="hidden lg:block font-poppins font-normal text-dimWhite text-lg leading-relaxed max-w-[600px] lg:text-left text-center">
              {t("team.member6.description")}
            </p>
          </motion.div>
          <motion.div
            className="border-b-2 border-r-2 border-yellow-400 shadow-lg rounded-[20px] boss-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <TeamCard
              image={teamImage6}
              name="team.member6.name"
              role="team.member6.role"
              isAboutCard={true} // Pass this prop to apply full-width styling
            />
          </motion.div>
          <motion.div
            className="flex items-center justify-center lg:justify-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-poppins font-normal text-dimWhite text-lg leading-relaxed max-w-[600px] lg:text-left text-center lg:hidden block">
              {t("team.member6.description")}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 mb-20 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="border-b-2 border-r-2 border-yellow-400 shadow-lg rounded-[20px] boss-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <TeamCard
              image={teamImage7}
              name="team.member7.name"
              role="team.member7.role"
              isAboutCard={true} // Pass this prop to apply full-width styling
            />
          </motion.div>

          <motion.div
            className="flex items-center justify-center lg:justify-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-poppins font-normal text-dimWhite text-lg leading-relaxed max-w-[600px] lg:text-left text-center">
              {t("team.member7.description")}
            </p>
          </motion.div>
        </motion.div> */}

        {/* Team Members Section */}
        <motion.div
          className="mt-[-60px] mb-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          initial="hidden"
          animate="show"
        >
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </motion.div>

        <CtaTeam />
      </div>
    </div>
  );
};

export default Team;
