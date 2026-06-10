import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin, Phone } from "lucide-react";
import { Hero3D } from "@/components/Hero3D";
import { FadeUp, Reveal } from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";

const sections = [
  {
    title: "Bobsonm Бильярд",
    description:
      "Профессиональные столы, сукно Iwan Simonis и приватный VIP-зал. Тишина концентрации и звук удара.",
    imageSrc: "/lovable-uploads/fb650412-d0a2-43da-be15-eab134870a5d.png",
    linkTo: "/billiards",
    tag: "01 — Игра",
    chapter: "Шар №8",
  },
  {
    title: "Bobsonm Lounge",
    description:
      "Премиальные кальяны, авторские напитки и приглушённый свет. Пространство для долгих разговоров.",
    imageSrc: "/lovable-uploads/adb9981e-55c4-4f48-8d78-0eae2fb0fe09.png",
    linkTo: "/lounge",
    tag: "02 — Атмосфера",
    chapter: "Дым и угли",
  },
  {
    title: "Bobsonm Mafia",
    description:
      "Интеллектуальная игра с профессиональными ведущими. Стратегия, психология, харизма.",
    imageSrc: "/lovable-uploads/f2c1b295-9a6e-4390-8ea7-8671297c8dbe.png",
    linkTo: "/mafia",
    tag: "03 — Интрига",
    chapter: "Карты на стол",
  },
  {
    title: "Bobsonm Гастробар",
    description:
      "Авторская кухня и барная карта. Вечерний ритуал ужина с друзьями.",
    imageSrc:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop",
    linkTo: "/gastrobar",
    tag: "04 — Вкус",
    chapter: "Подача",
  },
];

