import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare, Send, Bot, Headset } from "lucide-react";

const faqItems = [
  {
    q: "How do I apply?",
    a: "Click on 'Apply Now' from the navigation bar, fill out the student details, and submit required documents in a few easy steps.",
  },
  {
    q: "How is EMI calculated?",
    a: "EMI is calculated based on loan principal amount, annual interest rate, and chosen repayment tenure using standard formulas.",
  },
  {
    q: "How long does approval take?",
    a: "Initial eligibility verification occurs instantly, and complete loan approval usually takes between 24 to 48 working hours.",
  },
  {
    q: "Is my data secure?",
    a: "Yes! We use 256-bit bank-grade encryption to protect all your sensitive personal data and financial documents.",
  },
  {
    q: "Can I track my application?",
    a: "Absolutely. Simply enter your Application ID on the home page or log into your Student Dashboard to see live status updates.",
  },
  {
    q: "What documents are required for application?",
    a: "You need photo ID (Aadhaar/PAN), admission offer letter, fee structure, and past 6 months bank statement of the co-applicant.",
  },
  {
    q: "Are there any hidden processing charges?",
    a: "No! EduLoan Nexus maintains 100% pricing transparency. All interest rates and terms are displayed upfront before you sign.",
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full">
          24x7 Assistance
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">
          FAQ and Support
        </h2>
        <p className="text-slate-600 text-base font-normal">
          Got questions? We have answers. Explore common queries or chat directly with our loan advisors.
        </p>
      </div>

      {/* ACCORDION & ADVISOR WIDGET GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: ACCORDION QUESTIONS */}
        <div className="lg:col-span-7 space-y-3">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:border-blue-200 transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between text-sm font-bold text-slate-800 hover:text-blue-600 focus:outline-none"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: TALK TO AN ADVISOR WIDGET */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-[32px] p-6 sm:p-8 text-white shadow-2xl shadow-blue-500/25 relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold">
              <Headset className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Talk to an Advisor</h3>
              <p className="text-xs text-blue-100">Live chat support available 24/7</p>
            </div>
          </div>

          {/* CHAT PREVIEW BOX */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 space-y-3 mb-6">
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white/20 rounded-2xl rounded-tl-none p-3 text-xs text-white max-w-[80%]">
                Hello! Need help choosing the best interest rate for your university?
              </div>
            </div>

            <div className="flex items-end justify-end">
              <div className="bg-white text-slate-900 rounded-2xl rounded-br-none p-3 text-xs font-semibold max-w-[80%] shadow-md">
                Talk to an Advisor
              </div>
            </div>
          </div>

          {/* INPUT BAR */}
          <div className="relative flex items-center bg-white/20 backdrop-blur-md rounded-full p-1.5 pl-4 border border-white/30">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full text-xs text-white placeholder-blue-200 bg-transparent focus:outline-none pr-2"
            />
            <button className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-md hover:scale-105 transition-transform">
              <Send className="w-4 h-4 fill-blue-600" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
