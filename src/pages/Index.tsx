import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import TeamProfile from "@/components/TeamProfile";

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-6">
          {/* For You Section */}
          <section className="mb-8">
            <h1 className="text-lg font-semibold text-foreground mb-4">
              For you
            </h1>
            <ProjectCard />
          </section>

          {/* Team Profile */}
          <TeamProfile />
        </main>
      </div>
    </div>
  );
};

export default Index;
