import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Bell, Heart, MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Newsletter - Ask Josh",
  description: "Stay updated with the latest student deals and campus news",
};

export default function NewsletterPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Newsletter</h1>
        <p className="text-muted-foreground">
          Stay in the loop with campus deals and events
        </p>
      </div>

      <Card className="p-6">
        <form className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Subscribe to Updates</h2>
            <p className="text-sm text-muted-foreground">
              Get weekly digests of the best deals and events
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-md"
              />
            </div>
            
            <div className="space-x-2">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
              <Button variant="outline">
                <Bell className="mr-2 h-4 w-4" />
                Enable Notifications
              </Button>
            </div>
          </div>
        </form>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Latest Post</h2>
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40"
                  alt="Tony's profile"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Tony (@stellies_lifestyle)</h3>
                <p className="text-sm text-muted-foreground">March 15, 2024</p>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold">My Perfect Stellenbosch Saturday</h4>
            
            <div className="space-y-6">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                  alt="Café scene"
                  fill
                  className="object-cover"
                />
              </div>
              
              <p className="text-muted-foreground">
                There's nothing quite like a Stellenbosch Saturday! My perfect day starts at Meraki 
                Café on Church Street – their artisanal pastries and perfectly crafted flat white 
                are unmatched. The morning light streaming through their windows while you plan your 
                day is pure magic.
              </p>
              
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d"
                  alt="Wine tasting"
                  fill
                  className="object-cover"
                />
              </div>
              
              <p className="text-muted-foreground">
                By midday, you'll find me at Lanzerac Wine Estate. Pro tip: their wine and chocolate 
                pairing is a must-try experience. The historic architecture and mountain views create 
                the perfect backdrop for those Instagram-worthy moments. For lunch, I head to The Fat 
                Butcher on Van Riebeeck Street – their dry-aged steaks are legendary among locals.
              </p>
              
              <p className="text-muted-foreground">
                As the sun sets, there's no better place to be than De Warenmarkt. The buzz of 
                students and locals mixing, the smell of fresh food, and the sound of live music 
                create this incredible atmosphere that's uniquely Stellenbosch. I usually wrap up 
                my evening at Balboa Balcony Bar, where the craft cocktails and rooftop views of 
                our beautiful town are simply unbeatable.
              </p>
              
              <div className="flex items-center gap-6 text-muted-foreground">
                <button className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>2.4K</span>
                </button>
                <button className="flex items-center gap-2 hover:text-primary transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span>148</span>
                </button>
                <button className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">#StellenboschLife</Badge>
                <Badge variant="secondary">#WeekendVibes</Badge>
                <Badge variant="secondary">#FoodieHeaven</Badge>
                <Badge variant="secondary">#WineCountry</Badge>
                <Badge variant="secondary">#LocalGuide</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}