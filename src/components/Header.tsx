import { Search, Bell, HelpCircle, Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="h-14 border-b border-border bg-background flex items-center justify-between px-6">
      {/* Search */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search"
          className="pl-10 bg-secondary border-border"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Plus className="w-4 h-4 mr-1" />
          Create
        </Button>

        <button className="p-2 rounded-md hover:bg-secondary text-muted-foreground">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-md hover:bg-secondary text-muted-foreground">
          <HelpCircle className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-md hover:bg-secondary text-muted-foreground">
          <Settings className="w-5 h-5" />
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-primary-foreground font-medium text-sm ml-2">
          H
        </div>
      </div>
    </header>
  );
};

export default Header;
