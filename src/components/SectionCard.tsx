
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkTo: string;
  priority?: number;
}

export function SectionCard({ 
  title, 
  description, 
  imageSrc, 
  linkTo,
  priority = 0
}: SectionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={linkTo}
      className={cn(
        "group relative overflow-hidden rounded-lg block h-[400px] lg:h-[500px]",
        "transform transition-all duration-700",
        isHovered ? "shadow-2xl shadow-bobsonm-navy/20 scale-[1.01]" : "shadow-xl"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transformOrigin: "center" }}
    >
      {/* Background image with zoom effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          transform: isHovered ? "scale(1.05)" : "scale(1)"
        }}
      />
      
      {/* Overlay gradient */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-t transition-opacity duration-500",
          "from-bobsonm-black via-bobsonm-black/80 to-transparent",
          isHovered ? "opacity-90" : "opacity-80"
        )} 
      />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
        <h3 
          className={cn(
            "text-2xl sm:text-3xl font-semibold mb-3 font-serif",
            "text-white transition-transform duration-500",
            isHovered ? "transform translate-y-0" : "transform translate-y-2"
          )}
        >
          {title}
        </h3>
        
        <p 
          className={cn(
            "text-muted-foreground mb-4 max-w-md",
            "transition-all duration-500 ease-in-out",
            isHovered ? "opacity-100 max-h-20" : "opacity-80 max-h-16"
          )}
        >
          {description}
        </p>
        
        <div 
          className={cn(
            "flex items-center text-bobsonm-gold font-medium",
            "transition-all duration-500",
            isHovered ? "translate-x-2" : "translate-x-0"
          )}
        >
          <span>Узнать больше</span>
          <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
