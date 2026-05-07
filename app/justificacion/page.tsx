import type { Metadata } from "next";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Justificación | ZAZAPAS",
  description:
    "Análisis lingüístico, retórico y de comunicación de la página web de ZAZAPAS.",
};

const RHETORICAL_QUOTES = [
  {
    type: "Metáfora",
    text: "No son solo zapatillas, son tu carta de presentación.",
    icon: "auto_awesome",
    iconLabel: "Recurso creativo",
    explanation:
      "Compara las zapatillas con una carta de presentación, elevando su valor simbólico más allá de lo funcional. El lector percibe el calzado como una extensión directa de su identidad y carácter.",
  },
  {
    type: "Hipérbole",
    text: "Diseñadas para que cada paso deje huella.",
    icon: "trending_up",
    iconLabel: "Impacto amplificado",
    explanation:
      'La expresión "dejar huella" exagera el efecto del producto de forma deliberada. Crea una expectativa de impacto e importancia en cada movimiento del usuario, reforzando la aspiración de trascendencia.',
  },
  {
    type: "Anáfora",
    text: "Para correr. Para destacar. Para llegar más lejos.",
    icon: "repeat",
    iconLabel: "Ritmo y repetición",
    explanation:
      'La repetición de "Para" al inicio de cada frase crea un ritmo acumulativo que refuerza el mensaje de versatilidad y superación, conectando emocionalmente con el deseo de progresión del público joven.',
  },
];

