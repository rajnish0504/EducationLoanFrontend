import { useState } from "react";

const EMICalculator = () => {
  const [loan, setLoan] = useState(500000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(5);

  const r = rate / 12 / 100;
  const n = years * 12;
  const emi =
    loan && rate && years
      ? (loan * r * Math.pow(1 + r, n)) /
        (Math.pow(1 + r, n) - 1)
      : 0;

  return (
    <section
      id="emi"
      className="
        relative overflow-hidden
        py-32
        bg-grid bg-sparks
        bg-white
        dark:bg-[#0b1220]
      "
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          EMI Calculator
        </h2>

        <p className="max-w-xl mx-auto mb-14">
          Instantly estimate your monthly education loan EMI with transparent
          calculations and no hidden charges.
        </p>

        {/* Calculator Card */}
        <div
          className="
            bg-white dark:bg-[#131c31]
            border border-slate-200 dark:border-slate-700
            rounded-2xl
            shadow-xl
            p-10
            grid gap-6 sm:grid-cols-3
          "
        >
          {/* Loan Amount */}
          <div className="flex flex-col gap-2 text-left">
            <label className="text-sm font-medium">
              Loan Amount (₹)
            </label>
            <input
              type="number"
              value={loan}
              onChange={(e) => setLoan(e.target.value)}
              className="
                px-4 py-3 rounded-lg
                border border-slate-300 dark:border-slate-600
                bg-white dark:bg-slate-800
                focus:outline-none
                focus:ring-2 focus:ring-blue-500/40
                transition
              "
            />
          </div>

          {/* Interest Rate */}
          <div className="flex flex-col gap-2 text-left">
            <label className="text-sm font-medium">
              Interest Rate (%)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="
                px-4 py-3 rounded-lg
                border border-slate-300 dark:border-slate-600
                bg-white dark:bg-slate-800
                focus:outline-none
                focus:ring-2 focus:ring-blue-500/40
                transition
              "
            />
          </div>

          {/* Tenure */}
          <div className="flex flex-col gap-2 text-left">
            <label className="text-sm font-medium">
              Tenure (Years)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="
                px-4 py-3 rounded-lg
                border border-slate-300 dark:border-slate-600
                bg-white dark:bg-slate-800
                focus:outline-none
                focus:ring-2 focus:ring-blue-500/40
                transition
              "
            />
          </div>
        </div>

        {/* Result */}
        <div className="mt-14">
          <p className="text-sm uppercase tracking-wider">
            Monthly EMI
          </p>

          <p
            className="
              mt-3
              text-4xl sm:text-5xl
              font-extrabold
              text-blue-600 dark:text-blue-400
            "
          >
            ₹ {emi.toFixed(0)}
          </p>

          <p className="mt-3 text-sm">
            Calculated based on standard reducing balance method.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;
