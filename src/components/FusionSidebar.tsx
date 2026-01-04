import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  MessageSquare,
  Settings,
  ChevronDown,
  Zap,
  Building2,
  Bell,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Task Board", href: "/tasks", icon: CheckSquare },
  { name: "Teams", href: "/teams", icon: Users },
  { name: "Feedback", href: "/feedback", icon: MessageSquare },
];

const bottomNavigation = [
  { name: "Settings", href: "/settings", icon: Settings },
];

const FusionSidebar = () => {
  return (
    <aside className="w-64 bg-sidebar flex flex-col h-screen border-r border-sidebar-hover">
      {/* Logo */}
      <div className="p-5 border-b border-sidebar-hover">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground tracking-tight">
              FUSION
            </h1>
            <p className="text-xs text-sidebar-muted">Enterprise Platform</p>
          </div>
        </div>
      </div>

      {/* Workspace Selector */}
      <div className="p-4">
        <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-sidebar-hover hover:bg-sidebar-hover/80 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-avatar-2 flex items-center justify-center">
            <Building2 className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-medium text-sidebar-foreground">
              good team
            </p>
            <p className="text-xs text-sidebar-muted">5 members</p>
          </div>
          <ChevronDown className="w-4 h-4 text-sidebar-muted" />
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-2 space-y-1">
        <p className="px-3 py-2 text-xs font-semibold text-sidebar-muted uppercase tracking-wider">
          Main Menu
        </p>
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.href === "/"}
            className="sidebar-item"
            activeClassName="sidebar-item-active"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Quick Stats */}
      <div className="px-4 py-3 mx-3 mb-3 rounded-lg bg-sidebar-hover">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-sidebar-muted">Active Tasks</span>
          <span className="text-xs font-semibold text-primary">12</span>
        </div>
        <div className="w-full h-1.5 bg-sidebar rounded-full overflow-hidden">
          <div className="w-3/4 h-full bg-primary rounded-full" />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="px-3 py-3 border-t border-sidebar-hover space-y-1">
        {bottomNavigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className="sidebar-item"
            activeClassName="sidebar-item-active"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-hover">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-avatar-4 flex items-center justify-center text-primary-foreground font-semibold text-sm">
            H
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-sidebar-foreground">Hòa</p>
            <p className="text-xs text-sidebar-muted">Project Manager</p>
          </div>
          <button className="relative p-1.5 rounded-lg hover:bg-sidebar-hover text-sidebar-muted">
            <Bell className="w-4 h-4" />
            <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-destructive rounded-full" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default FusionSidebar;
