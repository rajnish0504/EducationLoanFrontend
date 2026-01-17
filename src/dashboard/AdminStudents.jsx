import { useEffect, useState } from "react";
import api from "../utils/api";

const AdminStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/api/admin/students")
      .then(res => setStudents(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-slate-400">Loading students...</p>;
  }

  return (
    <div className="space-y-6">

      {/* ===== Title ===== */}
      <h1 className="text-2xl font-bold text-white">
        Students
      </h1>

      {students.length === 0 && (
        <p className="text-slate-400">No students found.</p>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-slate-700 rounded-xl overflow-hidden">
          <thead className="bg-[#131c31] text-slate-300">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Role</th>
            </tr>
          </thead>

          <tbody>
            {students.map(student => (
              <tr
                key={student.id}
                className="border-t border-slate-700 hover:bg-[#0b1220]"
              >
                <td className="px-4 py-3 text-white">{student.id}</td>
                <td className="px-4 py-3 text-white">{student.name}</td>
                <td className="px-4 py-3 text-slate-400">{student.email}</td>
                <td className="px-4 py-3">
                  <span className="px-3 py-1 rounded-full text-xs
                    bg-blue-500/20 text-blue-400">
                    {student.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AdminStudents;
