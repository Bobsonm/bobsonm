
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ContactButton } from "@/components/ContactButton";
import { Gallery } from "@/components/Gallery";
import { YandexMap } from "@/components/YandexMap";
import { BookFlipMenu } from "@/components/BookFlipMenu";
import { FadeUp, Reveal } from "@/components/ParallaxSection";
import { VenueHero } from "@/components/VenueHero";
import { Separator } from "@/components/ui/separator";
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

  // Food menu images from uploaded files
  const foodMenuImages = [
    {
      src: "/lovable-uploads/19679430-2f9e-41e8-91b9-a248692b14e7.png",
      alt: "Бургеры меню"
    },
    {
      src: "/lovable-uploads/feedf6e5-0712-4997-875d-98e8d7851382.png",
      alt: "Горячие блюда меню"
    },
    {
      src: "/lovable-uploads/85b5051f-664e-41fe-b92f-b9642ffd9043.png",
      alt: "Салаты меню"
    },
    {
      src: "/lovable-uploads/3fafbaf8-6316-4062-a5f3-1850671b28d9.png",
      alt: "Паста меню"
    },
    {
      src: "/lovable-uploads/aa096ab2-0f96-4e5c-a8b2-e707049928b9.png",
      alt: "Десерты меню"
    },
    {
      src: "/lovable-uploads/25f61bda-81e1-4267-9911-d7311c84f187.png",
      alt: "Закуски и сеты меню 1"
    },
    {
      src: "/lovable-uploads/8757342d-1eb3-40b2-a60c-1168ca3573b5.png",
      alt: "Закуски и сеты меню 2"
    },
    {
      src: "/lovable-uploads/e9a7a7f2-409c-43f2-ba56-a3220625e6a5.png",
      alt: "Закуски и сеты меню 3"
    },
    {
      src: "/lovable-uploads/dd395ab1-8327-43cc-968f-59f225bd1a7b.png",
      alt: "Салаты меню"
    },
    {
      src: "/lovable-uploads/6a5c91ee-38f6-42f2-b009-fc67323265fc.png",
      alt: "Гарниры меню"
    },
    {
      src: "/lovable-uploads/b28470d9-1a19-4efc-832d-d3f1bb3ff667.png",
      alt: "Супы меню"
    },
    {
      src: "/lovable-uploads/37a05f8c-d5ed-46a4-8738-61ae19e4e659.png",
      alt: "Бургеры меню 2"
    },
  ];

  // Bar and hookah menu images from newly uploaded files
  const barHookahMenuImages = [
    {
      src: "/lovable-uploads/d0205d4e-8156-4c55-b668-76749dbcd167.png",
      alt: "Черные чаи"
    },
    {
      src: "/lovable-uploads/017a0e38-b216-4c9b-861f-46060aef8ce5.png",
      alt: "Зеленые чаи"
    },
    {
      src: "/lovable-uploads/1c7ae01b-1cd0-4505-95f8-6ec4952de2eb.png",
      alt: "Особые чаи"
    },
    {
      src: "/lovable-uploads/ffc3735e-7f38-4a3e-af17-81938cf47aa9.png",
      alt: "Холодные чаи и допы"
    },
    {
      src: "/lovable-uploads/e96807c1-fcaf-40a8-ae8b-a95fa9678d55.png",
      alt: "Кофе"
    },
    {
      src: "/lovable-uploads/942778e6-6531-46b9-b7f5-5ef92a5b841e.png",
      alt: "Сангрии"
    },
    {
      src: "/lovable-uploads/e83c4e63-322a-457c-bbf0-421cae2da37d.png",
      alt: "Прохладительные напитки"
    },
    {
      src: "/lovable-uploads/7d4ce2dd-879a-4e0a-87c7-ee50c986e3e7.png",
      alt: "Лимонады 1"
    },
    {
      src: "/lovable-uploads/3fe6aed7-17f7-454a-8135-693a5377ce53.png",
      alt: "Лимонады 2"
    },
    {
      src: "/lovable-uploads/97974613-c531-4332-b585-ace084c2db06.png",
      alt: "Пиво"
    },
    {
      src: "/lovable-uploads/cca87fb9-0c26-4c60-9a69-901121c1de76.png",
      alt: "Винная карта"
    },
    {
      src: "/lovable-uploads/9850398e-2332-4f47-a502-7e98dc8f0245.png",
      alt: "Игристые вина"
    },
    {
      src: "/lovable-uploads/7db118d6-fecf-4480-b2e7-655d7303e5cf.png",
      alt: "Белые вина"
    },
    {
      src: "/lovable-uploads/7fc080cd-9c70-4aac-accb-30102f65c92d.png",
      alt: "Красные вина"
    },
    {
      src: "/lovable-uploads/64715892-6fdf-4ff3-8a4a-69fde92c4e34.png",
      alt: "Чай и кофе"
    },
    {
      src: "/lovable-uploads/3bf760e5-3c9b-4e3b-8720-e14110496978.png",
      alt: "Кальяны"
    },
    {
      src: "/lovable-uploads/d5295dc0-45d8-4dbd-8d24-c69f21d4dfa9.png",
      alt: "Барная карта"
    },
    {
      src: "/lovable-uploads/49a53fae-fe45-4f96-82bb-16e7ca16836a.png",
      alt: "Алкогольные коктейли 1"
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
    description: "В день рождения и 3 дня после -10% на весь счет",
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
            <ContactButton size="lg" phoneNumber="+7 (901) 417-22-93">
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
                { value: "food", label: "Еда", images: foodMenuImages.map((i) => i.src) },
                { value: "bar-hookah", label: "Бар и Кальян", images: barHookahMenuImages.map((i) => i.src) },
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
                  <a href="tel:+79014172293" className="text-xl text-gold-shine transition-colors hover:opacity-80">
                    +7 (901) 417-22-93
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
                <ContactButton size="lg" variant="primary" phoneNumber="+7 (901) 417-22-93" className="w-full">
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
