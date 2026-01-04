const HowItWorks = () => {
  const steps = [
    {
      title: "Register & Login",
      desc: "Create your student account securely and access your dashboard.",
    },
    {
      title: "Apply for Loan",
      desc: "Submit course details and loan requirements in a guided flow.",
    },
    {
      title: "Verification",
      desc: "Admin verifies documents and eligibility with transparency.",
    },
    {
      title: "Approval & EMI",
      desc: "Loan gets approved and EMI schedule is generated instantly.",
    },
  ];

  return (
    <section
      id="process"
      className="
        relative overflow-hidden
        py-32
        bg-grid
        bg-slate-50
        dark:bg-[#0e1629]
      "
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          How EduLoan Nexus Works
        </h2>

        <p className="text-center max-w-xl mx-auto mb-16">
          A transparent and structured loan journey designed for students.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex ${
                  i % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse"
                } items-start gap-8`}
              >
                {/* Step indicator */}
                <div
                  className="
                    relative z-10
                    h-10 w-10
                    rounded-full
                    bg-blue-600
                    text-white
                    flex items-center justify-center
                    font-bold
                    shadow-lg
                  "
                >
                  {i + 1}
                </div>

                {/* Card */}
                <div
                  className="
                    bg-white dark:bg-[#131c31]
                    border border-slate-200 dark:border-slate-700
                    rounded-2xl
                    p-6
                    shadow-sm hover:shadow-xl
                    transition
                    max-w-md
                  "
                >
                  <h3 className="font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
