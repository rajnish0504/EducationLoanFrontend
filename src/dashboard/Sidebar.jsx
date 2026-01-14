const Sidebar = () => {
  return (
    <aside className="
      w-64 bg-[#0e1629]
      border-r border-slate-700
      min-h-screen px-6 py-8
    ">
      <h2 className="text-xl font-bold text-blue-500 mb-12 tracking-wide">
        EduLoan
      </h2>

      <nav className="space-y-2 text-sm">
        {[
          "Dashboard",
          "Apply for Loan",
          "My Loans",
          "Payments",
          "Documents",
          "Support",
        ].map((item, i) => (
          <div
            key={i}
            className="
              flex items-center px-4 py-3 rounded-lg
              text-slate-400 cursor-pointer
              hover:bg-blue-500/10 hover:text-white
              border-l-4 border-transparent
              hover:border-blue-500
              transition-all
            "
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
