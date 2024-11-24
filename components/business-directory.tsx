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

const categories = [
  "All Categories",
  "Restaurants",
  "Cafes",
  "Study Spots",
  "Fitness",
  "Entertainment",
  "Services",
];

const businesses = [
  {
    id: 1,
    name: "Campus Coffee Hub",
    category: "Cafes",
    rating: 4.5,
    address: "123 University Ave",
    hours: "7AM - 10PM",
    phone: "(555) 123-4567",
    description: "Cozy cafe with student discounts and free WiFi",
    website: "https://example.com",
  },
  {
    id: 2,
    name: "Student Success Center",
    category: "Study Spots",
    rating: 4.8,
    address: "456 College St",
    hours: "24/7",
    phone: "(555) 234-5678",
    description: "24/7 study space with private rooms and printing services",
    website: "https://example.com",
  },
  {
    id: 3,
    name: "Campus Fitness",
    category: "Fitness",
    rating: 4.6,
    address: "789 Sports Ave",
    hours: "6AM - 11PM",
    phone: "(555) 345-6789",
    description: "Modern gym with student memberships and fitness classes",
    website: "https://example.com",
  },
];

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
        <h2 className="text-2xl font-semibold tracking-tight">
          Local Businesses
        </h2>
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