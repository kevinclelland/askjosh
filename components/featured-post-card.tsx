import Image from "next/image";
import { Card } from "@/components/ui/card";

interface FeaturedPostCardProps {
  author: {
    name: string;
    image: string;
    handle: string;
  };
  title: string;
  excerpt: string;
}

export function FeaturedPostCard({ author, title, excerpt }: FeaturedPostCardProps) {
  return (
    <Card className="w-[300px] p-4 transition-transform hover:scale-[1.02] cursor-pointer">
      <div className="flex items-center gap-3 mb-3">
        <div className="relative h-[60px] w-[60px]">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold line-clamp-1">{author.name}</h3>
          <p className="text-sm text-muted-foreground">@{author.handle}</p>
        </div>
      </div>
      <h4 className="font-medium mb-2 line-clamp-2">{title}</h4>
      <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
    </Card>
  );
}