import { CartProvider } from "@/lib/cart-context";
import { Navbar } from "@/components/Navbar";
import { CartBubble } from "@/components/CartBubble";
import { CartPanel } from "@/components/CartPanel";
import { Hero } from "@/components/Hero";
import { ModelStrip } from "@/components/ModelStrip";
import { ProductGrid } from "@/components/ProductGrid";
import { TeamSection } from "@/components/TeamSection";
import { SocialProof } from "@/components/SocialProof";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <CartProvider>
      <Navbar />
      <CartBubble />
      <CartPanel />
      <main>
        <Hero />
        <ModelStrip />
        <ProductGrid />
        <TeamSection />
        <SocialProof />
      </main>
      <Footer />
    </CartProvider>
  );
}
