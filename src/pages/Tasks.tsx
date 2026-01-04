import FusionSidebar from "@/components/FusionSidebar";
import FusionHeader from "@/components/FusionHeader";
import TaskBoard from "@/components/TaskBoard";

const Tasks = () => {
  return (
    <div className="flex h-screen bg-background">
      <FusionSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <FusionHeader
          title="Task Board"
          subtitle="Customer Portal - Sprint 12"
        />

        <main className="flex-1 overflow-auto p-6">
          <TaskBoard />
        </main>
      </div>
    </div>
  );
};

export default Tasks;
