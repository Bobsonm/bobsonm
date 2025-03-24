import { useEffect } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactButton } from "@/components/ContactButton";
import { Gallery } from "@/components/Gallery";
import { MenuScans } from "@/components/MenuScans";
import { YandexMap } from "@/components/YandexMap";
import { Separator } from "@/components/ui/separator";
import { Phone, Calendar, Clock, MapPin, Music, Users, ExternalLink } from "lucide-react";
const Lounge = () => {
  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Gallery images - Updated with user-provided images
  const loungeImages = [{
    src: "/img_1.jpg",
    alt: "Уютный интерьер Bobsonm Lounge"
  }, {
    src: "/img_2.jpg",
    alt: "Барная стойка Bobsonm Lounge"
  }, {
    src: "/img_3.jpg",
    alt: "Зона отдыха Bobsonm Lounge"
  }, {
    src: "/img_4.jpg",
    alt: "VIP-зона Bobsonm Lounge"
  }, {
    src: "/img_5.jpg",
    alt: "Атмосфера в Bobsonm Lounge"
  }, {
    src: "/img_6.jpg",
    alt: "Кальяны в Bobsonm Lounge"
  }];

  // Menu scans example - replace with actual menu images
  const menuScans = [{
    value: "food",
    label: "Еда",
    images: ["https://images.unsplash.com/photo-1562059392-096cd0b8cce5?q=80&w=1019&auto=format&fit=crop", "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=987&auto=format&fit=crop", "https://images.unsplash.com/photo-1627563252940-fbf7e4a29923?q=80&w=987&auto=format&fit=crop", "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=987&auto=format&fit=crop"]
  }, {
    value: "bar-hookah",
    label: "Бар и Кальян",
    images: ["https://images.unsplash.com/photo-1605270012917-bf357a1a2908?q=80&w=1036&auto=format&fit=crop", "https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=987&auto=format&fit=crop", "https://images.unsplash.com/photo-1606767417424-5377577ecce9?q=80&w=987&auto=format&fit=crop", "https://images.unsplash.com/photo-1603569283847-aa295f0d481a?q=80&w=987&auto=format&fit=crop"]
  }];

  // Promotions
  const promotions = [{
    title: "Happy Hours",
    description: "Скидка 20% на весь чек по будням с 13:00 до 16:00",
    period: "По будням"
  }, {
    title: "Бонусная программа",
    description: "300 бонусных баллов за регистрацию в системе лояльности",
    period: "При регистрации",
    link: "https://app.samosale.ru/BobsonmLounge"
  }, {
    title: "День рождения",
    description: "В день рождения и 3 дня после -10% на весь счет",
    period: "В день рождения и 3 дня после"
  }];
  return <div className="flex flex-col min-h-screen bg-bobsonm-black pt-16 md:pt-20">
      {/* Hero section */}
      <section className="relative flex items-center justify-center h-[60vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1974&auto=format&fit=crop)"
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-bobsonm-black/70 via-bobsonm-black/50 to-bobsonm-black" />
        
        {/* Content */}
        <div className="relative bobsonm-container text-center z-10 px-4">
          <AnimatedSection delay={300}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 animate-text-shine">
              Bobsonm <span className="text-bobsonm-gold">Lounge</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={600} direction="up">
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-white max-w-3xl mx-auto">
              Расслабьтесь в атмосфере изысканного комфорта
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={900}>
            <ContactButton size="lg" phoneNumber="+7 (901) 417-22-93" className="mt-6">
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
              <img alt="Атмосфера Bobsonm Lounge" className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-700" src="/lovable-uploads/25f40c24-ce31-47c8-bd5c-4956bcdda1c9.png" />
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left">
            <h3 className="text-3xl font-serif font-semibold mb-6 text-gradient-gold">О нашем Lounge</h3>
            <p className="text-white mb-6">
              Bobsonm Lounge — это уникальное пространство, где сочетаются стильный дизайн, 
              мягкий свет и приятная музыка. Здесь вы можете расслабиться после напряженного дня, 
              насладиться премиальными кальянами и изысканными напитками.
            </p>
            <p className="text-white mb-8">
              Наш лаундж — идеальное место для встречи с друзьями, романтического вечера или 
              деловой беседы в непринужденной обстановке. Опытные кальянные мастера и внимательный 
              персонал создадут для вас атмосферу безупречного комфорта.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center text-center p-4 glass-panel rounded-lg border border-bobsonm-navy/30 hover:border-bobsonm-navy/60 transition-colors">
                <Clock className="text-bobsonm-gold mb-3" size={24} />
                <span className="text-sm text-white">Работаем ежедневно</span>
                <span className="font-medium">13:00 - 01:00</span>
                <span className="text-xs text-bobsonm-gold mt-1">Пт-Сб до 03:00</span>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 glass-panel rounded-lg border border-bobsonm-navy/30 hover:border-bobsonm-navy/60 transition-colors">
                <Music className="text-bobsonm-gold mb-3" size={24} />
                <span className="text-sm text-white">Mafia</span>
                <span className="font-medium">Игры по расписанию</span>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 glass-panel rounded-lg border border-bobsonm-navy/30 hover:border-bobsonm-navy/60 transition-colors">
                <Users className="text-bobsonm-gold mb-3" size={24} />
                <span className="text-sm text-white">До 100 гостей</span>
                <span className="font-medium">Уютные зоны</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Menu section */}
      <section className="py-20 bg-gradient-to-b from-bobsonm-navy/5 to-bobsonm-navy/15">
        <div className="bobsonm-container px-4">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-2 text-center text-gradient-gold">Меню</h3>
            <p className="text-white text-center mb-12 max-w-2xl mx-auto">
              Насладитесь нашей авторской кухней, изысканными напитками и премиальными кальянами
            </p>
          </AnimatedSection>
          
          <div className="max-w-5xl mx-auto">
            <MenuScans tabs={menuScans} />
          </div>
        </div>
      </section>
      
      {/* Gallery section */}
      <section className="py-20 bobsonm-container px-4">
        <AnimatedSection direction="up">
          <h3 className="text-3xl font-serif font-semibold mb-2 text-center text-gradient-gold">Галерея</h3>
          <p className="text-white text-center mb-12 max-w-2xl mx-auto">
            Погрузитесь в атмосферу Bobsonm Lounge
          </p>
        </AnimatedSection>
        
        <Gallery images={loungeImages} columns={3} gap="md" />
      </section>
      
      {/* Promotions */}
      <section className="py-20 bg-gradient-to-b from-bobsonm-navy/15 to-bobsonm-navy/5">
        <div className="bobsonm-container px-4">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-2 text-center text-gradient-gold">Акции и бонусы</h3>
            <p className="text-white text-center mb-12 max-w-2xl mx-auto">
              Специальные предложения для наших гостей
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => <AnimatedSection key={index} direction="up" delay={200 * index}>
                <div className="glass-panel p-6 rounded-lg h-full border border-bobsonm-navy/30 hover:border-bobsonm-navy/60 transition-colors">
                  <h4 className="font-semibold text-xl mb-2 text-bobsonm-gold">{promo.title}</h4>
                  <p className="text-white mb-4">{promo.description}</p>
                  <div className="flex items-center mt-auto">
                    <Calendar size={16} className="text-bobsonm-gold" />
                    <span className="text-sm ml-2">{promo.period}</span>
                  </div>
                  {promo.link && <a href={promo.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center text-bobsonm-gold hover:text-bobsonm-goldLight transition-colors text-sm">
                      Перейти к регистрации
                      <ExternalLink size={14} className="ml-2" />
                    </a>}
                </div>
              </AnimatedSection>)}
          </div>
        </div>
      </section>
      
      {/* Contacts */}
      <section className="py-20 bobsonm-container px-4">
        <AnimatedSection direction="up">
          <h3 className="text-3xl font-serif font-semibold mb-2 text-center text-gradient-gold">Контакты</h3>
          <p className="text-white text-center mb-12 max-w-2xl mx-auto">
            Забронируйте стол в Bobsonm Lounge
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatedSection direction="right" delay={200}>
            <div className="glass-panel p-8 rounded-lg border border-bobsonm-navy/30">
              <div className="flex items-center mb-6">
                <Phone size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium">Телефон для бронирования</h4>
                  <a href="tel:+79014172293" className="text-xl font-semibold text-bobsonm-gold hover:text-bobsonm-goldLight transition-colors">
                    +7 (901) 417-22-93
                  </a>
                </div>
              </div>
              
              <Separator className="my-6 bg-bobsonm-navy/30" />
              
              <div className="flex items-center mb-6">
                <Phone size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium">Телефон управляющего</h4>
                  <a href="tel:+79671311783" className="text-xl font-semibold text-bobsonm-gold hover:text-bobsonm-goldLight transition-colors">
                    +7 (967) 131-17-83
                  </a>
                </div>
              </div>
              
              <Separator className="my-6 bg-bobsonm-navy/30" />
              
              <div className="flex items-center mb-6">
                <Clock size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium">Время работы</h4>
                  <p>Ежедневно с 13:00 до 01:00</p>
                  <p className="text-sm text-bobsonm-gold">Пятница и суббота до 03:00</p>
                </div>
              </div>
              
              <Separator className="my-6 bg-bobsonm-navy/30" />
              
              <div className="flex items-center">
                <MapPin size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium">Адрес</h4>
                  <p>Москва, Международная улица 15А</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <ContactButton size="lg" variant="primary" phoneNumber="+7 (901) 417-22-93" className="w-full">
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
    </div>;
};
export default Lounge;