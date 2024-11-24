import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="container">
      <div className="relative overflow-hidden rounded-lg border bg-background px-6 py-10 sm:py-16 md:px-12">
        <div className="relative flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-2xl font-bold md:text-3xl">
              Ready to transform your campus experience?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join thousands of students discovering the best deals and spots around
              campus. Sign up now and get personalized recommendations from Josh.
            </p>
          </div>
          <Button asChild size="lg" className="min-w-[140px]">
            <Link href="/register">Join Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}