const SummaryCard = ({ label, value }) => {
  return (
    <div className="bg-[#131c31] border border-slate-700 rounded-2xl p-6">
      <p className="text-slate-400 text-sm">{label}</p>
      <p className="text-white text-2xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
};

export default SummaryCard;
