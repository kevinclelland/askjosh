"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BusinessDirectory } from "@/components/business-directory";
import { DealsSection } from "@/components/deals-section";
import { ChatInterface } from "@/components/chat-interface";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-[1fr,400px]">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search businesses, deals, or categories..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Tabs defaultValue="directory" className="space-y-8">
            <TabsList>
              <TabsTrigger value="directory">Business Directory</TabsTrigger>
              <TabsTrigger value="deals">Current Deals</TabsTrigger>
            </TabsList>
            
            <TabsContent value="directory" className="space-y-8">
              <BusinessDirectory search={search} />
            </TabsContent>
            
            <TabsContent value="deals" className="space-y-8">
              <DealsSection search={search} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:sticky lg:top-20">
          <ChatInterface />
        </div>
      </div>
    </div>
  );
}