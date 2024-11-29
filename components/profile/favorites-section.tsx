"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { FavoriteBusinessCard } from "./favorite-business-card";
import { Button } from "@/components/ui/button";

// Mock data - replace with actual data fetching
const mockFavorites = [
  {
    id: 1,
    name: "The Fat Butcher",
    category: "Food & Beverage",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b"
  },
  {
    id: 2,
    name: "Meraki Café",
    category: "Café",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24"
  },
  {
    id: 3,
    name: "Lanzerac Wine Estate",
    category: "Winery",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb"
  }
];

const ITEMS_PER_PAGE = 10;

export function FavoritesSection() {
  const [favorites, setFavorites] = useState(mockFavorites);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(favorites.length / ITEMS_PER_PAGE);
  const displayedFavorites = favorites.slice(0, page * ITEMS_PER_PAGE);

  const handleRemoveFavorite = (id: number) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const loadMore = () => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setPage(prev => prev + 1);
      setLoading(false);
    }, 500);
  };

  if (favorites.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No favorites yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedFavorites.map((business) => (
          <FavoriteBusinessCard
            key={business.id}
            business={business}
            onRemove={handleRemoveFavorite}
          />
        ))}
      </div>

      {page < totalPages && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={loadMore}
            disabled={loading}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}