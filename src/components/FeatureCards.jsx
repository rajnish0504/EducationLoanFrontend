import { motion } from "framer-motion";
import { FileText, Calculator, Lock, TrendingUp, Clock, UserCheck, CreditCard } from "lucide-react";

const FeatureCards = () => {
  return (
    <section id="features" className="py-8 px-4 sm:px-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Feature Cards
      </h2>

      {/* ASYMMETRICAL PASTEL GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* CARD 1: Quick Loan Application (Amber) */}
        <motion.div
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-[#FDE8AE] rounded-2xl p-5 shadow-sm border border-amber-200/50 flex flex-col justify-between min-h-[170px]"
        >
          <div>
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-900 flex items-center justify-center mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Quick Loan Application</h3>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              Apply in minutes with guided forms
            </p>
          </div>
        </motion.div>

        {/* CARD 2: Smart EMI Calculator (Emerald - Tall Spanning Card) */}
        <motion.div
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-[#C8F2DA] rounded-2xl p-5 shadow-sm border border-emerald-200/50 flex flex-col justify-between sm:row-span-2 min-h-[220px] lg:min-h-full"
        >
          <div>
            <div className="w-9 h-9 rounded-xl bg-emerald-600/20 text-emerald-900 flex items-center justify-center mb-4">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Smart EMI Calculator</h3>
            <p className="text-xs text-slate-700 font-normal leading-relaxed mb-4">
              Instant monthly EMI estimation
            </p>
          </div>
        </motion.div>

        {/* CARD 3: Secure Document Upload (Purple) */}
        <motion.div
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-[#E4D4FE] rounded-2xl p-5 shadow-sm border border-purple-200/50 flex flex-col justify-between min-h-[170px]"
        >
          <div>
            <div className="w-9 h-9 rounded-xl bg-purple-600/20 text-purple-900 flex items-center justify-center mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Secure Document Upload</h3>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              Bank-grade encrypted document storage
            </p>
          </div>
        </motion.div>

        {/* CARD 4: Real-Time Loan Tracking (Sky Blue) */}
        <motion.div
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-[#CBEBFF] rounded-2xl p-5 shadow-sm border border-sky-200/50 flex flex-col justify-between min-h-[170px]"
        >
          <div>
            <div className="w-9 h-9 rounded-xl bg-sky-600/20 text-sky-900 flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Real-Time Loan Tracking</h3>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              Track every stage of approval
            </p>
          </div>
        </motion.div>

        {/* CARD 5: Doohment Tracking (Blue) */}
        <motion.div
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-[#BCDFFF] rounded-2xl p-5 shadow-sm border border-blue-200/50 flex flex-col justify-between min-h-[170px]"
        >
          <div>
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-900 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Doohment Tracking</h3>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              Track every stage of approval
            </p>
          </div>
        </motion.div>

        {/* CARD 6: Admin Approval Dashboard (Peach) */}
        <motion.div
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-[#FDDBCB] rounded-2xl p-5 shadow-sm border border-orange-200/50 flex flex-col justify-between min-h-[170px]"
        >
          <div>
            <div className="w-9 h-9 rounded-xl bg-orange-600/20 text-orange-900 flex items-center justify-center mb-3">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Admin Approval Dashboard</h3>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              Manage student requests efficiently
            </p>
          </div>
        </motion.div>

        {/* CARD 7: EMI Payment Management (Indigo/Lavender) */}
        <motion.div
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-[#D4CEFF] rounded-2xl p-5 shadow-sm border border-indigo-200/50 flex flex-col justify-between min-h-[170px]"
        >
          <div>
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-900 flex items-center justify-center mb-3">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">EMI Payment Management</h3>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              Pay installments with reminders
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeatureCards;
