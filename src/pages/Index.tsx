import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, MapPin, Phone } from "lucide-react";
import { Hero3D } from "@/components/Hero3D";
import { FadeUp, Reveal } from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";

const heroSteps = [
  {
    id: "hero-ball",
    label: "Шар №8",
    hint: "Вход в сценарий",
    description: "Свет, сукно и первый акцент бильярдной сцены.",
  },
  {
    id: "hero-smoke",
    label: "Дым и угли",
    hint: "Lounge mood",
    description: "Тёплое свечение и мягкий дым открывают lounge-настроение.",
  },
  {
    id: "hero-cards",
    label: "Карты",
    hint: "Mafia mood",
    description: "Интрига и движение — сцена уходит в игру и психологию.",
  },
  {
    id: "hero-dish",
    label: "Подача",
    hint: "Gastrobar mood",
    description: "Финальный переход к гастробару и вечернему ужину.",
  },
] as const;

const sections = [
  {
    id: "billiards",
    title: "Bobsonm Бильярд",
    shortTitle: "Бильярд",
    description:
      "Профессиональные столы, сукно Iwan Simonis и приватный VIP-зал. Тишина концентрации и звук удара.",
    imageSrc: "/lovable-uploads/fb650412-d0a2-43da-be15-eab134870a5d.png",
    linkTo: "/billiards",
    tag: "01 — Игра",
    chapter: "Шар №8",
  },
  {
    id: "lounge",
    title: "Bobsonm Lounge",
    shortTitle: "Lounge",
    description:
      "Премиальные кальяны, авторские напитки и приглушённый свет. Пространство для долгих разговоров.",
    imageSrc: "/lovable-uploads/adb9981e-55c4-4f48-8d78-0eae2fb0fe09.png",
    linkTo: "/lounge",
    tag: "02 — Атмосфера",
    chapter: "Дым и угли",
  },
  {
    id: "mafia",
    title: "Bobsonm Mafia",
    shortTitle: "Mafia",
    description:
      "Интеллектуальная игра с профессиональными ведущими. Стратегия, психология, харизма.",
    imageSrc: "/lovable-uploads/f2c1b295-9a6e-4390-8ea7-8671297c8dbe.png",
    linkTo: "/mafia",
    tag: "03 — Интрига",
    chapter: "Карты на стол",
  },
  {
    id: "gastrobar",
    title: "Bobsonm Гастробар",
    shortTitle: "Гастробар",
    description:
      "Авторская кухня и барная карта. Вечерний ритуал ужина с друзьями.",
    imageSrc:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop",
    linkTo: "/gastrobar",
    tag: "04 — Вкус",
    chapter: "Подача",
  },
] as const;

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
] as const;

const indicatorItems = [
  ...heroSteps.map((step) => ({ id: step.id, label: step.label, hint: step.hint })),
  { id: "intro", label: "Философия", hint: "Общий ритм проекта" },
  ...sections.map((section) => ({ id: section.id, label: section.shortTitle, hint: section.tag })),
  { id: "venues", label: "Локации", hint: "Адреса и контакты" },
] as const;

