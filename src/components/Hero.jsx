import { useEffect } from "react";
import circuit from "../assets/circuit.svg";

const Hero = () => {
  // 🔥 Scroll-reactive energy control
 useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = 700;
    const progress = Math.min(scrollY / maxScroll, 1);

    // Energy speed
    const speed = 6 - progress * 3; // 6s → 3s
    const glow = 0.35 + progress * 0.4;

    // Color temperature shift (blue → indigo)
    const hue = 210 + progress * 20; // 210 → 230

    document.documentElement.style.setProperty(
      "--energy-speed",
      `${speed}s`
    );
    document.documentElement.style.setProperty(
      "--energy-glow",
      glow.toString()
    );
    document.documentElement.style.setProperty(
      "--energy-hue",
      hue.toString()
    );
  };

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    document.documentElement.style.setProperty("--energy-x", `${x}%`);
    document.documentElement.style.setProperty("--energy-y", `${y}%`);
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

  return (
    <section
  id="hero"
  className="
    relative overflow-hidden
    bg-grid bg-energy bg-sparks bg-reactive
    bg-gradient-to-br
    from-blue-50 via-white to-white
    dark:from-[#0b1220] dark:via-[#0e1629] dark:to-[#0b1220]
  "
>

      {/* SVG Circuit Traces */}
      <img
        src={circuit}
        alt=""
        className="
          circuit-svg
          absolute inset-0 w-full h-full
          object-cover
          opacity-25 dark:opacity-35
          pointer-events-none
        "
      />

      {/* Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 dark:bg-blue-400/10 blur-3xl rounded-full" />
      <div className="absolute top-40 -right-24 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-400/10 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-28 grid md:grid-cols-2 gap-14 items-center animate-fade-up">
        {/* Left Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Smart Education Loans <br />
            <span className="text-blue-600 dark:text-blue-400">
              For a Smarter Future
            </span>
          </h1>

          <p className="mt-6 max-w-xl">
            Apply, manage, and track your education loan with complete
            transparency, security, and ease — all in one powerful platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              className="
                bg-blue-600 text-white
                px-7 py-3 rounded-xl
                shadow-md hover:shadow-lg
                hover:bg-blue-700
                transition
              "
            >
              Apply for Loan
            </button>

            <button
              onClick={() =>
                document.getElementById("emi")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="
                border border-slate-300 dark:border-slate-600
                px-7 py-3 rounded-xl
                hover:bg-slate-100 dark:hover:bg-slate-800
                transition
              "
            >
              Calculate EMI
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="hidden md:block">
          <div
            className="
              bg-white dark:bg-[#131c31]
              p-8 rounded-2xl
              shadow-xl
              border border-slate-200 dark:border-slate-700
            "
          >
            <h3 className="text-lg font-semibold mb-3">
              Trusted Platform
            </h3>
            <p>
              Built with modern security, scalable architecture, and
              role-based access to support students throughout their
              education journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
