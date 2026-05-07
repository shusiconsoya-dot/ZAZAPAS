import { RevealOnScroll } from "@/components/RevealOnScroll";

const QUOTES = [
  {
    text: "Descubre tu estilo",
    sub: "Tu identidad, tu elección.",
  },
  {
    text: "Hazlas tuyas hoy",
    sub: "Diseño que se adapta a ti.",
  },
  {
    text: "Da el siguiente paso",
    sub: "Cada paso cuenta.",
  },
];

export function ApelativeQuotes() {
  return (
    <section className="py-20 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {QUOTES.map((q, i) => (
            <RevealOnScroll key={q.text} variant="fade-up" delay={i * 100}>
              <div className="glass-card border border-outline-variant/20 rounded-2xl p-8 text-center hover:border-primary/25 transition-all duration-300 group cursor-default">
                <span className="font-headline text-5xl text-primary/25 leading-none group-hover:text-primary/50 transition-colors duration-300 block">
                  &#8220;
                </span>
                <p className="font-headline text-xl md:text-2xl font-black text-on-surface -mt-2 mb-1">
                  {q.text}
                </p>
                <span className="font-headline text-5xl text-primary/25 leading-none group-hover:text-primary/50 transition-colors duration-300 block -mt-4">
                  &#8221;
                </span>
                <p className="font-body text-sm text-on-surface-variant mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {q.sub}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
