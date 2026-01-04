const Footer = () => {
  return (
    <footer
      className="
        relative overflow-hidden
        bg-grid
        bg-slate-900
        text-slate-300
      "
    >
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-8 text-center">
        {/* Brand */}
        <h3 className="text-base font-semibold text-white tracking-wide">
          EduLoan Nexus
        </h3>

        {/* Tagline */}
        <p className="mt-2 max-w-md mx-auto text-xs text-slate-400">
          Secure & transparent education loan management platform.
        </p>

        {/* Links */}
        <div className="mt-4 flex flex-wrap justify-center gap-5 text-xs">
          <span className="hover:text-blue-400 transition cursor-pointer">
            Features
          </span>
          <span className="hover:text-blue-400 transition cursor-pointer">
            EMI Calculator
          </span>
          <span className="hover:text-blue-400 transition cursor-pointer">
            How It Works
          </span>
          <span className="hover:text-blue-400 transition cursor-pointer">
            Contact
          </span>
        </div>

        {/* Bottom line */}
        <div className="mt-4 text-[11px] text-slate-500">
          © 2026 EduLoan Nexus · React & Spring Boot
        </div>
      </div>
    </footer>
  );
};

export default Footer;
