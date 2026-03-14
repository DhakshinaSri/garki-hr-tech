import { motion } from "framer-motion";
import Button from "@/components/common-components/Button";
import BgImage from "@/assets/handshake.png"; 

export default function Expertise() {
  return (
    <section
      className="w-full relative bg-fixed bg-center bg-cover border-t-5 border-[#E4983A]"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center px-6 md:px-20 lg:px-32 py-28">
        <div className="flex flex-col items-center text-center max-w-3xl">

          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#E4983A] pb-6"
          >
            Our Expertise
          </motion.h2>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-white text-base md:text-lg text-center pb-8"
          >
            Our expertise includes staffing solutions, supply of safety materials, HR & IR consulting, compliance auditing, POSH training, and labour code implementation support. We work closely with organizations to ensure they meet regulatory requirements while improving employee productivity and workplace culture.
          </motion.p>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
          >
            <Button text="Explore" to="/services" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}