
import { useEffect } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactButton } from "@/components/ContactButton";
import { Gallery } from "@/components/Gallery";
import { YandexMap } from "@/components/YandexMap";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, MapPin, Phone, Star, Calendar, User, 
  MessageCircle, Heart, Users, Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const Mafia = () => {
  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Gallery images - Updated with user-provided images
  const mafiaImages = [
    {
      src: "/lovable-uploads/cd25fd07-854f-4982-8a9a-d7a7eeb0d8f6.png",
      alt: "Шоколадный фонтан с фруктами в Bobsonm Mafia"
    },
    {
      src: "/lovable-uploads/59a0275b-c960-4faf-8bc9-4020035bad4e.png",
      alt: "VIP зона с телевизором и портретом"
    },
    {
      src: "/lovable-uploads/0db26f61-1414-4c81-8ee8-e38ef6ea7b77.png",
      alt: "Дизайнерский элемент интерьера с подсветкой"
    },
    {
      src: "/lovable-uploads/885fb2fa-6d8e-4986-afb0-b58e99739894.png",
      alt: "Зона отдыха Bobsonm Lounge с логотипом"
    },
    {
      src: "/lovable-uploads/5e9fb870-9294-4f3a-9c0c-6c9069ebfdca.png",
      alt: "Уютный интерьер Bobsonm Lounge с кирпичной стеной"
    },
    {
      src: "/lovable-uploads/ed4375a5-9a58-4b8b-9efd-9c7590d16df5.png",
      alt: "Бар Bobsonm Lounge с декоративными статуэтками"
    },
    {
      src: "/lovable-uploads/7f313834-974b-40cc-9088-31bfedc73848.png",
      alt: "Логотип Bobsonm Lounge на стене"
    },
    {
      src: "/lovable-uploads/adb9981e-55c4-4f48-8d78-0eae2fb0fe09.png",
      alt: "Бар и зона отдыха Bobsonm Lounge"
    },
    {
      src: "/lovable-uploads/f2c1b295-9a6e-4390-8ea7-8671297c8dbe.png",
      alt: "Маски Bobsonm Mafia на столе"
    }
  ];
  
  // Club benefits
  const benefits = [
    {
      icon: <Heart size={24} className="text-bobsonm-gold" />,
      title: "Уют и атмосфера",
      description: "Стильный лаунж с мягким светом, удобными диванами и дружелюбной атмосферой — идеальное место, чтобы расслабиться и погрузиться в игру."
    },
    {
      icon: <Star size={24} className="text-bobsonm-gold" />,
      title: "Welcome drink и бонусы",
      description: "Каждому игроку — коктейль \"Последний шанс\" на старте. Часто угощаем клубникой в шоколаде, устраиваем тематические вечера и награждаем активных игроков призами."
    },
    {
      icon: <Shield size={24} className="text-bobsonm-gold" />,
      title: "Интеллект и интрига",
      description: "Это не просто игра, а психологическое сражение. Здесь побеждают не самые громкие, а самые умные и внимательные."
    },
    {
      icon: <Users size={24} className="text-bobsonm-gold" />,
      title: "Живая комьюнити",
      description: "Наши гости — это люди, которые возвращаются снова и снова. Здесь можно найти как сильных соперников, так и новых друзей."
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
            backgroundImage: "url(/lovable-uploads/885fb2fa-6d8e-4986-afb0-b58e99739894.png)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bobsonm-black/70 via-bobsonm-black/50 to-bobsonm-black" />
        
        {/* Content */}
        <div className="relative bobsonm-container text-center z-10 px-4">
          <AnimatedSection delay={300}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 animate-text-shine">
              Bobsonm <span className="text-bobsonm-gold">Mafia</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={600} direction="up">
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-white max-w-3xl mx-auto">
              Интеллектуальная игра с атмосферой загадки и азарта
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={900}>
            <a
              href="https://t.me/Bobsonm_lounge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-bobsonm-gold text-bobsonm-black hover:bg-bobsonm-goldLight transition-colors px-6 py-3 mt-6 font-medium"
            >
              <MessageCircle size={20} className="mr-2" />
              Записаться на игру
            </a>
          </AnimatedSection>
        </div>
      </section>
      
      {/* About section */}
      <section className="bobsonm-container py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection direction="right" className="order-2 lg:order-1">
            <h3 className="text-3xl font-serif font-semibold mb-6 text-gradient-gold">О клубе Мафии</h3>
            <p className="text-white mb-6">
              Bobsonm Mafia — это клуб для ценителей интеллектуальной игры, где логика, 
              актерское мастерство и интуиция помогают раскрыть все тайны ночного города. 
              У нас играют как опытные мафиози, так и новички, желающие погрузиться в мир детективных 
              загадок.
            </p>
            <p className="text-white mb-8">
              Каждая игра — это уникальный опыт, наполненный эмоциями, стратегиями и неожиданными 
              поворотами сюжета. Профессиональные ведущие следят за соблюдением правил и создают 
              незабываемую атмосферу, а уютное пространство позволяет полностью погрузиться в игру.
            </p>
            
            <Link 
              to="https://t.me/Bobsonmafia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-bobsonm-navy border border-bobsonm-navy/50 text-white px-4 py-2 font-medium hover:bg-bobsonm-navy/80 transition-colors"
            >
              <User size={18} className="mr-2" />
              Присоединиться к сообществу
            </Link>
          </AnimatedSection>
          
          <AnimatedSection direction="left" className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-lg shadow-[0_0_25px_rgba(21,39,75,0.5)] border-2 border-bobsonm-navy/30">
              <img 
                src="/lovable-uploads/f2c1b295-9a6e-4390-8ea7-8671297c8dbe.png" 
                alt="Клуб Bobsonm Mafia" 
                className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-bobsonm-navy/5 to-bobsonm-navy/15">
        <div className="bobsonm-container px-4">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-2 text-center text-gradient-gold">Преимущества клуба</h3>
            <p className="text-white text-center mb-12 max-w-2xl mx-auto">
              Что делает Bobsonm Mafia особенным местом для игры
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} direction="up" delay={100 * index}>
                <div className="glass-panel p-6 rounded-lg h-full border border-bobsonm-navy/30 hover:border-bobsonm-navy/60 transition-all hover:translate-y-[-5px]">
                  <div className="flex items-start">
                    <div className="p-3 bg-bobsonm-navy/20 rounded-full mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-white">{benefit.title}</h4>
                      <p className="text-white/80">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery section - Updated with user's images */}
      <section className="py-20 bobsonm-container px-4">
        <AnimatedSection direction="up">
          <h3 className="text-3xl font-serif font-semibold mb-2 text-center text-gradient-gold">Фотогалерея</h3>
          <p className="text-white text-center mb-12 max-w-2xl mx-auto">
            Моменты игры и эмоции наших гостей
          </p>
        </AnimatedSection>
        
        <Gallery images={mafiaImages} columns={3} gap="md" />
      </section>
      
      {/* Telegram community */}
      <section className="py-20 bg-gradient-to-b from-bobsonm-navy/15 to-bobsonm-navy/5">
        <div className="bobsonm-container px-4 text-center">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-6 text-gradient-gold">Присоединяйтесь к нам</h3>
            <p className="text-white mb-10 max-w-2xl mx-auto">
              Все расписание игр, анонсы и общение с сообществом - в нашем Telegram-канале
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="scale" delay={300}>
            <div className="glass-panel p-8 rounded-lg max-w-md mx-auto border-2 border-bobsonm-navy/30 hover:border-bobsonm-navy/60 transition-all transform hover:scale-105">
              <div className="mb-4">
                <MessageCircle size={40} className="text-bobsonm-gold mx-auto" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Telegram-канал Bobsonm Mafia</h4>
              <p className="text-white mb-6">
                Узнавайте первыми о расписании, акциях и новостях нашего клуба
              </p>
              <a
                href="https://t.me/Bobsonmafia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-bobsonm-gold text-bobsonm-black px-4 py-2 font-medium hover:bg-bobsonm-goldLight transition-colors w-full"
              >
                Подписаться на канал
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Contacts */}
      <section className="py-20 bobsonm-container px-4">
        <AnimatedSection direction="up">
          <h3 className="text-3xl font-serif font-semibold mb-2 text-center text-gradient-gold">Контакты</h3>
          <p className="text-white text-center mb-12 max-w-2xl mx-auto">
            Запишитесь на игру в Bobsonm Mafia
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatedSection direction="right" delay={200}>
            <div className="glass-panel p-8 rounded-lg border border-bobsonm-navy/30">
              <div className="flex items-center mb-6">
                <Phone size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium text-white">Телефон для записи</h4>
                  <a href="tel:+79671311783" className="text-xl font-semibold text-bobsonm-gold hover:text-bobsonm-goldLight transition-colors">
                    +7 (967) 131-17-83
                  </a>
                </div>
              </div>
              
              <Separator className="my-6 bg-bobsonm-navy/30" />
              
              <div className="flex items-center mb-6">
                <Clock size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium text-white">Время проведения игр</h4>
                  <p className="text-white">С 19:30 до 00:00</p>
                </div>
              </div>
              
              <Separator className="my-6 bg-bobsonm-navy/30" />
              
              <div className="flex items-center">
                <MapPin size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium text-white">Адрес</h4>
                  <p className="text-white">Москва, Международная улица 15А</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a
                  href="https://t.me/Bobsonm_lounge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-bobsonm-gold text-bobsonm-black px-6 py-3 font-medium hover:bg-bobsonm-goldLight transition-colors w-full"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Записаться на игру
                </a>
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

export default Mafia;
