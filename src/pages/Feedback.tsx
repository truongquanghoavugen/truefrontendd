import FusionSidebar from "@/components/FusionSidebar";
import FusionHeader from "@/components/FusionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MessageSquare,
  Plus,
  Filter,
  Search,
  AlertCircle,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const feedbackItems = [
  {
    id: 1,
    title: "Login page not loading on mobile",
    description:
      "Users are reporting that the login page fails to load on iOS devices when using Safari browser.",
    status: "Open",
    priority: "High",
    submitter: "Customer A",
    date: "Jan 2, 2026",
    project: "Customer Portal",
  },
  {
    id: 2,
    title: "Request for dark mode feature",
    description:
      "Multiple users have requested a dark mode option for the dashboard interface.",
    status: "In Review",
    priority: "Medium",
    submitter: "Customer B",
    date: "Jan 1, 2026",
    project: "Admin Panel",
  },
  {
    id: 3,
    title: "Export functionality not working",
    description:
      "CSV export button is not responding when clicked on the reports page.",
    status: "Resolved",
    priority: "Critical",
    submitter: "Customer C",
    date: "Dec 30, 2025",
    project: "Analytics Dashboard",
  },
  {
    id: 4,
    title: "Improve search performance",
    description:
      "Search results are taking too long to load when searching through large datasets.",
    status: "Open",
    priority: "High",
    submitter: "Customer D",
    date: "Dec 29, 2025",
    project: "E-commerce Platform",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Open":
      return <AlertCircle className="w-4 h-4 text-status-review" />;
    case "In Review":
      return <Clock className="w-4 h-4 text-primary" />;
    case "Resolved":
      return <CheckCircle className="w-4 h-4 text-status-done" />;
    case "Closed":
      return <XCircle className="w-4 h-4 text-muted-foreground" />;
    default:
      return <AlertCircle className="w-4 h-4" />;
  }
};

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Open":
      return "bg-status-review/10 text-status-review";
    case "In Review":
      return "bg-primary/10 text-primary";
    case "Resolved":
      return "bg-status-done/10 text-status-done";
    default:
      return "bg-secondary text-muted-foreground";
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

const Feedback = () => {
  return (
    <div className="flex h-screen bg-background">
      <FusionSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <FusionHeader
          title="Feedback"
          subtitle="Customer feedback and requests"
        />

        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6 animate-fade-in">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-status-review/10">
                    <AlertCircle className="w-5 h-5 text-status-review" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-xs text-muted-foreground">Open</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">5</p>
                    <p className="text-xs text-muted-foreground">In Review</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-status-done/10">
                    <CheckCircle className="w-5 h-5 text-status-done" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">24</p>
                    <p className="text-xs text-muted-foreground">Resolved</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary">
                    <MessageSquare className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">37</p>
                    <p className="text-xs text-muted-foreground">Total</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search feedback..."
                    className="w-64 h-9 pl-9 pr-4 bg-secondary border-0 rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </div>
              <Button size="sm" className="gap-2">
                <Plus className="w-4 h-4" />
                Submit Feedback
              </Button>
            </div>

            {/* Feedback List */}
            <Card>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {feedbackItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 hover:bg-secondary/30 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          {getStatusIcon(item.status)}
                          <div>
                            <h4 className="text-sm font-medium mb-1">
                              {item.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                              {item.description}
                            </p>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span>{item.project}</span>
                              <span>•</span>
                              <span>{item.submitter}</span>
                              <span>•</span>
                              <span>{item.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-medium ${getPriorityStyles(
                              item.priority
                            )}`}
                          >
                            {item.priority}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${getStatusStyles(
                              item.status
                            )}`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Feedback;
