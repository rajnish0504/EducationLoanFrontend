import { useEffect, useState } from "react";
import api from "../utils/api";

const AdminApprovals = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/api/admin/applications")
      .then(res => {
        // show only PENDING applications
        const pendingApps = res.data.filter(
          app => app.applicationStatus === "PENDING"
        );
        setApplications(pendingApps);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-slate-400">Loading approvals...</p>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">
        Loan Approvals
      </h1>

      {applications.length === 0 && (
        <p className="text-slate-400">
          No pending approvals 🎉
        </p>
      )}

      {applications.map(app => (
        <div
          key={app.applicationId}
          className="bg-[#131c31] border border-slate-700
                     rounded-xl p-6 flex justify-between items-center"
        >
          <div>
            <p className="text-white font-semibold">
              {app.student?.name}
            </p>
            <p className="text-slate-400 text-sm">
              ₹{app.loanAmount} • {app.courseName}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => approve(app.applicationId)}
              className="px-4 py-2 rounded-lg
                         bg-green-600 hover:bg-green-700 text-white"
            >
              Approve
            </button>

            <button
              onClick={() => reject(app.applicationId)}
              className="px-4 py-2 rounded-lg
                         bg-red-600 hover:bg-red-700 text-white"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  function approve(id) {
    api.post(`/api/admin/approve/${id}`)
      .then(() => {
        setApplications(apps =>
          apps.filter(app => app.applicationId !== id)
        );
      });
  }

  function reject(id) {
    api.post(`/api/admin/reject/${id}?reason=Rejected by admin`)
      .then(() => {
        setApplications(apps =>
          apps.filter(app => app.applicationId !== id)
        );
      });
  }
};

export default AdminApprovals;
