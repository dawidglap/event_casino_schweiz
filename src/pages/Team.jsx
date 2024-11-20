import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import teamImage1 from "../assets/teamImage1.png";
import teamImage2 from "../assets/teamImage2.png";
import teamImage3 from "../assets/teamImage3.png";
import placeholder from "../assets/placeholder.png"; // Import placeholder image

import { LampContainer } from "../components/ui/lamp";
import CtaTeam from "../components/CtaTeam";
import TeamHelmet from "../components/helmet/TeamHelmet";

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
  // Use placeholder image for other members
  {
    id: "member-4",
    name: "team.member4.name",
    role: "team.member4.role",
    description: "team.member4.description",
    image: placeholder, // Placeholder image
  },
  {
    id: "member-5",
    name: "team.member5.name",
    role: "team.member5.role",
    description: "team.member5.description",
    image: placeholder, // Placeholder image
  },
  {
    id: "member-6",
    name: "team.member6.name",
    role: "team.member6.role",
    description: "team.member6.description",
    image: placeholder, // Placeholder image
  },
  {
    id: "member-7",
    name: "team.member7.name",
    role: "team.member7.role",
    description: "team.member7.description",
    image: placeholder, // Placeholder image
  },
  {
    id: "member-8",
    name: "team.member8.name",
    role: "team.member8.role",
    description: "team.member8.description",
    image: placeholder, // Placeholder image
  },
  // Continue adding other members as needed
];

// Reusable card component for team members
const TeamCard = ({ image, name, role, description, isAboutCard = false }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className={`feature-card team-card rounded-[20px] z-[51] flex flex-col items-center ${
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
            ? "w-full h-[250px] object-cover rounded-t-[20px] border border-red-500"
            : "w-[250px] h-[250px] rounded-full border-r-2 border-b-2 border-yellow-400"
        } mb-4 ${image === placeholder ? "blur-[20px]" : ""}`} // Apply blur if it's the placeholder
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

  return (
    <div className="relative max-w-[1440px] mx-auto px-4">
      <TeamHelmet />
      <div className="blur-[0px]">
        <LampContainer>
          <motion.h2
            initial={{ opacity: 0.5, y: 270 }}
            whileInView={{ opacity: 1, y: 160 }}
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
