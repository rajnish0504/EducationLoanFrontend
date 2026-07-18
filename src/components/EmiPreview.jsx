import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const EmiPreview = () => {
  const [loanAmount, setLoanAmount] = useState(1050000);
  const [interestRate, setInterestRate] = useState(14);
  const [tenure, setTenure] = useState(20);

  // EMI Calculation: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const r = interestRate / 12 / 100;
  const n = tenure * 12;
  const emi = Math.round(
    (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  );

  return (
    <section id="emi-calc" className="py-6">
      <h3 className="text-xl font-extrabold text-slate-900 mb-6 text-center tracking-tight">
        EMI Calculator Preview
      </h3>

      <div className="relative bg-white rounded-3xl p-5 shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
        {/* Background Wave Accent */}
        <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
            <path
              d="M0 100 Q 100 40, 200 120 T 400 80"
              stroke="#2563EB"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M0 130 Q 100 80, 200 150 T 400 110"
              stroke="#A855F7"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>

        {/* INPUT FORM FIELDS */}
        <div className="space-y-3 relative z-10">
          <div>
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Loan Amount
            </label>
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-1.5 flex items-center justify-between text-xs font-semibold text-slate-800">
              <span>₹{loanAmount.toLocaleString("en-IN")}</span>
              <span className="text-[10px] text-slate-400">INR</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Interest Rate
              </label>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-1.5 flex items-center justify-between text-xs font-semibold text-slate-800">
                <span>{interestRate}</span>
                <span className="text-[10px] text-slate-400">%</span>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Tenure
              </label>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-1.5 flex items-center justify-between text-xs font-semibold text-slate-800">
                <span>{tenure}</span>
                <span className="text-[10px] text-slate-400">Yrs</span>
              </div>
            </div>
          </div>

          {/* LIVE RESULT BADGE */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 text-white shadow-lg shadow-blue-500/25 flex items-center justify-between"
          >
            <div>
              <div className="text-[10px] font-medium text-blue-100 uppercase tracking-wider">
                Live EMI Result
              </div>
              <div className="text-lg font-black tracking-tight mt-0.5">
                ₹{(emi || 12460).toLocaleString("en-IN")}
                <span className="text-[10px] font-normal text-blue-200">/mo</span>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmiPreview;
