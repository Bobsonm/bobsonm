
import { useEffect } from "react";
import { Gallery } from "@/components/Gallery";
import { YandexMap } from "@/components/YandexMap";
import { FadeUp, Reveal } from "@/components/ParallaxSection";
import { VenueHero } from "@/components/VenueHero";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, MapPin, Phone, Star, User, 
  MessageCircle, Heart, Users, Shield
} from "lucide-react";

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
      icon: <Heart size={24} className="text-primary" />,
      title: "Уют и атмосфера",
      description: "Стильный лаунж с мягким светом, удобными диванами и дружелюбной атмосферой — идеальное место, чтобы расслабиться и погрузиться в игру."
    },
    {
      icon: <Star size={24} className="text-primary" />,
      title: "Welcome drink и бонусы",
      description: "Каждому игроку — коктейль \"Последний шанс\" на старте. Часто угощаем клубникой в шоколаде, устраиваем тематические вечера и награждаем активных игроков призами."
    },
    {
      icon: <Shield size={24} className="text-primary" />,
      title: "Интеллект и интрига",
      description: "Это не просто игра, а психологическое сражение. Здесь побеждают не самые громкие, а самые умные и внимательные."
    },
    {
      icon: <Users size={24} className="text-primary" />,
      title: "Живая комьюнити",
      description: "Наши гости — это люди, которые возвращаются снова и снова. Здесь можно найти как сильных соперников, так и новых друзей."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16 text-foreground md:pt-20">
      <VenueHero
        eyebrow="Mafia direction"
        title="Bobsonm"
        accent="Mafia"
        description="Психология, интрига и вечерняя игра в пространстве, где настроение собирается вокруг стола и сильного комьюнити."
        imageSrc="/lovable-uploads/f2c1b295-9a6e-4390-8ea7-8671297c8dbe.png"
        imageAlt="Bobsonm Mafia"
        actions={
          <>
            <a
              href="https://t.me/Bobsonmafia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-primary/60 bg-primary px-6 py-3 font-medium text-primary-foreground shadow-[0_18px_45px_-24px_hsl(var(--primary)/0.8)] transition-all hover:bg-primary/90"
            >
              <MessageCircle size={18} className="mr-2" />
              Telegram-сообщество
            </a>
            <a
              href="#community"
              className="inline-flex items-center justify-center rounded-full border border-primary/35 px-6 py-3 text-primary transition-all hover:bg-primary/10"
            >
              Расписание игр
            </a>
          </>
        }
        stats={[
          { label: "Игры", value: "расписание в канале" },
          { label: "Формат", value: "ведущие + комьюнити" },
          { label: "Запись", value: "через Telegram" },
        ]}
      />
      
      {/* About section */}
      <section className="bobsonm-container py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <FadeUp>
              <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-primary/78">О клубе</p>
              <h2 className="text-3xl sm:text-5xl">О клубе Мафии</h2>
            </FadeUp>
            <FadeUp delay={0.12}><div className="mb-6 mt-5 w-20 gold-divider" /></FadeUp>
            <FadeUp delay={0.2}>
              <p className="mb-6 text-foreground/72">
              Bobsonm Mafia — это клуб для ценителей интеллектуальной игры, где логика, 
              актерское мастерство и интуиция помогают раскрыть все тайны ночного города. 
              У нас играют как опытные мафиози, так и новички, желающие погрузиться в мир детективных 
              загадок.
              </p>
              <p className="mb-8 text-foreground/62">
              Каждая игра — это уникальный опыт, наполненный эмоциями, стратегиями и неожиданными 
              поворотами сюжета. Профессиональные ведущие следят за соблюдением правил и создают 
              незабываемую атмосферу, а уютное пространство позволяет полностью погрузиться в игру.
              </p>
            </FadeUp>
            <FadeUp delay={0.28}>
              <a 
              href="https://t.me/Bobsonmafia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-primary/35 px-5 py-3 font-medium text-primary transition-all hover:bg-primary/10"
            >
              <User size={18} className="mr-2" />
              Присоединиться к сообществу
            </a>
            </FadeUp>
          </div>
          
          <Reveal className="order-1 lg:order-2">
            <div className="premium-card p-3 sm:p-4">
              <img 
                src="/lovable-uploads/f2c1b295-9a6e-4390-8ea7-8671297c8dbe.png" 
                alt="Клуб Bobsonm Mafia" 
                className="aspect-[4/5] w-full rounded-[1.2rem] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="bobsonm-container px-4">
          <FadeUp>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">Преимущества клуба</h2>
            <p className="mx-auto mt-3 mb-12 max-w-2xl text-center text-foreground/68">
              Что делает Bobsonm Mafia особенным местом для игры
            </p>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Reveal key={index}>
                <div className="premium-card h-full p-6">
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/10 p-3">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl text-foreground">{benefit.title}</h3>
                      <p className="text-foreground/72">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery section - Updated with user's images */}
      <section className="py-20 bobsonm-container px-4">
        <FadeUp>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">Фотогалерея</h2>
          <p className="mx-auto mt-3 mb-12 max-w-2xl text-center text-foreground/68">
            Моменты игры и эмоции наших гостей
          </p>
        </FadeUp>
        
        <Gallery images={mafiaImages} columns={3} gap="md" />
      </section>
      
      {/* Telegram community */}
      <section id="community" className="py-20 bg-gradient-to-b from-secondary/25 to-background">
        <div className="bobsonm-container px-4 text-center">
          <FadeUp>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">Присоединяйтесь к нам</h2>
            <p className="mx-auto mb-10 mt-4 max-w-2xl text-foreground/68">
              Все расписание игр, анонсы и общение с сообществом - в нашем Telegram-канале
            </p>
          </FadeUp>
          
          <Reveal>
            <div className="premium-card mx-auto max-w-md p-8">
              <div className="mb-4">
                <MessageCircle size={40} className="mx-auto text-primary" />
              </div>
              <h3 className="mb-2 text-xl text-foreground">Telegram-канал Bobsonm Mafia</h3>
              <p className="mb-6 text-foreground/72">
                Узнавайте первыми о расписании, акциях и новостях нашего клуба
              </p>
              <a
                href="https://t.me/Bobsonmafia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-primary/60 bg-primary px-4 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                Подписаться на канал
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      
      {/* Contacts */}
      <section className="py-20 bobsonm-container px-4">
        <FadeUp>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">Контакты</h2>
          <p className="mx-auto mt-3 mb-12 max-w-2xl text-center text-foreground/68">
            Запишитесь на игру в Bobsonm Mafia
          </p>
        </FadeUp>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="premium-card p-8">
              <div className="flex items-center mb-6">
                <Phone size={24} className="mr-4 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">Телефон для записи</h3>
                  <a href="tel:+79671311783" className="text-xl text-gold-shine hover:opacity-80">
                    +7 (967) 131-17-83
                  </a>
                </div>
              </div>
              
              <Separator className="my-6 bg-border" />
              
              <div className="flex items-center mb-6">
                <Clock size={24} className="mr-4 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">Время проведения игр</h3>
                  <p className="text-foreground/75">С 19:30 до 00:00</p>
                </div>
              </div>
              
              <Separator className="my-6 bg-border" />
              
              <div className="flex items-center">
                <MapPin size={24} className="mr-4 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">Адрес</h3>
                  <p className="text-foreground/75">Москва, Международная улица 15А</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a
                  href="https://t.me/Bobsonm_lounge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-primary/60 bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Записаться на игру
                </a>
              </div>
            </div>
          </Reveal>
          
          <Reveal>
            <YandexMap src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=2924377283" />
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Mafia;
