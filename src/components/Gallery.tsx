
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "./AnimatedSection";
import { X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface GalleryProps {
  images: GalleryImage[];
  className?: string;
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg";
}

export function Gallery({
  images,
  className,
  columns = 3,
  gap = "md",
  rounded = "md",
}: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  };
  
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
  };
  
  const columnClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };
  
  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };
  
  return (
    <>
      <div
        className={cn(
          "grid", 
          columnClasses[columns],
          gapClasses[gap],
          className
        )}
      >
        {images.map((image, index) => (
          <AnimatedSection
            key={index}
            className="image-hover"
            delay={100 * index}
            once={true}
          >
            <button 
              className="block w-full h-full cursor-zoom-in"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={cn(
                  "w-full h-64 object-cover transition-transform duration-500",
                  roundedClasses[rounded]
                )}
                width={image.width || 400}
                height={image.height || 300}
                loading="lazy"
              />
            </button>
          </AnimatedSection>
        ))}
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 border-bobsonm-navy bg-bobsonm-black/90 backdrop-blur-lg">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 rounded-full p-1.5 bg-black/50 text-white hover:bg-black/80 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          {selectedImage && (
            <div className="flex items-center justify-center w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[80vh] w-auto object-contain"
                loading="lazy"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
