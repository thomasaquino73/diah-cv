import WorkSection from "@/pages/profile/section/workSection";
import HeroSection from "@/pages/profile/section/heroSection";
import EducationSection from "@/pages/profile/section/educationSection";
export default function Home() {
  return (
    <>
      <title>Home</title>
      <HeroSection />
      <EducationSection />
      <WorkSection />
    </>
  );
}
