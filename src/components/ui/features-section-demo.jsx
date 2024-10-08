import { cn } from "../../lib/utils";
import { useTranslation } from "react-i18next";
import roulette from "../../assets/roulette.png";
import blackjack from "../../assets/playing-card.png";
import poker from "../../assets/playing-cards.png";
import award from "../../assets/wreath.png";

export function FeaturesSectionDemo() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("training.specialties.roulette.title"),
      description: t("training.specialties.roulette.description"),
      icon: roulette,
    },
    {
      title: t("training.specialties.blackjack.title"),
      description: t("training.specialties.blackjack.description"),
      icon: blackjack,
    },
    {
      title: t("training.specialties.poker.title"),
      description: t("training.specialties.poker.description"),
      icon: poker,
    },
    {
      title: t("training.specialties.serviceExcellence.title"),
      description: t("training.specialties.serviceExcellence.description"),
      icon: award,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-[1440px] mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 mx-4 relative group/feature dark:border-neutral-800 rounded-2xl sm-border-r border-yellow-400",
        (index === 0 || index === 4) &&
          " dark:border-neutral-800 mt-4 rounded-2xl",
        index < 4 &&
          "sm-border-l mt-4 border-b dark:border-neutral-800 rounded-2xl"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gray-gradient  dark:from-neutral-800 to-transparent pointer-events-none rounded-2xl" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gray-gradient dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-200 dark:text-neutral-400">
        <img src={icon} alt="" width={50} className="invert" />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-yellow-400 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gradient dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className=" text-neutral-400 dark:text-neutral-200 max-w-full relative z-10 px-10 t">
        {description}
      </p>
    </div>
  );
};
