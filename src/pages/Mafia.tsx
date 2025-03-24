
import { useEffect } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactButton } from "@/components/ContactButton";
import { Gallery } from "@/components/Gallery";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, MapPin, Trophy, Star, Shield, Phone, User, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Mafia = () => {
  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Gallery images
  const mafiaImages = [
    {
      src: "https://images.unsplash.com/photo-1618221710640-c0eaaa2adb49?q=80&w=1932&auto=format&fit=crop",
      alt: "Игра в мафию в Bobsonm Mafia"
    },
    {
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
      alt: "Участники игры в мафию"
    },
    {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
      alt: "Компания друзей в Bobsonm Mafia"
    },
    {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
      alt: "Обсуждение в игре Мафия"
    },
    {
      src: "https://images.unsplash.com/photo-1594815076796-7fac211a2a14?q=80&w=1974&auto=format&fit=crop",
      alt: "Эмоции игроков мафии"
    },
    {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop",
      alt: "Друзья на игре в Bobsonm Mafia"
    }
  ];
  
  // Upcoming games
  const upcomingGames = [
    {
      date: "20 июля",
      day: "Суббота",
      time: "19:00",
      format: "Классическая мафия",
      spots: "8/10 мест",
      price: "1200 ₽"
    },
    {
      date: "22 июля",
      day: "Понедельник",
      time: "20:00",
      format: "Мафия для новичков",
      spots: "5/10 мест",
      price: "900 ₽"
    },
    {
      date: "24 июля",
      day: "Среда",
      time: "19:30",
      format: "Мафия-мафия",
      spots: "6/10 мест",
      price: "1200 ₽"
    },
    {
      date: "27 июля",
      day: "Суббота",
      time: "18:00",
      format: "Тематическая игра",
      spots: "9/10 мест",
      price: "1500 ₽"
    }
  ];
  
  // Club benefits
  const benefits = [
    {
      icon: <Trophy size={24} className="text-bobsonm-gold" />,
      title: "Профессиональные ведущие",
      description: "Наши ведущие — опытные игроки, которые создают увлекательную и справедливую игру"
    },
    {
      icon: <Star size={24} className="text-bobsonm-gold" />,
      title: "Уникальные сценарии",
      description: "Разнообразные форматы игры, от классической мафии до авторских сценариев"
    },
    {
      icon: <Shield size={24} className="text-bobsonm-gold" />,
      title: "Рейтинговая система",
      description: "Для постоянных игроков ведётся рейтинг, лучшие получают призы и бонусы"
    },
    {
      icon: <Users size={24} className="text-bobsonm-gold" />,
      title: "Дружеское сообщество",
      description: "Мы формируем сообщество игроков, объединенных страстью к мафии"
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
            backgroundImage: "url(https://images.unsplash.com/photo-1613102778924-1e44e5f2f4ba?q=80&w=1170&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bobsonm-black/70 via-bobsonm-black/50 to-bobsonm-black" />
        
        {/* Content */}
        <div className="relative bobsonm-container text-center z-10 px-4">
          <AnimatedSection delay={300}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6">
              Bobsonm <span className="text-bobsonm-gold">Mafia</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={600} direction="up">
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-white/90 max-w-3xl mx-auto">
              Интеллектуальная игра с атмосферой загадки и азарта
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={900}>
            <ContactButton 
              size="lg" 
              phoneNumber="+7 (967) 131-17-83"
              className="mt-6"
            >
              Записаться на игру
            </ContactButton>
          </AnimatedSection>
        </div>
      </section>
      
      {/* About section */}
      <section className="bobsonm-container py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection direction="right" className="order-2 lg:order-1">
            <h3 className="text-3xl font-serif font-semibold mb-6">О клубе Мафии</h3>
            <p className="text-muted-foreground mb-6">
              Bobsonm Mafia — это клуб для ценителей интеллектуальной игры, где логика, 
              актерское мастерство и интуиция помогают раскрыть все тайны ночного города. 
              У нас играют как опытные мафиози, так и новички, желающие погрузиться в мир детективных 
              загадок.
            </p>
            <p className="text-muted-foreground mb-8">
              Каждая игра — это уникальный опыт, наполненный эмоциями, стратегиями и неожиданными 
              поворотами сюжета. Профессиональные ведущие следят за соблюдением правил и создают 
              незабываемую атмосферу, а уютное пространство позволяет полностью погрузиться в игру.
            </p>
            
            <Link 
              to="https://t.me/bobsonm_mafia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-bobsonm-navy text-white px-4 py-2 font-medium hover:bg-bobsonm-navy/80 transition-colors"
            >
              <User size={18} className="mr-2" />
              Присоединиться к сообществу
            </Link>
          </AnimatedSection>
          
          <AnimatedSection direction="left" className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=2071&auto=format&fit=crop" 
                alt="Клуб Bobsonm Mafia" 
                className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Schedule section */}
      <section className="py-20 bg-bobsonm-navy/10">
        <div className="bobsonm-container px-4">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-2 text-center">Расписание игр</h3>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Предстоящие игры и мероприятия клуба Bobsonm Mafia
            </p>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingGames.map((game, index) => (
                <AnimatedSection key={index} direction="up" delay={100 * index}>
                  <div className="glass-panel p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-medium">{game.date}</h4>
                        <p className="text-sm text-muted-foreground">{game.day}, {game.time}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-bobsonm-gold font-medium">{game.price}</span>
                        <p className="text-sm text-muted-foreground">{game.spots}</p>
                      </div>
                    </div>
                    
                    <div className="bg-bobsonm-navy/20 py-2 px-4 rounded text-center">
                      <span className="font-medium">{game.format}</span>
                    </div>
                    
                    <div className="mt-4 text-right">
                      <ContactButton 
                        variant="ghost" 
                        size="sm" 
                        phoneNumber="+7 (967) 131-17-83"
                      >
                        Записаться
                      </ContactButton>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            <AnimatedSection direction="up" delay={500} className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Планируете заранее? Уточните полное расписание по телефону
              </p>
              <ContactButton phoneNumber="+7 (967) 131-17-83">
                Узнать расписание
              </ContactButton>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Gallery section */}
      <section className="py-20 bobsonm-container px-4">
        <AnimatedSection direction="up">
          <h3 className="text-3xl font-serif font-semibold mb-2 text-center">Фотогалерея</h3>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Моменты игры и эмоции наших гостей
          </p>
        </AnimatedSection>
        
        <Gallery images={mafiaImages} columns={3} gap="md" />
      </section>
      
      {/* Benefits */}
      <section className="py-20 bg-bobsonm-navy/10">
        <div className="bobsonm-container px-4">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-2 text-center">Преимущества клуба</h3>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Что делает Bobsonm Mafia особенным местом для игры
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} direction="up" delay={100 * index}>
                <div className="glass-panel p-6 rounded-lg h-full">
                  <div className="flex items-start">
                    <div className="p-3 bg-bobsonm-navy/20 rounded-full mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
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
            Запишитесь на игру в Bobsonm Mafia
          </p>
        </AnimatedSection>
        
        <div className="max-w-lg mx-auto">
          <AnimatedSection direction="up" delay={200}>
            <div className="glass-panel p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Phone size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium">Телефон для записи</h4>
                  <a href="tel:+79671311783" className="text-xl font-semibold text-bobsonm-gold hover:text-bobsonm-goldLight transition-colors">
                    +7 (967) 131-17-83
                  </a>
                </div>
              </div>
              
              <Separator className="my-6 bg-bobsonm-navy/30" />
              
              <div className="flex items-center mb-6">
                <Clock size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium">Время проведения игр</h4>
                  <p>По расписанию, обычно с 19:00 до 23:00</p>
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
                  phoneNumber="+7 (967) 131-17-83" 
                  className="w-full"
                >
                  Записаться на игру
                </ContactButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Mafia;
