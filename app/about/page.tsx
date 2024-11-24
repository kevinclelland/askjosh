import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Building2, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-8 space-y-12">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-4">
        <Badge className="mb-4">Our Story</Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Meet Josh, Your Campus Companion
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          From lost freshman to campus innovator - discover how one student&apos;s journey
          inspired a platform that&apos;s changing campus life.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
            alt="Student working on laptop"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter">The Beginning</h2>
          <p className="text-muted-foreground">
            When Josh arrived at university as a first-year business student, he felt
            overwhelmed by the endless possibilities and uncertainties ahead. Like many
            students, he struggled to find his place and make the most of campus
            resources and opportunities.
          </p>
          <p className="text-muted-foreground">
            Between juggling classes, trying to maintain a budget, and seeking the best
            study spots, Josh realized there had to be a better way to navigate campus
            life.
          </p>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="p-6 space-y-2 text-center">
          <Users className="w-12 h-12 mx-auto text-primary" />
          <h3 className="text-2xl font-bold">10,000+</h3>
          <p className="text-muted-foreground">Active Student Users</p>
        </Card>
        <Card className="p-6 space-y-2 text-center">
          <Building2 className="w-12 h-12 mx-auto text-primary" />
          <h3 className="text-2xl font-bold">500+</h3>
          <p className="text-muted-foreground">Local Businesses</p>
        </Card>
        <Card className="p-6 space-y-2 text-center">
          <Lightbulb className="w-12 h-12 mx-auto text-primary" />
          <h3 className="text-2xl font-bold">50,000+</h3>
          <p className="text-muted-foreground">Recommendations Made</p>
        </Card>
      </div>

      {/* Mission Section */}
      <div className="space-y-6 text-center max-w-[50rem] mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
        <p className="text-muted-foreground">
          Today, Ask Josh has evolved from a personal solution into a comprehensive
          platform that helps students discover opportunities, save money, and make
          the most of their university experience. By combining local insights with
          AI technology, we&apos;re making campus life more accessible and enjoyable for
          everyone.
        </p>
        <Button asChild size="lg" className="mt-4">
          <Link href="/register">
            Join Our Community
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Values Section */}
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Student-First</h3>
          <p className="text-muted-foreground">
            Every feature is designed with students&apos; needs, budgets, and lifestyles in
            mind.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Community-Driven</h3>
          <p className="text-muted-foreground">
            We believe in the power of shared experiences and collective knowledge.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Innovation-Focused</h3>
          <p className="text-muted-foreground">
            Continuously evolving our platform to better serve the student community.
          </p>
        </div>
      </div>
    </div>
  );
}