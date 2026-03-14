import { motion } from "framer-motion";
import HeroImg from "@/assets/hr-team.png"; // replace with your image path

export default function HeroImage() {
  return (
    <section className="w-full px-6 md:px-30 pb-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full"
      >
        <img
          src={HeroImg}
          alt="HR Team Collaboration"
          className="w-full h-105 object-cover rounded-xl"
        />
      </motion.div>
    </section>
  );
}