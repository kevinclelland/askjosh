import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Bell } from "lucide-react";

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
        <h2 className="text-xl font-semibold">Recent Updates</h2>
        <div className="grid gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-4">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  {new Date().toLocaleDateString()}
                </div>
                <h3 className="font-medium">This Week&apos;s Top Deals</h3>
                <p className="text-sm text-muted-foreground">
                  Check out the latest student discounts and special offers around campus.
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}