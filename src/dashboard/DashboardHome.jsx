import ApplyLoanCard from "./ApplyLoanCard";

const DashboardHome = () => {
  return (
    <div className="space-y-10">
      
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Loan Amount", value: "₹ 5,00,000" },
          { label: "Interest Rate", value: "8%" },
          { label: "Tenure", value: "5 Years" },
          { label: "Monthly EMI", value: "₹ 10,123" },
        ].map((item, i) => (
          <div
            key={i}
            className="
              bg-[#131c31]/80 backdrop-blur
              border border-slate-700
              rounded-xl p-5
              hover:-translate-y-1 hover:shadow-xl
              transition-all duration-300
              animate-rise
            "
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="text-xl font-bold text-white mt-1 tracking-wide">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Apply Loan */}
      <ApplyLoanCard />

      {/* Loan Progress */}
      <div className="bg-[#131c31]/80 backdrop-blur border border-slate-700 rounded-xl p-6 animate-rise">
        <h4 className="text-white font-semibold mb-4">
          Loan Progress
        </h4>

        <div className="flex items-center gap-4 text-sm">
          {["Applied", "Approved", "EMI Active", "Completed"].map(
            (step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${i <= 1 ? "bg-blue-500" : "bg-slate-600"}`} />
                <span className={i <= 1 ? "text-white" : "text-slate-400"}>
                  {step}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
