import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FloatingCards from "./FloatingCards";

const Hero = () => {
  const [appId, setAppId] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (appId.trim()) {
      navigate(`/student/dashboard`);
    } else {
      navigate(`/signup`);
    }
  };

  return (
    <section id="hero" className="relative pt-8 pb-12 px-4 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: Main Text & CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-4"
        >
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
            Smart Education Loans <br />
            for a{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Smarter Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-normal">
            Apply, manage, track, and repay your education loan from one intelligent platform with complete transparency, security, and real-time updates.
          </p>

          {/* Search / Application Bar */}
          <form onSubmit={handleSearch} className="w-full max-w-lg">
            <div className="relative flex items-center bg-white rounded-full p-1.5 pl-4 shadow-lg shadow-slate-200/60 border border-slate-200/80 hover:border-blue-200 transition-all focus-within:ring-2 focus-within:ring-blue-500/20">
              <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
              <input
                type="text"
                value={appId}
                onChange={(e) => setAppId(e.target.value)}
                placeholder="Enter your Application ID or Start Your Loan Journey..."
                className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none pr-2"
              />
              <button
                type="submit"
                className="bg-[#18181B] hover:bg-slate-800 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full shrink-0 transition-all hover:scale-[1.02]"
              >
                Apply Now
              </button>
            </div>
          </form>
        </motion.div>

        {/* RIGHT COLUMN: Floating Cards Graphic */}
        <div className="lg:col-span-5 flex justify-center items-center mt-6 lg:mt-0">
          <FloatingCards />
        </div>

      </div>
    </section>
  );
};

export default Hero;
