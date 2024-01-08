import DashboardPanel from "../components/layouts/DashboardLayout/DashboardPanel";
import Header from "../components/Header";
import Sidebar from "../components/layouts/DashboardLayout/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="flex gap-6 relative z-0  bg-[#F7F8FA]">
        <Sidebar />
        <DashboardPanel />
      </div>
    </div>
  );
}
