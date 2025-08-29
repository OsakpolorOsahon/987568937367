import HeroSection from "@/components/sections/hero-section";
import VideoSection from "@/components/sections/video-section";
import AboutSection from "@/components/sections/about-section";
import MissionSection from "@/components/sections/mission-section";
import ServicesSection from "@/components/sections/services-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <MissionSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