type ViewportTier = "mobile" | "tablet" | "desktop";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const heroProgress = useRef(0);
  const reducedMotion = useReducedMotion();

  const [viewportTier, setViewportTier] = useState<ViewportTier>("desktop");
  const [heroStepIndex, setHeroStepIndex] = useState(0);
  const [heroInView, setHeroInView] = useState(true);
  const [activeBlock, setActiveBlock] = useState<string>(heroSteps[0].id);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: pageScrollProgress } = useScroll();

  const pageProgressScaleX = useSpring(pageScrollProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });

  const heroCopyY = useTransform(
    scrollYProgress,
    [0, 0.58, 1],
    [0, viewportTier === "mobile" ? 42 : 64, viewportTier === "mobile" ? 86 : 138],
  );
  const heroCopyOpacity = useTransform(scrollYProgress, [0, 0.3, 0.72, 0.84], [1, 1, 0.28, 0]);
  const heroSceneY = useTransform(scrollYProgress, [0, 1], [0, viewportTier === "mobile" ? -20 : -42]);
  const heroSceneScale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.985, 0.95]);
  const heroSceneOpacity = useTransform(scrollYProgress, [0, 0.08], [0.88, 1]);
  const heroChapterOpacity = useTransform(scrollYProgress, [0.15, 0.28, 0.92, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const updateViewportTier = () => {
      if (window.innerWidth < 768) {
        setViewportTier("mobile");
        return;
      }
      if (window.innerWidth < 1024) {
        setViewportTier("tablet");
        return;
      }
      setViewportTier("desktop");
    };

    updateViewportTier();
    window.addEventListener("resize", updateViewportTier);
    return () => window.removeEventListener("resize", updateViewportTier);
  }, []);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const blocks = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-block]"));
    if (!blocks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (heroInView) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const next = visible[0]?.target as HTMLElement | undefined;
        const id = next?.dataset.scrollBlock;

        if (id) {
          setActiveBlock((prev) => (prev !== id ? id : prev));
        }
      },
      {
        threshold: [0.25, 0.45, 0.65],
        rootMargin: "-18% 0px -42% 0px",
      },
    );

    blocks.forEach((block) => observer.observe(block));
    return () => observer.disconnect();
  }, [heroInView]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    heroProgress.current = value;
    const nextStep = Math.min(heroSteps.length - 1, Math.floor(value * heroSteps.length + 0.08));
    setHeroStepIndex((prev) => (prev !== nextStep ? nextStep : prev));
  });

  useEffect(() => {
    if (!heroInView) return;
    const nextId = heroSteps[heroStepIndex].id;
    setActiveBlock((prev) => (prev !== nextId ? nextId : prev));
  }, [heroInView, heroStepIndex]);

  const isMobile = viewportTier === "mobile";
  const isTablet = viewportTier === "tablet";
  const heroSectionHeight = isMobile ? "165svh" : isTablet ? "185svh" : "220svh";
  const stickyHeight = isMobile ? "calc(100svh - 4rem)" : "calc(100svh - 5rem)";
  const activeIndicator = indicatorItems.find((item) => item.id === activeBlock) ?? indicatorItems[0];
  const activeIndicatorIndex = Math.max(
    0,
    indicatorItems.findIndex((item) => item.id === activeIndicator.id),
  );

  return (
    <div className="relative overflow-x-hidden bg-background text-foreground grain">
      <motion.div
        className="fixed left-0 right-0 top-16 z-40 h-px origin-left bg-primary/80 md:top-20"
        style={{ scaleX: pageProgressScaleX }}
      />

      <ScrollProgressHUD
        activeId={activeBlock}
        currentItem={activeIndicator}
        currentIndex={activeIndicatorIndex}
        heroInView={heroInView}
        heroStepIndex={heroStepIndex}
      />

      <section
        ref={heroRef}
        className="relative isolate w-full overflow-clip"
        style={{ height: heroSectionHeight }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 28%, hsl(var(--primary) / 0.09), transparent 34%), radial-gradient(circle at 50% 90%, hsl(var(--primary) / 0.07), transparent 36%)",
            }}
          />
        </div>

        <div className="sticky" style={{ top: isMobile ? "4rem" : "5rem", height: stickyHeight }}>
          <div className="relative h-full overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, hsl(var(--background) / 0.45) 0%, transparent 16%, transparent 78%, hsl(var(--background) / 0.9) 100%)",
              }}
            />

            <div className="bobsonm-container relative z-10 grid h-full items-center gap-8 py-6 sm:py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(340px,1.1fr)] md:gap-12">
              <motion.div
                style={{ y: reducedMotion ? 0 : heroCopyY, opacity: heroCopyOpacity }}
                className="relative order-2 mx-auto flex w-full max-w-2xl flex-col justify-center self-start pb-2 text-center md:order-1 md:self-center md:pb-0 md:text-left"
              >
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                  className="mb-4 text-[10px] uppercase tracking-[0.45em] text-primary/80 sm:text-xs"
                >
                  Твоя территория отдыха
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-4 text-[clamp(3rem,15vw,8rem)] leading-[0.9]"
                >
                  <span className="text-gold-shine">Bobsonm</span>
                  <span className="italic font-light text-foreground/80">.ru</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.45 }}
                  className="mx-auto mb-5 w-24 md:mx-0"
                >
                  <div className="gold-divider" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.95, delay: 0.5 }}
                  className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-foreground/72 md:mx-0 md:text-lg"
                >
                  Бильярд, лаундж, мафия и гастробар — четыре направления одного пространства
                  для безупречного вечера.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="glass-panel mx-auto mb-6 w-full max-w-xl rounded-lg p-4 text-left md:mx-0"
                >
                  <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-primary/70">
                    Сейчас на экране
                  </p>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-serif text-2xl text-foreground sm:text-3xl">
                        {heroSteps[heroStepIndex].label}
                      </p>
                      <p className="mt-1 max-w-md text-sm leading-relaxed text-foreground/65 sm:text-base">
                        {heroSteps[heroStepIndex].description}
                      </p>
                    </div>
                    <p className="hidden text-[10px] uppercase tracking-[0.3em] text-primary/70 sm:block">
                      0{heroStepIndex + 1} / 04
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.9 }}
                  className="flex flex-col items-center gap-4 md:items-start"
                >
                  <Button
                    onClick={() => document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })}
                    variant="ghost"
                    className="group inline-flex h-auto items-center gap-2 px-0 py-0 text-primary hover:bg-transparent hover:text-primary/80"
                  >
                    <span className="text-[10px] uppercase tracking-[0.35em]">Исследовать</span>
                    <ArrowDown size={14} className="transition-transform group-hover:translate-y-1" />
                  </Button>
                  <p className="max-w-sm text-xs uppercase tracking-[0.28em] text-foreground/45">
                    Скролл меняет сцену, а следующий блок появляется без пустого экрана.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                style={{ y: reducedMotion ? 0 : heroSceneY, scale: heroSceneScale, opacity: heroSceneOpacity }}
                className="relative order-1 flex h-full min-h-[320px] items-center justify-center md:order-2"
              >
                <div className="relative h-[34svh] min-h-[320px] w-full max-w-[720px] sm:h-[40svh] md:h-[62svh] md:min-h-[560px]">
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-primary/8 via-transparent to-background/10 blur-2xl" />
                  <div className="absolute inset-0 rounded-[2rem] border border-primary/12 bg-background/10 backdrop-blur-[2px]" />
                  <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                    <Hero3D progress={heroProgress} />
                  </div>
                </div>

                <motion.div
                  style={{ opacity: heroChapterOpacity }}
                  className="absolute bottom-4 left-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-lg border border-primary/15 bg-background/45 px-4 py-3 text-center backdrop-blur-xl md:bottom-8"
                >
                  <p className="mb-1 text-[10px] uppercase tracking-[0.38em] text-primary/70">
                    Активная глава
                  </p>
                  <p className="font-serif text-2xl italic text-foreground/90 sm:text-3xl">
                    {heroSteps[heroStepIndex].label}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="intro" data-scroll-block="intro" className="relative py-20 sm:py-28 md:py-36">
        <div className="bobsonm-container">
          <FadeUp>
            <p className="mb-6 text-center text-[10px] uppercase tracking-[0.45em] text-primary/80">
              Философия
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h2 className="mx-auto max-w-4xl text-center text-3xl leading-[1.08] sm:text-5xl md:text-6xl">
              Каждый из проектов — <span className="italic text-gold-shine">отдельный мир</span>.
              Вместе они складываются в одно безупречное место.
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mx-auto mt-8 w-20 gold-divider" />
          </FadeUp>
        </div>
      </section>

      <section id="sections" className="relative">
        {sections.map((section, index) => (
          <SectionRow key={section.id} section={section} index={index} />
        ))}
      </section>

      <section data-scroll-block="venues" className="relative overflow-hidden py-24 sm:py-32 md:py-40">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.18), transparent 55%), radial-gradient(circle at 70% 80%, hsl(var(--primary) / 0.1), transparent 48%)",
          }}
        />
        <div className="bobsonm-container relative">
          <FadeUp>
            <p className="mb-5 text-center text-[10px] uppercase tracking-[0.45em] text-primary/80">
              Локации
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h2 className="mx-auto mb-14 max-w-3xl text-center text-4xl sm:text-5xl md:text-6xl">
              Где <span className="italic text-gold-shine">встретимся</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {venues.map((venue, index) => (
              <Reveal key={venue.linkTo}>
                <Link to={venue.linkTo} className="premium-card group block h-full p-7">
                  <div className="relative z-10">
                    <p className="mb-4 text-[10px] tracking-[0.3em] text-primary/70">0{index + 1}</p>
                    <h3 className="mb-5 text-2xl group-hover:text-gold-shine transition-colors">
                      {venue.name}
                    </h3>
                    <div className="space-y-3 text-sm text-foreground/70">
                      <div className="flex items-start gap-2">
                        <MapPin size={14} className="mt-0.5 shrink-0 text-primary/60" />
                        <span>{venue.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="shrink-0 text-primary/60" />
                        <span>{venue.phone}</span>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm text-primary opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
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

function ScrollProgressHUD({
  activeId,
  currentItem,
  currentIndex,
  heroInView,
  heroStepIndex,
}: {
  activeId: string;
  currentItem: { id: string; label: string; hint: string };
  currentIndex: number;
  heroInView: boolean;
  heroStepIndex: number;
}) {
  return (
    <>
      <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
        <div className="glass-panel rounded-lg px-4 py-4">
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-primary/75">Навигация</p>
          <div className="space-y-3">
            {indicatorItems.map((item, index) => {
              const isActive = item.id === activeId;
              return (
                <div key={item.id} className="flex items-start gap-3">
                  <div className="mt-1.5 flex flex-col items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full transition-all duration-500 ${
                        isActive ? "bg-primary shadow-[0_0_18px_hsl(var(--primary)/0.7)]" : "bg-primary/25"
                      }`}
                    />
                    {index < indicatorItems.length - 1 && <span className="h-7 w-px bg-border" />}
                  </div>
                  <div>
                    <p className={`text-sm transition-colors ${isActive ? "text-foreground" : "text-foreground/48"}`}>
                      {item.label}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35">{item.hint}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="fixed inset-x-4 bottom-4 z-40 xl:hidden">
        <div className="glass-panel rounded-lg px-4 py-3">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-primary/75">Активный блок</p>
              <p className="mt-1 font-serif text-2xl leading-none text-foreground">{currentItem.label}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground/45">{currentItem.hint}</p>
            </div>
            <p className="pt-1 text-[10px] uppercase tracking-[0.25em] text-primary/75">
              {String(currentIndex + 1).padStart(2, "0")} / {String(indicatorItems.length).padStart(2, "0")}
            </p>
          </div>

          {heroInView ? (
            <div className="grid grid-cols-4 gap-2">
              {heroSteps.map((step, index) => {
                const isActive = heroStepIndex === index;
                return (
                  <div
                    key={step.id}
                    className={`rounded-md border px-2 py-2 text-center transition-all duration-500 ${
                      isActive
                        ? "border-primary/40 bg-primary/10 text-foreground"
                        : "border-border bg-background/40 text-foreground/45"
                    }`}
                  >
                    <p className="text-[10px] uppercase tracking-[0.15em]">0{index + 1}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.08em]">{step.label}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="h-1 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / indicatorItems.length) * 100}%` }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

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

  const imageY = useTransform(scrollYProgress, [0, 1], [-36, 36]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);
  const copyY = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const isReverse = index % 2 === 1;

  return (
    <section
      ref={ref}
      data-scroll-block={section.id}
      className="relative flex min-h-[82svh] items-center py-16 sm:min-h-[88svh] sm:py-20 md:py-28"
    >
      <div className="bobsonm-container">
        <div
          className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
            isReverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-primary/15 bg-card">
              <motion.img
                src={section.imageSrc}
                alt={section.title}
                loading="lazy"
                style={{ y: imageY, scale: imageScale }}
                className="absolute inset-0 h-full w-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/88 via-background/12 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-primary/30 bg-background/45 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-primary/90 backdrop-blur-md">
                {section.tag}
              </div>
            </div>
          </Reveal>

          <motion.div style={{ y: copyY }}>
            <FadeUp>
              <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-primary/80">
                Направление 0{index + 1}
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="mb-6 text-[clamp(2.2rem,6vw,4.2rem)] leading-[1.02]">
                {section.shortTitle}
                <span className="mt-2 block italic text-gold-shine">Bobsonm</span>
              </h3>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="mb-6 w-16 gold-divider" />
            </FadeUp>
            <FadeUp delay={0.25}>
              <p className="mb-8 max-w-md text-base leading-relaxed text-foreground/70 sm:text-lg">
                {section.description}
              </p>
            </FadeUp>
            <FadeUp delay={0.35}>
              <Link
                to={section.linkTo}
                className="group inline-flex items-center gap-3 border-b border-primary/30 pb-2 text-primary transition-all hover:border-primary"
              >
                <span className="text-xs uppercase tracking-[0.3em]">Открыть</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeUp>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Index;