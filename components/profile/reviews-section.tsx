"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { ReviewCard } from "./review-card";
import { Button } from "@/components/ui/button";

// Mock data - replace with actual data fetching
const mockReviews = [
  {
    id: 1,
    businessId: 1,
    businessName: "The Fat Butcher",
    rating: 4,
    text: "Amazing steaks and great service! The atmosphere was perfect for a special dinner. Would definitely recommend the T-bone and their house wine selection.",
    date: new Date("2024-03-10"),
    photos: [
      "https://images.unsplash.com/photo-1544025162-d76694265947",
      "https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70"
    ]
  },
  {
    id: 2,
    businessId: 2,
    businessName: "Meraki Café",
    rating: 5,
    text: "Best coffee in Stellenbosch! The pastries are fresh and delicious. It's become my go-to spot for morning meetings.",
    date: new Date("2024-03-08"),
    photos: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    ]
  }
];

const ITEMS_PER_PAGE = 10;

export function ReviewsSection() {
  const [reviews, setReviews] = useState(mockReviews);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);
  const displayedReviews = reviews.slice(0, page * ITEMS_PER_PAGE);

  const handleEditReview = (id: number) => {
    // Implement edit functionality
    console.log("Edit review:", id);
  };

  const handleDeleteReview = (id: number) => {
    setReviews(reviews.filter(review => review.id !== id));
  };

  const loadMore = () => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setPage(prev => prev + 1);
      setLoading(false);
    }, 500);
  };

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No reviews written yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {displayedReviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            onEdit={handleEditReview}
            onDelete={handleDeleteReview}
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