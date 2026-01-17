import { useEffect, useState } from "react";
import api from "../utils/api";
import AdminCharts from "./AdminCharts";

const AdminDashboard = () => {
  const [summary, setSummary] = useState(null);
  const [recentApps, setRecentApps] = useState([]);
  const [trendData, setTrendData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get("/api/admin/dashboard/summary"),
      api.get("/api/admin/applications"),
      api.get("/api/admin/dashboard/trend"),
    ])
      .then(([summaryRes, appsRes, trendRes]) => {
        setSummary(summaryRes.data);
        setRecentApps(appsRes.data.slice(0, 5));
        setTrendData(trendRes.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <p className="text-slate-400 text-center mt-20">
        Loading dashboard...
      </p>
    );
  }

  const summaryData = [
    { label: "Total Applications", value: summary.totalApplications },
    { label: "Approved Applications", value: summary.approvedApplications },
    { label: "Rejected Applications", value: summary.rejectedApplications },
    { label: "Pending Applications", value: summary.pendingApplications },
  ];

  return (
    <div className="space-y-12">

      <h1 className="text-3xl font-bold text-white">
        Admin Dashboard
      </h1>

      {/* ===== CARDS ===== */}
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

      {/* ===== CHARTS ===== */}
      <AdminCharts summary={summary} trendData={trendData} />

      {/* ===== RECENT ===== */}
      <div className="bg-[#131c31] border border-slate-700 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-6">
          Recent Loan Applications
        </h2>

        <div className="space-y-4">
          {recentApps.map((app) => (
            <div
              key={app.applicationId}
              className="flex justify-between items-center
                         bg-[#0b1220] rounded-xl p-4"
            >
              <div>
                <p className="text-white font-medium">
                  {app.student?.name}
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

    </div>
  );
};

export default AdminDashboard;
