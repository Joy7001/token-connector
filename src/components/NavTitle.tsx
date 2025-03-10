
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
          <span className="inline-block animate-pulse">S</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-2px]">k</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-4px]">i</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-6px]">l</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-4px]">l</span>
          <span className="inline-block animate-pulse">S</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-2px]">w</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-4px]">a</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-2px]">p</span>
        </span>
      </div>
    </Link>
  );
}
