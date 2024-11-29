"use client";

import { useState } from "react";
import { Search as SearchIcon, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  "All",
  "Food",
  "Study",
  "Services",
  "Entertainment",
  "Shopping",
];

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="container py-8 space-y-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Search</h1>
        <p className="text-muted-foreground">
          Find exactly what you&apos;re looking for
        </p>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search places, deals, or services..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className="flex-shrink-0"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Popular Searches</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Best coffee spots",
            "Student discounts",
            "Late night food",
            "Study rooms",
            "Printing services",
          ].map((term) => (
            <Badge
              key={term}
              variant="outline"
              className="cursor-pointer hover:bg-accent"
              onClick={() => setSearch(term)}
            >
              {term}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Searches</h2>
        <div className="space-y-2">
          {["Coffee shops", "Library hours", "Campus gym"].map((term, i) => (
            <Card
              key={i}
              className="p-4 cursor-pointer hover:bg-accent"
              onClick={() => setSearch(term)}
            >
              <div className="flex items-center gap-2">
                <SearchIcon className="h-4 w-4 text-muted-foreground" />
                <span>{term}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}