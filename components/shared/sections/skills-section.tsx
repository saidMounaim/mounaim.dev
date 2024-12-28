import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/constants";

export function SkillsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-300">
        Skills & Technologies
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((category) => (
          <Card
            key={category.name}
            className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-0 shadow-lg"
          >
            <CardHeader>
              <CardTitle className="text-xl text-teal-600 dark:text-teal-400">
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
