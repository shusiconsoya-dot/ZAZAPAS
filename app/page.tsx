import { Hero } from "@/components/Hero";
import { ModelStrip } from "@/components/ModelStrip";
import { ProductGrid } from "@/components/ProductGrid";
import { TeamSection } from "@/components/TeamSection";
import { SocialProof } from "@/components/SocialProof";

export default function Home() {
  return (
    <main>
      <Hero />
      <ModelStrip />
      <ProductGrid />
      <TeamSection />
      <SocialProof />
    </main>
  );
}
