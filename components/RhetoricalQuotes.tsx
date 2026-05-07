import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Icon } from "@/components/Icon";

const QUOTES = [
  {
    type: "Metáfora",
    text: '"No son solo zapatillas, son tu carta de presentación."',
    icon: "auto_awesome",
    note: "Compara las zapatillas con algo de mayor carga simbólica para elevar su valor percibido.",
  },
  {
    type: "Hipérbole",
    text: '"Diseñadas para que cada paso deje huella."',
    icon: "trending_up",
    note: "Exagera el efecto del producto para generar un mayor impacto emocional en el lector.",
  },
  {
    type: "Anáfora",
    text: '"Para correr. Para destacar. Para llegar más lejos."',
    icon: "repeat",
    note: 'Repite "Para" al inicio de cada frase creando ritmo, énfasis y sensación de progresión.',
  },
];

export function RhetoricalQuotes() {
  return (
    <section className="py-28 px-8 bg-surface-container relative overflow-hidden">
      <div
        className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <RevealOnScroll variant="fade-up">
          <p className="font-headline tracking-[0.35em] uppercase text-primary/70 text-xs text-center mb-14 flex items-center justify-center gap-4">
            <span className="w-10 h-px bg-primary/40" />
            Lenguaje que conecta
            <span className="w-10 h-px bg-primary/40" />
          </p>
        </RevealOnScroll>

        <div className="flex flex-col gap-5">
          {QUOTES.map((q, i) => (
            <RevealOnScroll key={q.type} variant="fade-up" delay={i * 120}>
              <div className="group glass-card border border-outline-variant/20 rounded-2xl p-7 flex items-center gap-6 cursor-default transition-all duration-500 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(255,145,89,0.08)]">
                {/* Icon */}
                <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border border-outline-variant/30 group-hover:border-primary/40 bg-surface-variant/50 group-hover:bg-primary/10 transition-all duration-500">
                  <Icon
                    name={q.icon}
                    size={20}
                    className="text-on-surface-variant group-hover:text-primary transition-colors duration-500"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="font-headline text-[10px] tracking-[0.35em] uppercase text-primary/50 group-hover:text-primary/80 transition-colors duration-500">
                    {q.type}
                  </span>
                  <p className="font-headline text-xl md:text-2xl font-black mt-1 text-on-surface blur group-hover:blur-none group-hover:scale-[1.01] transition-all duration-500 origin-left">
                    {q.text}
                  </p>
                  <p className="font-body text-sm text-on-surface-variant mt-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                    {q.note}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
