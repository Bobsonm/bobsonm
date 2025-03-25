
import { AnimatedSection } from "./AnimatedSection";

interface YandexMapProps {
  src: string;
  className?: string;
}

export function YandexMap({ src, className }: YandexMapProps) {
  return (
    <AnimatedSection className={className || ""}>
      <div className="glass-panel p-2 rounded-lg overflow-hidden shadow-[0_0_25px_rgba(21,39,75,0.5)] border-2 border-bobsonm-navy/30">
        <iframe 
          src={src}
          width="100%" 
          height="400" 
          frameBorder="0"
          allow="fullscreen"
          className="rounded-md"
          aria-label="Yandex Map"
        ></iframe>
      </div>
    </AnimatedSection>
  );
}
