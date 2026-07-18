import { motion } from "framer-motion";
import { Landmark, TrendingUp, FileText, GraduationCap } from "lucide-react";

const FloatingCards = () => {
  return (
    <div className="relative w-full h-full min-h-[380px] flex items-center justify-center p-4">
      {/* Background Soft Glow & Grid Accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 via-purple-100/30 to-amber-100/30 rounded-3xl blur-2xl -z-10" />

      <div className="relative w-full max-w-[420px] h-[340px] flex flex-col justify-between">
        
        {/* CARD 1: Approved Loan (Top Right floating) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute top-0 right-0 sm:right-2 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl shadow-slate-200/60 border border-slate-100 flex items-center gap-3.5 z-20 min-w-[240px]"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
            <Landmark className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-800 flex items-center gap-1.5">
              <span>Approved Loan:</span>
              <span className="font-bold text-slate-900">₹8,50,000</span>
            </div>
            <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
              <span>Status:</span>
              <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold text-[9px]">
                Approved
              </span>
            </div>
          </div>
        </motion.div>

        {/* CARD 2: Current EMI (Upper Middle Right) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-24 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl shadow-slate-200/60 border border-slate-100 flex items-center gap-3.5 z-30 min-w-[210px]"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-medium text-slate-500">Current EMI:</div>
            <div className="text-xs font-bold text-slate-900 mt-0.5">
              ₹10,138<span className="text-[10px] font-normal text-slate-500">/month</span>
            </div>
          </div>
        </motion.div>

        {/* CARD 3: Documents Verified (Middle Left floating) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-36 left-0 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl shadow-slate-200/60 border border-slate-100 flex items-center gap-3.5 z-20 min-w-[190px]"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-medium text-slate-500">Documents</div>
            <div className="text-xs font-bold text-slate-900 mt-0.5">
              98% Verified
            </div>
          </div>
        </motion.div>

        {/* CARD 4: Student Dashboard (Bottom Center floating) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute bottom-2 right-4 sm:right-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col gap-2.5 z-30 min-w-[240px]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-medium text-slate-500">Student Dashboard</div>
              <div className="text-xs font-semibold text-slate-800">
                Profile Completed <span className="font-bold text-blue-600">85%</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full w-[85%] rounded-full transition-all duration-1000" />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default FloatingCards;
