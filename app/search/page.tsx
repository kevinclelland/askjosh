"use client";

import { useState } from "react";
import { Search as SearchIcon, Filter, Store, MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FeaturedPostsCarousel } from "@/components/featured-posts-carousel";
import { businesses, categories } from "@/lib/data";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch = 
      business.name.toLowerCase().includes(search.toLowerCase()) ||
      business.description.toLowerCase().includes(search.toLowerCase()) ||
      business.category.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = 
      activeCategory === "All Categories" || 
      business.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-8 space-y-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Search</h1>
        <p className="text-muted-foreground">
          Find exactly what you&apos;re looking for
        </p>
      </div>

      <div className="space-y-4">
      <h2 className="text-xl font-semibold">Featured Posts</h2>
      <FeaturedPostsCarousel />
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
        <h2 className="text-xl font-semibold">Search Results</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBusinesses.map((business) => (
            <Card key={business.id} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-1">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Store className="h-4 w-4" />
                      {business.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <span className="font-medium">{business.rating}</span>
                        <span className="text-yellow-400 ml-1">★</span>
                      </span>
                      <span>•</span>
                      <Badge variant="secondary">{business.category}</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">{business.description}</p>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {business.address}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {business.hours}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {business.phone}
                  </div>
                  <a
                    href={`https://${business.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Website
                  </a>
                </div>
              </div>
            </Card>
          ))}
          {filteredBusinesses.length === 0 && (
            <div className="col-span-full text-center py-8 text-muted-foreground">
              No businesses found matching your search criteria
            </div>
          )}
        </div>
      </div>
    </div>
  );
}