import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { label: "Dashboard", path: "/student/dashboard" },
    { label: "Apply for Loan", path: "/apply-loan" },
    { label: "My Loans", path: "/student/loans" },
    { label: "Documents", path: "/student/documents" },
    { label: "Support", path: "/student/support" },
  ];

  return (
    <aside className="w-64 bg-[#0e1629] border-r border-slate-700 min-h-screen px-6 py-8">
      <h2 className="text-xl font-bold text-blue-500 mb-12">
        EduLoan
      </h2>

      <nav className="space-y-2 text-sm">
        {menu.map((item) => (
          <div
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`
              px-4 py-3 rounded-lg cursor-pointer
              ${
                location.pathname === item.path
                  ? "bg-blue-500/20 text-white border-l-4 border-blue-500"
                  : "text-slate-400 hover:bg-blue-500/10 hover:text-white"
              }
              transition-all
            `}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
