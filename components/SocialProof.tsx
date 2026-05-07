import Image from "next/image";
import { Icon } from "@/components/Icon";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import Link from "next/link";

const INFLUENCER_IMGS = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7fPUnyNmQB8VUEkYzXyMGAAuEnEztfLqMWhETk6OREzmKXRy-3lMOBgY62cQMG20hSBu-ewo77rHPI9o2jN9OwP-s-2qCshpeO__K9_kQ7T8Nf-UHxY9_j9ZzgnpxQfhcFj83w1tH0lL1K0KqBXJWlDum5-PnvEVftoP9l9BiaQM9uMDkhbij0wSodbwFGnQG7JqIBb7J05DZVzy1qJiPI1Ma4lHgtfe23iTTBTx0zJ5fpTy-aOUqaux5BtwsgDZ34JlFsW9zD6g",
    alt: "Verified owner — influencer",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVSEXkLfT9OG6iB8aAH4xJKYHsQ4U2xabmLDsHvcRYNRmC712hUj4jI38x8kPmw7G2x2VToBn72tmzzOTfmZW_rh9zPi-uudeho0cGcQNPfIl01xgK-cd_RljDFkUJoIST-4HaJ5shnSBZzBgbCWutIo0kCxnah6mz-AgKUESVbsFVg_bxnK725fLwTBwb2zYAnqTfm_B6glCOQOEdG0sahxvwAiUVf_YQOBhixPBzl-UUAsD6EirGYZXpKH6A1M_yr1OCckGzxTg",
    alt: "Verified owner — athlete",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD84DF92W3G-yqK8SLQEroNSxfPIJCu40SAAGJnnMeig6R1s2kdpkb8ufExwmAmiLLOnIVppxPup-7PYDmoNpCcQJfkQgDGPIP4TKARQXHfIn9Xzz8899YaSS6XcXvu8x7_TU-ibZROeNOoXVEwxchye4W5Sb9hHk4XmlIpizOOsx-sbbSXp8VoI6_BG2teiUtlA30Y1kYvj8HMc-UTKmgDONRTnumer2FdoTp1hbQ-DodiqIx2obnO3Xh1zGVkwPv1Xmf3zOfS09A",
    alt: "Verified owner — model",
  },
];

export function SocialProof() {
  return (
    <section
      className="py-32 px-8 bg-surface-container-highest relative overflow-hidden"
      aria-labelledby="social-heading"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 bg-radial from-secondary/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — stat block */}
          <RevealOnScroll variant="fade-left">
          <div>
            <h2
              id="social-heading"
              className="font-headline text-6xl font-black mb-8 leading-tight"
            >
              CHOSEN BY THE
              <br />
              <span className="text-primary">AVANT-GARDE</span>
            </h2>

            <div className="flex flex-wrap gap-4 items-center">
              {/* Avatar stack */}
              <div className="flex -space-x-4" aria-label="Verified owners">
                {INFLUENCER_IMGS.map((img) => (
                  <div
                    key={img.alt}
                    className="relative w-14 h-14 rounded-full border-2 border-surface-container-highest overflow-hidden"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                ))}
              </div>
              <p className="font-headline font-bold text-lg tracking-tight">
                + 2.4k VERIFIED OWNERS
              </p>
            </div>
          </div>
          </RevealOnScroll>

          {/* Right — testimonial */}
          <RevealOnScroll variant="fade-right" delay={150}>
          <div>
            <blockquote className="glass-panel p-8 rounded-xl border-l-4 border-primary">
              <div className="flex items-center gap-1 mb-4 text-primary" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" fill size={20} />
                ))}
              </div>

              <p className="font-body text-lg italic text-on-surface mb-6">
                &ldquo;ZAZAPAS isn&apos;t just footwear. It&apos;s a statement
                about the world we&apos;re building. The Chanell Runner models
                are purely structural art.&rdquo;
              </p>

              <footer className="flex items-center justify-between">
                <cite className="font-headline font-bold text-sm not-italic">
                  SARA L. // DESIGN DIRECTOR
                </cite>
                <Icon name="verified_user" className="text-secondary" size={20} />
              </footer>
            </blockquote>
          </div>
          </RevealOnScroll>
        </div>

        {/* Ver justificación */}
        <RevealOnScroll variant="fade-up" delay={300}>
          <div className="mt-14 flex justify-center">
            <Link
              href="/justificacion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-headline font-bold text-sm uppercase tracking-tighter glass-card border border-outline-variant/25 text-primary hover:bg-primary/10 hover:border-primary/40 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,145,89,0.15)]"
            >
              Ver justificación
              <Icon name="open_in_new" size={16} />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
