import { useState } from "react";
import {
  Plus,
  MoreHorizontal,
  AlertCircle,
  MessageSquare,
  Paperclip,
  Calendar,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TaskStatus = "todo" | "in-progress" | "review" | "done";

interface Task {
  id: string;
  title: string;
  description?: string;
  priority: "low" | "medium" | "high" | "critical";
  assignee: string;
  comments: number;
  attachments: number;
  dueDate?: string;
}

interface Column {
  id: TaskStatus;
  title: string;
  tasks: Task[];
}

const initialColumns: Column[] = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "1",
        title: "User authentication flow",
        description: "Implement OAuth2 login",
        priority: "high",
        assignee: "H",
        comments: 3,
        attachments: 1,
        dueDate: "Jan 5",
      },
      {
        id: "2",
        title: "Database schema design",
        priority: "medium",
        assignee: "T",
        comments: 5,
        attachments: 2,
      },
      {
        id: "3",
        title: "API documentation",
        priority: "low",
        assignee: "M",
        comments: 0,
        attachments: 0,
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      {
        id: "4",
        title: "Frontend dashboard components",
        description: "Build reusable card components",
        priority: "high",
        assignee: "H",
        comments: 8,
        attachments: 3,
        dueDate: "Jan 3",
      },
      {
        id: "5",
        title: "Payment integration",
        priority: "critical",
        assignee: "D",
        comments: 12,
        attachments: 4,
        dueDate: "Jan 4",
      },
    ],
  },
  {
    id: "review",
    title: "In Review",
    tasks: [
      {
        id: "6",
        title: "Unit tests for auth module",
        priority: "medium",
        assignee: "T",
        comments: 4,
        attachments: 0,
      },
      {
        id: "7",
        title: "Mobile responsive design",
        priority: "high",
        assignee: "M",
        comments: 6,
        attachments: 2,
        dueDate: "Jan 6",
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      {
        id: "8",
        title: "Project setup & configuration",
        priority: "medium",
        assignee: "H",
        comments: 2,
        attachments: 1,
      },
      {
        id: "9",
        title: "CI/CD pipeline",
        priority: "high",
        assignee: "D",
        comments: 7,
        attachments: 3,
      },
      {
        id: "10",
        title: "Design system implementation",
        priority: "medium",
        assignee: "T",
        comments: 15,
        attachments: 8,
      },
    ],
  },
];

const getColumnStyles = (status: TaskStatus) => {
  switch (status) {
    case "todo":
      return "border-t-status-todo-foreground";
    case "in-progress":
      return "border-t-status-progress";
    case "review":
      return "border-t-status-review";
    case "done":
      return "border-t-status-done";
  }
};

const getPriorityStyles = (priority: string) => {
  switch (priority) {
    case "critical":
      return "bg-priority-critical/10 text-priority-critical";
    case "high":
      return "bg-priority-high/10 text-priority-high";
    case "medium":
      return "bg-priority-medium/10 text-priority-medium";
    default:
      return "bg-priority-low/10 text-priority-low";
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

const TaskBoard = () => {
  const [columns] = useState<Column[]>(initialColumns);

  return (
    <div className="h-full animate-fade-in">
      <div className="flex gap-4 h-full overflow-x-auto pb-4">
        {columns.map((column) => (
          <div key={column.id} className="flex-shrink-0 w-80">
            <Card className={`h-full border-t-4 ${getColumnStyles(column.id)}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-sm font-semibold">
                      {column.title}
                    </CardTitle>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                      {column.tasks.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-1 hover:bg-secondary rounded">
                      <Plus className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button className="p-1 hover:bg-secondary rounded">
                      <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3 max-h-[calc(100vh-280px)] overflow-y-auto">
                {column.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-3 bg-background rounded-lg border border-border hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer group"
                  >
                    {/* Priority Badge */}
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${getPriorityStyles(
                          task.priority
                        )}`}
                      >
                        {task.priority}
                      </span>
                      <button className="p-1 opacity-0 group-hover:opacity-100 hover:bg-secondary rounded transition-opacity">
                        <MoreHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
                      </button>
                    </div>

                    {/* Title */}
                    <h4 className="text-sm font-medium mb-1">{task.title}</h4>
                    {task.description && (
                      <p className="text-xs text-muted-foreground mb-3">
                        {task.description}
                      </p>
                    )}

                    {/* Meta Info */}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        {task.dueDate && (
                          <div className="flex items-center gap-1 text-xs">
                            <Calendar className="w-3 h-3" />
                            {task.dueDate}
                          </div>
                        )}
                        {task.comments > 0 && (
                          <div className="flex items-center gap-1 text-xs">
                            <MessageSquare className="w-3 h-3" />
                            {task.comments}
                          </div>
                        )}
                        {task.attachments > 0 && (
                          <div className="flex items-center gap-1 text-xs">
                            <Paperclip className="w-3 h-3" />
                            {task.attachments}
                          </div>
                        )}
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full ${getAvatarColor(
                          task.assignee
                        )} flex items-center justify-center text-primary-foreground text-xs font-medium`}
                      >
                        {task.assignee}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add Task Button */}
                <button className="w-full p-3 border border-dashed border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add task
                </button>
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Add Column Button */}
        <div className="flex-shrink-0 w-80">
          <button className="w-full h-32 border-2 border-dashed border-border rounded-lg text-muted-foreground hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
            <Plus className="w-5 h-5" />
            Add column
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
