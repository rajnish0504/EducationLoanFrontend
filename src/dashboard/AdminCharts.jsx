import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

const AdminCharts = ({ summary, trendData }) => {
  if (!summary) return null;

  const statusData = [
    { name: "Approved", value: summary.approvedApplications },
    { name: "Pending", value: summary.pendingApplications },
    { name: "Rejected", value: summary.rejectedApplications },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* ===== PIE ===== */}
      <div className="bg-[#131c31] border border-slate-700 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-4">
          Loan Status Overview
        </h3>

        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={statusData}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={100}
            >
              {statusData.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* ===== BAR ===== */}
      <div className="bg-[#131c31] border border-slate-700 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-4">
          Applications Trend
        </h3>

        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Bar
              dataKey="applications"
              fill="#3b82f6"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default AdminCharts;
