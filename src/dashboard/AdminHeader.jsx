import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

const AdminHeader = () => {
  const [adminName, setAdminName] = useState("Admin");
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/api/admin/me")
      .then((res) => {
        // email comes → show before @
        const email = res.data.name;
        setAdminName(email.split("@")[0]);
      })
      .catch(() => {
        navigate("/admin/login");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin/login");
  };

  return (
    <header className="h-16 flex items-center justify-between px-8 border-b border-slate-700 bg-[#0b1220]">
      <h1 className="text-lg font-semibold text-white">
        EduLoan Nexus
      </h1>

      <div className="flex items-center gap-6">
        <p className="text-slate-300 text-sm">
          Hi, <span className="text-white font-medium">{adminName}</span>
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
