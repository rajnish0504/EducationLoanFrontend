const MyLoans = () => {
  return (
    <div className="bg-[#131c31] border border-slate-700 rounded-2xl p-6">
      <h2 className="text-white text-lg font-semibold mb-4">
        My Loans
      </h2>

      <table className="w-full text-sm text-slate-300">
        <thead>
          <tr className="border-b border-slate-600">
            <th className="text-left py-2">Loan ID</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-700">
            <td className="py-2">LN1023</td>
            <td className="text-yellow-400">Pending</td>
            <td>₹5,00,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyLoans;
