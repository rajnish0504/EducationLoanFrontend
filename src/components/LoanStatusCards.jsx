import { useEffect, useState } from "react";
import api from "../utils/api";

const LoanStatusCards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/api/student/dashboard/loan-status-summary")
      .then(res => setData(res.data))
      .catch(() => {});
  }, []);

  if (!data) {
    return <p className="text-slate-400">Loading loan summary...</p>;
  }

  const cards = [
    { label: "Total Applications", value: data.total, color: "text-blue-400" },
    { label: "Approved", value: data.approved, color: "text-green-400" },
    { label: "Pending", value: data.pending, color: "text-yellow-400" },
    { label: "Rejected", value: data.rejected, color: "text-red-400" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cards.map(card => (
        <div
          key={card.label}
          className="bg-[#131c31] border border-slate-700 rounded-2xl p-6"
        >
          <p className="text-slate-400 text-sm">{card.label}</p>
          <p className={`text-3xl font-bold mt-2 ${card.color}`}>
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LoanStatusCards;
