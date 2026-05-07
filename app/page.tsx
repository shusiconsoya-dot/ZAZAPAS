import { Hero } from "@/components/Hero";
import { ModelStrip } from "@/components/ModelStrip";
import { ProductGrid } from "@/components/ProductGrid";
import { ApelativeQuotes } from "@/components/ApelativeQuotes";
import { RhetoricalQuotes } from "@/components/RhetoricalQuotes";
import { TeamSection } from "@/components/TeamSection";
import { SocialProof } from "@/components/SocialProof";

export default function Home() {
  return (
    <main>
      <Hero />
      <ModelStrip />
      <ProductGrid />
      <ApelativeQuotes />
      <RhetoricalQuotes />
      <TeamSection />
      <SocialProof />
    </main>
  );
}
