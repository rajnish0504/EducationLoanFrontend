import { motion } from "framer-motion";

const bankLogos = [
  { name: "SBI", font: "font-serif font-black" },
  { name: "HDFC", font: "font-sans font-bold tracking-widest" },
  { name: "ICICI", font: "font-sans font-black italic" },
  { name: "AXIS BANK", font: "font-sans font-extrabold tracking-tight" },
  { name: "Bank of Baroda", font: "font-serif font-bold" },
  { name: "Canara Bank", font: "font-sans font-semibold" },
];

const PartnerBanks = () => {
  return (
    <section className="py-6">
      <h3 className="text-xl font-extrabold text-slate-900 mb-6 text-center tracking-tight">
        Partner Banks
      </h3>

      <div className="bg-slate-50/70 rounded-2xl p-4 border border-slate-100 grid grid-cols-3 sm:grid-cols-6 gap-3 items-center justify-items-center">
        {bankLogos.map((bank, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className={`text-slate-500 hover:text-slate-800 transition-colors text-xs sm:text-sm ${bank.font} grayscale hover:grayscale-0 cursor-default select-none text-center`}
          >
            {bank.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PartnerBanks;
