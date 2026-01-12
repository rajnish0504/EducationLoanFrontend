const Topbar = () => {
  return (
    <div className="
      h-16 flex items-center justify-between px-6
      border-b border-slate-700
      bg-[#0b1220]/80 backdrop-blur
    ">
      <h1 className="text-white font-semibold tracking-wide">
        Student Dashboard
      </h1>

      <button className="
        bg-red-500/90 text-white px-4 py-2 rounded-xl
        hover:bg-red-600 hover:scale-105
        transition font-medium
      ">
        Logout
      </button>
    </div>
  );
};

export default Topbar;
