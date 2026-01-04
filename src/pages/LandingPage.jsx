import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import EMICalculator from "../components/EMICalculator";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />

      {/* EMI Calculator Section */}
      <div id="emi">
        <EMICalculator />
      </div>

      <HowItWorks />
      <Footer />
    </>
  );
};

export default LandingPage;
