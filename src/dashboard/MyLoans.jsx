import { useEffect, useState } from "react";
import api from "../utils/api";

const statusColor = (status) => {
  switch (status) {
    case "APPROVED":
      return "text-green-400";
    case "REJECTED":
      return "text-red-400";
    default:
      return "text-yellow-400";
  }
};

const MyLoans = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/api/student/loans")
      .then(res => setLoans(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-slate-400">Loading loans...</p>;
  }

  return (
    <div className="bg-[#131c31] border border-slate-700 rounded-2xl p-6">
      <h2 className="text-white text-lg font-semibold mb-4">
        My Loans
      </h2>

      {loans.length === 0 ? (
        <p className="text-slate-400">No loans found.</p>
      ) : (
        <table className="w-full text-sm text-slate-300">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="text-left py-2">Loan ID</th>
              <th>Course</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {loans.map((loan) => (
              <tr
                key={loan.applicationId}
                className="border-b border-slate-700"
              >
                <td className="py-2">LN{loan.applicationId}</td>
                <td>{loan.courseName}</td>
                <td className={statusColor(loan.applicationStatus)}>
                  {loan.applicationStatus}
                </td>
                <td>₹{loan.loanAmount}</td>
                <td>{loan.applicationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyLoans;
