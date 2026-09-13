import { ArrowUpRight, Github } from "lucide-react";
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
          <>
            <DialogHeader>
              <span className="num text-sm text-muted-foreground">
                {project.index} — {project.year}
              </span>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.overview}</DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-2 gap-6 border-y border-border py-6 sm:grid-cols-4">
              <div>
                <p className="text-sm text-muted-foreground">Role</p>
                <p className="mt-1 font-display text-lg">{project.role}</p>
              </div>
              <div className="col-span-2 sm:col-span-3">
                <p className="text-sm text-muted-foreground">Technologies</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-8">
              <div>
                <h4 className="font-display text-lg">Challenge</h4>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h4 className="font-display text-lg">Solution</h4>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </div>
              <div>
                <h4 className="font-display text-lg">Result</h4>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {project.result}
                </p>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="flex flex-wrap gap-6">
              {project.liveUrl && (
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
              {project.githubUrl && (
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
        )}
      </DialogContent>
    </Dialog>
  );
}
