import { Search, Plus, Bell, HelpCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FusionHeaderProps {
  title?: string;
  subtitle?: string;
}

const FusionHeader = ({ title = "Dashboard", subtitle }: FusionHeaderProps) => {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      {/* Left: Page Title */}
      <div>
        <h1 className="text-xl font-bold text-foreground">{title}</h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-64 h-9 pl-9 pr-4 bg-secondary border-0 rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Create Button */}
        <Button size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          Create
          <ChevronDown className="w-3 h-3 ml-1" />
        </Button>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
        </button>

        {/* Help */}
        <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default FusionHeader;
