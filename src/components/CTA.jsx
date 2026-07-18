import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
        className="bg-white rounded-[40px] p-10 sm:p-16 text-center shadow-2xl shadow-slate-300/40 border border-slate-200/80 relative overflow-hidden"
      >
        {/* Soft Ambient Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/60 via-purple-50/40 to-amber-50/50 -z-0" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100/80 px-4 py-1.5 rounded-full mb-6 inline-block">
            Get Started Today
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Your Academic Dreams are within Reach.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-lg mx-auto mb-8">
            Apply for your education loan today and receive instant eligibility assessment with zero hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="w-full sm:w-auto bg-[#18181B] hover:bg-slate-800 text-white text-sm font-bold px-8 py-3.5 rounded-full shadow-lg shadow-slate-900/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Begin Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-sm font-bold px-8 py-3.5 rounded-full shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <span>Contact Support</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
