import { useState } from "react";
import { motion } from "framer-motion";
import ProgramDropdown from "@components/training-components/ProgramDropdown";
import TrainingTitle from "@components/common-components/TitleDesign";

export default function ProgramSetOne() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">

        {/* Program Intro */}
        <div>

          {/* TITLE — FROM LEFT */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <TrainingTitle
              text="Healthcare Sector Training Programs"
              variant="underline"
            />
          </motion.div>

          {/* DESCRIPTION — FROM BOTTOM */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed text-justify"
          >
            The healthcare industry demands accuracy, compliance, and skilled 
            professionals who understand both clinical and operational workflows. 
            Skill Hive’s healthcare programs are designed to prepare learners for 
            high-demand, non-clinical and allied healthcare roles.
          </motion.p>

        </div>

        {/* Dropdowns */}
        <div className="space-y-4">
          <ProgramDropdown
            title="Medical Coding Program"
            overview="This program trains learners to convert medical diagnoses, procedures, and services into standardized medical codes used for billing and compliance."
            learnList={[
              "Medical terminology and anatomy basics",
              "ICD-10-CM, CPT, and HCPCS coding standards",
              "Coding guidelines and compliance practices",
              "Real-time case studies and coding scenarios",
            ]}
            eligibility="Life science graduates, healthcare graduates, and any graduates interested in healthcare careers."
            careers="Medical Coder, Coding Analyst, Coding Auditor (Entry Level)"
            isOpen={openIndex === 0}
            onToggle={() => handleToggle(0)}
          />

          <ProgramDropdown
            title="Medical Billing & Revenue Cycle Management (RCM)"
            overview="This program provides end-to-end knowledge of the healthcare revenue cycle, from patient registration to final payment."
            learnList={[
              "Overview of US healthcare system",
              "Insurance types and claim submission",
              "Denial management and AR follow-up",
              "Revenue cycle workflows and compliance",
            ]}
            eligibility="Any graduate with basic computer knowledge."
            careers="Medical Billing Executive, RCM Analyst, AR Caller."
            isOpen={openIndex === 1}
            onToggle={() => handleToggle(1)}
          />

          <ProgramDropdown
            title="Clinical Documentation & Healthcare Data Management"
            overview="Focused on maintaining accurate clinical records and managing healthcare data as per regulatory standards."
            learnList={[
              "Clinical documentation standards",
              "Electronic Health Records (EHR)",
              "Data accuracy and confidentiality",
              "Healthcare compliance basics",
            ]}
            eligibility="Life science graduates, diploma holders, allied healthcare students."
            careers="Clinical Documentation Executive, Healthcare Data Coordinator."
            isOpen={openIndex === 2}
            onToggle={() => handleToggle(2)}
          />

          <ProgramDropdown
            title="Hospital Front Office & Patient Care Coordination"
            overview="This program prepares learners for patient-facing roles in hospitals and healthcare facilities."
            learnList={[
              "Hospital operations and workflows",
              "Patient communication and service excellence",
              "Appointment scheduling and billing desk support",
              "Medical ethics and professionalism",
            ]}
            eligibility="12th pass, diploma holders, and graduates."
            careers="Front Office Executive, Patient Care Coordinator."
            isOpen={openIndex === 3}
            onToggle={() => handleToggle(3)}
          />

          <ProgramDropdown
            title="Healthcare Quality & Medical Audit Program"
            overview="Designed to build skills in healthcare quality monitoring, medical audits, and compliance."
            learnList={[
              "Medical audit processes",
              "Quality standards in healthcare",
              "Documentation review techniques",
              "Regulatory and compliance requirements",
            ]}
            eligibility="Graduates with healthcare or life science background."
            careers="Medical Quality Analyst, Audit Executive."
            isOpen={openIndex === 4}
            onToggle={() => handleToggle(4)}
          />
        </div>
      </div>
    </section>
  );
}
