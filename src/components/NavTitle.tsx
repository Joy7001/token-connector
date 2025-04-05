
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export function NavTitle() {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <div className="brand-glow">
        <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400 transition-transform duration-500 group-hover:rotate-12" />
      </div>
      <div className="overflow-hidden">
        <span className="text-xl font-semibold neon-text inline-block relative">
          SkillShare
        </span>
      </div>
    </Link>
  );
}
