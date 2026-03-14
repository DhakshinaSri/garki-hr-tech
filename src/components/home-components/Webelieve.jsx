import { motion } from "framer-motion";

export default function Webelieve() {
  return (
    <motion.section
      className="w-full px-6 md:px-20 lg:px-32 py-20 bg-[#012367]"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "linear" }}
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.div
        className="flex flex-col md:flex-row justify-between min-h-62.5"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "linear" }}
        viewport={{ amount: 0.3, once: true }}
      >
        {/* Title */}
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We Believe
          </h2>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-1.25 bg-[#FA9A2A] rounded mt-4"
          />
        </div>

        {/* Description */}
        <div className="flex-1 flex items-start md:items-end md:justify-end mt-6 md:mt-0">
          <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl  text-justify">
            At Garki HR Tech, we believe that people are the most valuable asset of any organization, 
            and effective HR practices play a key role in sustainable business growth.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}