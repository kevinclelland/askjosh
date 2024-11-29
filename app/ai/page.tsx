import { Metadata } from "next";
import { ChatInterface } from "@/components/chat-interface";

export const metadata: Metadata = {
  title: "AI Chat - Ask Josh",
  description: "Get instant answers and recommendations from Josh, your AI campus companion",
};

export default function AIPage() {
  return (
    <div className="container py-8 space-y-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Chat with Josh</h1>
        <p className="text-muted-foreground">
          Your 24/7 campus companion for recommendations and answers
        </p>
      </div>

      <div className="h-[calc(100vh-16rem)]">
        <ChatInterface />
      </div>
    </div>
  );
}