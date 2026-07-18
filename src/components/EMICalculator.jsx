import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calculator, Table, PieChart } from "lucide-react";

const scheduleData = [
  { date: "Apr 25", interest: "₹4,163", principal: "₹10,517", total: "₹14,680" },
  { date: "May 25", interest: "₹4,120", principal: "₹10,560", total: "₹14,680" },
  { date: "Jun 25", interest: "₹4,077", principal: "₹10,603", total: "₹14,680" },
  { date: "Jul 25", interest: "₹4,033", principal: "₹10,647", total: "₹14,680" },
  { date: "Aug 25", interest: "₹3,989", principal: "₹10,691", total: "₹14,680" },
  { date: "Sep 25", interest: "₹3,945", principal: "₹10,735", total: "₹14,680" },
];

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1050000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(10);

  const r = interestRate / 12 / 100;
  const n = tenure * 12;
  const emi = Math.round(
    (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  );

  const totalPayment = emi * n;
  const totalInterest = totalPayment - loanAmount;

  return (
    <section id="emi" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full">
          Financial Clarity
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">
          Integrated EMI Calculator
        </h2>
        <p className="text-slate-600 text-base font-normal">
          Accurately calculate your monthly repayment schedule and plan your academic investment with total confidence.
        </p>
      </div>

      {/* CALCULATOR & SCHEDULE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: CALCULATOR INPUTS & GRAPH */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 bg-white/90 backdrop-blur-md rounded-[32px] border border-slate-200/80 p-8 shadow-2xl shadow-slate-200/50 relative overflow-hidden"
        >
          {/* Background Graph Accent */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 500 250" fill="none">
              <path
                d="M0 160 Q 120 40, 250 180 T 500 100"
                stroke="#2563EB"
                strokeWidth="5"
                fill="none"
              />
              <path
                d="M0 200 Q 150 90, 300 210 T 500 130"
                stroke="#8B5CF6"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Loan Estimator</h3>
                <p className="text-xs text-slate-500">Adjust sliders to customize your loan parameters</p>
              </div>
            </div>

            {/* LOAN AMOUNT */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                <span>Loan Amount</span>
                <span className="text-blue-600 text-sm font-extrabold">₹{loanAmount.toLocaleString("en-IN")}</span>
              </div>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="50000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                <span>₹1 Lakh</span>
                <span>₹50 Lakhs</span>
              </div>
            </div>

            {/* INTEREST RATE */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                <span>Interest Rate (p.a.)</span>
                <span className="text-indigo-600 text-sm font-extrabold">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="8"
                max="18"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                <span>8%</span>
                <span>18%</span>
              </div>
            </div>

            {/* TENURE */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                <span>Loan Tenure</span>
                <span className="text-purple-600 text-sm font-extrabold">{tenure} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                <span>1 Year</span>
                <span>20 Years</span>
              </div>
            </div>

            {/* LIVE EMI RESULT CARD */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl shadow-blue-500/25 flex items-center justify-between"
            >
              <div>
                <div className="text-xs font-bold text-blue-100 uppercase tracking-widest">
                  Monthly Payment (EMI)
                </div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight mt-1">
                  ₹{emi.toLocaleString("en-IN")}
                  <span className="text-xs font-normal text-blue-200"> / month</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: PAYMENT SCHEDULE TABLE & BREAKDOWN */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 bg-white/90 backdrop-blur-md rounded-[32px] border border-slate-200/80 p-8 shadow-2xl shadow-slate-200/50 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold shadow-md shadow-purple-500/20">
                <Table className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Payment Schedule</h3>
                <p className="text-xs text-slate-500">Estimated monthly breakdown of principal and interest</p>
              </div>
            </div>

            {/* SUMMARY BADGES */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/60">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Interest</div>
                <div className="text-base font-extrabold text-slate-900 mt-0.5">
                  ₹{totalInterest > 0 ? totalInterest.toLocaleString("en-IN") : "0"}
                </div>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/60">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Payable</div>
                <div className="text-base font-extrabold text-blue-600 mt-0.5">
                  ₹{totalPayment > 0 ? totalPayment.toLocaleString("en-IN") : "0"}
                </div>
              </div>
            </div>

            {/* SCHEDULE TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200/80 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    <th className="py-2.5 px-3">Date</th>
                    <th className="py-2.5 px-3">Interest</th>
                    <th className="py-2.5 px-3">Principal</th>
                    <th className="py-2.5 px-3 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  {scheduleData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 px-3 font-semibold text-slate-900">{row.date}</td>
                      <td className="py-2.5 px-3 text-purple-600">{row.interest}</td>
                      <td className="py-2.5 px-3 text-emerald-600">{row.principal}</td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5 font-medium">
              <PieChart className="w-4 h-4 text-blue-600" />
              <span>Includes zero hidden fees</span>
            </span>
            <button className="text-blue-600 font-bold hover:underline">Download Schedule PDF →</button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EMICalculator;
