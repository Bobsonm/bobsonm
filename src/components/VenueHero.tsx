import { ReactNode } from "react";
import { FadeUp, Reveal } from "@/components/ParallaxSection";

interface VenueHeroStat {
  label: string;
  value: string;
}

interface VenueHeroProps {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  actions: ReactNode;
  stats: VenueHeroStat[];
}

export function VenueHero({
  eyebrow,
  title,
  accent,
  description,
  imageSrc,
  imageAlt,
  actions,
  stats,
}: VenueHeroProps) {
  return (
    <section className="relative overflow-hidden pb-10 pt-8 sm:pb-14 sm:pt-10 md:pb-16 md:pt-12">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 18% 24%, hsl(var(--primary) / 0.12), transparent 32%), radial-gradient(circle at 82% 14%, hsl(var(--primary) / 0.08), transparent 24%), linear-gradient(180deg, hsl(var(--background)) 0%, hsl(0 0% 5%) 100%)",
        }}
      />

      <div className="bobsonm-container relative grid min-h-[calc(100svh-4.5rem)] items-end gap-8 md:min-h-[calc(100svh-5rem)] md:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.88fr)] md:gap-12">
        <div className="order-2 flex max-w-2xl flex-col justify-end pb-2 md:order-1 md:pb-8">
          <FadeUp>
            <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-primary/80">
              {eyebrow}
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="text-[clamp(3.1rem,12vw,6.8rem)] leading-[0.92] text-foreground">
              {title}
              <span className="block italic text-gold-shine">{accent}</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.16}>
            <div className="mb-6 mt-5 w-24 gold-divider" />
          </FadeUp>

          <FadeUp delay={0.24}>
            <p className="max-w-xl text-base leading-relaxed text-foreground/72 sm:text-lg">
              {description}
            </p>
          </FadeUp>

          <FadeUp delay={0.32}>
            <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-lg px-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-primary/72">{stat.label}</p>
                  <p className="mt-2 text-lg text-foreground sm:text-xl">{stat.value}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <Reveal className="order-1 flex items-center justify-center md:order-2 md:justify-end">
          <div className="relative w-full max-w-[38rem]">
            <div className="absolute inset-0 rounded-[2rem] bg-primary/10 blur-3xl" />
            <div className="premium-card rounded-[2rem] p-3 sm:p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border border-primary/12 bg-card">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/14 to-transparent" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}