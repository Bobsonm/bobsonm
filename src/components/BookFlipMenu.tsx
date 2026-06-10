import { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BookFlipMenuTab {
  value: string;
  label: string;
  images: string[];
}

interface BookFlipMenuProps {
  tabs: BookFlipMenuTab[];
  className?: string;
}

/**
 * Premium pageflip-style menu. Real 3D rotateY flip, swipe support,
 * tap to open full-screen lightbox. Works for one or multiple tabs.
 */
export function BookFlipMenu({ tabs, className }: BookFlipMenuProps) {
  const [tabIdx, setTabIdx] = useState(0);
  const [page, setPage] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [flipping, setFlipping] = useState<"next" | "prev" | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const images = useMemo(() => tabs[tabIdx]?.images ?? [], [tabs, tabIdx]);

  useEffect(() => {
    setPage(0);
  }, [tabIdx]);

  const next = useCallback(() => {
    if (page >= images.length - 1) return;
    setFlipping("next");
    setTimeout(() => {
      setPage((p) => p + 1);
      setFlipping(null);
    }, 600);
  }, [page, images.length]);

  const prev = useCallback(() => {
    if (page <= 0) return;
    setFlipping("prev");
    setTimeout(() => {
      setPage((p) => p - 1);
      setFlipping(null);
    }, 600);
  }, [page]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox) {
        if (e.key === "Escape") setLightbox(null);
        return;
      }
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, lightbox]);

  if (!images.length) return null;

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart == null) return;
    const dx = e.changedTouches[0].clientX - touchStart;
    if (dx < -40) next();
    else if (dx > 40) prev();
    setTouchStart(null);
  };

  return (
    <div className={cn("w-full", className)}>
      {tabs.length > 1 && (
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {tabs.map((t, i) => (
            <button
              key={t.value}
              onClick={() => setTabIdx(i)}
              className={cn(
                "px-5 py-2 rounded-full text-xs tracking-[0.25em] uppercase border transition-all",
                i === tabIdx
                  ? "border-primary text-primary bg-primary/10"
                  : "border-border text-foreground/60 hover:text-foreground hover:border-primary/40",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      {/* Book */}
      <div
        className="relative mx-auto book-perspective select-none"
        style={{ maxWidth: 760 }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative aspect-[3/4] sm:aspect-[4/5]">
          {/* shadow base */}
          <div className="absolute inset-x-6 bottom-2 h-6 bg-black/60 blur-xl rounded-full" aria-hidden />

          {/* underlying next page (visible during flip) */}
          {images[page + 1] && (
            <img
              src={images[page + 1]}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain rounded-md bg-[hsl(var(--card))]"
            />
          )}

          {/* current page */}
          <div
            className={cn(
              "book-page absolute inset-0 rounded-md overflow-hidden bg-[hsl(var(--card))]",
              flipping === "next" && "flipped",
            )}
          >
            <img
              src={images[page]}
              alt={`Страница ${page + 1}`}
              className="w-full h-full object-contain"
              draggable={false}
            />
            {/* page edge gradient */}
            <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-black/30 to-transparent pointer-events-none" />
            <button
              type="button"
              onClick={() => setLightbox(images[page])}
              className="absolute top-3 right-3 z-10 h-9 w-9 inline-flex items-center justify-center rounded-full bg-black/60 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Открыть страницу"
            >
              <ZoomIn size={15} />
            </button>
          </div>
        </div>

        {/* controls */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prev}
            disabled={page === 0}
            className="h-11 w-11 rounded-full border border-primary/40 text-primary inline-flex items-center justify-center hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Назад"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="text-xs tracking-[0.3em] uppercase text-foreground/60">
            {String(page + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>
          <button
            onClick={next}
            disabled={page >= images.length - 1}
            className="h-11 w-11 rounded-full border border-primary/40 text-primary inline-flex items-center justify-center hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Далее"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === page ? "w-6 bg-primary" : "w-1.5 bg-foreground/20 hover:bg-foreground/40",
              )}
              aria-label={`Страница ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 h-11 w-11 rounded-full border border-primary/40 text-primary inline-flex items-center justify-center hover:bg-primary/10"
              aria-label="Закрыть"
            >
              <X size={18} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={lightbox}
              alt="Меню"
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
