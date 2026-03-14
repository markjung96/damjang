import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import LocationsSection from "@/components/sections/LocationsSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import GalleryPreviewSection from "@/components/sections/GalleryPreviewSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <LocationsSection />
      <ProgramsSection />
      <GalleryPreviewSection />
      <CTASection />
    </>
  );
}
