import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ModeToggle } from "../mode-toggle";
import { bio } from "@/constants";

export function AboutSection() {
  return (
    <Card className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-0 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-semibold text-teal-700 dark:text-teal-300">
          About Me
        </CardTitle>
        <ModeToggle />
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{bio}</p>
      </CardContent>
    </Card>
  );
}
