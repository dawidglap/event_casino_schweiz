import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "../style";
import { useState } from "react";
import eventImage1 from "../assets/play.jpeg"; // Example images
import eventImage2 from "../assets/play.jpeg";
import eventImage3 from "../assets/play.jpeg";
import eventImage4 from "../assets/play.jpeg";
import EventsHelmet from "../components/helmet/EventsHelmet";
import TrainingHelmet from "../components/helmet/TrainingHelmet";

// Data for the casino events
const eventData = [
  {
    id: "event-1",
    title: "Royal Casino Night",
    image: eventImage1,
    description:
      "Experience the grandeur of a royal casino night with high-stakes games, elegant croupiers, and VIP treatment. Feel like royalty as you play in the most luxurious setting.",
  },
  {
    id: "event-2",
    title: "Glamorous Poker Tournament",
    image: eventImage2,
    description:
      "Step into the spotlight at our glamorous poker tournament. Whether you're a novice or a seasoned player, this event guarantees a thrilling night of bluffing and winning.",
  },
  {
    id: "event-3",
    title: "James Bond Black Tie Event",
    image: eventImage3,
    description:
      "Dress to impress at our exclusive James Bond-themed event. Play Blackjack and Roulette while sipping on martinis, shaken not stirred. A night of elegance and intrigue awaits.",
  },
  {
    id: "event-4",
    title: "Monte Carlo Casino Gala",
    image: eventImage4,
    description:
      "Transport your guests to the opulence of Monte Carlo with our high-end casino gala. Roulette wheels, poker tables, and champagne make this the ultimate luxury experience.",
  },
];

// Event Card component
const EventCard = ({ event }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="bg-[#1a1a1d] text-white rounded-lg shadow-xl overflow-hidden max-w-[1440px]"
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="font-semibold text-2xl mb-4">{event.title}</h3>
        <p className="text-sm leading-relaxed text-gray-400">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
};

// Main Events component
const Events = () => {
  const { t } = useTranslation();

  return (
    <>
      <EventsHelmet />
      <div className="w-full min-h-screen bg-gradient-to-r from-black via-gray-900 to-black py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-white text-4xl md:text-6xl font-extrabold">
            {t("events.hero.title", "Discover Our Unforgettable Casino Events")}
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-3xl mx-auto">
            {t(
              "events.hero.subtitle",
              "Elevate your event to the next level with our range of luxury casino experiences. Each one is designed to immerse your guests in a world of glamour and excitement."
            )}
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-8 max-w-[1280px] mx-auto">
          {eventData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="mt-24 text-center"
        >
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-8">
            {t("events.cta.title", "Ready to Roll the Dice?")}
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            {t(
              "events.cta.description",
              "Contact us today to plan your next casino event and give your guests a night to remember."
            )}
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-10 rounded-full"
          >
            {t("events.cta.button", "Book Your Event")}
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Events;
