import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import DashboardHome from "./DashboardHome";

const StudentDashboard = () => {
  return (
    <div className="flex bg-[#0b1220] min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-8">
          <DashboardHome />
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
