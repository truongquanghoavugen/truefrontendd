import FusionSidebar from "@/components/FusionSidebar";
import FusionHeader from "@/components/FusionHeader";
import ProjectsGrid from "@/components/ProjectsGrid";

const Projects = () => {
  return (
    <div className="flex h-screen bg-background">
      <FusionSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <FusionHeader title="Projects" subtitle="Manage your team's projects" />

        <main className="flex-1 overflow-auto p-6">
          <ProjectsGrid />
        </main>
      </div>
    </div>
  );
};

export default Projects;
