import { useEffect } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactButton } from "@/components/ContactButton";
import { Gallery } from "@/components/Gallery";
import { MenuScans } from "@/components/MenuScans";
import { YandexMap } from "@/components/YandexMap";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Phone, Aperture, CircleDollarSign, Music } from "lucide-react";

const Billiards = () => {
  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Gallery images - Updated with user-provided images
  const billiardsImages = [
    {
      src: "/img_10.jpg",
      alt: "Бильярдные столы в Bobsonm Бильярд"
    },
    {
      src: "/img_11.jpg",
      alt: "Игра в бильярд"
    },
    {
      src: "/img_12.jpg",
      alt: "Стойка бильярдного клуба"
    },
    {
      src: "/img_13.jpg",
      alt: "Интерьер бильярдного клуба"
    },
    {
      src: "/img_14.jpg",
      alt: "Бильярдные столы"
    },
    {
      src: "/img_15.jpg",
      alt: "Игра в американский пул"
    },
    {
      src: "/img_16.jpg",
      alt: "Профессиональный бильярдный стол"
    },
    {
      src: "/img_17.jpg",
      alt: "Бильярдный клуб ночью"
    },
    {
      src: "/img_18.jpg",
      alt: "Интерьер Bobsonm Бильярд"
    }
  ];
  
  // VIP room images - Updated with user-provided images
  const vipRoomImages = [
    {
      src: "/img_19.jpg",
      alt: "VIP-комната Bobsonm Бильярд"
    },
    {
      src: "/img_20.jpg",
      alt: "Зона отдыха VIP-комнаты"
    }
  ];
  
  // Menu scans example
  const menuScans = [
    {
      value: "food",
      label: "Еда",
      images: [
        "https://images.unsplash.com/photo-1562059392-096cd0b8cce5?q=80&w=1019&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574484284002-9ac39bcb3327?q=80&w=987&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1627563252940-fbf7e4a29923?q=80&w=987&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=987&auto=format&fit=crop"
      ]
    },
    {
      value: "bar",
      label: "Бар",
      images: [
        "https://images.unsplash.com/photo-1605270012917-bf357a1a2908?q=80&w=1036&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=987&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1606767417424-5377577ecce9?q=80&w=987&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1603569283847-aa295f0d481a?q=80&w=987&auto=format&fit=crop"
      ]
    }
  ];
  
  // Tables info
  const tables = [
    {
      type: "Русский бильярд",
      count: 8,
      description: "Профессиональные 12-футовые столы с итальянским сукном высшего качества",
      features: "Идеально вывер��нная геометрия, рассеянное освещение"
    },
    {
      type: "Американский пул",
      count: 3,
      description: "9-футовые столы для пула с профессиональным оборудованием",
      features: "Точные лузы, премиальные шары, комфортное расположение"
    },
    {
      type: "VIP-комната",
      count: 1,
      description: "Отдельная комната площадью более 70 м² с 12-футовым столом для русского бильярда",
      features: "Зона отдыха, профессиональное караоке, отдельный санузел и комната для курения"
    }
  ];
  
  // Pricing
  const pricing = [
    {
      title: "Русский бильярд",
      prices: [
        { time: "До 03:00", price: "700 ₽/час" },
        { time: "После 03:00", price: "1400 ₽/час" }
      ]
    },
    {
      title: "Американский пул",
      prices: [
        { time: "До 03:00", price: "600 ₽/час" },
        { time: "После 03:00", price: "1200 ₽/час" }
      ]
    },
    {
      title: "VIP-комната",
      prices: [
        { time: "В любое время", price: "2500 ₽/час" }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-bobsonm-black pt-16 md:pt-20">
      {/* Hero section */}
      <section className="relative flex items-center justify-center h-[60vh] overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url(/img_10.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bobsonm-black/70 via-bobsonm-black/50 to-bobsonm-black" />
        
        {/* Content */}
        <div className="relative bobsonm-container text-center z-10 px-4">
          <AnimatedSection delay={300}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 animate-text-shine">
              Bobsonm <span className="text-bobsonm-gold">Бильярд</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={600} direction="up">
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-white max-w-3xl mx-auto">
              Игра для настоящих ценителей точности и стратегии
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={900}>
            <ContactButton 
              size="lg" 
              phoneNumber="+7 (495) 908-92-45"
              className="mt-6"
            >
              Забронировать стол
            </ContactButton>
          </AnimatedSection>
        </div>
      </section>
      
      {/* About section */}
      <section className="bobsonm-container py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection direction="right">
            <div className="overflow-hidden rounded-lg shadow-[0_0_25px_rgba(21,39,75,0.5)] border-2 border-bobsonm-navy/30">
              <img 
                src="/img_11.jpg" 
                alt="Бильярдный клуб Bobsonm" 
                className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left">
            <h3 className="text-3xl font-serif font-semibold mb-6 text-gradient-gold">О нашем бильярдном клубе</h3>
            <p className="text-white mb-6">
              Bobsonm Бильярд — это пространство для истинных ценителей культуры бильярдной игры. 
              Наш клуб оборудован профессиональными столами как для русского бильярда, так и для американского пула, 
              что позволяет каждому выбрать свой стиль игры.
            </p>
            <p className="text-white mb-8">
              У нас созданы идеальные условия для игры: идеально выровненные столы с качественным сукном, 
              правильное освещение без бликов и теней, комфортное пространство между столами и приятная 
              атмосфера. Наш клуб подходит как для профессиональных игроков, так и для начинающих.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center text-center p-4 glass-panel rounded-lg border border-bobsonm-navy/30 hover:border-bobsonm-navy/60 transition-colors">
                <Clock className="text-bobsonm-gold mb-3" size={24} />
                <span className="text-sm text-white">Время работы</span>
                <span className="font-medium">Будни: 14:00-03:00</span>
                <span className="text-xs text-bobsonm-gold mt-1">Пт-Вс: 13:00-03:00</span>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 glass-panel rounded-lg border border-bobsonm-navy/30 hover:border-bobsonm-navy/60 transition-colors">
                <Aperture className="text-bobsonm-gold mb-3" size={24} />
                <span className="text-sm text-white">Всего столов</span>
                <span className="font-medium">10 + VIP комната</span>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 glass-panel rounded-lg border border-bobsonm-navy/30 hover:border-bobsonm-navy/60 transition-colors">
                <Music className="text-bobsonm-gold mb-3" size={24} />
                <span className="text-sm text-white">VIP-комната</span>
                <span className="font-medium">С караоке</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Tables section */}
      <section className="py-20 bg-gradient-to-b from-bobsonm-navy/5 to-bobsonm-navy/15">
        <div className="bobsonm-container px-4">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-2 text-center text-gradient-gold">Наши столы</h3>
            <p className="text-white text-center mb-12 max-w-2xl mx-auto">
              Профессиональное оборудование для комфортной игры
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tables.map((table, index) => (
              <AnimatedSection key={index} direction="up" delay={200 * index}>
                <div className="glass-panel p-8 rounded-lg h-full border border-bobsonm-navy/30 hover:border-bobsonm-navy/60 transition-all hover:translate-y-[-5px]">
                  <h4 className="text-2xl font-medium text-bobsonm-gold mb-4">{table.type}</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-semibold text-white">{table.count}</span>
                    <span className="text-white ml-2">{table.count === 1 ? 'стол' : 'столов'}</span>
                  </div>
                  <p className="text-white/80 mb-4">{table.description}</p>
                  <p className="text-white/80 text-sm border-t border-bobsonm-navy/30 pt-4 mt-4">{table.features}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* VIP Room section */}
      <section className="py-20 bobsonm-container px-4">
        <AnimatedSection direction="up">
          <h3 className="text-3xl font-serif font-semibold mb-2 text-center text-gradient-gold">VIP-комната</h3>
          <p className="text-white text-center mb-12 max-w-2xl mx-auto">
            Для наших любимых гостей
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection direction="right">
            <div className="overflow-hidden rounded-lg shadow-[0_0_25px_rgba(21,39,75,0.5)] border-2 border-bobsonm-navy/30">
              <Gallery images={vipRoomImages} columns={1} gap="md" className="rounded-lg" />
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left">
            <div className="glass-panel p-8 rounded-lg border border-bobsonm-navy/30">
              <h4 className="text-2xl font-medium text-bobsonm-gold mb-6">ВИП-КОМНАТА ДЛЯ ГОСТЕЙ</h4>
              <p className="text-white mb-6">
                Также, для наших любимых гостей у нас есть ВИП-КОМНАТА!
                Более 70 метров. Отличный 12 футовый стол, зона отдыха с профессиональным караоке. 
                В вип лаундже свой туалет и комната для курения.
              </p>
              <p className="text-white mb-8">
                Если вы хотите провести вечер в компании только своих друзей, или в паре, 
                то вип-комната самый подходящий вариант. Здесь ни что не отвлекает.
              </p>
              
              <div className="text-center animate-pulse-subtle">
                <p className="text-xl font-serif mb-4 text-white">Звони и бронируй!</p>
                <ContactButton 
                  size="lg" 
                  variant="primary" 
                  phoneNumber="+7 (495) 908-92-45" 
                  className="w-full"
                >
                  Забронировать VIP-комнату
                </ContactButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Pricing section */}
      <section className="py-20 bg-gradient-to-b from-bobsonm-navy/15 to-bobsonm-navy/5">
        <div className="bobsonm-container px-4">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-2 text-center text-gradient-gold">Цены на игру</h3>
            <p className="text-white text-center mb-12 max-w-2xl mx-auto">
              Прозрачная система оплаты без скрытых платежей
            </p>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            {pricing.map((category, categoryIndex) => (
              <AnimatedSection key={categoryIndex} direction="up" delay={200 * categoryIndex}>
                <div className="mb-10">
                  <h4 className="text-2xl font-serif font-medium mb-6 text-bobsonm-gold">{category.title}</h4>
                  <div className="space-y-4">
                    {category.prices.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center border-b border-bobsonm-navy/30 pb-4">
                        <div className="flex items-center">
                          <CircleDollarSign size={18} className="text-bobsonm-gold mr-3" />
                          <span className="text-white">{item.time}</span>
                        </div>
                        <div className="text-bobsonm-gold font-medium">{item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Menu section */}
      <section className="py-20 bobsonm-container px-4">
        <AnimatedSection direction="up">
          <h3 className="text-3xl font-serif font-semibold mb-2 text-center text-gradient-gold">Меню</h3>
          <p className="text-white text-center mb-12 max-w-2xl mx-auto">
            Насладитесь нашей кухней и напитками во время игры
          </p>
        </AnimatedSection>
        
        <div className="max-w-5xl mx-auto">
          <MenuScans tabs={menuScans} />
        </div>
      </section>
      
      {/* Gallery section */}
      <section className="py-20 bg-gradient-to-b from-bobsonm-navy/5 to-bobsonm-navy/15">
        <div className="bobsonm-container px-4">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-2 text-center text-gradient-gold">Галерея</h3>
            <p className="text-white text-center mb-12 max-w-2xl mx-auto">
              Интерьер и атмосфера Bobsonm Бильярд
            </p>
          </AnimatedSection>
          
          <Gallery images={billiardsImages} columns={3} gap="md" />
        </div>
      </section>
      
      {/* Contacts */}
      <section className="py-20 bobsonm-container px-4">
        <AnimatedSection direction="up">
          <h3 className="text-3xl font-serif font-semibold mb-2 text-center text-gradient-gold">Контакты</h3>
          <p className="text-white text-center mb-12 max-w-2xl mx-auto">
            Забронируйте стол в Bobsonm Бильярд
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatedSection direction="right" delay={200}>
            <div className="glass-panel p-8 rounded-lg border border-bobsonm-navy/30">
              <div className="flex items-center mb-6">
                <Phone size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium">Телефон для бронирования</h4>
                  <a href="tel:+74959089245" className="text-xl font-semibold text-bobsonm-gold hover:text-bobsonm-goldLight transition-colors">
                    +7 (495) 908-92-45
                  </a>
                </div>
              </div>
              
              <Separator className="my-6 bg-bobsonm-navy/30" />
              
              <div className="flex items-center mb-6">
                <Clock size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium">Время работы</h4>
                  <p>Будни с 14:00 до 03:00</p>
                  <p className="text-sm text-bobsonm-gold">Пт-Вс с 13:00 до 03:00</p>
                </div>
              </div>
              
              <Separator className="my-6 bg-bobsonm-navy/30" />
              
              <div className="flex items-center">
                <MapPin size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium">Адрес</h4>
                  <p>Москва, Братиславская улица, 27, корп. 1</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <ContactButton 
                  size="lg" 
                  variant="primary" 
                  phoneNumber="+7 (495) 908-92-45" 
                  className="w-full"
                >
                  Забронировать стол
                </ContactButton>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left" delay={400}>
            <YandexMap src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=2924377283" />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Billiards;
