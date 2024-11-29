import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Star, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Trending - Ask Josh",
  description: "Discover what's popular among students right now",
};

const trendingItems = [
  {
    title: "Campus Coffee Hub",
    category: "Cafes",
    rating: 4.8,
    reviews: 128,
    trend: "+15% this week",
  },
  {
    title: "Student Success Center",
    category: "Study Spots",
    rating: 4.6,
    reviews: 95,
    trend: "+12% this week",
  },
  {
    title: "Tech Repair Hub",
    category: "Services",
    rating: 4.7,
    reviews: 67,
    trend: "+10% this week",
  },
];

export default function TrendingPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Trending Now</h1>
        <p className="text-muted-foreground">
          See what&apos;s popular with students this week
        </p>
      </div>

      <div className="grid gap-6">
        {trendingItems.map((item, i) => (
          <Card key={i} className="p-6">
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
            </div>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Trending Categories</h2>
        <div className="flex flex-wrap gap-2">
          {["Study Spots", "Coffee", "Food", "Events", "Services"].map((category) => (
            <Badge key={category} variant="outline" className="text-sm">
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}