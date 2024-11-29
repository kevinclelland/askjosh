"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Newspaper,
  Map as MapIcon,
  TrendingUp,
  Search,
  Bot,
  User
} from "lucide-react";

const navItems = [
  {
    name: "Map",
    href: "/map",
    icon: MapIcon
  },
  {
    name: "Newsletter",
    href: "/newsletter",
    icon: Newspaper
  },
  {
    name: "Trending",
    href: "/trending",
    icon: TrendingUp
  },
  {
    name: "Search",
    href: "/search",
    icon: Search
  },
  {
    name: "AI",
    href: "/ai",
    icon: Bot
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User
  }
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-background/80 backdrop-blur-lg">
      <div className="flex h-16 items-center justify-around px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-w-[44px] min-h-[44px] flex-col items-center justify-center gap-1 rounded-lg px-2 py-1 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                isActive && "text-primary"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}