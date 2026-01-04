import {
  LayoutGrid,
  Clock,
  Star,
  Grid3X3,
  FileText,
  Folder,
  Users,
  MoreHorizontal,
  MessageSquare,
} from "lucide-react";

const navItems = [
  { icon: LayoutGrid, label: "For you", active: true },
  { icon: Clock, label: "Recent" },
  { icon: Star, label: "Starred" },
  { icon: Grid3X3, label: "Apps" },
  { icon: FileText, label: "Plans" },
  { icon: Folder, label: "Spaces" },
  { icon: Users, label: "Teams" },
  { icon: MoreHorizontal, label: "More" },
];

const Sidebar = () => {
  return (
    <aside className="w-56 h-screen bg-sidebar border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-4 flex items-center gap-2">
        <div className="w-7 h-7 bg-primary rounded flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">F</span>
        </div>
        <span className="font-semibold text-foreground">Fusion</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2">
        <ul className="space-y-0.5">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`sidebar-item ${
                  item.active ? "sidebar-item-active" : ""
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <a href="#" className="sidebar-item text-xs">
          <MessageSquare className="w-4 h-4" />
          <span>Give feedback on the n...</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
