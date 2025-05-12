import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CalendarSection from "../components/CalendarSection";

export default function Home() {
  return (
    <div className="bg-[#0a0f1c] text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CalendarSection />
    </div>
  );
}