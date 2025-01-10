import PortfolioSection from "../components/PortfolioSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "@/pages/HeroSection";
import AboutSection from "@/pages/AboutSection";
import WhyUs from "@/pages/WhyUs";
import Services from "@/pages/Services";
import CTA from "@/pages/CTA";
import HowWeWorks from "@/pages/HowWeWorks";
import Contact from "@/pages/Contact";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <main id="main" className="mobile-view ">
        <AboutSection />
        <WhyUs />
        <Services />
        <PortfolioSection />
        <HowWeWorks />
        <CTA />
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
