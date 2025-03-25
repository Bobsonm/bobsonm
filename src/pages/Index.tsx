
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionCard } from "@/components/SectionCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowDown } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
    
    // Smooth scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Section data
  const sections = [
    {
      title: "Bobsonm Бильярд",
      description: "Профессиональные столы, уютная атмосфера и превосходный сервис — идеальное место для игры с друзьями.",
      imageSrc: "/lovable-uploads/27d63064-76a3-4c33-a75d-fccc6022f2aa.png", // Updated image
      linkTo: "/billiards"
    },
    {
      title: "Bobsonm Lounge",
      description: "Погрузись в атмосферу уюта и релакса с премиальными кальянами, изысканными напитками и приятной музыкой.",
      imageSrc: "/lovable-uploads/adb9981e-55c4-4f48-8d78-0eae2fb0fe09.png",
      linkTo: "/lounge"
    },
    {
      title: "Bobsonm Mafia",
      description: "Интеллектуальная игра с профессиональными ведущими. Раскрой в себе талант стратега или актёрское мастерство.",
      imageSrc: "/lovable-uploads/f2c1b295-9a6e-4390-8ea7-8671297c8dbe.png",
      linkTo: "/mafia"
    }
  ];

  // Venue data for the "Наши заведения" section
  const venues = [
    {
      name: "Bobsonm Бильярд",
      address: "Москва, ул. Пестеля, 8А",
      phone: "+7 (495) 908-92-45",
      linkTo: "/billiards"
    },
    {
      name: "Bobsonm Lounge",
      address: "Москва, Международная улица 15А",
      phone: "+7 (901) 417-22-93",
      linkTo: "/lounge"
    },
    {
      name: "Bobsonm Mafia",
      address: "Москва, Международная улица 15А",
      phone: "+7 (967) 131-17-83",
      linkTo: "/mafia"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-bobsonm-black">
      {/* Hero section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url(https://images.unsplash.com/photo-1577845442986-8557a2335be8?q=80&w=1074&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bobsonm-black/90 via-bobsonm-black/70 to-bobsonm-black" />
        
        {/* Content */}
        <div className="relative bobsonm-container text-center z-10 px-4 mt-16">
          <AnimatedSection 
            delay={300} 
            className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-text-shine">
              <span className="text-white">Bobsonm</span>
              <span className="text-bobsonm-gold">.</span>
              <span className="text-white">ru</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={600} direction="up">
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 text-white/90 max-w-3xl mx-auto">
              Твоя территория отдыха
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={900} direction="up">
            <p className="text-white max-w-2xl mx-auto mb-10 text-balance">
              Место, где соединяются лаундж с кальянами и вкусной кухней, интеллектуальный азарт мафии и спортивное мастерство бильярда. 
              Три уникальных направления — одно пространство для вашего идеального отдыха.
            </p>
          </AnimatedSection>
          
          {/* Scroll down indicator - moved down */}
          <AnimatedSection delay={1800} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <button 
              onClick={() => {
                document.getElementById('sections')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center text-white/60 hover:text-white transition-colors animate-floating"
              aria-label="Scroll down"
            >
              <span className="text-sm mb-2">Исследовать</span>
              <ArrowDown size={20} />
            </button>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Sections */}
      <section id="sections" className="bobsonm-container py-20 px-4">
        <AnimatedSection direction="up">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4 text-center">
            Наши проекты
          </h2>
        </AnimatedSection>
        
        <AnimatedSection direction="up" delay={200}>
          <p className="text-white text-center max-w-3xl mx-auto mb-16">
            Каждый из наших проектов — это отдельный мир, созданный с любовью к деталям и вниманием к вашему комфорту.
            Выберите направление, которое подходит вашему настроению сегодня.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {sections.map((section, index) => (
            <AnimatedSection key={index} delay={300 + index * 200} direction="up">
              <SectionCard
                title={section.title}
                description={section.description}
                imageSrc={section.imageSrc}
                linkTo={section.linkTo}
                priority={index}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>
      
      {/* Atmosphere section with venue links */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-bobsonm-navy/10" />
        <div className="bobsonm-container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection direction="up">
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-6 text-bobsonm-gold">
                Особая атмосфера
              </h2>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={200}>
              <p className="text-white mb-10">
                Bobsonm — это не просто место, а настроение. Здесь каждая деталь продумана для того, 
                чтобы вы чувствовали себя особенными. Приходите с друзьями или коллегами и создавайте 
                новые воспоминания в нашем пространстве.
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {venues.map((venue, index) => (
                  <Link 
                    key={index} 
                    to={venue.linkTo}
                    className="glass-panel p-6 rounded-lg border border-bobsonm-navy/30 hover:border-bobsonm-gold/40 transition-all hover:translate-y-[-5px] group"
                  >
                    <h3 className="font-serif font-semibold text-xl mb-3 text-white group-hover:text-bobsonm-gold transition-colors">
                      {venue.name}
                    </h3>
                    <p className="text-white/80 mb-3 text-sm">{venue.address}</p>
                    <p className="text-bobsonm-gold text-sm">{venue.phone}</p>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
