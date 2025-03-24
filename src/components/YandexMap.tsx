
import React from "react";

interface YandexMapProps {
  src: string;
  className?: string;
}

export function YandexMap({ src, className }: YandexMapProps) {
  return (
    <div className={`w-full h-[400px] rounded-lg overflow-hidden border-2 border-bobsonm-navy/30 ${className}`}>
      <iframe 
        src={src} 
        width="100%" 
        height="100%" 
        frameBorder="0"
        title="Yandex Map"
        className="w-full h-full"
        loading="lazy"
        allow="geolocation"
      />
    </div>
  );
}
