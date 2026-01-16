import { useEffect, useState } from "react";
import api from "../utils/api";

const AdminDashboard = () => {
  const [summary, setSummary] = useState(null);
  const [recentApps, setRecentApps] = useState([]);

  useEffect(() => {
    api.get("/api/admin/dashboard/summary")
      .then((res) => setSummary(res.data))
      .catch(console.error);

    api.get("/api/admin/applications")
      .then((res) => setRecentApps(res.data.slice(0, 5)))
      .catch(console.error);
  }, []);

  const summaryData = summary
    ? [
        { label: "Total Applications", value: summary.totalApplications },
        { label: "Pending Documents", value: summary.pendingDocuments },
        { label: "Incorrect Documents", value: summary.incorrectDocuments },
        { label: "Approved Loans", value: summary.approvedLoans },
      ]
    : [];

  return (
    <div className="space-y-12">

      {/* ===== Title ===== */}
      <h1 className="text-3xl font-bold text-white">
        Admin Dashboard
      </h1>

      {/* ===== Summary Cards ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {summaryData.map((item) => (
          <div
            key={item.label}
            className="bg-[#131c31] border border-slate-700 rounded-2xl p-6"
          >
            <p className="text-slate-400 text-sm">
              {item.label}
            </p>
            <p className="text-white text-2xl font-bold mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* ===== System Alerts ===== */}
      <div className="bg-[#131c31] border border-slate-700 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          System Alerts
        </h2>

        <ul className="space-y-2 text-sm text-slate-300">
          <li>⚠️ {summary?.pendingDocuments ?? 0} applications need document verification</li>
          <li>❌ {summary?.incorrectDocuments ?? 0} applications have incorrect documents</li>
          <li>✅ {summary?.approvedLoans ?? 0} loans approved successfully</li>
        </ul>
      </div>

      {/* ===== Recent Applications ===== */}
      <div className="bg-[#131c31] border border-slate-700 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-6">
          Recent Loan Applications
        </h2>

        <div className="space-y-4">
          {recentApps.length === 0 && (
            <p className="text-slate-400 text-sm">
              No recent applications found.
            </p>
          )}

          {recentApps.map((app) => (
            <div
              key={app.applicationId}
              className="flex justify-between items-center bg-[#0b1220] rounded-xl p-4"
            >
              <div>
                <p className="text-white font-medium">
                  {app.student?.name || "Student"}
                </p>
                <p className="text-slate-400 text-sm">
                  ₹{app.loanAmount} • {app.courseName}
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full
                  ${
                    app.applicationStatus === "APPROVED"
                      ? "bg-green-500/20 text-green-400"
                      : app.applicationStatus === "REJECTED"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }
                `}
              >
                {app.applicationStatus}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Quick Actions ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          "Review Pending Documents",
          "Approve Loan Applications",
          "View Reports & Analytics",
        ].map((action) => (
          <div
            key={action}
            className="bg-[#131c31] border border-slate-700 rounded-2xl p-6
                       text-center text-white cursor-pointer
                       hover:bg-[#182347] transition"
          >
            {action}
          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminDashboard;
