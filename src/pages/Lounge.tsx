
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ContactButton } from "@/components/ContactButton";
import { Gallery } from "@/components/Gallery";
import { YandexMap } from "@/components/YandexMap";
import { BookFlipMenu } from "@/components/BookFlipMenu";
import { FadeUp, Reveal } from "@/components/ParallaxSection";
import { VenueHero } from "@/components/VenueHero";
import { Separator } from "@/components/ui/separator";
import { foodMenuPages, hookahMenuPages } from "@/assets/menu";
import { ArrowRight, Calendar, Clock, ExternalLink, Flame, MapPin, Music, Phone, Users } from "lucide-react";

const Lounge = () => {
  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Gallery images - Updated with user-provided images
  const loungeImages = [
    {
      src: "/lovable-uploads/cd25fd07-854f-4982-8a9a-d7a7eeb0d8f6.png",
      alt: "Шоколадный фонтан с фруктами в Bobsonm Lounge"
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
    description: "В день рождения и 3 дня после -20% на весь счет",
    period: "В день рождения и 3 дня после"
  }];
  
  return (
    <div className="min-h-screen bg-background pt-16 text-foreground md:pt-20">
      <VenueHero
        eyebrow="Lounge direction"
        title="Bobsonm"
        accent="Lounge"
        description="Кальянный ритуал, мягкий свет и долгие разговоры в пространстве, где вечер ощущается собранным и дорогим."
        imageSrc="/lovable-uploads/adb9981e-55c4-4f48-8d78-0eae2fb0fe09.png"
        imageAlt="Интерьер Bobsonm Lounge"
        actions={
          <>
            <ContactButton size="lg" phoneNumber="+7 (903) 662-37-16">
              Позвонить и забронировать
            </ContactButton>
            <a href="#menu" className="group inline-flex items-center gap-3 border-b border-primary/30 pb-2 text-primary transition-all hover:border-primary">
              <span className="text-xs uppercase tracking-[0.3em]">Меню</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </>
        }
        stats={[
          { label: "Режим", value: "ежедневно 13:00–01:00" },
          { label: "Поздние часы", value: "пт–сб до 03:00" },
          { label: "Формат", value: "lounge + кальян + бар" },
        ]}
      />

      <LoungeStorySection />
      
      {/* Combined Menu section with tabs */}
      <section id="menu" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="bobsonm-container px-4">
          <FadeUp>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">Меню</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-foreground/68">
              Насладитесь нашей авторской кухней, изысканными напитками и премиальными кальянами
            </p>
          </FadeUp>
          
          <div className="max-w-5xl mx-auto">
            <BookFlipMenu
              tabs={[
                { value: "food", label: "Еда", images: foodMenuPages },
                { value: "bar-hookah", label: "Кальян и бар", images: hookahMenuPages },
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* Gallery section */}
      <section className="py-20 bobsonm-container px-4">
        <FadeUp>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">Галерея</h2>
          <p className="mx-auto mt-3 mb-12 max-w-2xl text-center text-foreground/68">
            Погрузитесь в атмосферу Bobsonm Lounge
          </p>
        </FadeUp>
        
        <Gallery images={loungeImages} columns={3} gap="md" />
      </section>
      
      {/* Promotions */}
      <section className="py-20 bg-gradient-to-b from-secondary/25 to-background">
        <div className="bobsonm-container px-4">
          <FadeUp>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">Акции и бонусы</h2>
            <p className="mx-auto mt-3 mb-12 max-w-2xl text-center text-foreground/68">
              Специальные предложения для наших гостей
            </p>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <Reveal key={index}>
                <div className="premium-card h-full p-6">
                  <h3 className="text-2xl text-gold-shine">{promo.title}</h3>
                  <p className="mt-4 text-foreground/72">{promo.description}</p>
                  <div className="flex items-center mt-auto">
                    <Calendar size={16} className="text-primary" />
                    <span className="ml-2 text-sm text-primary/85">{promo.period}</span>
                  </div>
                  {promo.link && (
                    <a 
                      href={promo.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-4 inline-flex items-center text-primary transition-colors text-sm hover:text-primary/75"
                    >
                      Перейти к регистрации
                      <ExternalLink size={14} className="ml-2" />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contacts */}
      <section className="py-20 bobsonm-container px-4">
        <FadeUp>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">Контакты</h2>
          <p className="mx-auto mt-3 mb-12 max-w-2xl text-center text-foreground/68">
            Забронируйте стол в Bobsonm Lounge
          </p>
        </FadeUp>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="premium-card p-8">
              <div className="flex items-center mb-6">
                <Phone size={24} className="mr-4 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">Телефон для бронирования</h3>
                  <a href="tel:+79036623716" className="text-xl text-gold-shine transition-colors hover:opacity-80">
                    +7 (903) 662-37-16
                  </a>
                </div>
              </div>
              
              <Separator className="my-6 bg-border" />
              
              <div className="flex items-center mb-6">
                <Flame size={24} className="mr-4 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">Телефон управляющего</h3>
                  <a href="tel:+79671311783" className="text-xl text-gold-shine transition-colors hover:opacity-80">
                    +7 (967) 131-17-83
                  </a>
                </div>
              </div>
              
              <Separator className="my-6 bg-border" />
              
              <div className="flex items-center mb-6">
                <Clock size={24} className="mr-4 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">Время работы</h3>
                  <p className="text-foreground/75">Ежедневно с 13:00 до 01:00</p>
                  <p className="text-sm text-primary/80">Пятница и суббота до 03:00</p>
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
                <ContactButton size="lg" variant="primary" phoneNumber="+7 (903) 662-37-16" className="w-full">
                  Забронировать стол
                </ContactButton>
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

function LoungeStorySection() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section className="bobsonm-container py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-16">
        <Reveal>
          <div className="premium-card p-3 sm:p-4">
            <motion.div style={{ y: imageY }} className="overflow-hidden rounded-[1.2rem]">
              <img
                alt="Атмосфера Bobsonm Lounge"
                className="aspect-[4/5] w-full object-cover"
                src="/lovable-uploads/7f313834-974b-40cc-9088-31bfedc73848.png"
              />
            </motion.div>
          </div>
        </Reveal>

        <div>
          <FadeUp>
            <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-primary/78">Атмосфера</p>
            <h2 className="text-3xl leading-tight sm:text-5xl">О нашем Lounge</h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <div className="mb-6 mt-5 w-20 gold-divider" />
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mb-5 text-base leading-relaxed text-foreground/72 sm:text-lg">
              Bobsonm Lounge — пространство, где стильный интерьер, мягкий свет и музыка собирают вечер в цельную сцену.
            </p>
            <p className="text-base leading-relaxed text-foreground/62 sm:text-lg">
              Здесь удобно встречаться с друзьями, уходить в длинный разговор и доверять вечер команде, которая держит уровень сервиса без лишнего шума.
            </p>
          </FadeUp>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: Clock, label: "Режим", value: "ежедневно 13:00–01:00" },
              { icon: Music, label: "Сценарий", value: "мафия по расписанию" },
              { icon: Users, label: "Формат", value: "уютные зоны до 100 гостей" },
            ].map((item, index) => (
              <FadeUp key={item.label} delay={0.28 + index * 0.08}>
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
  );
}

export default Lounge;
