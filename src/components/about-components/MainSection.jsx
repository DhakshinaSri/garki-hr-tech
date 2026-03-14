import { motion } from "framer-motion";
import BgImage from "@/assets/aboutus-img.png"; 

export default function MainSection() {
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
            About Us
          </motion.h2>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-white text-base md:text-lg text-center pb-8"
          >
            Garki HR Tech is committed to delivering practical and efficient HR solutions for modern organizations. With a team of experienced HR professionals and industry experts, we provide services that support companies in managing their workforce effectively and maintaining statutory compliance.
          </motion.p>

        </div>
      </div>
    </section>
  );
}