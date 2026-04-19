import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function ProductGrid() {
  return (
    <section id="products" className="py-32 px-8 bg-surface-container-low" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <RevealOnScroll className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <h2
              id="products-heading"
              className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-4"
            >
              8 DISPONIBLE
              <br />
              SNEAKERS MODELS
            </h2>
            <div className="h-1 w-48 bg-primary rounded-full" />
          </div>
          <p className="text-on-surface-variant max-w-md font-body text-right">
            Our latest technical footwear collection features adaptive
            compression zones and gravity-defying cushioning modules.
          </p>
        </RevealOnScroll>

        {/* Grid — staggered by column (80ms per card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <RevealOnScroll key={product.id} delay={i * 80}>
              <ProductCard product={product} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
