
import { useEffect } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactButton } from "@/components/ContactButton";
import { Gallery } from "@/components/Gallery";
import { Separator } from "@/components/ui/separator";
import { Phone, Calendar, Clock, MapPin, Music, Users } from "lucide-react";

const Lounge = () => {
  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Gallery images
  const loungeImages = [
    {
      src: "https://images.unsplash.com/photo-1513553404607-988bf2703777?q=80&w=2069&auto=format&fit=crop",
      alt: "Уютный интерьер Bobsonm Lounge"
    },
    {
      src: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2070&auto=format&fit=crop",
      alt: "Барная стойка Bobsonm Lounge"
    },
    {
      src: "https://images.unsplash.com/photo-1548364535-f7dae954f30e?q=80&w=2071&auto=format&fit=crop",
      alt: "Зона отдыха Bobsonm Lounge"
    },
    {
      src: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?q=80&w=1169&auto=format&fit=crop",
      alt: "VIP-зона Bobsonm Lounge"
    },
    {
      src: "https://images.unsplash.com/photo-1518537878376-5a9d8d617fad?q=80&w=1170&auto=format&fit=crop",
      alt: "Атмосфера в Bobsonm Lounge"
    },
    {
      src: "https://images.unsplash.com/photo-1568644396922-5c3bfae12220?q=80&w=1170&auto=format&fit=crop",
      alt: "Кальяны в Bobsonm Lounge"
    }
  ];
  
  // Menu categories
  const menuCategories = [
    {
      title: "Кухня",
      items: [
        { name: "Брускетта с ростбифом", description: "Ростбиф, руккола, томаты черри, соус", price: "590 ₽" },
        { name: "Тартар из тунца", description: "Тунец, авокадо, цитрусовая заправка", price: "720 ₽" },
        { name: "Цезарь с курицей", description: "Куриное филе, салат ромэн, гренки, пармезан", price: "590 ₽" },
        { name: "Паста карбонара", description: "Спагетти, бекон, желток, пармезан", price: "620 ₽" },
        { name: "Медальоны из говядины", description: "Говяжья вырезка, овощи гриль, соус демиглас", price: "1290 ₽" }
      ]
    },
    {
      title: "Бар",
      items: [
        { name: "Aperol Spritz", description: "Aperol, просекко, содовая", price: "490 ₽" },
        { name: "Negroni", description: "Джин, кампари, красный вермут", price: "520 ₽" },
        { name: "Old Fashioned", description: "Бурбон, сахарный сироп, биттер", price: "550 ₽" },
        { name: "Bobsonm Special", description: "Авторский коктейль от нашего бармена", price: "580 ₽" },
        { name: "Лимонад Маракуйя", description: "Безалкогольный лимонад с маракуйей", price: "280 ₽" }
      ]
    },
    {
      title: "Кальяны",
      items: [
        { name: "Легкий", description: "Классический кальян средней крепости", price: "1600 ₽" },
        { name: "Premium", description: "Кальян на премиальном табаке", price: "2200 ₽" },
        { name: "Фруктовый", description: "Кальян на грейпфруте или ананасе", price: "2800 ₽" },
        { name: "Авторский", description: "Фирменный кальян от нашего кальянного мастера", price: "3200 ₽" },
        { name: "Замена чаши", description: "Дополнительная чаша любого вкуса", price: "800 ₽" }
      ]
    }
  ];
  
  // Promotions
  const promotions = [
    {
      title: "Happy Hours",
      description: "Скидка 20% на все напитки в будни с 17:00 до 19:00",
      period: "Ежедневно"
    },
    {
      title: "День рождения",
      description: "Фирменный коктейль в подарок имениннику и скидка 10% на общий счет",
      period: "В день рождения и 3 дня после"
    },
    {
      title: "Кальянный четверг",
      description: "Каждый четверг скидка 15% на все кальяны",
      period: "По четвергам"
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
            backgroundImage: "url(https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1974&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bobsonm-black/70 via-bobsonm-black/50 to-bobsonm-black" />
        
        {/* Content */}
        <div className="relative bobsonm-container text-center z-10 px-4">
          <AnimatedSection delay={300}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6">
              Bobsonm <span className="text-bobsonm-gold">Lounge</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={600} direction="up">
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-white/90 max-w-3xl mx-auto">
              Расслабьтесь в атмосфере изысканного комфорта
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={900}>
            <ContactButton 
              size="lg" 
              phoneNumber="+7 (901) 417-22-93"
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
                src="https://images.unsplash.com/photo-1504284401809-2d78624be027?q=80&w=2070&auto=format&fit=crop" 
                alt="Атмосфера Bobsonm Lounge" 
                className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left">
            <h3 className="text-3xl font-serif font-semibold mb-6">О нашем Lounge</h3>
            <p className="text-muted-foreground mb-6">
              Bobsonm Lounge — это уникальное пространство, где сочетаются стильный дизайн, 
              мягкий свет и приятная музыка. Здесь вы можете расслабиться после напряженного дня, 
              насладиться премиальными кальянами и изысканными напитками.
            </p>
            <p className="text-muted-foreground mb-8">
              Наш лаундж — идеальное место для встречи с друзьями, романтического вечера или 
              деловой беседы в непринужденной обстановке. Опытные кальянные мастера и внимательный 
              персонал создадут для вас атмосферу безупречного комфорта.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center text-center p-4 glass-panel rounded-lg">
                <Clock className="text-bobsonm-gold mb-3" size={24} />
                <span className="text-sm text-muted-foreground">Работаем ежедневно</span>
                <span className="font-medium">с 14:00 до 02:00</span>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 glass-panel rounded-lg">
                <Music className="text-bobsonm-gold mb-3" size={24} />
                <span className="text-sm text-muted-foreground">DJ-сеты</span>
                <span className="font-medium">Пт-Сб с 20:00</span>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 glass-panel rounded-lg">
                <Users className="text-bobsonm-gold mb-3" size={24} />
                <span className="text-sm text-muted-foreground">До 80 гостей</span>
                <span className="font-medium">Уютные зоны</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Menu section */}
      <section className="py-20 bg-bobsonm-navy/10">
        <div className="bobsonm-container px-4">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-2 text-center">Меню</h3>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Насладитесь нашей авторской кухней, изысканными напитками и премиальными кальянами
            </p>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            {menuCategories.map((category, categoryIndex) => (
              <AnimatedSection key={categoryIndex} direction="up" delay={200 * categoryIndex}>
                <div className="mb-10">
                  <h4 className="text-2xl font-serif font-medium mb-6 text-bobsonm-gold">{category.title}</h4>
                  <div className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between border-b border-bobsonm-navy/30 pb-4">
                        <div>
                          <h5 className="font-medium mb-1">{item.name}</h5>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="text-bobsonm-gold font-medium ml-4">{item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery section */}
      <section className="py-20 bobsonm-container px-4">
        <AnimatedSection direction="up">
          <h3 className="text-3xl font-serif font-semibold mb-2 text-center">Галерея</h3>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Погрузитесь в атмосферу Bobsonm Lounge
          </p>
        </AnimatedSection>
        
        <Gallery images={loungeImages} columns={3} gap="md" />
      </section>
      
      {/* Promotions */}
      <section className="py-20 bg-bobsonm-navy/10">
        <div className="bobsonm-container px-4">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-2 text-center">Акции и бонусы</h3>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Специальные предложения для наших гостей
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <AnimatedSection key={index} direction="up" delay={200 * index}>
                <div className="glass-panel p-6 rounded-lg h-full">
                  <h4 className="font-semibold text-xl mb-2 text-bobsonm-gold">{promo.title}</h4>
                  <p className="text-muted-foreground mb-4">{promo.description}</p>
                  <div className="flex items-center mt-auto">
                    <Calendar size={16} className="text-bobsonm-gold" />
                    <span className="text-sm ml-2">{promo.period}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contacts */}
      <section className="py-20 bobsonm-container px-4">
        <AnimatedSection direction="up">
          <h3 className="text-3xl font-serif font-semibold mb-2 text-center">Контакты</h3>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Забронируйте стол в Bobsonm Lounge
          </p>
        </AnimatedSection>
        
        <div className="max-w-lg mx-auto">
          <AnimatedSection direction="up" delay={200}>
            <div className="glass-panel p-8 rounded-lg">
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
                <Clock size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium">Время работы</h4>
                  <p>Ежедневно с 14:00 до 02:00</p>
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
                  phoneNumber="+7 (901) 417-22-93" 
                  className="w-full"
                >
                  Забронировать стол
                </ContactButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Lounge;
