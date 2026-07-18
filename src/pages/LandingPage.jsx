import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DetailedTimeline from "../components/DetailedTimeline";
import Statistics from "../components/Statistics";
import WhyChoose from "../components/WhyChoose";
import EMICalculator from "../components/EMICalculator";
import DashboardPreview from "../components/DashboardPreview";
import Testimonials from "../components/Testimonials";
import PartnerBanks from "../components/PartnerBanks";
import FAQ from "../components/FAQ";
import BlogResources from "../components/BlogResources";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-[#F8F7F3] min-h-screen font-sans text-slate-900 relative selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* FIXED AMBIENT BACKGROUND BLOBS */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-10 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 left-10 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* STICKY NAVBAR */}
      <Navbar />

      {/* SECTION 1: HERO */}
      <div className="pt-4 pb-12">
        <Hero />
      </div>

      {/* SECTION 2: DETAILED LOAN JOURNEY TIMELINE (REPLACES FEATURE CARDS) */}
      <div className="py-8">
        <DetailedTimeline />
      </div>

      {/* SECTION 3: STATISTICS */}
      <div className="py-12">
        <Statistics />
      </div>

      {/* SECTION 4: WHY CHOOSE EDULOAN NEXUS */}
      <div className="py-12">
        <WhyChoose />
      </div>

      {/* SECTION 5: INTEGRATED EMI CALCULATOR */}
      <div className="py-12">
        <EMICalculator />
      </div>

      {/* SECTION 6: EXPANDED FEATURES & DASHBOARD PREVIEWS */}
      <div className="py-12">
        <DashboardPreview />
      </div>

      {/* SECTION 7: ENRICHED TESTIMONIALS & TRUST */}
      <div className="py-12">
        <Testimonials />
      </div>

      {/* SECTION 8: PARTNER BANKS */}
      <div className="py-12">
        <PartnerBanks />
      </div>

      {/* SECTION 9: FAQ & SUPPORT */}
      <div className="py-12">
        <FAQ />
      </div>

      {/* SECTION 10: BLOG & RESOURCES */}
      <div className="py-12">
        <BlogResources />
      </div>

      {/* SECTION 11: FINAL CTA */}
      <div className="py-12">
        <CTA />
      </div>

      {/* SECTION 12: FOOTER */}
      <Footer />

    </div>
  );
};

export default LandingPage;
