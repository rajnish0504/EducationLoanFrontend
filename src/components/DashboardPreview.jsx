import { motion } from "framer-motion";
import { Smartphone, LayoutDashboard, ShieldCheck, CheckCircle, TrendingUp, Users } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full">
          Platform Showcase
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">
          Expanded Features with Case Studies
        </h2>
        <p className="text-slate-600 text-base font-normal">
          Designed for students on mobile and administrators on desktop — experience complete real-time tracking and bank-consolidated analytics.
        </p>
      </div>

      {/* TWO LARGE PREVIEW CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* CARD 1: REAL-TIME TRACKING (MOBILE PHONE MOCKUP) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 bg-[#FFE7D9] rounded-[36px] p-8 sm:p-10 border border-orange-200/60 shadow-xl shadow-orange-100/50 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="mb-8">
            <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold mb-4 shadow-md shadow-orange-500/20">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Real-time Tracking
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-md">
              Apply, manage, track, and repay your education loan from one intelligent platform with live transparency and instant push notifications.
            </p>
            <button className="mt-5 bg-[#18181B] hover:bg-slate-800 text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-md transition-all hover:scale-105">
              Apply Now
            </button>
          </div>

          {/* REALISTIC PHONE MOCKUP CONTAINER */}
          <div className="relative mx-auto w-full max-w-[260px] bg-slate-900 rounded-[36px] p-3 shadow-2xl border-4 border-slate-800">
            {/* Phone Notch */}
            <div className="w-24 h-4 bg-slate-800 rounded-b-xl mx-auto mb-2" />
            
            {/* Phone Screen Content */}
            <div className="bg-white rounded-[26px] p-4 text-left space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-800">Application Status</span>
                <span className="bg-emerald-100 text-emerald-700 text-[8px] font-bold px-2 py-0.5 rounded-full">Active</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <div className="text-[9px] text-slate-400 font-medium">Loan ID</div>
                <div className="text-xs font-bold text-slate-900">#EDU-84920</div>
                <div className="text-[10px] font-semibold text-blue-600 mt-1">₹12,50,000</div>
              </div>
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-1.5 text-[9px] text-emerald-600 font-bold">
                  <CheckCircle className="w-3 h-3" />
                  <span>Docs Verified</span>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] text-blue-600 font-bold">
                  <CheckCircle className="w-3 h-3" />
                  <span>Sanction Issued</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 2: ADMIN DASHBOARD PREVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-6 bg-[#FEF3C7] rounded-[36px] p-8 sm:p-10 border border-amber-200/60 shadow-xl shadow-amber-100/50 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="mb-8">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold mb-4 shadow-md shadow-amber-500/20">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Admin Dashboard
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-md">
              Bank consolidated data analytics, instant applicant verification tools, batch document management, and live disbursement reports.
            </p>
          </div>

          {/* ADMIN DASHBOARD GRAPHIC MOCKUP */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-amber-200/60 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold text-slate-900">Admin Control Center</span>
              </div>
              <span className="text-[10px] font-semibold text-slate-400">Live Sync</span>
            </div>

            {/* STAT CARDS ROW */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-slate-50 p-2.5 rounded-xl text-center">
                <div className="text-[9px] text-slate-400 font-medium">Applications</div>
                <div className="text-xs font-black text-slate-900">1,248</div>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl text-center">
                <div className="text-[9px] text-slate-400 font-medium">Approved</div>
                <div className="text-xs font-black text-emerald-600">98.4%</div>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl text-center">
                <div className="text-[9px] text-slate-400 font-medium">Volume</div>
                <div className="text-xs font-black text-blue-600">₹45 Cr</div>
              </div>
            </div>

            {/* MINI CHART ACCENT */}
            <div className="h-16 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100 rounded-xl border border-amber-100 flex items-end p-2 gap-1 justify-between">
              {[40, 65, 45, 80, 55, 90, 75, 100].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="w-full bg-amber-500 rounded-t-sm"
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DashboardPreview;
