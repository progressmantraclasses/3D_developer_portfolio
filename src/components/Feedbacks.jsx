import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ testimonial, name, designation, company, image }) => (
  <motion.div
    key={name}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }}
    className="bg-black-200 p-5 sm:p-7 md:p-9 rounded-3xl w-full max-w-xs sm:max-w-sm mx-auto"
  >
    <p className="text-white font-black text-[32px] sm:text-[40px] md:text-[48px]">"</p>
    <div className="mt-3">
      <p className="text-white tracking-wider text-[14px] sm:text-[16px] md:text-[18px]">
        {testimonial}
      </p>
      <div className="mt-4 sm:mt-6 flex justify-between items-center gap-3">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[14px] sm:text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px] sm:text-[14px]">
            {designation} at {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      {/* Header Section */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px] sm:min-h-[280px]`}>
        <motion.div variants={textVariant()} className="text-center">
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      {/* Swipable Testimonials */}
      <div className="-mt-14 pb-10 px-4 sm:px-8 flex flex-col items-center overflow-hidden">
        {isMobile ? (
          <div className="relative w-full flex flex-col items-center">
            <AnimatePresence mode="wait">
              <FeedbackCard key={testimonials[currentIndex].name} {...testimonials[currentIndex]} />
            </AnimatePresence>
            <div className="absolute top--10 right-10 flex justify-center gap-4 mt-4">
              <button onClick={handlePrev} className="bg-gray-800 text-white px-4 py-2 rounded-full">◀</button>
              <button onClick={handleNext} className="bg-gray-800 text-white px-4 py-2 rounded-full">▶</button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <FeedbackCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
