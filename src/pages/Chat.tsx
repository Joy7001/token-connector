
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, User, PaperclipIcon, Smile, Mic } from "lucide-react";
import { ChatMessage } from "@/components/ChatMessage";

// Dummy data for chat messages
const initialMessages = [
  {
    id: 1,
    content: "Hello! I'm interested in learning about web development. Can you help?",
    sender: "other",
    timestamp: "10:30 AM",
    username: "Jane Smith",
  },
  {
    id: 2,
    content: "Hi Jane! I'd be happy to help with web development. What specific areas are you interested in?",
    sender: "self",
    timestamp: "10:32 AM",
    username: "John Doe",
  },
  {
    id: 3,
    content: "I'd like to learn React and modern frontend frameworks. I have some basic HTML/CSS knowledge.",
    sender: "other",
    timestamp: "10:35 AM",
    username: "Jane Smith",
  },
];

export default function Chat() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;
    
    const newMessage = {
      id: messages.length + 1,
      content: inputMessage,
      sender: "self",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      username: "John Doe",
    };
    
    setMessages([...messages, newMessage]);
    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 pl-[calc(16rem+2rem)] transition-all duration-300 sm:pl-8">
        <div className="flex flex-col h-screen pt-6 pb-6">
          <div className="flex items-center px-8 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-3">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Jane Smith</h2>
              <p className="text-xs text-muted-foreground">Web Development • Last active 2m ago</p>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto px-8 pb-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
          
          <div className="px-8 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-end gap-2">
              <div className="flex-1 relative">
                <Input
                  placeholder="Type your message..."
                  className="pr-12 py-6 min-h-[3rem]"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <div className="absolute right-3 bottom-3 flex gap-2">
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <PaperclipIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Smile className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Button 
                size="icon" 
                onClick={handleSendMessage}
                className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90 neon-border"
              >
                <Send className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                className="h-12 w-12 rounded-full purple-hover"
              >
                <Mic className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
