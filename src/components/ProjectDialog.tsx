import { ArrowUpRight, Github, Target, Lightbulb, Rocket, Calendar, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@/data/projects";

const highlights = [
  { label: "Challenge", Icon: Target, text: "challenge" },
  { label: "Solution", Icon: Lightbulb, text: "solution" },
  { label: "Result", Icon: Rocket, text: "result" },
] as const;

export function ProjectDialog({
  project,
  onOpenChange,
}: {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      <DialogContent>
        {project && (
          <div key={project.id}>
            <DialogHeader>
              <div className="mb-3 flex flex-wrap items-center gap-2.5">
                <span className="num text-sm text-muted-foreground">
                  {project.index} — {project.year}
                </span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((cat) => (
                    <Badge key={cat} variant="solid">
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.overview}</DialogDescription>
            </DialogHeader>

            <div className="mt-6 grid grid-cols-2 gap-6 border-y border-border py-6 sm:grid-cols-4">
              <div>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <User className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Role
                </p>
                <p className="mt-1.5 font-display text-lg">{project.role}</p>
              </div>
              <div className="col-span-2 sm:col-span-3">
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Technologies
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-8">
              {highlights.map(({ label, Icon, text }) => (
                <div key={label}>
                  <h4 className="flex items-center gap-2 font-display text-lg">
                    <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                    {label}
                  </h4>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {project[text]}
                  </p>
                </div>
              ))}
            </div>

            {(project.liveUrl && project.liveUrl !== "#") ||
            (project.githubUrl && project.githubUrl !== "#") ? (
              <>
                <Separator className="my-8" />
                <div className="flex flex-wrap gap-6">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm hover:text-clay transition-colors duration-300"
                    >
                      Live demo
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm hover:text-clay transition-colors duration-300"
                    >
                      <Github className="h-4 w-4" strokeWidth={1.5} />
                      Source
                    </a>
                  )}
                </div>
              </>
            ) : null}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}