import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const slides = [
  "Providing reliable and professional HR consulting services.",
  "Supporting organizations in maintaining statutory and labour law compliance.",
  "Promoting safe and respectful workplaces through POSH awareness and training.",
  "Assisting companies in implementing new labour codes effectively.",
  "Delivering high-quality staffing solutions to meet organizational workforce needs.",
  "Building long-term partnerships with our clients based on trust and professionalism."
];

export default function CompanyGoalsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  return (
    <section className="w-full bg-white px-6 md:px-20 lg:px-32 py-16">

      {/* ORANGE RECTANGLE CONTAINER */}
      <div
        className="bg-[#FA9A2A] rounded-3xl shadow-xl px-8 md:px-16 py-12 flex flex-col items-center text-center max-w-4xl mx-auto"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={() => !intervalRef.current && startAutoSlide()}
      >

        {/* TITLE */}
        <motion.h2
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
        >
          Our{" "}
          <span className="bg-white text-[#FA9A2A] px-3 py-1 rounded">
            Goals
          </span>
        </motion.h2>

        {/* SLIDING TEXT */}
        <div className="relative w-full overflow-hidden leading-relaxed min-h-[2.5em]">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-white font-medium md:text-lg px-2"
            >
              {slides[activeIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* DOTS */}
        <div className="flex gap-3 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                stopAutoSlide();
                setActiveIndex(index);
                startAutoSlide();
              }}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}