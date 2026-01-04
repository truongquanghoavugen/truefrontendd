import {
  FolderKanban,
  Users,
  CheckSquare,
  MoreHorizontal,
  Star,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    name: "Customer Portal",
    description:
      "Main customer-facing web application with user dashboard and support features",
    status: "Active",
    progress: 68,
    tasks: { total: 45, completed: 31 },
    team: ["H", "T", "M"],
    starred: true,
  },
  {
    id: 2,
    name: "Admin Panel",
    description: "Internal administration dashboard for system management",
    status: "Active",
    progress: 42,
    tasks: { total: 32, completed: 13 },
    team: ["D", "H"],
    starred: false,
  },
  {
    id: 3,
    name: "E-commerce Platform",
    description: "Full-featured online store with payment integration",
    status: "On Hold",
    progress: 25,
    tasks: { total: 78, completed: 19 },
    team: ["T", "M", "D", "H"],
    starred: true,
  },
  {
    id: 4,
    name: "Mobile App",
    description: "React Native mobile application for iOS and Android",
    status: "Planning",
    progress: 10,
    tasks: { total: 50, completed: 5 },
    team: ["M"],
    starred: false,
  },
  {
    id: 5,
    name: "Backend API",
    description: "RESTful API services and microservices architecture",
    status: "Active",
    progress: 85,
    tasks: { total: 28, completed: 24 },
    team: ["D", "T"],
    starred: false,
  },
  {
    id: 6,
    name: "Analytics Dashboard",
    description: "Business intelligence and reporting system",
    status: "Active",
    progress: 55,
    tasks: { total: 35, completed: 19 },
    team: ["H", "M"],
    starred: false,
  },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-status-done/10 text-status-done";
    case "On Hold":
      return "bg-status-review/10 text-status-review";
    case "Planning":
      return "bg-primary/10 text-primary";
    default:
      return "bg-secondary text-muted-foreground";
  }
};

const getAvatarColor = (initial: string) => {
  const colors = [
    "bg-avatar-1",
    "bg-avatar-2",
    "bg-avatar-3",
    "bg-avatar-4",
    "bg-avatar-5",
  ];
  return colors[initial.charCodeAt(0) % colors.length];
};

const ProjectsGrid = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="gap-2">
            <FolderKanban className="w-4 h-4" />
            All Projects
          </Button>
          <Button variant="ghost" size="sm">
            Active
          </Button>
          <Button variant="ghost" size="sm">
            Starred
          </Button>
          <Button variant="ghost" size="sm">
            Archived
          </Button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="card-hover group cursor-pointer">
            <CardContent className="p-5">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FolderKanban className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${getStatusStyles(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    className={`p-1 rounded ${
                      project.starred
                        ? "text-status-review"
                        : "text-muted-foreground opacity-0 group-hover:opacity-100"
                    } transition-all`}
                  >
                    <Star
                      className={`w-4 h-4 ${
                        project.starred ? "fill-current" : ""
                      }`}
                    />
                  </button>
                  <button className="p-1 rounded hover:bg-secondary text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckSquare className="w-3.5 h-3.5" />
                    {project.tasks.completed}/{project.tasks.total}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {project.team.length}
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {project.team.slice(0, 3).map((member, idx) => (
                    <div
                      key={idx}
                      className={`w-6 h-6 rounded-full ${getAvatarColor(
                        member
                      )} flex items-center justify-center text-primary-foreground text-xs font-medium border-2 border-card`}
                    >
                      {member}
                    </div>
                  ))}
                  {project.team.length > 3 && (
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-medium border-2 border-card">
                      +{project.team.length - 3}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add New Project Card */}
        <Card className="border-dashed border-2 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
          <CardContent className="p-5 h-full flex flex-col items-center justify-center text-center min-h-[200px]">
            <div className="w-12 h-12 rounded-xl bg-secondary group-hover:bg-primary/10 flex items-center justify-center mb-3 transition-colors">
              <FolderKanban className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-medium text-muted-foreground group-hover:text-primary transition-colors">
              Create New Project
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Start a new project from scratch
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectsGrid;
