import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "../style";

const FAQItem = ({ question, answer, isOpen, toggle }) => (
  <div
    className="border-b pb-5 border-yellow-400 py-4 cursor-pointer px-2"
    onClick={toggle}
  >
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-white text-lg">{question}</h3>
      <motion.span
        className="text-white text-3xl flex items-center justify-center"
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        +
      </motion.span>
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
  const [openIndex, setOpenIndex] = useState(0); // La prima domanda sarà aperta di default
  const [showAll, setShowAll] = useState(false);

  const faqData = Array.from({ length: 18 }, (_, i) => ({
    question: t(`faq.question${i + 1}`),
    answer: t(`faq.answer${i + 1}`),
  }));

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <section className={`${styles.marginY} max-w-[1024px] mx-auto`}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white text-center">
        {t("faq.title")}
      </h2>

      <div className="space-y-4">
        {faqData.slice(0, 4).map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            toggle={() => toggleFAQ(index)}
          />
        ))}
      </div>

      {/* Toggle Button */}
      {!showAll && (
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={toggleShowAll}
            className="text-yellow-400 border-2 border-yellow-400 text-xl flex items-center justify-center px-4 p-2 rounded-[20px]"
            animate={{ rotate: showAll ? 0 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {t("faq.more")}
          </motion.button>
        </div>
      )}

      {/* Expanded FAQ Section with Button at the End */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="space-y-4 mt-4"
          >
            {faqData.slice(4).map((item, index) => (
              <FAQItem
                key={index + 4}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index + 4}
                toggle={() => toggleFAQ(index + 4)}
              />
            ))}
            {/* Button to Collapse FAQ */}
            <div className="flex justify-center mt-8">
              <motion.button
                onClick={toggleShowAll}
                className="text-yellow-400 border-2 border-yellow-400 text-xl flex items-center justify-center px-4 p-2 rounded-[20px] "
                animate={{ rotate: showAll ? 0 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {t("faq.less")}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FAQ;
