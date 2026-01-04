import {
  FolderKanban,
  CheckSquare,
  Users,
  TrendingUp,
  Clock,
  AlertCircle,
  ArrowUpRight,
  MoreHorizontal,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    name: "Active Projects",
    value: "8",
    change: "+2 this month",
    icon: FolderKanban,
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Open Tasks",
    value: "42",
    change: "12 due today",
    icon: CheckSquare,
    color: "bg-status-review/10 text-status-review",
  },
  {
    name: "Team Members",
    value: "15",
    change: "+3 this week",
    icon: Users,
    color: "bg-status-done/10 text-status-done",
  },
  {
    name: "Completion Rate",
    value: "87%",
    change: "+5% vs last month",
    icon: TrendingUp,
    color: "bg-priority-critical/10 text-priority-critical",
  },
];

const recentTasks = [
  {
    id: 1,
    title: "Fix login authentication bug",
    project: "Customer Portal",
    status: "In Progress",
    priority: "High",
    assignee: "H",
  },
  {
    id: 2,
    title: "Design new dashboard layout",
    project: "Admin Panel",
    status: "Review",
    priority: "Medium",
    assignee: "T",
  },
  {
    id: 3,
    title: "API integration for payments",
    project: "E-commerce",
    status: "Todo",
    priority: "Critical",
    assignee: "M",
  },
  {
    id: 4,
    title: "Mobile responsive fixes",
    project: "Customer Portal",
    status: "Done",
    priority: "Low",
    assignee: "H",
  },
  {
    id: 5,
    title: "Database optimization",
    project: "Backend",
    status: "In Progress",
    priority: "High",
    assignee: "D",
  },
];

const upcomingDeadlines = [
  { id: 1, title: "Sprint 12 Release", date: "Jan 5, 2026", type: "Release" },
  { id: 2, title: "Client Demo", date: "Jan 8, 2026", type: "Meeting" },
  { id: 3, title: "Q1 Planning", date: "Jan 10, 2026", type: "Planning" },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-status-progress text-status-progress-foreground";
    case "Review":
      return "bg-status-review text-status-review-foreground";
    case "Done":
      return "bg-status-done text-status-done-foreground";
    default:
      return "bg-status-todo text-status-todo-foreground";
  }
};

const getPriorityStyles = (priority: string) => {
  switch (priority) {
    case "Critical":
      return "text-priority-critical";
    case "High":
      return "text-priority-high";
    case "Medium":
      return "text-priority-medium";
    default:
      return "text-priority-low";
  }
};

const DashboardContent = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="card-hover">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.name}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.change}
                  </p>
                </div>
                <div className={`p-2.5 rounded-xl ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Tasks */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold">
                Recent Tasks
              </CardTitle>
              <button className="text-sm text-primary hover:underline flex items-center gap-1">
                View all
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {recentTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-avatar-1 flex items-center justify-center text-primary-foreground text-xs font-medium">
                      {task.assignee}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{task.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {task.project}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertCircle
                      className={`w-4 h-4 ${getPriorityStyles(task.priority)}`}
                    />
                    <span
                      className={`status-badge ${getStatusStyles(task.status)}`}
                    >
                      {task.status}
                    </span>
                    <button className="p-1 hover:bg-background rounded">
                      <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold">
                Upcoming
              </CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-4">
              {upcomingDeadlines.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">
                        {item.date}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs font-medium text-muted-foreground mb-3">
                Quick Actions
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button className="p-2.5 text-xs font-medium text-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  New Task
                </button>
                <button className="p-2.5 text-xs font-medium text-center rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                  New Project
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent;
