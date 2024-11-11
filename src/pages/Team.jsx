import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import teamImage1 from "../assets/teamImage1.png";
import teamImage2 from "../assets/teamImage2.png";
import teamImage3 from "../assets/teamImage3.png";
import teamImage4 from "../assets/teamImage4.png";
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
const TeamCard = ({ image, name, role, description }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="feature-card team-card p-6 rounded-[20px] z-[51] flex flex-col items-center"
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
        className="w-[250px] h-[250px] md:w-[250px] md:h-[250px] rounded-full object-cover mb-4"
      />
      <h4 className="font-poppins font-semibold text-white text-[20px] leading-[26px] mb-2 text-center">
        {t(name)}
      </h4>
      <p className="font-poppins font-normal text-gradient text-[18px] leading-[24px] mb-6 text-center">
        {t(role)}
      </p>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] text-center">
        {t(description)}
      </p>
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
      {/* Overlay for "Coming Soon..." */}
      <div className="absolute inset-0 flex items-start justify-center z-50 bg-black bg-opacity-70">
        <h1 className="text-white text-4xl md:text-6xl font-bold z-[100] mt-80 p-4 text-gradient">
          Coming Soon...
        </h1>
      </div>

      {/* Blurred content */}
      <div className="blur-[6px]">
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
