import FusionSidebar from "@/components/FusionSidebar";
import FusionHeader from "@/components/FusionHeader";
import DashboardContent from "@/components/DashboardContent";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-background">
      <FusionSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <FusionHeader title="Dashboard" subtitle="Welcome back, Hòa" />

        <main className="flex-1 overflow-auto p-6">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
