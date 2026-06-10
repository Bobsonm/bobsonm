import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
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
  },
  {
    title: "Bobsonm Lounge",
    description:
      "Премиальные кальяны, авторские напитки и приглушённый свет. Пространство для долгих разговоров.",
    imageSrc: "/lovable-uploads/adb9981e-55c4-4f48-8d78-0eae2fb0fe09.png",
    linkTo: "/lounge",
    tag: "02 — Атмосфера",
  },
  {
    title: "Bobsonm Mafia",
    description:
      "Интеллектуальная игра с профессиональными ведущими. Стратегия, психология, харизма.",
    imageSrc: "/lovable-uploads/f2c1b295-9a6e-4390-8ea7-8671297c8dbe.png",
    linkTo: "/mafia",
    tag: "03 — Интрига",
  },
  {
    title: "Bobsonm Гастробар",
    description:
      "Авторская кухня и барная карта. Вечерний ритуал ужина с друзьями.",
    imageSrc:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop",
    linkTo: "/gastrobar",
    tag: "04 — Вкус",
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
  const scrollY = useRef(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroBlur = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return (
    <div className="relative bg-background text-foreground overflow-x-hidden grain">
      {/* HERO with 3D scene */}
      <section
        ref={heroRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {mounted && <Hero3D scrollY={scrollY} />}
        </div>

        {/* Vignette */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, hsl(var(--background) / 0.4) 60%, hsl(var(--background)) 100%)",
          }}
        />

        <motion.div
          style={{ y: heroTextY, opacity: heroTextOpacity, filter: `blur(${heroBlur}px)` as any }}
          className="relative z-20 text-center px-6 max-w-5xl mt-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs sm:text-sm tracking-[0.4em] uppercase text-primary/80 mb-6"
          >
            Твоя территория отдыха
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.95] mb-8"
          >
            <span className="text-gradient-aurora">Bobsonm</span>
            <span className="text-primary">.</span>
            <span className="italic text-foreground/90">ru</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto mb-10 font-light"
          >
            Лаундж, бильярд, мафия и гастробар — четыре направления одного
            пространства для безупречного вечера.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex justify-center"
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
              <span className="tracking-widest text-xs uppercase">Исследовать</span>
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* INTRO statement */}
      <section className="relative py-32 sm:py-48">
        <div className="bobsonm-container">
          <FadeUp>
            <p className="text-xs tracking-[0.4em] uppercase text-primary/80 mb-8 text-center">
              Философия
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl leading-tight text-center max-w-4xl mx-auto">
              Каждый из проектов — <span className="italic text-gradient-aurora">отдельный мир</span>.
              Вместе они складываются в одно безупречное место.
            </h2>
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
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, hsl(243 75% 59% / 0.4), transparent 60%), radial-gradient(circle at 70% 80%, hsl(280 70% 60% / 0.3), transparent 60%)",
          }}
        />
        <div className="bobsonm-container relative">
          <FadeUp>
            <p className="text-xs tracking-[0.4em] uppercase text-primary/80 mb-6 text-center">
              Локации
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-center mb-20 max-w-3xl mx-auto">
              Где <span className="italic text-gradient-aurora">встретимся</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {venues.map((v, i) => (
              <Reveal key={v.linkTo}>
                <Link
                  to={v.linkTo}
                  className="premium-card group block p-7 h-full"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="relative z-10">
                    <p className="text-xs tracking-widest text-primary/70 mb-4">
                      0{i + 1}
                    </p>
                    <h3 className="font-serif text-2xl mb-5 group-hover:text-gradient-aurora transition-colors">
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
  const imgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15]);
  const isReverse = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center py-24 sm:py-32"
    >
      <div className="bobsonm-container">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            isReverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}
          <Reveal>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <motion.div
                style={{ y: imgY, scale: imgScale }}
                className="absolute inset-0 bg-cover bg-center"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${section.imageSrc})` }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute top-6 left-6 text-xs tracking-[0.3em] uppercase text-primary/90 backdrop-blur-md bg-background/30 px-3 py-1.5 rounded-full border border-primary/30">
                {section.tag}
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <FadeUp>
              <p className="text-xs tracking-[0.4em] uppercase text-primary/80 mb-6">
                Направление 0{index + 1}
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
                {section.title.replace("Bobsonm ", "")}
                <span className="block italic text-gradient-aurora mt-2">
                  Bobsonm
                </span>
              </h3>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-foreground/70 text-lg leading-relaxed mb-8 max-w-md font-light">
                {section.description}
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <Link
                to={section.linkTo}
                className="group inline-flex items-center gap-3 text-primary border-b border-primary/30 hover:border-primary pb-2 transition-all"
              >
                <span className="tracking-widest text-sm uppercase">
                  Открыть
                </span>
                <ArrowRight
                  size={16}
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
