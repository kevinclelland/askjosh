"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturedPostCard } from "@/components/featured-post-card";

const SCROLL_INTERVAL = 5000;

const featuredPosts = [
  {
    author: {
      name: "Tony",
      handle: "stellies_lifestyle",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40"
    },
    title: "My Perfect Stellenbosch Saturday",
    excerpt: "Starting the day at Meraki Café and ending with sunset views at Balboa Balcony Bar..."
  },
  {
    author: {
      name: "Sarah Wine",
      handle: "wine_wanderer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    title: "Hidden Gems of Stellenbosch Wineries",
    excerpt: "Discovering the lesser-known wine estates that locals love..."
  },
  {
    author: {
      name: "Mike Foodie",
      handle: "stellies_eats",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    title: "Best Student Deals This Week",
    excerpt: "Your guide to eating well on a budget in Stellenbosch..."
  },
  {
    author: {
      name: "Emma Adventure",
      handle: "outdoor_emma",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    title: "Weekend Hiking Guide",
    excerpt: "Exploring the beautiful trails around Stellenbosch..."
  },
  {
    author: {
      name: "David Coffee",
      handle: "coffee_culture",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    title: "Stellenbosch Coffee Guide",
    excerpt: "Rating every coffee shop in town, one cup at a time..."
  }
];

export function FeaturedPostsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 316; // card width + gap
      const newScroll = direction === "left" 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth"
      });

      const newIndex = direction === "left" 
        ? Math.max(0, currentIndex - 1)
        : Math.min(featuredPosts.length - 1, currentIndex + 1);
      
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (currentIndex === featuredPosts.length - 1) {
        setCurrentIndex(0);
        scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  return (
    <div 
      className="relative px-6 py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {featuredPosts.map((post, index) => (
          <div key={index} className="flex-none snap-center">
            <FeaturedPostCard {...post} />
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={() => scroll("left")}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={() => scroll("right")}
        disabled={currentIndex === featuredPosts.length - 1}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center gap-2 mt-4">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-muted"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              scrollRef.current?.scrollTo({
                left: index * 316,
                behavior: "smooth"
              });
            }}
          />
        ))}
      </div>
    </div>
  );
}