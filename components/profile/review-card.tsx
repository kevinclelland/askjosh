"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MoreVertical, Edit2, Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ReviewCardProps {
  review: {
    id: number;
    businessId: number;
    businessName: string;
    rating: number;
    text: string;
    date: Date;
    photos?: string[];
  };
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export function ReviewCard({ review, onEdit, onDelete }: ReviewCardProps) {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <Link
          href={`/business/${review.businessId}`}
          className="font-semibold hover:text-primary"
        >
          {review.businessName}
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < review.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit(review.id)}>
                <Edit2 className="h-4 w-4 mr-2" />
                Edit Review
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-destructive"
                onClick={() => onDelete(review.id)}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Review
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {showFullText || review.text.length <= 200
            ? review.text
            : `${review.text.slice(0, 200)}...`}
          {review.text.length > 200 && (
            <button
              className="ml-1 text-primary hover:underline"
              onClick={() => setShowFullText(!showFullText)}
            >
              {showFullText ? "Show less" : "Read more"}
            </button>
          )}
        </p>

        {review.photos && review.photos.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {review.photos.map((photo, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={photo}
                  alt={`Review photo ${index + 1}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        )}

        <p className="text-xs text-muted-foreground">
          Posted {formatDistanceToNow(review.date)} ago
        </p>
      </div>
    </Card>
  );
}