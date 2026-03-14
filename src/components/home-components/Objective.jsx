import { motion } from "framer-motion";

export default function ObjectiveSection() {
  return (
    <section className="w-full px-6 md:px-20 lg:px-32 py-20 bg-[#FA9A2A15] border-t-6 border-[#FA9A2A]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-relaxed">
          Our objective is to ensure that every client receives{" "}
          <span className="text-[#FA9A2A]">
            consistent, dependable, and value-driven HR support.
          </span>
        </p>
      </motion.div>

    </section>
  );
}