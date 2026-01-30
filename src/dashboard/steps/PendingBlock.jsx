const PendingBlock = () => (
  <div className="bg-yellow-500/10 border border-yellow-500 p-6 rounded-xl">
    <h2 className="text-yellow-400 font-semibold text-lg mb-2">
      Pending Loan Exists
    </h2>
    <p className="text-slate-300">
      You already have a pending loan application.
      Please wait until it is approved or rejected.
    </p>
  </div>
);

export default PendingBlock;
