import { useEffect, useState } from "react";
import api from "../utils/api";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const Topbar = () => {
  const [studentName, setStudentName] = useState("Student");
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/api/auth/me")
      .then(res => setStudentName(res.data.name))
      .catch(() => {});
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-16 flex justify-between items-center px-8 bg-[#0b1220] border-b border-slate-700">
      <span className="text-white font-semibold">
        EduLoan Nexus
      </span>

      <div className="flex items-center gap-4">
        <span className="text-slate-300 text-sm">
          Hi, <span className="text-white">{studentName}</span>
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-lg text-white flex gap-2 hover:bg-red-600"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;
