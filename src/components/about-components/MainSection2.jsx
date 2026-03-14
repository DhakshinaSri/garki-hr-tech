import { motion } from "framer-motion";
import TargetImg from "@/assets/target.png"; // use your image path

export default function MakeSection2() {
  return (
    <motion.section
      className="w-full px-6 md:px-20 lg:px-32 py-20 bg-[#012367]"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "linear" }}
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.div
        className="flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "linear" }}
        viewport={{ amount: 0.3, once: true }}
      >
        {/* Left Description */}
        <div className="flex-1">
          <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed text-justify">
            Our company focuses on helping organizations navigate complex labour laws,
            implement best HR practices, and maintain safe and ethical work environments. <br />
            We serve companies across multiple industries by offering customized HR services,
            compliance solutions, and workforce management support.
          </p>
        </div>

        {/* Right Description */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-6">

          {/* Target Image */}
          <img
            src={TargetImg}
            alt="Target Goal"
            className="w-36 sm:w-40 md:w-32 lg:w-36 h-auto"
          />

          <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed text-justify">
            Our goal is to become a trusted partner for businesses seeking reliable HR
            and compliance solutions.
          </p>

        </div>
      </motion.div>
    </motion.section>
  );
}