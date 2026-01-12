const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#0e1629] border-r border-slate-700 min-h-screen p-6">
      <h2 className="text-xl font-bold text-blue-500 mb-10 tracking-wide">
        EduLoan Nexus
      </h2>

      <nav className="space-y-3 text-sm">
        {["Dashboard", "My Loans", "EMI Details", "Profile"].map(
          (item, i) => (
            <div
              key={i}
              className="
                px-4 py-3 rounded-lg cursor-pointer
                text-slate-300
                hover:bg-blue-500/10
                hover:text-white
                border-l-4 border-transparent
                hover:border-blue-500
                transition-all duration-300
              "
            >
              {item}
            </div>
          )
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
