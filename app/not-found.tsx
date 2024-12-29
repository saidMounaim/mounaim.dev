import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-teal-950 dark:via-gray-900 dark:to-cyan-950 flex flex-col items-center justify-center p-4 text-center">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-4xl font-bold text-teal-800 dark:text-teal-200">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          The page you’re looking for might have been moved or deleted. Let’s
          help you start over!
        </p>
        <Button
          asChild
          className="mt-5 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0"
        >
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
