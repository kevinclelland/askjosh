"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Store } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FavoriteBusinessCardProps {
  business: {
    id: number;
    name: string;
    category: string;
    rating: number;
    image?: string;
  };
  onRemove: (id: number) => void;
}

export function FavoriteBusinessCard({ business, onRemove }: FavoriteBusinessCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={business.image || "https://images.unsplash.com/photo-1519389950473-47ba0277781c"}
          alt={business.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold flex items-center gap-2">
            <Store className="h-4 w-4" />
            {business.name}
          </h3>
          <Badge variant="secondary">{business.category}</Badge>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{business.rating}</span>
          </div>
          <Link
            href={`/business/${business.id}`}
            className="text-sm text-primary hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </Card>
  );
}