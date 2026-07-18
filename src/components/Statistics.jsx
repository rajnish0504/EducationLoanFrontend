import { motion } from "framer-motion";

const statsData = [
  { value: "50,000+", label: "Students Supported" },
  { value: "₹500 Cr+", label: "Loans Processed" },
  { value: "98%", label: "Approval Transparency" },
  { value: "24x7", label: "Digital Support" },
];

const Statistics = () => {
  return (
    <section className="py-8 px-4 sm:px-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Statistics
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100/80 text-center flex flex-col justify-center items-center"
          >
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-1">
              {stat.value}
            </div>
            <div className="text-xs font-medium text-slate-500">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
