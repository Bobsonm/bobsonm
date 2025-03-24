
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface MenuScansProps {
  tabs: {
    value: string;
    label: string;
    images: string[];
  }[];
  className?: string;
}

export function MenuScans({ tabs, className }: MenuScansProps) {
  const [activeImage, setActiveImage] = useState<string | null>(
    tabs[0]?.images[0] || null
  );

  return (
    <div className={cn("w-full", className)}>
      <Tabs defaultValue={tabs[0]?.value} className="w-full">
        <TabsList className="w-full bg-bobsonm-navy/20 p-1 mb-6">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:bg-bobsonm-navy data-[state=active]:text-white"
              onClick={() => setActiveImage(tab.images[0] || null)}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-2/3">
                <AnimatedSection direction="scale">
                  {activeImage && (
                    <div className="overflow-hidden rounded-lg border-2 border-bobsonm-navy/30 bg-bobsonm-navy/10">
                      <img
                        src={activeImage}
                        alt={`Menu ${tab.label}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}
                </AnimatedSection>
              </div>
              
              <div className="w-full md:w-1/3">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
                  {tab.images.map((image, index) => (
                    <AnimatedSection key={image} delay={100 * index} direction="scale">
                      <button
                        onClick={() => setActiveImage(image)}
                        className={cn(
                          "aspect-[3/4] rounded-md overflow-hidden border-2 transition-all hover:scale-105",
                          activeImage === image
                            ? "border-bobsonm-gold shadow-lg"
                            : "border-bobsonm-navy/20 opacity-70"
                        )}
                      >
                        <img
                          src={image}
                          alt={`Menu thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
