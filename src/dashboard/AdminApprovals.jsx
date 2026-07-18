import { useEffect, useState } from "react";
import api from "../utils/api";

const AdminApprovals = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPending();
  }, []);

  const fetchPending = () => {
    api
      .get("/api/admin/applications")
      .then((res) => {
        // only pending
        const pending = res.data.filter(
          (a) => a.applicationStatus === "PENDING"
        );
        setApplications(pending);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  const approve = async (id) => {
    await api.post(`/api/admin/approve/${id}`);
    fetchPending();
  };

  const reject = async (id) => {
    const reason = prompt("Reason for rejection?");
    if (!reason) return;

    await api.post(`/api/admin/reject/${id}?reason=${reason}`);
    fetchPending();
  };

  if (loading) {
    return <p className="text-slate-400">Loading approvals...</p>;
  }

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-white">
        Loan Approvals
      </h1>

      {applications.length === 0 && (
        <p className="text-slate-400 text-center">
          No pending approvals.
        </p>
      )}

      {applications.map((app) => (
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
            <p className="text-slate-300 mt-1">
              ₹{app.loanAmount} • {app.courseName}
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3">
            <button
              onClick={() => approve(app.applicationId)}
              className="bg-green-600 hover:bg-green-700
                         text-white px-6 py-2 rounded-xl"
            >
              Approve
            </button>

            <button
              onClick={() => reject(app.applicationId)}
              className="bg-red-600 hover:bg-red-700
                         text-white px-6 py-2 rounded-xl"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminApprovals;
