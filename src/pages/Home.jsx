import MainSection from "@/components/home-components/mainsection";
import HeroImage from "@/components/home-components/HeroImage";
import AboutUs from "@/components/home-components/AboutUs";
import Expertise from "@/components/home-components/Expertise";
import WeBelieve from "@/components/home-components/Webelieve";

export default function Home() {
  return (
    <div className="pt-32 text-center">
      <MainSection />
      <HeroImage />
      <AboutUs />
      <Expertise />
      <WeBelieve />
    </div>
  );
}