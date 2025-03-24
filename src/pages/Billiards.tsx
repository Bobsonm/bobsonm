
import { useEffect } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactButton } from "@/components/ContactButton";
import { Gallery } from "@/components/Gallery";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Phone, BarChart, Aperture, CircleDollarSign } from "lucide-react";

const Billiards = () => {
  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Gallery images
  const billiardsImages = [
    {
      src: "https://images.unsplash.com/photo-1615247644823-a5f0d3b5f795?q=80&w=987&auto=format&fit=crop",
      alt: "Бильярдные столы в Bobsonm Бильярд"
    },
    {
      src: "https://images.unsplash.com/photo-1619214301851-83c0544327e5?q=80&w=1170&auto=format&fit=crop",
      alt: "Игра в бильярд"
    },
    {
      src: "https://images.unsplash.com/photo-1621684691402-bf281a0af6f0?q=80&w=1074&auto=format&fit=crop",
      alt: "Стойка бильярдного клуба"
    },
    {
      src: "https://images.unsplash.com/photo-1647444501821-b54ad01c0ce4?q=80&w=1074&auto=format&fit=crop",
      alt: "Интерьер бильярдного клуба"
    },
    {
      src: "https://images.unsplash.com/photo-1606548690978-2c909319287a?q=80&w=1074&auto=format&fit=crop",
      alt: "Шары для бильярда"
    },
    {
      src: "https://images.unsplash.com/photo-1611323209214-03dfebbd734d?q=80&w=1170&auto=format&fit=crop",
      alt: "Кий для игры в бильярд"
    }
  ];
  
  // Tables info
  const tables = [
    {
      type: "Русский бильярд",
      count: 5,
      description: "Профессиональные 12-футовые столы с итальянским сукном высшего качества",
      features: "Идеально выверенная геометрия, рассеянное освещение"
    },
    {
      type: "Американский пул",
      count: 3,
      description: "9-футовые столы для пула с профессиональным оборудованием",
      features: "Точные лузы, премиальные шары, комфортное расположение"
    }
  ];
  
  // Pricing
  const pricing = [
    {
      title: "Русский бильярд",
      prices: [
        { time: "Будни с 12:00 до 18:00", price: "600 ₽/час" },
        { time: "Будни с 18:00 до 00:00", price: "800 ₽/час" },
        { time: "Выходные весь день", price: "900 ₽/час" }
      ]
    },
    {
      title: "Американский пул",
      prices: [
        { time: "Будни с 12:00 до 18:00", price: "500 ₽/час" },
        { time: "Будни с 18:00 до 00:00", price: "700 ₽/час" },
        { time: "Выходные весь день", price: "800 ₽/час" }
      ]
    },
    {
      title: "Дополнительные услуги",
      prices: [
        { time: "Аренда кия", price: "200 ₽" },
        { time: "Обучение с инструктором", price: "1500 ₽/час" },
        { time: "Коммерческий турнир", price: "от 5000 ₽" }
      ]
    }
  ];
  
  // Features
  const additionalFeatures = [
    "Бар с напитками и закусками",
    "Трансляции спортивных матчей",
    "Комфортная зона отдыха",
    "Проведение корпоративных мероприятий",
    "Турниры для любителей и профессионалов"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-bobsonm-black pt-16 md:pt-20">
      {/* Hero section */}
      <section className="relative flex items-center justify-center h-[60vh] overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url(https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=1934&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bobsonm-black/70 via-bobsonm-black/50 to-bobsonm-black" />
        
        {/* Content */}
        <div className="relative bobsonm-container text-center z-10 px-4">
          <AnimatedSection delay={300}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6">
              Bobsonm <span className="text-bobsonm-gold">Бильярд</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={600} direction="up">
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-white/90 max-w-3xl mx-auto">
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
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1605204376600-61333c777e48?q=80&w=1036&auto=format&fit=crop" 
                alt="Бильярдный клуб Bobsonm" 
                className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left">
            <h3 className="text-3xl font-serif font-semibold mb-6">О нашем бильярдном клубе</h3>
            <p className="text-muted-foreground mb-6">
              Bobsonm Бильярд — это пространство для истинных ценителей культуры бильярдной игры. 
              Наш клуб оборудован профессиональными столами как для русского бильярда, так и для американского пула, 
              что позволяет каждому выбрать свой стиль игры.
            </p>
            <p className="text-muted-foreground mb-8">
              У нас созданы идеальные условия для игры: идеально выровненные столы с качественным сукном, 
              правильное освещение без бликов и теней, комфортное пространство между столами и приятная 
              атмосфера. Наш клуб подходит как для профессиональных игроков, так и для начинающих.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center text-center p-4 glass-panel rounded-lg">
                <Clock className="text-bobsonm-gold mb-3" size={24} />
                <span className="text-sm text-muted-foreground">Работаем ежедневно</span>
                <span className="font-medium">с 12:00 до 00:00</span>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 glass-panel rounded-lg">
                <Aperture className="text-bobsonm-gold mb-3" size={24} />
                <span className="text-sm text-muted-foreground">Всего столов</span>
                <span className="font-medium">8 профессиональных</span>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 glass-panel rounded-lg">
                <BarChart className="text-bobsonm-gold mb-3" size={24} />
                <span className="text-sm text-muted-foreground">Уровень игры</span>
                <span className="font-medium">Новички и профи</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Tables section */}
      <section className="py-20 bg-bobsonm-navy/10">
        <div className="bobsonm-container px-4">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-2 text-center">Наши столы</h3>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Профессиональное оборудование для комфортной игры
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tables.map((table, index) => (
              <AnimatedSection key={index} direction="up" delay={200 * index}>
                <div className="glass-panel p-8 rounded-lg h-full">
                  <h4 className="text-2xl font-medium text-bobsonm-gold mb-4">{table.type}</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-semibold">{table.count}</span>
                    <span className="text-muted-foreground ml-2">столов</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{table.description}</p>
                  <p className="text-sm border-t border-bobsonm-navy/30 pt-4 mt-4">{table.features}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing section */}
      <section className="py-20 bobsonm-container px-4">
        <AnimatedSection direction="up">
          <h3 className="text-3xl font-serif font-semibold mb-2 text-center">Цены на игру</h3>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
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
                        <span>{item.time}</span>
                      </div>
                      <div className="text-bobsonm-gold font-medium">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection direction="up" delay={800} className="text-center mt-8">
          <p className="text-muted-foreground mb-6">
            Для корпоративных мероприятий и больших компаний предусмотрены специальные условия.
          </p>
          <ContactButton phoneNumber="+7 (495) 908-92-45">
            Узнать подробнее
          </ContactButton>
        </AnimatedSection>
      </section>
      
      {/* Gallery section */}
      <section className="py-20 bg-bobsonm-navy/10">
        <div className="bobsonm-container px-4">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-2 text-center">Галерея</h3>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Интерьер и атмосфера Bobsonm Бильярд
            </p>
          </AnimatedSection>
          
          <Gallery images={billiardsImages} columns={3} gap="md" />
        </div>
      </section>
      
      {/* Additional features */}
      <section className="py-20 bobsonm-container px-4">
        <AnimatedSection direction="up">
          <h3 className="text-3xl font-serif font-semibold mb-2 text-center">Дополнительные возможности</h3>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            В нашем клубе вы найдете больше, чем просто игру в бильярд
          </p>
        </AnimatedSection>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-panel p-8 rounded-lg">
            <ul className="space-y-4">
              {additionalFeatures.map((feature, index) => (
                <AnimatedSection key={index} direction="up" delay={100 * index}>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-bobsonm-gold mr-3"></div>
                    <span>{feature}</span>
                  </li>
                </AnimatedSection>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Contacts */}
      <section className="py-20 bg-bobsonm-navy/10">
        <div className="bobsonm-container px-4">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-2 text-center">Контакты</h3>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Забронируйте стол в Bobsonm Бильярд
            </p>
          </AnimatedSection>
          
          <div className="max-w-lg mx-auto">
            <AnimatedSection direction="up" delay={200}>
              <div className="glass-panel p-8 rounded-lg">
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
                    <p>Ежедневно с 12:00 до 00:00</p>
                  </div>
                </div>
                
                <Separator className="my-6 bg-bobsonm-navy/30" />
                
                <div className="flex items-center">
                  <MapPin size={24} className="text-bobsonm-gold mr-4" />
                  <div>
                    <h4 className="font-medium">Адрес</h4>
                    <p>Москва, ул. Пушкина, д. 10</p>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Billiards;
