"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Users, Star, Clock, ThumbsUp, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useVoteStore } from "@/lib/store";

const trendingItems = [
  {
    id: 1,
    title: "Campus Coffee Hub",
    category: "Cafes",
    rating: 4.8,
    reviews: 128,
    trend: "+15% this week",
  },
  {
    id: 2,
    title: "Student Success Center",
    category: "Study Spots",
    rating: 4.6,
    reviews: 95,
    trend: "+12% this week",
  },
  {
    id: 3,
    title: "Tech Repair Hub",
    category: "Services",
    rating: 4.7,
    reviews: 67,
    trend: "+10% this week",
  },
];

export function TrendingList() {
  const { upvote, getVotes } = useVoteStore();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const sortedItems = [...trendingItems].sort((a, b) => getVotes(b.id) - getVotes(a.id));

  if (!isHydrated) {
    return (
      <div className="flex justify-center py-8">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {sortedItems.map((item) => (
        <Card key={item.id} className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <Badge variant="secondary">{item.category}</Badge>
              </div>
              <div className="flex items-center text-primary">
                <TrendingUp className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">{item.trend}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="mr-1 h-4 w-4 text-primary" />
                {item.rating}
              </div>
              <div className="flex items-center">
                <Users className="mr-1 h-4 w-4" />
                {item.reviews} reviews
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                Last hour
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => upvote(item.id)}
            >
              <ThumbsUp className="mr-2 h-4 w-4" />
              Upvote ({getVotes(item.id)})
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}