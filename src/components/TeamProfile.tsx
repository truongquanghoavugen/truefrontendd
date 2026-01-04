import { Users, MoreHorizontal, Plus, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeamProfile = () => {
  return (
    <div className="flex-1">
      {/* Team Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold text-lg text-foreground">good team</h2>
            <p className="text-sm text-muted-foreground">Team</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Add people
          </Button>
          <button className="p-2 rounded-md hover:bg-secondary text-muted-foreground">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border mb-6">
        <div className="flex gap-6">
          <button className="pb-3 text-sm font-medium text-primary border-b-2 border-primary">
            About
          </button>
          <button className="pb-3 text-sm text-muted-foreground hover:text-foreground">
            Activity
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="flex gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <section className="mb-8">
            <h3 className="font-medium text-foreground mb-2">
              What we're doing
            </h3>
            <p className="text-sm text-muted-foreground">
              There ain't no team like a team with a description.
            </p>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-foreground">Members</h3>
                <span className="text-xs bg-badge text-badge-foreground px-1.5 py-0.5 rounded">
                  1
                </span>
              </div>
              <button className="p-1 rounded hover:bg-secondary text-muted-foreground">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Member Card */}
            <div className="border border-border rounded-lg p-4 flex items-center gap-3 max-w-md">
              <div className="w-12 h-12 bg-avatar-orange rounded-md flex items-center justify-center text-avatar-orange-foreground font-semibold text-xl">
                H
              </div>
              <span className="text-sm text-foreground">Hòa</span>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="w-64">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-foreground">Team links</h3>
              <div className="flex items-center gap-1">
                <span className="text-xs bg-badge text-badge-foreground px-1.5 py-0.5 rounded">
                  0
                </span>
                <button className="p-1 rounded hover:bg-secondary text-muted-foreground">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
                    <span className="text-primary-foreground text-xs font-bold">
                      J
                    </span>
                  </div>
                  Add Fusion Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <LinkIcon className="w-4 h-4" />
                  Add Link
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-3">Details</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Parent team</dt>
                <dd className="text-foreground">No parent team</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Sub-teams</dt>
                <dd className="text-foreground">No sub-teams</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Team type</dt>
                <dd className="text-foreground">Team</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TeamProfile;
