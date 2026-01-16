import { useEffect, useState } from "react";
import api from "../utils/api";

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = () => {
    api.get("/api/admin/applications")
      .then((res) => setApplications(res.data))
      .catch(console.error);
  };

  const handleApprove = async (id) => {
    await api.post(`/api/admin/approve/${id}`);
    fetchApplications();
  };

  const handleReject = async (id) => {
    const reason = prompt("Reason for rejection?");
    if (!reason) return;
    await api.post(`/api/admin/reject/${id}?reason=${reason}`);
    fetchApplications();
  };

  const filteredApplications = applications.filter((app) => {
    const statusMatch =
      filter === "ALL" || app.applicationStatus === filter;

    const searchMatch =
      app.student?.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

    return statusMatch && searchMatch;
  });

  const countByStatus = (status) =>
    applications.filter((a) => a.applicationStatus === status).length;

  return (
    <div className="space-y-10">

      {/* ===== Header ===== */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold text-white">
          Loan Applications
        </h1>

        <div className="flex gap-3">
          <input
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg bg-[#131c31] border border-slate-700 text-white text-sm"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-lg bg-[#131c31] border border-slate-700 text-white text-sm"
          >
            <option value="ALL">All</option>
            <option value="PENDING">Pending</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </div>
      </div>

      {/* ===== Status Summary ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Pending", value: countByStatus("PENDING"), color: "yellow" },
          { label: "Approved", value: countByStatus("APPROVED"), color: "green" },
          { label: "Rejected", value: countByStatus("REJECTED"), color: "red" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-[#131c31] border border-slate-700 rounded-2xl p-6"
          >
            <p className="text-slate-400 text-sm">{item.label}</p>
            <p className={`text-${item.color}-400 text-2xl font-bold mt-2`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* ===== Applications List ===== */}
      <div className="space-y-4">
        {filteredApplications.length === 0 && (
          <div className="text-center text-slate-400 py-12">
            No applications found.
          </div>
        )}

        {filteredApplications.map((app) => (
          <div
            key={app.applicationId}
            className="bg-[#131c31] border border-slate-700 rounded-2xl p-6
                       flex flex-col md:flex-row md:items-center md:justify-between gap-6
                       hover:border-blue-500/40 transition"
          >
            {/* Left Info */}
            <div>
              <p className="text-white text-lg font-semibold">
                {app.student?.name || "Student"}
              </p>
              <p className="text-slate-400 text-sm mt-1">
                ₹{app.loanAmount} • {app.courseName}
              </p>
              <p className="text-slate-500 text-xs">
                {app.instituteName}
              </p>
            </div>

            {/* Status */}
            <span
              className={`text-xs px-3 py-1 rounded-full w-fit
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

            {/* Actions */}
            <div className="flex gap-3">
              <button
                disabled={app.applicationStatus !== "PENDING"}
                onClick={() => handleApprove(app.applicationId)}
                className="px-4 py-2 text-sm rounded-lg
                           bg-green-600/20 text-green-400
                           hover:bg-green-600/30 disabled:opacity-40"
              >
                Approve
              </button>

              <button
                disabled={app.applicationStatus !== "PENDING"}
                onClick={() => handleReject(app.applicationId)}
                className="px-4 py-2 text-sm rounded-lg
                           bg-red-600/20 text-red-400
                           hover:bg-red-600/30 disabled:opacity-40"
              >
                Reject
              </button>

              <button
                className="px-4 py-2 text-sm rounded-lg
                           bg-blue-600/20 text-blue-400
                           hover:bg-blue-600/30"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminApplications;
