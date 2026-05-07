import { teamMembers } from "@/lib/data";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function TeamSection() {
  return (
    <section
      id="architects"
      className="py-32 px-8 bg-surface"
      aria-labelledby="team-heading"
    >
      {/* Header */}
      <RevealOnScroll className="max-w-7xl mx-auto text-center mb-24">
        <h2
          id="team-heading"
          className="font-headline text-5xl font-black uppercase tracking-[0.25em] mb-4 text-vibrant-blue"
        >
          THE ARCHITECTS
        </h2>
        <p className="text-vibrant-blue/80 font-body text-xs font-semibold uppercase tracking-[0.4em]">
          Vibrant Clarity // Engineering Collective
        </p>
        <div className="mt-8 h-[2px] w-24 bg-vibrant-blue mx-auto rounded-full" />
      </RevealOnScroll>

      {/* Members grid — staggered */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-16 max-w-7xl mx-auto">
        {teamMembers.map((member, i) => (
          <RevealOnScroll key={member.name} delay={i * 100}>
          <div className="flex flex-col items-center group">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 transition-transform duration-500 group-hover:scale-105">
              {/* Hover glow halo */}
              <div className="absolute -inset-2 bg-vibrant-blue/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

              {/* Avatar frame */}
              <div className="relative w-full h-full overflow-hidden rounded-lg border-2 border-vibrant-blue/30 vibrant-glow bg-surface-container-high">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.imageAlt}
                  className="absolute max-w-none object-cover"
                  style={{
                    width: "250%",
                    height: "250%",
                    left: member.offsetX,
                    top: member.offsetY,
                  }}
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-headline text-lg font-black tracking-wider text-on-surface">
                {member.name.toUpperCase()}
              </h3>
              <p className="text-vibrant-blue text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                {member.role}
              </p>
            </div>
          </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
