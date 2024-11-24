"use client";

import { Tag, Clock, Store } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const deals = [
  {
    id: 1,
    title: "50% Off Study Sessions",
    business: "Campus Coffee Hub",
    description: "Half-price coffee and pastries during midterm week",
    validUntil: "2024-03-31",
    category: "Food & Drink",
    type: "Limited Time",
  },
  {
    id: 2,
    title: "Student Membership Special",
    business: "Campus Fitness",
    description: "No enrollment fee + first month free for students",
    validUntil: "2024-04-15",
    category: "Fitness",
    type: "Ongoing",
  },
  {
    id: 3,
    title: "Print Package Deal",
    business: "Student Success Center",
    description: "500 pages of printing for $20",
    validUntil: "2024-05-01",
    category: "Services",
    type: "Limited Time",
  },
];

interface DealsSectionProps {
  search: string;
}

export function DealsSection({ search }: DealsSectionProps) {
  const filteredDeals = deals.filter(
    (deal) =>
      deal.title.toLowerCase().includes(search.toLowerCase()) ||
      deal.business.toLowerCase().includes(search.toLowerCase()) ||
      deal.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">Current Deals</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredDeals.map((deal) => (
          <Card key={deal.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="flex items-center gap-2">
                  <Tag className="h-5 w-5" />
                  {deal.title}
                </CardTitle>
                <Badge variant={deal.type === "Ongoing" ? "secondary" : "default"}>
                  {deal.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  {deal.description}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Store className="h-4 w-4" />
                  {deal.business}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  Valid until {new Date(deal.validUntil).toLocaleDateString()}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}