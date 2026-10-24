import { ArrowUpRight, Github, Layers, Lightbulb, Rocket, Target, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

const highlights = [
  { label: "Challenge", Icon: Target, key: "challenge" },
  { label: "Solution", Icon: Lightbulb, key: "solution" },
  { label: "Result", Icon: Rocket, key: "result" },
] as const;

export function ProjectDialog({
  project,
  open,
  onOpenChange,
}: {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="flex flex-col gap-6">
          <DialogHeader>
            <div className="flex flex-wrap items-center gap-2">
              <span className="num text-sm text-muted-foreground">
                {project.index} — {project.year}
              </span>
              {project.categories.map((cat) => (
                <Badge key={cat} variant="solid">
                  {cat}
                </Badge>
              ))}
            </div>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>{project.overview}</DialogDescription>
          </DialogHeader>

          <dl className="grid gap-4 border-y border-border py-4 sm:grid-cols-[auto_1fr] sm:gap-x-8">
            <div className="flex flex-col gap-1">
              <dt className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <User className="size-3.5" strokeWidth={1.5} aria-hidden />
                Role
              </dt>
              <dd className="font-medium">{project.role}</dd>
            </div>
            <div className="flex flex-col gap-2">
              <dt className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Layers className="size-3.5" strokeWidth={1.5} aria-hidden />
                Technologies
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li key={t}>
                      <Badge>{t}</Badge>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          <div className="flex flex-col gap-5">
            {highlights.map(({ label, Icon, key }) => (
              <section key={label} className="flex flex-col gap-2">
                <h3 className="flex items-center gap-2 font-display text-lg font-medium">
                  <Icon className="size-4 text-accent" strokeWidth={1.5} aria-hidden />
                  {label}
                </h3>
                <p className="text-muted-foreground">{project[key]}</p>
              </section>
            ))}
          </div>

          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-3 border-t border-border pt-6">
              {project.liveUrl && (
                <Button asChild size="sm">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live demo
                    <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden />
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild size="sm" variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="size-4" strokeWidth={1.5} aria-hidden />
                    Source
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
