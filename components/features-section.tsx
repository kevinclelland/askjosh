import {
  BookOpen,
  Coffee,
  MapPin,
  MessageSquareText,
  Percent,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Smart Recommendations",
    description:
      "Get personalized suggestions for food, study spots, and activities based on your preferences.",
    icon: Zap,
  },
  {
    title: "Student Discounts",
    description:
      "Access exclusive deals and promotions from local businesses, tailored for students.",
    icon: Percent,
  },
  {
    title: "Study Spots",
    description:
      "Find the perfect place to study with real-time occupancy information and reviews.",
    icon: BookOpen,
  },
  {
    title: "Local Directory",
    description:
      "Discover and explore student-friendly businesses and services in your area.",
    icon: MapPin,
  },
  {
    title: "AI Assistant",
    description:
      "Chat with Josh for instant answers about deals, locations, and recommendations.",
    icon: MessageSquareText,
  },
  {
    title: "Happy Hours",
    description:
      "Never miss a deal with our real-time happy hour tracker and notifications.",
    icon: Coffee,
  },
];

export function FeaturesSection() {
  return (
    <section className="container">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="flex h-full flex-col justify-between rounded-md p-6">
              <feature.icon className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}