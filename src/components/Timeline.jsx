import { motion } from "framer-motion";

const steps = [
  "Create Account",
  "Complete Profile",
  "Upload Documents",
  "Eligibility Verification",
  "Loan Approval",
  "EMI Schedule Generated",
  "Track Repayment",
];

const Timeline = () => {
  return (
    <section id="process" className="py-6">
      <h3 className="text-xl font-extrabold text-slate-900 mb-6 text-center tracking-tight">
        Loan Journey Timeline
      </h3>

      {/* TOP MINI STATS BAR inside timeline / sidebar */}
      <div className="grid grid-cols-4 gap-2 mb-8 bg-slate-50/80 p-3 rounded-2xl border border-slate-100">
        <div className="text-center">
          <div className="text-xs font-bold text-slate-900">50,000+</div>
          <div className="text-[9px] text-slate-500">Students Supported</div>
        </div>
        <div className="text-center">
          <div className="text-xs font-bold text-slate-900">₹500 Cr+</div>
          <div className="text-[9px] text-slate-500">Loans Processed</div>
        </div>
        <div className="text-center">
          <div className="text-xs font-bold text-slate-900">98%</div>
          <div className="text-[9px] text-slate-500">Approval Transparency</div>
        </div>
        <div className="text-center">
          <div className="text-xs font-bold text-slate-900">24x7</div>
          <div className="text-[9px] text-slate-500">Digital Support</div>
        </div>
      </div>

      {/* VERTICAL TIMELINE */}
      <div className="relative pl-6 pr-2 max-w-sm mx-auto">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 top-2 bottom-2 w-0.5 bg-blue-200 -translate-x-1/2" />

        <div className="space-y-4 relative">
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`flex items-center w-full ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Text Badge */}
                <div
                  className={`w-[45%] bg-white rounded-xl px-3 py-2 text-center shadow-md shadow-slate-200/50 border border-slate-100 ${
                    isLeft ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <span className="text-[11px] font-semibold text-slate-800">
                    {step}
                  </span>
                </div>

                {/* Node Circle on the Center Line */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-600 shadow-sm z-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
