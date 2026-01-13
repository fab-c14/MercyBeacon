import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import DonationSection from "../components/DonationSection";
import ContactSection from "../components/ContactSection";
import ImpactSection from "../components/ImpactSection";
import VolunteerSection from "../components/VolunteerSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <ImpactSection />
      <VolunteerSection />
      <DonationSection />
      <ContactSection />
    </>
  );
}