const venues = [
  {
    name: "Bobsonm Бильярд",
    address: "Москва, ул. Братиславская 27к1",
    phone: "+7 (495) 908-92-45",
    linkTo: "/billiards",
  },
  {
    name: "Bobsonm Lounge",
    address: "Москва, Международная улица 15А",
    phone: "+7 (901) 417-22-93",
    linkTo: "/lounge",
  },
  {
    name: "Bobsonm Mafia",
    address: "Москва, Международная улица 15А",
    phone: "+7 (967) 131-17-83",
    linkTo: "/mafia",
  },
  {
    name: "Bobsonm Гастробар",
    address: "Москва, Нахимовский проспект 35к2",
    phone: "+7 (967) 131-17-83",
    linkTo: "/gastrobar",
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroProgress = useRef(0);
  const [chapterIdx, setChapterIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    heroProgress.current = v;
    const i = Math.min(3, Math.floor(v * 4));
    setChapterIdx((prev) => (prev !== i ? i : prev));
  });

  // Text leaves quickly so the scene reads
  const heroTextY = useTransform(scrollYProgress, [0, 0.5], [0, 160]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <div className="relative bg-background text-foreground overflow-x-hidden grain">
      {/* HERO — tall scrub container, sticky canvas */}
      <section ref={heroRef} className="relative h-[320vh] w-full">
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Hero3D progress={heroProgress} />
          </div>

          {/* Vignette */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, hsl(var(--background) / 0.55) 65%, hsl(var(--background)) 100%)",
            }}
          />

          {/* Title block */}
          <motion.div
            style={{ y: heroTextY, opacity: heroTextOpacity }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-5"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[10px] sm:text-xs tracking-[0.45em] uppercase text-primary/80 mb-5"
            >
              Твоя территория отдыха
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(3.4rem,12vw,9rem)] leading-[0.9] mb-6"
            >
              <span className="text-gold-shine">Bobsonm</span>
              <span className="italic font-light text-foreground/80">.ru</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="w-24 gold-divider mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-sm sm:text-base text-foreground/65 max-w-xl mx-auto mb-10 font-light leading-relaxed px-4"
            >
              Бильярд, лаундж, мафия и гастробар — четыре направления одного
              пространства для безупречного вечера.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <Button
                onClick={() =>
                  document
                    .getElementById("sections")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="ghost"
                className="text-primary hover:bg-transparent hover:text-primary/80 flex items-center gap-2 group"
              >
                <span className="tracking-[0.3em] text-[10px] uppercase">
                  Исследовать
                </span>
                <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Chapter label — appears after intro fades */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0.25, 0.4, 0.95, 1], [0, 1, 1, 0]) }}
            className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 z-20 text-center"
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-primary/70 mb-2">
              Глава 0{chapterIdx + 1}
            </p>
            <p className="font-serif italic text-2xl sm:text-3xl text-foreground/90">
              {sections[chapterIdx].chapter}
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO statement */}
      <section className="relative py-28 sm:py-44">
        <div className="bobsonm-container">
          <FadeUp>
            <p className="text-[10px] tracking-[0.45em] uppercase text-primary/80 mb-6 text-center">
              Философия
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl leading-[1.1] text-center max-w-4xl mx-auto">
              Каждый из проектов —{" "}
              <span className="italic text-gold-shine">отдельный мир</span>.
              Вместе они складываются в одно безупречное место.
            </h2>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="mx-auto mt-10 w-20 gold-divider" />
          </FadeUp>
        </div>
      </section>

      {/* SECTIONS — alternating parallax */}
      <section id="sections" className="relative">
        {sections.map((s, i) => (
          <SectionRow key={s.linkTo} section={s} index={i} />
        ))}
      </section>

      {/* VENUES grid */}
      <section className="relative py-28 sm:py-40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, hsl(42 60% 50% / 0.18), transparent 60%), radial-gradient(circle at 70% 80%, hsl(42 60% 50% / 0.12), transparent 60%)",
          }}
        />
        <div className="bobsonm-container relative">
          <FadeUp>
            <p className="text-[10px] tracking-[0.45em] uppercase text-primary/80 mb-5 text-center">
              Локации
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-center mb-16 max-w-3xl mx-auto">
              Где <span className="italic text-gold-shine">встретимся</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {venues.map((v, i) => (
              <Reveal key={v.linkTo}>
                <Link to={v.linkTo} className="premium-card group block p-7 h-full">
                  <div className="relative z-10">
                    <p className="text-[10px] tracking-[0.3em] text-primary/70 mb-4">
                      0{i + 1}
                    </p>
                    <h3 className="font-serif text-2xl mb-5 group-hover:text-gold-shine transition-colors">
                      {v.name}
                    </h3>
                    <div className="space-y-3 text-sm text-foreground/70">
                      <div className="flex items-start gap-2">
                        <MapPin size={14} className="mt-0.5 text-primary/60 shrink-0" />
                        <span>{v.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="text-primary/60 shrink-0" />
                        <span>{v.phone}</span>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-primary text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
                      Подробнее <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

function SectionRow({
  section,
  index,
}: {
  section: (typeof sections)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.12]);
  const isReverse = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="relative min-h-[90svh] flex items-center py-20 sm:py-32"
    >
      <div className="bobsonm-container">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            isReverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Reveal>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-primary/15">
              <motion.div
                style={{ y: imgY, scale: imgScale }}
                className="absolute inset-0 will-change-transform"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${section.imageSrc})` }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              <div className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase text-primary/90 backdrop-blur-md bg-background/40 px-3 py-1.5 rounded-full border border-primary/30">
                {section.tag}
              </div>
            </div>
          </Reveal>

          <div>
            <FadeUp>
              <p className="text-[10px] tracking-[0.45em] uppercase text-primary/80 mb-5">
                Направление 0{index + 1}
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="font-serif text-[clamp(2.2rem,6vw,4.2rem)] leading-[1.05] mb-6">
                {section.title.replace("Bobsonm ", "")}
                <span className="block italic text-gold-shine mt-2">Bobsonm</span>
              </h3>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="w-16 gold-divider mb-6" />
            </FadeUp>
            <FadeUp delay={0.25}>
              <p className="text-foreground/70 text-base sm:text-lg leading-relaxed mb-8 max-w-md font-light">
                {section.description}
              </p>
            </FadeUp>
            <FadeUp delay={0.35}>
              <Link
                to={section.linkTo}
                className="group inline-flex items-center gap-3 text-primary border-b border-primary/30 hover:border-primary pb-2 transition-all"
              >
                <span className="tracking-[0.3em] text-xs uppercase">Открыть</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
