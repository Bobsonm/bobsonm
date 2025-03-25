import { AnimatedSection } from "./AnimatedSection";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
interface FoodMenuCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
  title?: string;
}
export function FoodMenuCarousel({
  images,
  className,
  title
}: FoodMenuCarouselProps) {
  return <AnimatedSection direction="up">
      {title && <h4 className="text-xl font-serif font-semibold mb-4 text-bobsonm-gold text-center">{title}</h4>}
      <div className="my-0 px-0 py-0 rounded-md">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => <CarouselItem key={index}>
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg">
                    <img src={image.src} alt={image.alt} className="w-full h-auto hover:scale-105 transition-transform duration-150 object-scale-down" />
                  </div>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-black/50 text-white hover:bg-black/80" />
          <CarouselNext className="right-2 bg-black/50 text-white hover:bg-black/80" />
        </Carousel>
      </div>
    </AnimatedSection>;
}