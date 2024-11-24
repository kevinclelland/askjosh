import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 pt-20 text-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
        Your Student Life,{" "}
        <span className="gradient-text">Simplified</span>
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Discover student-exclusive deals, find the best study spots, and get
        personalized recommendations from Josh, your AI campus companion.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="/register">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/about">Learn More</Link>
        </Button>
      </div>
    </div>
  );
}