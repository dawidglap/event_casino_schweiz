import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "../style";

const FAQItem = ({ question, answer, isOpen, toggle }) => (
  <div
    className="border-b border-yellow-400 py-4 cursor-pointer px-2"
    onClick={toggle}
  >
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-white text-lg">{question}</h3>
      <span className="text-white text-xl">{isOpen ? "-" : "+"}</span>
    </div>
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="overflow-hidden mt-2"
    >
      <p className="text-dimWhite text-base">{answer}</p>
    </motion.div>
  </div>
);

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = Array.from({ length: 18 }, (_, i) => ({
    question: t(`faq.question${i + 1}`),
    answer: t(`faq.answer${i + 1}`),
  }));

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${styles.marginY} max-w-[1024px] mx-auto`}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white text-center">
        {t("faq.title")}
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            toggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
