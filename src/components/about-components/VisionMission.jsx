export default function VisionMission() {
  return (
    <section className="w-full px-6 md:px-20 lg:px-32 pt-15 pb-10">

      <div className="flex flex-col md:flex-row gap-12">

        {/* Mission */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight pb-6">
            Our
            <span className="text-[#E4983A]"> Mission</span>
          </h2>

          <p className="text-gray-600 font-bold text-base md:text-lg text-justify">
            Our mission is to provide professional HR solutions that help organizations 
            manage their workforce efficiently while ensuring compliance with labour laws 
            and workplace standards. <br />
            We aim to support businesses in building productive, safe, and legally compliant 
            work environments through expert guidance and reliable HR services.
          </p>
        </div>

        {/* Vision */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight pb-6">
            Our
            <span className="text-[#E4983A]"> Vision</span>
          </h2>

          <p className="text-gray-600 font-bold text-base md:text-lg text-justify">
            Our vision is to become a leading HR consulting and workforce solutions provider, 
            recognized for delivering ethical, innovative, and practical HR services that 
            support sustainable organizational growth. <br />
            We strive to create workplaces where people, compliance, and productivity work 
            together for long-term success.
          </p>
        </div>

      </div>

    </section>
  );
}