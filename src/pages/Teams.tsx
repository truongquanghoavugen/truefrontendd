import { useState } from "react";
import FusionSidebar from "@/components/FusionSidebar";
import FusionHeader from "@/components/FusionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Plus, MoreHorizontal, Mail, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Member {
  id: number;
  name: string;
  role: string;
  initial: string;
}

interface Team {
  id: number;
  name: string;
  description: string;
  members: Member[];
}

const initialTeams: Team[] = [
  {
    id: 1,
    name: "good team",
    description: "Main development team for enterprise projects",
    members: [
      { id: 1, name: "Hòa", role: "Project Manager", initial: "H" },
      { id: 2, name: "Tuấn", role: "Senior Developer", initial: "T" },
      { id: 3, name: "Minh", role: "UI/UX Designer", initial: "M" },
      { id: 4, name: "Dũng", role: "Backend Developer", initial: "D" },
      { id: 5, name: "Lan", role: "QA Engineer", initial: "L" },
    ],
  },
  {
    id: 2,
    name: "Mobile Squad",
    description: "Dedicated team for mobile application development",
    members: [
      { id: 6, name: "Nam", role: "Mobile Lead", initial: "N" },
      { id: 7, name: "Hương", role: "iOS Developer", initial: "H" },
    ],
  },
];

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

const Teams = () => {
  const [teams, setTeams] = useState<Team[]>(initialTeams);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newTeamName, setNewTeamName] = useState("");
  const [newTeamDescription, setNewTeamDescription] = useState("");

  const handleCreateTeam = () => {
    if (!newTeamName.trim()) return;

    const newTeam: Team = {
      id: Date.now(),
      name: newTeamName,
      description: newTeamDescription || "New team",
      members: [
        { id: Date.now(), name: "Hòa", role: "Team Lead", initial: "H" },
      ],
    };

    setTeams([newTeam, ...teams]);
    setNewTeamName("");
    setNewTeamDescription("");
    setIsCreateDialogOpen(false);
  };

  return (
    <div className="flex h-screen bg-background">
      <FusionSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <FusionHeader
          title="Teams"
          subtitle="Manage your organization's teams"
        />

        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6 animate-fade-in">
            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Users className="w-4 h-4" />
                  All Teams
                </Button>
                <Button variant="ghost" size="sm">
                  My Teams
                </Button>
              </div>
              <Button
                size="sm"
                className="gap-2"
                onClick={() => setIsCreateDialogOpen(true)}
              >
                <Plus className="w-4 h-4" />
                Create Team
              </Button>
            </div>

            {/* Teams Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {teams.map((team) => (
                <Card key={team.id} className="card-hover">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{team.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {team.members.length} members
                          </p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-secondary rounded-lg">
                        <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {team.description}
                    </p>

                    {/* Members List */}
                    <div className="space-y-3">
                      {team.members.map((member) => (
                        <div
                          key={member.id}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-full ${getAvatarColor(
                                member.initial
                              )} flex items-center justify-center text-primary-foreground text-sm font-medium`}
                            >
                              {member.initial}
                            </div>
                            <div>
                              <p className="text-sm font-medium">
                                {member.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {member.role}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 hover:bg-secondary rounded-lg text-muted-foreground">
                              <Mail className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 hover:bg-secondary rounded-lg text-muted-foreground">
                              <Shield className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add Member */}
                    <button className="w-full mt-4 p-2.5 border border-dashed border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" />
                      Add Member
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Create Team Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Team</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="teamName">Team Name</Label>
              <Input
                id="teamName"
                placeholder="e.g., bad team"
                value={newTeamName}
                onChange={(e) => setNewTeamName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="teamDescription">Description (optional)</Label>
              <Input
                id="teamDescription"
                placeholder="What does this team do?"
                value={newTeamDescription}
                onChange={(e) => setNewTeamDescription(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Members</Label>
              <div className="p-3 border border-border rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full ${getAvatarColor(
                      "H"
                    )} flex items-center justify-center text-primary-foreground text-sm font-medium`}
                  >
                    H
                  </div>
                  <div>
                    <p className="text-sm font-medium">Hòa</p>
                    <p className="text-xs text-muted-foreground">
                      Team Lead (You)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsCreateDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleCreateTeam} disabled={!newTeamName.trim()}>
              Create Team
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Teams;