export default function JustificacionPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32 relative">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/6 blur-[140px] rounded-full" />
        <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-secondary/4 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[280px] h-[280px] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Back */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors duration-200 font-headline text-xs tracking-[0.25em] uppercase mb-12 group"
        >
          <Icon
            name="arrow_back"
            size={14}
            className="group-hover:-translate-x-1 transition-transform duration-200"
          />
          Volver al inicio
        </a>

        {/* Page header */}
        <div className="mb-16 pb-12 border-b border-outline-variant/25">
          <p className="font-headline tracking-[0.4em] text-primary/55 text-[10px] uppercase mb-5 flex items-center gap-3">
            <span className="w-5 h-px bg-primary/40" />
            Documento de análisis · ZAZAPAS
          </p>
          <h1 className="font-headline text-7xl md:text-8xl font-black tracking-tighter text-on-surface leading-none mb-1">
            JUSTIFI
          </h1>
          <h1 className="font-headline text-7xl md:text-8xl font-black tracking-tighter text-primary text-glow-primary leading-none">
            CACIÓN
          </h1>
          <p className="font-body text-on-surface-variant text-base mt-7 leading-relaxed max-w-xl">
            Análisis lingüístico, retórico y de comunicación de la página web de
            ZAZAPAS. Estudio de los recursos empleados y el público al que se
            dirige.
          </p>
        </div>

        {/* ── Section 01 ─────────────────────────────────────── */}
        <section className="mb-10" aria-labelledby="sec-1">
          <div className="glass-surface rounded-2xl p-10">
            <div className="flex items-center gap-5 mb-10">
              <span className="font-headline text-primary text-sm tracking-[0.45em] font-bold">
                01
              </span>
              <div className="h-px flex-1 bg-outline-variant/25" />
            </div>

            <h2
              id="sec-1"
              className="font-headline text-3xl font-black mb-1 leading-tight"
            >
              Valores y emociones transmitidas
            </h2>
            <p className="font-headline text-xl font-bold text-primary mb-8">
              y público objetivo
            </p>

            <div className="space-y-5">
              <p className="font-body text-on-surface/80 leading-relaxed text-base">
                La página transmite valores de identidad personal, autenticidad,
                seguridad y libertad de expresión. Presenta las zapatillas no
                solo como un producto útil, sino como una forma de mostrar la
                personalidad de quien las lleva. También comunica modernidad y
                estilo urbano, ya que el diseño visual y el lenguaje buscan
                conectar con una estética actual.
              </p>
              <p className="font-body text-on-surface/80 leading-relaxed text-base">
                Por eso, la web va dirigida principalmente a adolescentes y
                jóvenes adultos, aproximadamente entre 16 y 30 años,
                interesados en la moda urbana, las tendencias digitales y la
                expresión personal a través de la ropa y el calzado. Es un
                público que valora diferenciarse, sentirse identificado con una
                imagen concreta y proyectar confianza mediante su estilo.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 02 ─────────────────────────────────────── */}
        <section className="mb-10" aria-labelledby="sec-2">
          <div className="glass-surface rounded-2xl p-10">
            <div className="flex items-center gap-5 mb-10">
              <span className="font-headline text-primary text-sm tracking-[0.45em] font-bold">
                02
              </span>
              <div className="h-px flex-1 bg-outline-variant/25" />
            </div>

            <h2
              id="sec-2"
              className="font-headline text-3xl font-black mb-1 leading-tight"
            >
              Función
            </h2>
            <p className="font-headline text-xl font-bold text-primary mb-8">
              Apelativa
            </p>

            <p className="font-body text-on-surface/80 leading-relaxed text-base mb-10">
              La función apelativa busca interpelar directamente al receptor,
              orientando el mensaje hacia la acción o la respuesta emocional. En
              ZAZAPAS, esta función se materializa mediante expresiones
              imperativas que apelan al deseo de diferenciación y pertenencia
              del público objetivo. Las frases utilizadas en la web que
              ejemplifican esta función son:
            </p>

            <div className="space-y-4">
              {[
                "Descubre tu estilo",
                "Hazlas tuyas hoy",
                "Da el siguiente paso",
              ].map((q) => (
                <blockquote
                  key={q}
                  className="glass-card border border-outline-variant/20 rounded-xl p-6 border-l-4 border-l-primary/60 flex items-center gap-4"
                >
                  <Icon
                    name="format_quote"
                    size={20}
                    className="text-primary/40 flex-shrink-0"
                  />
                  <p className="font-headline text-xl font-black text-on-surface">
                    &ldquo;{q}&rdquo;
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 03 ─────────────────────────────────────── */}
        <section className="mb-16" aria-labelledby="sec-3">
          <div className="glass-surface rounded-2xl p-10">
            <div className="flex items-center gap-5 mb-10">
              <span className="font-headline text-primary text-sm tracking-[0.45em] font-bold">
                03
              </span>
              <div className="h-px flex-1 bg-outline-variant/25" />
            </div>

            <h2
              id="sec-3"
              className="font-headline text-3xl font-black mb-1 leading-tight"
            >
              Recursos
            </h2>
            <p className="font-headline text-xl font-bold text-primary mb-8">
              Retóricos
            </p>

            <p className="font-body text-on-surface/80 leading-relaxed text-base mb-12">
              La página emplea distintos recursos literarios para reforzar su
              mensaje persuasivo y crear un vínculo emocional con el usuario.
              Pasa el cursor por cada cita para revelarla y ver su función:
            </p>

            {/* Rhetorical quotes — blurred until hover */}
            <div className="space-y-5">
              {RHETORICAL_QUOTES.map((q) => (
                <div key={q.type} className="group cursor-default">
                  <div className="glass-card border border-outline-variant/20 rounded-2xl p-7 flex items-start gap-5 transition-all duration-500 hover:border-primary/25 hover:shadow-[0_0_25px_rgba(255,145,89,0.08)]">
                    {/* Icon column */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-1 mt-1">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-outline-variant/30 group-hover:border-primary/40 bg-surface-variant/50 group-hover:bg-primary/10 transition-all duration-500">
                        <Icon
                          name={q.icon}
                          size={18}
                          className="text-on-surface-variant group-hover:text-primary transition-colors duration-500"
                        />
                      </div>
                      <p className="font-body text-[9px] text-center text-on-surface-variant/40 group-hover:text-primary/55 transition-colors duration-500 w-12 leading-tight">
                        {q.iconLabel}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <span className="font-headline text-[10px] tracking-[0.4em] uppercase text-primary/45 group-hover:text-primary/80 transition-colors duration-500">
                        {q.type}
                      </span>
                      <p
                        className="font-headline text-2xl md:text-3xl font-black mt-2 mb-3 text-on-surface leading-snug blur group-hover:blur-none group-hover:scale-[1.01] transition-all duration-500 origin-left"
                        aria-label={q.text}
                      >
                        &ldquo;{q.text}&rdquo;
                      </p>
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing sentence ────────────────────────────────── */}
        <div className="border-t border-outline-variant/25 pt-16">
          <div className="glass-surface rounded-2xl p-10 text-center">
            <span className="font-headline text-6xl text-primary/20 leading-none block mb-2">
              &#8220;
            </span>
            <p className="font-headline text-xl md:text-2xl font-black text-on-surface/65 italic max-w-2xl mx-auto leading-relaxed -mt-4">
              Elegir un par también es elegir una forma de mostrarse al mundo.
            </p>
            <span className="font-headline text-6xl text-primary/20 leading-none block mt-2">
              &#8221;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
