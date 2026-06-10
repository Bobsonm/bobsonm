
import { useEffect } from "react";
import { ContactButton } from "@/components/ContactButton";
import { Gallery } from "@/components/Gallery";
import { BookFlipMenu } from "@/components/BookFlipMenu";
import { YandexMap } from "@/components/YandexMap";
import { VipRoomCarousel } from "@/components/VipRoomCarousel";
import { FadeUp, Reveal } from "@/components/ParallaxSection";
import { VenueHero } from "@/components/VenueHero";
import { Separator } from "@/components/ui/separator";
import { Aperture, ArrowRight, CircleDollarSign, Clock, MapPin, Music, Phone } from "lucide-react";

const Billiards = () => {
  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Gallery images with uploaded photos
  const billiardsImages = [
    {
      src: "/lovable-uploads/617094a2-8411-482d-8e95-1af32aabf384.png",
      alt: "Бильярдный стол с черной обивкой стен"
    },
    {
      src: "/lovable-uploads/4b707d43-5bd5-436a-943e-b533a4db2de4.png",
      alt: "Бильярдный стол с баром на заднем плане"
    },
    {
      src: "/lovable-uploads/36b319f4-c238-409c-9610-7d79e8c05d1a.png", 
      alt: "Бильярдные столы в ряд в клубе"
    },
    {
      src: "/lovable-uploads/048c473d-0c52-45f1-8147-fe16cd73fa2f.png",
      alt: "Бильярдный стол с трансляцией футбольного матча"
    },
    {
      src: "/lovable-uploads/047b9f33-11c4-4676-9a94-daa27cf66dba.png",
      alt: "Бильярдный стол с подготовленными шарами"
    },
    {
      src: "/lovable-uploads/18e9236a-ddc9-4b00-9061-fc8a12af28b4.png",
      alt: "VIP-комната Bobsonm Lounge"
    },
    {
      src: "/lovable-uploads/073146e8-304f-4eb1-a4eb-53286a1b96a3.png",
      alt: "Зона отдыха в бильярдном клубе"
    },
    {
      src: "/lovable-uploads/6386dc36-82f6-4e13-8fd4-771738e580c3.png",
      alt: "Бильярдный стол с серебристыми шторами"
    },
    {
      src: "/lovable-uploads/94176a12-55ba-42b2-9638-4c222fb42771.png",
      alt: "Бильярдный стол с tufted стеной"
    }
  ];
  
  // VIP room images - updated with the new images 
  const vipRoomImages = [
    {
      src: "/lovable-uploads/018298a1-9ae4-4ac3-80df-500dac87b439.png",
      alt: "VIP-комната бильярда с зеленым столом и серебристыми шторами"
    },
    {
      src: "/lovable-uploads/f15e2a33-5b6f-44d8-abde-3b090474d23d.png",
      alt: "Зона отдыха VIP-комнаты с мятными диванами"
    },
    {
      src: "/lovable-uploads/da609783-240a-40e7-ab5a-7ab9539fa71f.png",
      alt: "Зона отдыха с длинным столом в VIP-комнате"
    },
    {
      src: "/lovable-uploads/23a92615-fca4-48c4-9121-440bf08b4169.png",
      alt: "Панорамный вид VIP-комнаты с бильярдным столом"
    },
    {
      src: "/lovable-uploads/dd382f4b-028e-452b-9667-5c325879c196.png",
      alt: "Зона отдыха в VIP-комнате с телевизором"
    },
    {
      src: "/lovable-uploads/23392b61-9fdf-4a51-ad37-26771393163a.png",
      alt: "Панорамный вид на всю VIP-комнату с мебелью"
    }
  ];
  
  // Menu scans с новыми фотографиями
  const menuScans = [
    {
      value: "food",
      label: "Еда",
      images: [
        "/lovable-uploads/1bc1845a-c090-4ea1-a273-03b2823a895e.png",
        "/lovable-uploads/33209257-0094-419f-b22f-31e3fe91ffd6.png"
      ]
    },
    {
      value: "bar",
      label: "Бар",
      images: [
        "/lovable-uploads/7e6063fd-6da6-4af7-82db-6af4a3bd58ae.png",
        "/lovable-uploads/9eb1e4c9-99f6-437d-b780-ad0fd403fafc.png"
      ]
    }
  ];
  
  // Tables info
  const tables = [
    {
      type: "Русский бильярд",
      count: 8,
      description: "Профессиональные 12-футовые столы с бельгийским сукном Iwan Simonis высшего качества",
      features: "Идеально выверенная геометрия, рассеянное освещение"
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
    <div className="min-h-screen bg-background pt-16 text-foreground md:pt-20">
      <VenueHero
        eyebrow="Billiards direction"
        title="Bobsonm"
        accent="Бильярд"
        description="Профессиональные столы, тихая концентрация и выверенный свет для тех, кто ценит точность удара и приватный ритм игры."
        imageSrc="/lovable-uploads/617094a2-8411-482d-8e95-1af32aabf384.png"
        imageAlt="Bobsonm Бильярд"
        actions={
          <>
            <ContactButton size="lg" phoneNumber="+7 (495) 908-92-45">Позвонить и забронировать</ContactButton>
            <a href="#pricing" className="group inline-flex items-center gap-3 border-b border-primary/30 pb-2 text-primary transition-all hover:border-primary">
              <span className="text-xs uppercase tracking-[0.3em]">Цены</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </>
        }
        stats={[
          { label: "Столы", value: "8 русских + 3 pool" },
          { label: "VIP", value: "отдельная комната 70 м²" },
          { label: "Сукно", value: "Iwan Simonis" },
        ]}
      />

      <section className="bobsonm-container py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-16">
          <Reveal>
            <div className="premium-card p-3 sm:p-4">
              <img src="/lovable-uploads/4b707d43-5bd5-436a-943e-b533a4db2de4.png" alt="Бильярдный клуб Bobsonm" className="aspect-[4/5] w-full rounded-[1.2rem] object-cover" />
            </div>
          </Reveal>
          <div>
            <FadeUp>
              <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-primary/78">О клубе</p>
              <h2 className="text-3xl sm:text-5xl">Игра без компромиссов</h2>
            </FadeUp>
            <FadeUp delay={0.12}><div className="mb-6 mt-5 w-20 gold-divider" /></FadeUp>
            <FadeUp delay={0.2}>
              <p className="mb-5 text-base leading-relaxed text-foreground/72 sm:text-lg">Bobsonm Бильярд оборудован для тех, кому важны геометрия столов, правильный свет и свободное пространство вокруг каждого удара.</p>
              <p className="text-base leading-relaxed text-foreground/62 sm:text-lg">Здесь одинаково комфортно и опытным игрокам, и гостям, которые хотят провести вечер спокойно, приватно и красиво.</p>
            </FadeUp>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Clock, label: "Режим", value: "будни 14:00–03:00" },
                { icon: Aperture, label: "Фонд", value: "10 столов + VIP" },
                { icon: Music, label: "Комфорт", value: "VIP с караоке" },
              ].map((item, index) => (
                <FadeUp key={item.label} delay={0.3 + index * 0.08}>
                  <div className="glass-panel rounded-lg p-4">
                    <item.icon className="mb-3 text-primary" size={22} />
                    <p className="text-[10px] uppercase tracking-[0.32em] text-primary/75">{item.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/72">{item.value}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Tables section */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="bobsonm-container px-4">
          <FadeUp>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">Наши столы</h2>
            <p className="mx-auto mt-3 mb-12 max-w-2xl text-center text-foreground/68">
              Профессиональное оборудование для комфортной игры
            </p>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tables.map((table, index) => (
              <Reveal key={index}>
                <div className="premium-card h-full p-8">
                  <h3 className="text-2xl text-gold-shine">{table.type}</h3>
                  <div className="mb-4">
                    <span className="text-3xl text-foreground">{table.count}</span>
                    <span className="ml-2 text-foreground/70">{table.count === 1 ? 'стол' : 'столов'}</span>
                  </div>
                  <p className="mb-4 text-foreground/72">{table.description}</p>
                  <p className="mt-4 border-t border-border pt-4 text-sm text-foreground/58">{table.features}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* VIP Room section */}
      <section className="py-20 bobsonm-container px-4">
        <FadeUp>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">VIP-комната</h2>
          <p className="mx-auto mt-3 mb-12 max-w-2xl text-center text-foreground/68">
            Для наших любимых гостей
          </p>
        </FadeUp>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <VipRoomCarousel images={vipRoomImages} />
          
          <Reveal>
            <div className="premium-card p-8">
              <h3 className="text-2xl text-gold-shine">Приватный сценарий вечера</h3>
              <p className="mb-6 mt-6 text-foreground/72">
                Также, для наших любимых гостей у нас есть ВИП-КОМНАТА!
                Более 70 метров. Отличный 12 футовый стол, зона отдыха с профессиональным караоке. 
                В вип лаундже свой туалет и комната для курения.
              </p>
              <p className="mb-8 text-foreground/62">
                Если вы хотите провести вечер в компании только своих друзей, или в паре, 
                то вип-комната самый подходящий вариант. Здесь ни что не отвлекает.
              </p>
              
              <div className="text-center">
                <p className="mb-4 text-xl text-foreground">Звони и бронируй</p>
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
          </Reveal>
        </div>
      </section>
      
      {/* Pricing section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-secondary/25 to-background">
        <div className="bobsonm-container px-4">
          <FadeUp>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">Цены на игру</h2>
            <p className="mx-auto mt-3 mb-12 max-w-2xl text-center text-foreground/68">
              Прозрачная система оплаты без скрытых платежей
            </p>
          </FadeUp>
          
          <div className="max-w-4xl mx-auto">
            {pricing.map((category, categoryIndex) => (
              <Reveal key={categoryIndex}>
                <div className="mb-10 premium-card p-8">
                  <h3 className="mb-6 text-2xl text-gold-shine">{category.title}</h3>
                  <div className="space-y-4">
                    {category.prices.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between border-b border-border pb-4">
                        <div className="flex items-center">
                          <CircleDollarSign size={18} className="mr-3 text-primary" />
                          <span className="text-foreground/72">{item.time}</span>
                        </div>
                        <div className="font-medium text-primary">{item.price}</div>
                      </div>
                    ))}
                  </div>
                  {category.title === "Русский бильярд" || category.title === "Американский пул" ? (
                    <p className="mt-2 text-right text-sm italic text-foreground/52">
                      * Игры после 03:00 должны быть согласованы с администратором
                    </p>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Menu section */}
      <section className="py-20 bobsonm-container px-4">
        <FadeUp>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">Меню</h2>
          <p className="mx-auto mt-3 mb-12 max-w-2xl text-center text-foreground/68">
            Насладитесь нашей кухней и напитками во время игры
          </p>
        </FadeUp>
        
        <div className="max-w-5xl mx-auto">
          <BookFlipMenu tabs={menuScans} />
        </div>
      </section>
      
      {/* Gallery section */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="bobsonm-container px-4">
          <FadeUp>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">Галерея</h2>
            <p className="mx-auto mt-3 mb-12 max-w-2xl text-center text-foreground/68">
              Интерьер и атмосфера Bobsonm Бильярд
            </p>
          </FadeUp>
          
          <Gallery images={billiardsImages} columns={3} gap="md" />
        </div>
      </section>
      
      {/* Contacts */}
      <section className="py-20 bobsonm-container px-4">
        <FadeUp>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">Контакты</h2>
          <p className="mx-auto mt-3 mb-12 max-w-2xl text-center text-foreground/68">
            Забронируйте стол в Bobsonm Бильярд
          </p>
        </FadeUp>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="premium-card p-8">
              <div className="flex items-center mb-6">
                <Phone size={24} className="mr-4 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">Телефон для бронирования</h3>
                  <a href="tel:+74959089245" className="text-xl text-gold-shine hover:opacity-80">
                    +7 (495) 908-92-45
                  </a>
                </div>
              </div>
              
              <Separator className="my-6 bg-border" />
              
              <div className="flex items-center mb-6">
                <Clock size={24} className="mr-4 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">Время работы</h3>
                  <p className="text-foreground/75">Будни с 14:00 до 03:00</p>
                  <p className="text-sm text-primary/80">Пт-Вс с 13:00 до 03:00</p>
                </div>
              </div>
              
              <Separator className="my-6 bg-border" />
              
              <div className="flex items-center">
                <MapPin size={24} className="mr-4 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">Адрес</h3>
                  <p className="text-foreground/75">Москва, ул. Братиславская 27к1</p>
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
          </Reveal>
          
          <Reveal>
            <YandexMap src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=49034132925" />
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Billiards;
