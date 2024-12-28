import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { projects } from "@/constants";

export function ProjectsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-300">
        Featured Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardHeader>
              <CardTitle className="text-xl text-teal-600 dark:text-teal-400">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
