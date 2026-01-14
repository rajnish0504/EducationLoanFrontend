import ApplyLoanCard from "./ApplyLoanCard";

const DashboardHome = () => {
  return (
    <div className="space-y-10">

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Outstanding Balance", value: "₹4,52,000" },
          { label: "Upcoming EMI", value: "₹10,450" },
          { label: "Credit Score", value: "780" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-[#131c31] border border-slate-700 rounded-2xl p-6"
          >
            <p className="text-slate-400 text-sm">{item.label}</p>
            <p className="text-white text-2xl font-bold mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <ApplyLoanCard />
    </div>
  );
};

export default DashboardHome;
