import ApplyLoanCard from "./ApplyLoanCard";

const DashboardHome = () => {
  return (
    <div className="space-y-10">

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Outstanding Balance", value: "₹ 4,52,000" },
          { label: "Upcoming Payment", value: "₹ 10,450" },
          { label: "Credit Score", value: "780" },
        ].map((item, i) => (
          <div
            key={i}
            className="
              bg-[#131c31]/80 backdrop-blur
              border border-slate-700
              rounded-2xl p-6
            "
          >
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="text-2xl font-bold text-white mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Apply Loan */}
      <ApplyLoanCard />

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#131c31]/80 border border-slate-700 rounded-2xl p-6">
          <h4 className="text-white font-semibold mb-4">
            Recent Activity
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>✔ Payment of ₹10,450 processed</li>
            <li>✔ Document uploaded successfully</li>
            <li>✔ New loan offer available</li>
          </ul>
        </div>

        <div className="bg-[#131c31]/80 border border-slate-700 rounded-2xl p-6">
          <h4 className="text-white font-semibold mb-4">
            Loan Distribution
          </h4>
          <p className="text-slate-400 text-sm">
            Tuition (60%), Living (30%), Books (10%)
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
