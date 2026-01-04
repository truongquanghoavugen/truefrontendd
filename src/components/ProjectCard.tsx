const ProjectCard = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 w-80 shadow-sm">
      <h3 className="font-semibold text-foreground">My Scrum Project</h3>
      <p className="text-sm text-muted-foreground mt-1">
        Team-managed software
      </p>

      <div className="mt-4">
        <p className="text-xs text-muted-foreground font-medium">Quick links</p>
        <ul className="mt-2 space-y-1">
          <li>
            <a
              href="#"
              className="text-sm text-foreground hover:text-primary flex items-center justify-between"
            >
              <span>My open work items</span>
              <span className="text-xs bg-badge text-badge-foreground px-1.5 py-0.5 rounded">
                0
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Done work items
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
