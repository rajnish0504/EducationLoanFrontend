import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = () => {
    api
      .get("/api/admin/applications")
      .then((res) => setApplications(res.data))
      .catch((err) => {
        console.error("Failed to fetch applications", err);
      });
  };

  const handleApprove = async (id) => {
    try {
      await api.post(`/api/admin/approve/${id}`);
      fetchApplications();
    } catch (err) {
      alert("Failed to approve application");
    }
  };

  const handleReject = async (id) => {
    const reason = prompt("Reason for rejection?");
    if (!reason) return;

    try {
      await api.post(`/api/admin/reject/${id}?reason=${reason}`);
      fetchApplications();
    } catch (err) {
      alert("Failed to reject application");
    }
  };

  /* 🔥 FILTER + SEARCH (FIXED) */
  const filteredApplications = applications.filter((app) => {
    const statusMatch =
      filter === "ALL" || app.applicationStatus === filter;

    const searchMatch =
      app.studentName
        ?.toLowerCase()
        .includes(search.toLowerCase());

    return statusMatch && searchMatch;
  });

  const countByStatus = (status) =>
    applications.filter((a) => a.applicationStatus === status).length;

  return (
    <div className="space-y-10">

      {/* ===== HEADER ===== */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <h1 className="text-3xl font-bold text-white">
          Loan Applications
        </h1>

        <div className="flex gap-3">
          <input
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg bg-[#131c31]
                       border border-slate-700 text-white"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-lg bg-[#131c31]
                       border border-slate-700 text-white"
          >
            <option value="ALL">All</option>
            <option value="PENDING">Pending</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </div>
      </div>

      {/* ===== STATUS SUMMARY ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Pending", value: countByStatus("PENDING"), color: "yellow" },
          { label: "Approved", value: countByStatus("APPROVED"), color: "green" },
          { label: "Rejected", value: countByStatus("REJECTED"), color: "red" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-[#131c31] p-6 rounded-2xl
                       border border-slate-700"
          >
            <p className="text-slate-400">{item.label}</p>
            <p className={`text-${item.color}-400 text-2xl font-bold`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* ===== APPLICATION LIST ===== */}
      <div className="space-y-4">
        {filteredApplications.length === 0 && (
          <p className="text-center text-slate-400 py-10">
            No applications found.
          </p>
        )}

        {filteredApplications.map((app) => (
          <div
            key={app.applicationId}
            className="bg-[#131c31] p-6 rounded-2xl
                       border border-slate-700
                       flex flex-col md:flex-row
                       md:items-center md:justify-between
                       gap-6"
          >
            {/* LEFT INFO */}
            <div>
              <p className="text-white font-semibold text-lg">
                {app.studentName}
              </p>
              <p className="text-slate-400 text-sm">
                {app.studentEmail}
              </p>
              <p className="text-slate-400 text-sm">
                ₹{app.loanAmount} • {app.courseName}
              </p>
              <p className="text-slate-500 text-xs">
                {app.instituteName}
              </p>
            </div>

            {/* STATUS */}
            <span
              className={`px-4 py-1 rounded-full text-xs font-semibold
                ${
                  app.applicationStatus === "APPROVED"
                    ? "bg-green-500/15 text-green-400"
                    : app.applicationStatus === "REJECTED"
                    ? "bg-red-500/15 text-red-400"
                    : "bg-yellow-500/15 text-yellow-400"
                }
              `}
            >
              {app.applicationStatus}
            </span>

            {/* ACTIONS */}
            <div className="flex items-center gap-3">

              {app.applicationStatus === "PENDING" && (
                <>
                  <button
                    onClick={() => handleApprove(app.applicationId)}
                    className="px-5 py-2 rounded-xl
                               bg-green-500/20 text-green-400
                               hover:bg-green-500/30
                               transition font-medium"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleReject(app.applicationId)}
                    className="px-5 py-2 rounded-xl
                               bg-red-500/20 text-red-400
                               hover:bg-red-500/30
                               transition font-medium"
                  >
                    Reject
                  </button>
                </>
              )}

              <button
                onClick={() =>
                  navigate(`/admin/applications/${app.applicationId}`)
                }
                className="px-5 py-2 rounded-xl
                           bg-blue-500/20 text-blue-400
                           hover:bg-blue-500/30
                           transition font-medium"
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
