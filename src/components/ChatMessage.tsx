
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: {
    id: number;
    content: string;
    sender: "self" | "other";
    timestamp: string;
    username: string;
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isSelfMessage = message.sender === "self";
  
  return (
    <div className={cn(
      "flex gap-3 max-w-[80%]",
      isSelfMessage ? "ml-auto flex-row-reverse" : ""
    )}>
      {!isSelfMessage && (
        <div className="h-8 w-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
          <User className="h-4 w-4 text-primary" />
        </div>
      )}
      
      <div>
        <div className={cn(
          "rounded-2xl px-4 py-2 animate-in slide-in",
          isSelfMessage 
            ? "bg-primary text-primary-foreground rounded-tr-none" 
            : "bg-muted rounded-tl-none"
        )}>
          <p>{message.content}</p>
        </div>
        <span className="text-xs text-muted-foreground mt-1 block">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}
