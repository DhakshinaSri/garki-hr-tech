import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="w-full px-6 md:px-30 py-20 bg-white overflow-hidden">
      
      <div className="flex flex-col md:flex-row items-center gap-5">

        {/* Left Side - Title */}
        <div className="flex-1 space-y-6 text-left">

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight"
          >
            About Us
          </motion.h2>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-1.25 bg-[#FA9A2A] rounded"
          />

        </div>

        {/* Right Side - Description */}
        <div className="flex-1 text-left">

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-gray-600 text-base md:text-lg text-justify"
          >
            <span className="font-bold">Garki HR Tech</span> is committed to delivering practical and efficient HR solutions for modern organizations. With a team of experienced HR professionals and industry experts, we provide services that support companies in managing their workforce effectively and maintaining statutory compliance...
            <Link
              to="/about"
              className="font-bold text-[#E4983A] hover:text-[#E4983A70] transition duration-150 ml-1"
            >
              Read More
            </Link>
          </motion.p>
        </div>
      </div>
    </section>
  );
}