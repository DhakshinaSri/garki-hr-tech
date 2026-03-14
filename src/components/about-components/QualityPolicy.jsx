import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import checkIcon from "@/assets/checkbox.png";

const policies = [
  "Delivering professional and reliable HR services.",
  "Ensuring accuracy and transparency in compliance and auditing processes.",
  "Continuously improving our services to meet client expectations.",
  "Maintaining ethical business practices.",
  "Providing timely and efficient solutions to our clients.",
];

export default function QualityPolicySection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full px-6 md:px-30 py-20 bg-white overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-start gap-12">

        {/* Left Side */}
        <div className="flex-1 space-y-6 text-left">

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold"
          >
            Quality <span className="text-[#FA9A2A]">Policy</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1.25 bg-[#FA9A2A] rounded"
          />

          <p className="text-gray-600 text-base md:text-lg text-justify">
            At Garki HR Tech, quality and integrity are the foundation of our services. We are committed to:
          </p>
        </div>

        {/* Right Side - Points */}
<motion.div
  className="flex-1 space-y-6 text-left"
  variants={containerVariants}
  initial="hidden"
  animate={controls}
>
  {policies.map((policy, index) => (
    <motion.div
      key={index}
      className="flex items-start gap-4"
      variants={itemVariants}
    >
      <img
        src={checkIcon}
        alt="check"
        className="w-8 h-8 mt-1 shrink-0"
      />

      <p className="text-gray-700 leading-relaxed text-base md:text-lg text-left">
        {policy}
      </p>

    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
}