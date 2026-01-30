import { useEffect, useState } from "react";
import api from "../utils/api";
import SummaryCard from "../components/SummaryCard";
import ApplyLoanCard from "./ApplyLoanCard";
import LoanStatusCards from "../components/LoanStatusCards";
import NotificationsPanel from "../components/NotificationsPanel";

const DashboardHome = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    api.get("/api/student/dashboard/summary")
      .then(res => setSummary(res.data))
      .catch(console.error);
  }, []);

  if (!summary) return <p className="text-slate-400">Loading...</p>;

  return (
    <div className="space-y-10">
      <NotificationsPanel />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard label="Outstanding Balance" value={`₹${summary.outstandingBalance}`} />
        <SummaryCard label="Upcoming EMI" value={`₹${summary.upcomingEmi}`} />
        <SummaryCard label="Credit Score" value={summary.creditScore} />
      </div>

      <LoanStatusCards />
      <ApplyLoanCard />
    </div>
  );
};

export default DashboardHome;
