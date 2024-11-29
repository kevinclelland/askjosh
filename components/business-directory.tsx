"use client";

import { Store, MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { businesses, categories } from "@/lib/data";

interface BusinessDirectoryProps {
  search: string;
}

export function BusinessDirectory({ search }: BusinessDirectoryProps) {
  const filteredBusinesses = businesses.filter(
    (business) =>
      business.name.toLowerCase().includes(search.toLowerCase()) ||
      business.category.toLowerCase().includes(search.toLowerCase()) ||
      business.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Local Businesses
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {filteredBusinesses.length} businesses found
          </p>
        </div>
        <Select defaultValue="All Categories">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBusinesses.map((business) => (
          <Card key={business.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Store className="h-5 w-5" />
                {business.name}
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <span className="font-medium">{business.rating}</span>
                  <span className="text-yellow-400 ml-1">★</span>
                </div>
                <span>•</span>
                <span>{business.category}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  {business.description}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  {business.address}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  {business.hours}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  {business.phone}
                </div>
                <a
                  href={business.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visit Website
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}