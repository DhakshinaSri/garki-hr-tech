import { Link } from "react-router-dom";

export default function InternshipDivider() {
  return (
    <section className="w-full items-center justify-between px-4 md:px-20 lg:px-32 py-3 bg-black">
      <div className="text-center md:text-left pt-3">
        <h2
          className="text-base sm:text-lg md:text-xl lg:text-xl font-thin text-white leading-tight text-left pb-3"
          style={{ letterSpacing: "2px", wordSpacing: "4px" }}
        >
          PROFESSIONAL JOURNEY WITH SKILL HIVE INTERNSHIPS → LEARN, WORK & GROW!
          <Link
            to="/internshipapply"
            className="text-[#E4983A] font-bold underline hover:underline ml-3"
          >
            APPLY NOW
          </Link>
        </h2>
      </div>
    </section>
  );
}
