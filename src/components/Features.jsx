import {
  FileText,
  LineChart,
  ShieldCheck,
  Zap,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Quick Online Loan Application",
      icon: FileText,
    },
    {
      title: "Real-Time EMI Tracking",
      icon: LineChart,
    },
    {
      title: "Secure Document Upload",
      icon: ShieldCheck,
    },
    {
      title: "Fast Admin Approval Workflow",
      icon: Zap,
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-grid bg-slate-50 dark:bg-[#0e1629]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Why Choose EduLoan Nexus?
        </h2>

        <p className="mt-4 max-w-2xl mx-auto">
          Designed to simplify education financing with clarity, security, and control.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  p-8 rounded-2xl
                  bg-white dark:bg-[#131c31]
                  border border-slate-200 dark:border-slate-700
                  shadow-sm hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300
                  text-left
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-12 h-12 mb-4
                    flex items-center justify-center
                    rounded-xl
                    bg-blue-100 dark:bg-blue-900/30
                    text-blue-600 dark:text-blue-400
                    group-hover:scale-110
                    transition
                  "
                >
                  <Icon size={22} />
                </div>

                {/* Title */}
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-24 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
    </section>
  );
};

export default Features;
