import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import DonationSection from "../components/DonationSection";
import ContactSection from "../components/ContactSection";
import HomeSections from "../components/HomeSections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <HomeSections />
      <DonationSection />
      <ContactSection />
    </>
  );
}
