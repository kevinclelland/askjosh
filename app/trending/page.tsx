import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { TrendingList } from "../../components/trending-list";

export const metadata: Metadata = {
  title: "Trending - Ask Josh",
  description: "Discover what's popular among students right now",
};

export default function TrendingPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Trending Now</h1>
        <p className="text-muted-foreground">
          See what&apos;s popular with students this week
        </p>
      </div>

      <TrendingList />

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