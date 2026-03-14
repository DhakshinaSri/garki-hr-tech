import MainSection from "@/components/about-components/MainSection";
import MainSection2 from "@/components/about-components/MainSection2";
import VisionMission from "@/components/about-components/VisionMission";
import Goals from "@/components/about-components/Goals";
import QualityPolicy from "@/components/about-components/QualityPolicy";
import ObjectiveSection from "@/components/home-components/Objective";

export default function About() {
  return (
    <div className="pt-20 text-center">
      <MainSection />
      <MainSection2 />
      <VisionMission />
      <Goals />
      <QualityPolicy />
      <ObjectiveSection />
    </div>
  );
}