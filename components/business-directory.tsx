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
  "Bookstores",
  "Health & Wellness",
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
  {
    id: 4,
    name: "The Study Brew",
    category: "Cafes",
    rating: 4.7,
    address: "234 Scholar Lane",
    hours: "6AM - 12AM",
    phone: "(555) 456-7890",
    description: "Specialty coffee shop with quiet study areas and power outlets at every table",
    website: "https://example.com",
  },
  {
    id: 5,
    name: "University Bookstore",
    category: "Bookstores",
    rating: 4.3,
    address: "567 Campus Drive",
    hours: "9AM - 7PM",
    phone: "(555) 567-8901",
    description: "Official campus bookstore with textbooks, supplies, and university merchandise",
    website: "https://example.com",
  },
  {
    id: 6,
    name: "Bytes & Bites",
    category: "Restaurants",
    rating: 4.4,
    address: "890 Tech Avenue",
    hours: "11AM - 10PM",
    phone: "(555) 678-9012",
    description: "Tech-themed restaurant with student meal deals and gaming stations",
    website: "https://example.com",
  },
  {
    id: 7,
    name: "Mind & Body Wellness",
    category: "Health & Wellness",
    rating: 4.9,
    address: "123 Wellness Way",
    hours: "8AM - 8PM",
    phone: "(555) 789-0123",
    description: "Student-focused wellness center offering massage, yoga, and meditation",
    website: "https://example.com",
  },
  {
    id: 8,
    name: "The Print Shop",
    category: "Services",
    rating: 4.5,
    address: "456 Paper Lane",
    hours: "8AM - 10PM",
    phone: "(555) 890-1234",
    description: "Full-service printing, binding, and design services with student discounts",
    website: "https://example.com",
  },
  {
    id: 9,
    name: "Campus Cinema",
    category: "Entertainment",
    rating: 4.6,
    address: "789 Movie Drive",
    hours: "12PM - 12AM",
    phone: "(555) 901-2345",
    description: "Movie theater showing latest releases with student night specials",
    website: "https://example.com",
  },
  {
    id: 10,
    name: "The Learning Lounge",
    category: "Study Spots",
    rating: 4.8,
    address: "321 Knowledge Court",
    hours: "7AM - 11PM",
    phone: "(555) 012-3456",
    description: "Modern study space with group rooms and tutoring services",
    website: "https://example.com",
  },
  {
    id: 11,
    name: "Tech Repair Hub",
    category: "Services",
    rating: 4.7,
    address: "654 Gadget Street",
    hours: "9AM - 6PM",
    phone: "(555) 123-4567",
    description: "Quick and affordable device repair service for students",
    website: "https://example.com",
  },
  {
    id: 12,
    name: "Fresh Fuel",
    category: "Restaurants",
    rating: 4.5,
    address: "987 Health Avenue",
    hours: "7AM - 9PM",
    phone: "(555) 234-5678",
    description: "Healthy meal prep and smoothie bar with student meal plans",
    website: "https://example.com",
  },
  {
    id: 13,
    name: "Campus Cuts",
    category: "Services",
    rating: 4.4,
    address: "246 Style Street",
    hours: "10AM - 7PM",
    phone: "(555) 345-6789",
    description: "Affordable haircuts and styling with student discount",
    website: "https://example.com",
  },
  {
    id: 14,
    name: "The Zen Den",
    category: "Study Spots",
    rating: 4.9,
    address: "135 Quiet Lane",
    hours: "24/7",
    phone: "(555) 456-7890",
    description: "Silent study space with meditation rooms and relaxation areas",
    website: "https://example.com",
  },
  {
    id: 15,
    name: "Game Zone",
    category: "Entertainment",
    rating: 4.6,
    address: "864 Play Place",
    hours: "12PM - 2AM",
    phone: "(555) 567-8901",
    description: "Gaming cafe with latest consoles and board game library",
    website: "https://example.com",
  },
  {
    id: 16,
    name: "Bike & Board",
    category: "Services",
    rating: 4.7,
    address: "753 Wheel Way",
    hours: "9AM - 6PM",
    phone: "(555) 678-9012",
    description: "Bicycle and skateboard sales, repairs, and rentals for students",
    website: "https://example.com",
  },
  {
    id: 17,
    name: "Campus Market",
    category: "Services",
    rating: 4.5,
    address: "951 Supply Street",
    hours: "7AM - 11PM",
    phone: "(555) 789-0123",
    description: "Convenience store with groceries, snacks, and essential supplies",
    website: "https://example.com",
  },
  {
    id: 18,
    name: "Study Grounds",
    category: "Cafes",
    rating: 4.8,
    address: "357 Coffee Court",
    hours: "6AM - 11PM",
    phone: "(555) 890-1234",
    description: "Artisanal coffee shop with extended study hours and weekly student events",
    website: "https://example.com",
  }
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